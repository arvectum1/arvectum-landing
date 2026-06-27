# Обновление сайта Arvectum после анализа tenders-ai.ru и legal-доработок

## Цель работ

Довести изменения Sprint 01-05 и последующие legal-обновления до production-ready состояния без слома текущей архитектуры сайта.

Фокус работ:
- усилить продуктовую упаковку Arvectum в нише AI-автоматизации тендеров и закупок;
- сохранить enterprise-позиционирование Arvectum;
- закрыть trust/legal-гигиену;
- довести статические проверки, форматирование и согласие на обработку ПДн до технически чистого состояния.

## Что сделано по продуктовой странице после анализа tenders-ai.ru

Основная продуктовая страница собрана вокруг более ясного оффера и короткой воронки, но без ухода в позиционирование "простого подборщика товаров".

Сделано:
- усилен оффер страницы `AI-агент для анализа ТЗ и подготовки RFQ/ТКП`;
- сохранён основной enterprise-фокус: закупочный контур, RFQ, ТКП, экономика, риски, документы, роли, журнал решений, закрытый контур, on-premise / air-gapped сценарии;
- добавлены понятные CTA для первичного входа в воронку;
- усилен блок различия между продуктом Arvectum и простым подбором товаров;
- добавлены более структурированные блоки пакетов, сценариев внедрения, FAQ и proof/demo;
- вычищены RU/EN-смешения в русской версии по ключевым новым блокам.

## Основной URL новой продуктовой страницы

Основной продуктовый URL:
- `https://arvectum.com/services/ai-tender-agent.html`

## Что сделано с алиасом `/solutions/procurement-ai-agent.html`

Добавлен тонкий алиас:
- `https://arvectum.com/solutions/procurement-ai-agent.html`

Решение:
- страница-алиас оставлена как `noindex,follow` redirect alias;
- canonical указывает на основной URL `/services/ai-tender-agent.html`;
- alias не дублирует большой HTML вручную;
- hash и query сохраняются при redirect, в том числе работает переход к `#demo`;
- sitemap оставлен на canonical-URL, alias в sitemap не включён;
- статическая проверка обновлена так, чтобы `noindex` redirect alias не считался полноценной продуктовой страницей.

## Что сделано с демо-блоком

На основной продуктовой странице сохранён и оформлен демо-блок с якорем `#demo`.

В демо-потоке отражены синтетические примеры:
- требования и разбор одного ТЗ;
- вопросы поставщикам;
- RFQ;
- сравнение ТКП;
- экономика;
- риск-мемо;
- вывод `bid / no-bid`;
- human-in-the-loop: финальное решение остаётся за ответственным сотрудником.

## Какие CTA добавлены

Ключевые CTA:
- `Получить разбор одного ТЗ`
- `Запросить пилот`

Также обновлены связанные CTA на страницах маршрутов, решений, диагностик и кейсов, чтобы они вели в более короткий и понятный вход в воронку.

## Что сделано с legal-блоком

Legal-блок сайта обновлён на основе локального юридического пакета ООО «Арвектум».

Сделано:
- приведены к официальному виду названия legal-документов по всему сайту;
- актуализированы legal-ссылки в footer и формах;
- в общий footer не выведены банковские реквизиты;
- телефон не добавлялся;
- полный юридический адрес не вынесен в глобальный footer;
- публичные legal-страницы оставлены индексируемыми (`index,follow`), так как это осознанные публичные документы;
- источник истины для реквизитов и формулировок — локальный пакет документов из архива.

## Какие документы обновлены

Обновлены публичные документы:
- `public/privacy.html`
- `public/cookies.html`
- `public/personal-data-consent.html`

Изменения:
- `privacy.html` переведён из общей "политики конфиденциальности" в более точную `Политику обработки персональных данных`;
- `cookies.html` обновлён до `Политики использования файлов cookie` с более официальной структурой;
- `personal-data-consent.html` приведён к тексту согласия из юридического пакета.

## Что сделано с contact-form consent

Для формы на `contact.html` добавлен и проверен обязательный consent-flow.

Сделано:
- чекбокс согласия обязателен;
- чекбокс не pre-checked;
- рядом с чекбоксом есть ссылки на:
  - `Политику обработки персональных данных`;
  - `Согласие на обработку персональных данных`;
