# DEPLOY CHECKLIST

1. Загрузить содержимое папки `public/` в web root хостинга.
2. Проверить, что `index.html` лежит именно в корне сайта, а не во вложенной папке.
3. Проверить DNS для `arvectum.com` и `www.arvectum.com`.
4. Если используется Cloudflare, проверить режим `SSL/TLS` и убедиться, что он соответствует настройке origin-сервера.
5. Убедиться, что PHP выполняется на хостинге.
6. Открыть `https://arvectum.com/health.html` и проверить статическую health-страницу.
7. Открыть `https://arvectum.com/api/health.php` и проверить JSON-ответ.
8. Проверить, что `public/.env` не загружается в репозиторий и присутствует только на сервере.
9. Проверить работу `POST /api/submit.php` с корректным `.env`.
10. Проверить, что директория `api/storage/` недоступна из браузера.
11. Если сайт или API продолжают отдавать `502 Bad Gateway`, проверить:
    - корневую директорию сайта на хостинге;
    - проксирование/маршрутизацию на стороне Cloudflare;
    - версию PHP и логи веб-сервера;
    - корректность путей до `index.html` и `api/*.php`.

## SEO Checklist

### Before deploy

1. Run `npm run lint`.
2. Run `npm run check`.
3. Verify `sitemap.xml` contains only public indexable pages.
4. Verify `robots.txt` contains `Sitemap: https://arvectum.com/sitemap.xml`.
5. Verify favicon files exist:
   - `public/favicon.ico`
   - `public/assets/brand/favicon.svg`
   - `public/assets/brand/favicon-32x32.png`
   - `public/assets/brand/favicon-16x16.png`
   - `public/assets/brand/favicon-48x48.png`
   - `public/assets/brand/apple-touch-icon.png`
6. Verify `cases.html` is `noindex,nofollow` or removed from public SEO structure.
7. Deploy `public/` to hosting.

### After deploy

1. Open `https://arvectum.com/`.
2. Open `https://arvectum.com/robots.txt`.
3. Open `https://arvectum.com/sitemap.xml`.
4. Open `https://arvectum.com/favicon.ico`.
5. Open `https://arvectum.com/favicon-preview.html`.
6. Hard refresh the browser if the old favicon is still cached.
7. Check the browser tab in both light and dark browser themes.
8. Run `npm run check:production`.
9. Re-submit sitemap in Google Search Console if sitemap changed.
10. Re-submit sitemap in Yandex Webmaster if sitemap changed.
