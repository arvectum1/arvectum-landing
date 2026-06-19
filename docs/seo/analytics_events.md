# Analytics Events Documentation

Recommended tracking events for the procurement AI agents landing site.

## Event Table

| Event Name | Trigger | `data-event` attribute | Description |
|---|---|---|---|
| cta_diagnostics_click | Click on "Диагностика" or "Проверить" CTA button | `data-event="cta_diagnostics_click"` | Tracks clicks on the diagnostics / health-check CTA that invites users to evaluate their procurement processes |
| cta_demo_click | Click on "Заказать демо", "Записать демо" or "Попробовать бесплатно" button | `data-event="cta_demo_click"` | Tracks clicks on any demo-related call-to-action buttons across pages |
| checklist_click | Click on checklist download link or button | `data-event="checklist_click"` | Tracks interaction with checklist offers (e.g. "Скачать чек-лист внедрения автоматизации закупок") |
| contact_form_submit | Submit of any contact/feedback form | `data-event="contact_form_submit"` | Tracks contact form submission attempts (lead generation) |
| demo_case_view | Full page view or modal open of a demo case / case study | `data-event="demo_case_view"` | Tracks when a user opens a detailed demo case or case study page/section |
| solution_page_view | Page view of a solution subpage (e.g. /solutions/*) | `data-event="solution_page_view"` | Tracks visits to any solution-specific page (e.g. RFQ automation, contract risk, etc.) |

## Implementation Notes

- Attach `data-event` attributes directly to `<a>`, `<button>`, or relevant wrapper elements.
- All events should fire on `click` (except `demo_case_view` and `solution_page_view` which fire on `pageview` / `route change`).
- Use a data-layer push or a custom event handler that reads the `data-event` attribute on click.
- For pageview events (`demo_case_view`, `solution_page_view`), fire the event when the page/component mounts.
