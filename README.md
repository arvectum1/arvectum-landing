# Arvectum Landing

Корпоративный лендинг Arvectum: AI-системы, автоматизация и цифровые продукты для бизнеса.

## Локальный запуск

```bash
npm install
npm run dev
```

Проверка фронтенда и PHP-обработчиков:

```bash
npm run lint
```

Локальный адрес:

- `http://localhost:8788`

## Структура

- `public/index.html` — главная страница
- `public/styles.css` — стили лендинга
- `public/site-config.js` — контентные блоки
- `public/app.js` — гидратация секций и логика формы
- `public/api/submit.php` — отправка заявки в Telegram и на email

## Каналы заявок

Создайте `public/.env` по образцу `public/.env.example` и заполните:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `FORM_TO_EMAIL`
- `TELEGRAM_THREAD_ID` — опционально, если используется topic в супергруппе

Форма поддерживает два канала доставки одновременно:

- Telegram-бот
- email через `mail()` на хостинге

Если один канал недоступен, заявка все равно считается успешно доставленной, если сработал второй.

## Cookies и consent

На сайте реализован реальный consent-механизм:

- баннер согласия
- модальное окно настроек cookies
- first-party cookies для обязательных данных и аналитики
- хранение выбора пользователя в cookie и `localStorage`
- серверный лог согласий через `public/api/cookie-consent.php`

При согласии на аналитику сайт сохраняет:

- `arvectum_cookie_consent`
- `arvectum_consent_status`
- `arvectum_consent_updated_at`
- `arvectum_visitor_id`
- `arvectum_session_id`
- `arvectum_first_visit`
- `arvectum_last_visit`
- `arvectum_landing_path`
- `arvectum_referrer`
- `arvectum_utm_*`

Серверный лог согласий записывается в:

- `public/api/storage/cookie-consents.jsonl`

Файл создается автоматически при первом успешном POST на `/api/cookie-consent.php`.
Папка `public/api/storage/` уже добавлена в проект. Для Apache-хостинга в ней лежит `.htaccess`, закрывающий прямой веб-доступ к журналу согласий. На другом веб-сервере стоит отдельно запретить публичную выдачу этой директории и оставить для нее права на запись со стороны PHP.

## Контакты на сайте

- `info@arvectum.com`
- `https://t.me/arvectum`

## Реквизиты в футере

В футере выведен отдельный блок реквизитов компании. Сейчас заполнены:

- `ООО "Арвектум"`
- `info@arvectum.com`

Поля `ИНН / КПП` и `Телефон` оставлены как плейсхолдеры до появления финальных данных.

## Деплой на обычный PHP-хостинг

В корень хостинга нужно загрузить содержимое папки `public/`.

Для удобства можно собрать архив:

```bash
cd public
zip -r ../arvectum-hosting-deploy.zip .
```