- статический `contact.html` и JS-рендер в `public/app.js` синхронизированы по составу consent-блока;
- клиентская ошибка без галочки стала понятной: форма не отправляется, а пользователь видит валидационное сообщение по полю и общий статус о необходимости проверить обязательные поля.

## Что сделано с `submit.php`

Серверная обработка формы усилена:
- `public/api/submit.php` валидирует наличие согласия на обработку ПДн;
- сервер не доверяет только клиентскому JS;
- к заявке добавляется техническая отметка согласия:
  - `consent=true`;
  - server-generated timestamp;
  - source: `contact form`;
  - `consentVersion`;
  - `consentDocumentUrl`;
  - `consentPolicyUrl`.

Эти поля используются только как техническая отметка согласия и не расширяют набор собираемых персональных данных.

## Что проверено по consent-flow

### Клиентская проверка в локальном браузерном прогоне

Проверено на `http://127.0.0.1:8788/contact.html`:
- форма рендерится через JS (`leadForm` присутствует);
- checkbox присутствует и обязателен;
- checkbox по умолчанию не отмечен;
- ссылки около checkbox указывают на:
  - `/personal-data-consent.html`
  - `/privacy.html`
- без checkbox запрос на `/api/submit.php` не уходит вообще;
- с checkbox уходит ровно один POST-запрос.

Подтверждён payload клиентской отправки:
- `personalDataConsent: true`
- `consentSource: contact form`
- `consentDocumentUrl: https://arvectum.com/personal-data-consent.html`
- `consentPolicyUrl: https://arvectum.com/privacy.html`
- `consentVersion: pdn-2026-06-24`

### Серверная проверка

Рантайм-проверка самого `submit.php` в текущем окружении не выполнялась, потому что `php` в окружении отсутствует.

Подтверждено по коду:
- без `personalDataConsent` сервер добавляет ошибку валидации;
- серверная логика не полагается только на клиентскую проверку;
- согласие отражается в формируемом содержимом заявки для каналов доставки.

## Что проверено по cookies

### Найденные механизмы cookies / storage

На сайте используются только first-party механизмы Arvectum:
- consent-cookie;
- consent status;
- timestamp обновления consent;
- essential flag;
- при согласии на аналитику:
  - visitor id;
  - session id;
  - first visit;
  - last visit;
  - landing path;
  - referrer;
  - UTM-параметры;
- localStorage для дублирования состояния consent.

### Что не найдено

По коду сайта не найдено:
- Яндекс Метрика;
- Google Analytics / gtag / GTM;
- пиксели соцсетей;
- внешние marketing scripts;
- сторонние analytics SDK.

### Проверка cookie-баннера

В браузерном прогоне подтверждено:
- баннер отображается при первом визите;
- ссылки в баннере корректные:
  - `Политика обработки персональных данных`
  - `Политика использования файлов cookie`
- до выбора пользователя cookies не выставляются;
- при выборе `Только обязательные` записываются только consent/essential cookies;
- при выборе `Принять все` дополнительно появляются first-party analytics cookies Arvectum.

Вывод:
- `cookies.html` описывает фактическое поведение сайта честно и достаточно близко к реализации.

## Что сделано с sitemap и `cases.html`

Ранее `cases.html` был убран из sitemap осознанно.

Причина:
- страница существует в репозитории, но помечена как `noindex,nofollow`;
- она не является текущей индексируемой посадочной страницей;
- решение не удаляет страницу физически, а лишь не продвигает её в индекс как актуальный раздел сайта.

Итог:
- `cases.html` сохранён;
- удаление из sitemap оставлено как осознанное SEO-решение;
- это не влияет на будущую возможность развить страницу в отдельный раздел кейсов.

## Что было исправлено для `lint:format`

`lint:format` падал из-за старых HTML/SVG parse-ошибок.

Исправлено:
- найдены повреждённые `menu-toggle` SVG-блоки с оборванными path-данными и маркером `... (line truncated to 2000 chars)`;
- проблемные блоки заменены на валидный эталонный SVG-фрагмент;
- затем весь набор файлов, попадающих под форматтер, был прогнан через Prettier.

Файлы, где исправлялась синтаксическая валидность SVG/HTML минимумом:
- `public/materials/ai-procurement-guide.html`
- `public/materials/contract-risk-checklist.html`
- `public/materials/rfq-automation-guide.html`
- `public/solutions/contract-risk-ai-review.html`
- `public/solutions/rfq-tkp-comparison.html`

