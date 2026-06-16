# Arvectum Landing

Статический B2B-сайт Arvectum про автоматизацию закупок, тендеров и операционных процессов. Проект рассчитан на обычный PHP-хостинг: HTML/CSS/JS лежат в `public/`, а backend-обработчики формы и cookies находятся в `public/api/`.

## Локальный запуск

```bash
npm install
npm run dev
```

Локальный адрес по умолчанию:

- `http://localhost:8788`

## Проверки

Запуск линта:

```bash
npm run lint
```

Комплексная локальная проверка:

```bash
npm run check
```

Она включает:

- форматирование HTML/CSS/JS;
- синтаксис `public/app.js` и `public/site-config.js`;
- проверку PHP-обработчиков;
- статическую проверку `title`, `description`, `canonical`, sitemap, локальных ссылок и ассетов.

Проверка production:

```bash
npm run check:production
```

Скрипт проверяет:

- `https://arvectum.com/`
- `https://www.arvectum.com/`
- `https://arvectum.com/health.html`
- `https://arvectum.com/api/health.php`
- `https://arvectum.com/robots.txt`
- `https://arvectum.com/sitemap.xml`

## Структура

- `public/index.html` — главная страница с no-JS fallback.
- `public/solutions.html` — решения с закупочным фокусом.
- `public/cases.html` — скрытая вспомогательная страница со сценариями, держится вне публичной SEO-структуры через `noindex,nofollow`.
- `public/approach.html` — этапы работы, форматы и FAQ.
- `public/contact.html` — форма заявки и прямые контакты.
- `public/privacy.html` — политика конфиденциальности.
- `public/personal-data-consent.html` — согласие на обработку персональных данных.
- `public/cookies.html` — политика cookies.
- `public/thank-you.html` — страница успешной отправки формы без JS.
- `public/health.html` — статический health-check.
- `public/build-info.json` — версия и дата сборки для health-check.
- `public/favicon.ico` — корневой favicon.
- `public/assets/brand/favicon-32x32.png` — favicon 32x32.
- `public/assets/brand/favicon-16x16.png` — favicon 16x16.
- `public/assets/brand/apple-touch-icon.png` — Apple touch icon.
- `public/app.js` — рендер страниц, навигация, форма, cookie-consent, RU/EN.
- `public/site-config.js` — двуязычный контент.
- `public/api/submit.php` — отправка заявок в Telegram и email.
- `public/api/health.php` — проверка PHP/backend.
- `public/api/cookie-consent.php` — серверный лог согласий по cookies.
- `scripts/check-static.mjs` — локальная статическая проверка сайта.
- `scripts/check-production.mjs` — внешняя проверка production URL.

## Настройка `.env`

Создайте `public/.env` по образцу `public/.env.example`.

Основные переменные:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TELEGRAM_THREAD_ID` — опционально
- `FORM_TO_EMAIL`

В репозиторий нельзя коммитить реальные секреты.

## Как работает форма

Форма заявки отправляет данные сразу в два канала, если они настроены:

- Telegram-бот
- email через `mail()`

Правило успеха:

- если сработал хотя бы один канал, заявка считается доставленной;
- при JS-отправке frontend получает JSON и показывает статус прямо в форме;
- без JavaScript обычный POST уходит в `public/api/submit.php`, а после успеха пользователь попадает на `thank-you.html`.

Если отправка не удалась:

- JS-пользователь увидит понятное сообщение с прямыми контактами;
- пользователь без JS получит HTML-страницу ошибки, а не сырой JSON.

## Cookies и consent

На сайте есть:

- баннер cookies;
- модальное окно настроек;
- разделение обязательных и аналитических cookies;
- серверный лог согласий в `public/api/storage/`.

При выборе `Только обязательные` аналитические cookies не создаются.

## Деплой на PHP-хостинг

Загрузите содержимое папки `public/` в web root хостинга.

После загрузки проверьте:

1. `index.html` лежит в корне сайта.
2. `https://arvectum.com/health.html` открывается.
3. `https://arvectum.com/api/health.php` возвращает JSON.
4. `https://arvectum.com/robots.txt` и `https://arvectum.com/sitemap.xml` доступны.
5. `https://arvectum.com/favicon.ico` открывается.
6. Форма заявки доходит хотя бы в один канал.

Если хотите собрать архив для хостинга:

```bash
cd public
zip -r ../arvectum-hosting-deploy.zip .
```
