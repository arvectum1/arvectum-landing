import { execFileSync } from "node:child_process";

const checks = [
  {
    url: "https://arvectum.com/",
    ok: ({ status }) => status === 200,
  },
  {
    url: "https://www.arvectum.com/",
    ok: ({ status }) => status === 200 || status === 301 || status === 302,
  },
  {
    url: "https://arvectum.com/health.html",
    ok: ({ status, body }) =>
      status === 200 && body.includes("Arvectum site is online"),
  },
  {
    url: "https://arvectum.com/api/health.php",
    ok: ({ status, body, contentType }) => {
      if (status !== 200 || !contentType.includes("application/json")) {
        return false;
      }

      try {
        const parsed = JSON.parse(body);
        return parsed.ok === true && parsed.service === "arvectum-site";
      } catch {
        return false;
      }
    },
  },
  {
    url: "https://arvectum.com/robots.txt",
    ok: ({ status, body }) =>
      status === 200 && body.toLowerCase().includes("sitemap"),
  },
  {
    url: "https://arvectum.com/sitemap.xml",
    ok: ({ status, body, contentType }) =>
      status === 200 &&
      (contentType.includes("xml") || body.includes("<urlset")),
  },
];

const normalizeSnippet = (body) =>
  body.replace(/\s+/g, " ").trim().slice(0, 120) || "(empty response)";

const runCurl = (url, insecure = false) =>
  execFileSync(
    "curl",
    [
      "-sS",
      "--max-time",
      "20",
      "-D",
      "-",
      "-o",
      "-",
      ...(insecure ? ["-k"] : []),
      url,
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
  );

const parseCurlResponse = (raw) => {
  const normalized = raw.replace(/\r\n/g, "\n");
  const parts = normalized.split("\n\n");
  let headerBlock = "";
  let body = "";

  for (let index = 0; index < parts.length; index += 1) {
    const part = parts[index].trim();
    if (/^HTTP\/\S+\s+\d{3}/.test(part)) {
      headerBlock = part;
      continue;
    }

    body = parts.slice(index).join("\n\n");
    break;
  }

  const headerLines = headerBlock.split("\n").filter(Boolean);
  const statusLine = headerLines[0] || "";
  const statusMatch = statusLine.match(/HTTP\/\S+\s+(\d{3})/);
  const status = statusMatch ? Number(statusMatch[1]) : 0;
  const headers = new Map();

  for (const line of headerLines.slice(1)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();
    headers.set(key, value);
  }

  return {
    status,
    body,
    contentType: headers.get("content-type") || "",
  };
};

let hasFailures = false;

for (const item of checks) {
  try {
    const raw = runCurl(item.url);
    const result = parseCurlResponse(raw);
    const passed = item.ok(result);
    hasFailures ||= !passed;

    console.log(`${passed ? "PASS" : "FAIL"} ${item.url}`);
    console.log(`  status: ${result.status}`);
    console.log(`  content-type: ${result.contentType || "(missing)"}`);
    console.log(`  body: ${normalizeSnippet(result.body)}`);
  } catch (error) {
    hasFailures = true;
    const stderr =
      error && typeof error === "object" && "stderr" in error
        ? String(error.stderr || "")
        : "";

    if (stderr.includes("SSL certificate problem")) {
      try {
        const insecureRaw = runCurl(item.url, true);
        const insecureResult = parseCurlResponse(insecureRaw);
        console.log(`FAIL ${item.url}`);
        console.log(
          "  error: SSL certificate is not trusted (self-signed or invalid chain)",
        );
        console.log(`  insecure status: ${insecureResult.status}`);
        console.log(
          `  insecure content-type: ${
            insecureResult.contentType || "(missing)"
          }`,
        );
        console.log(
          `  insecure body: ${normalizeSnippet(insecureResult.body)}`,
        );
        continue;
      } catch {
        // fall through to the generic error output below
      }
    }

    console.log(`FAIL ${item.url}`);
    console.log(
      `  error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

if (hasFailures) {
  process.exitCode = 1;
}