Дополнительно повреждённый тот же блок был вычищен в ряде смежных страниц, чтобы весь `lint:format` по проекту проходил целиком.

## Какие проверки запускались

Запускались:
- `npm run check:static`
- `npm run check:assets`
- `npm run lint:js`
- `npm run lint:format`
- `npm run check`

Дополнительно:
- локальный браузерный прогон `contact.html`;
- локальный браузерный прогон cookie-баннера;
- кодовая проверка `submit.php` и cookie-логики.

## Результат проверок

### Прошли
- `npm run check:static` — passed
- `npm run check:assets` — passed
- `npm run lint:js` — passed
- `npm run lint:format` — passed
- `npm run check` — passed

### Не выполнялись или ограничены окружением
- `npm run lint:php` — не запускался как часть базового набора, потому что `php` отсутствует в окружении;
- отдельного `build`-скрипта в проекте нет;
- рантайм-исполнение `submit.php` локально не проверялось из-за отсутствия PHP-интерпретатора.

## Какие файлы изменены

### Ключевые продуктовые и legal-файлы
- `package.json`
- `scripts/check-static.mjs`
- `public/app.js`
- `public/site-config.js`
- `public/styles.css`
- `public/api/submit.php`
- `public/privacy.html`
- `public/cookies.html`
- `public/personal-data-consent.html`
- `public/contact.html`
- `public/services/ai-tender-agent.html`
- `public/sitemap.xml`
- `public/solutions/procurement-ai-agent.html`

### Контентные и навигационные страницы, затронутые предыдущими спринтами и/или глобальной правкой legal-ссылок
- `public/index.html`
- `public/solutions.html`
- `public/approach.html`
- `public/materials.html`
- `public/cases.html`
- `public/cases/tender-operator-demo.html`
- `public/diagnostics/procurement-process-audit.html`
- `public/security-control.html`
- `public/security/local-ai-procurement.html`
- `public/services/contract-risk-review.html`
- `public/services/rfq-automation.html`
- `public/services/tender-documents-automation.html`
- `public/services/tkp-comparison.html`
- `public/solutions/ai-document-checks.html`
- `public/solutions/closed-loop-ai-documents.html`
- `public/solutions/contract-risk-ai-review.html`
- `public/solutions/document-workflow.html`
- `public/solutions/operations.html`
- `public/solutions/procurement-ai-agents.html`
- `public/solutions/procurement.html`
- `public/solutions/rfq-tkp-comparison.html`
- `public/solutions/tender-department-ai-agent.html`
- `public/materials/ai-automation-simple.html`
- `public/materials/ai-procurement-guide.html`
- `public/materials/chatbot-vs-process-automation.html`
- `public/materials/contract-risk-checklist.html`
- `public/materials/how-to-choose-first-process.html`
- `public/materials/mvp-automation-2-4-weeks.html`
- `public/materials/procurement-excel-report.html`
- `public/materials/rfq-automation-guide.html`
- `public/materials/tkp-comparison-guide.html`
- `public/favicon-preview.html`
- `public/health.html`
- `public/thank-you.html`
- `README.md`

## Что осталось на ручное подтверждение

Перед production deploy стоит вручную подтвердить:
- что production-окружение действительно исполняет `public/api/submit.php` так, как ожидается;
- что email/Telegram доставка реальной заявки работает на бою;
- что canonical и redirect для `/solutions/procurement-ai-agent.html` на production совпадают с локальной логикой;
- что юридические тексты финально утверждены владельцем компании / юристом;
- что фактическая архитектура обработки ПДн и будущие подрядчики не требуют актуализации документов до публикации или уведомления РКН;
- что `arvectum-deploy.zip`, `.env`, `node_modules`, build-кеши и локальные логи не попали в деплой-пакет.

## Рекомендации для следующей итерации

1. Сделать отдельную страницу `Обращения по персональным данным`.
2. Добавить на неё шаблон отзыва согласия.
3. Добавить на неё шаблон запроса субъекта ПДн.
4. Указать канал связи `info@arvectum.com` как единый публичный канал для таких обращений.
5. Добавить отдельный opt-in checkbox для информационных/рекламных email-рассылок, только если реально запускается рассылка.
6. Добавить автоматизированную проверку PHP-обработчиков в CI или в локальном контейнере с PHP.
7. При необходимости оформить отдельный раздел кейсов на базе текущего `cases.html`, если страница станет индексируемым разделом.
