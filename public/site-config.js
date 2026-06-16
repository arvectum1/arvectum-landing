window.SITE_CONFIG = {
  defaultLanguage: "ru",
  routes: {
    home: "index.html",
    solutions: "solutions.html",
    cases: "cases.html",
    approach: "approach.html",
    contact: "contact.html",
    privacy: "privacy.html",
    personalDataConsent: "personal-data-consent.html",
    cookiesPolicy: "cookies.html",
  },
  languages: {
    ru: {
      common: {
        locale: "ru_RU",
        brandMeta: "",
        skipLink: "Перейти к содержимому",
        menuLabel: "Меню",
        menuTitle: "Навигация по сайту",
        menuClose: "Закрыть меню",
        telegramLabel: "Телеграм",
        headerCta: "Связаться с нами",
        pagesLabel: "Разделы",
        nav: [
          { slug: "home", label: "Главная" },
          { slug: "solutions", label: "Решения" },
          { slug: "approach", label: "Как запускаем" },
        ],
        footerNav: [
          { slug: "home", label: "Главная" },
          { slug: "solutions", label: "Решения" },
          { slug: "approach", label: "Как запускаем" },
          { slug: "contact", label: "Контакты" },
        ],
        footer: {
          companyName: 'ООО "Арвектум"',
          contactsTitle: "Контакты",
          inn: "",
          ogrn: "",
          address: "",
          phone: "",
          email: "info@arvectum.com",
          telegramUrl: "https://t.me/arvectum",
          telegramLabel: "Telegram Arvectum",
          telegramHandle: "t.me/arvectum",
          note: "",
          legalLinksTitle: "Юридическая информация",
          legalLinks: [
            {
              slug: "privacy",
              label: "Политика конфиденциальности",
            },
            {
              slug: "personalDataConsent",
              label: "Согласие на обработку персональных данных",
            },
            {
              slug: "cookiesPolicy",
              label: "Политика cookies",
            },
          ],
        },
        contactBand: {
          title: "Контакты и реквизиты",
          text: "Для первого разговора достаточно коротко описать процесс, желаемый результат и ограничения по данным или доступам.",
          directTitle: "Прямой контакт",
          formatTitle: "Что можно обсудить первым",
          formatText:
            "Закупочный маршрут, тендерный контур, RFQ, анализ ТКП, согласования, документы, операционные проверки и закрытый AI-пилот.",
          requisitesTitle: "Реквизиты",
          demoTitle: "Что можно показать на демо",
          demoItems: [
            "Маршрут закупки и карточку сделки",
            "Сравнение ТКП и экономику предложения",
            "Проверку комплектности и риск-мемо",
            "Журнал решений, статусов и ответственных",
          ],
        },
        form: {
          title: "Получить разбор процесса",
          intro:
            "Опишите закупочный, тендерный или операционный процесс, который хотите перевести в рабочую систему со статусами, документами и контролем шагов. Заявка уйдет в Телеграм и на email.",
          nameLabel: "Как вас зовут?",
          namePlaceholder: "Например, Александр",
          contactMethodLabel: "Удобный способ связи",
          contactMethodPlaceholder: "Выберите канал",
          contactMethodOptions: [
            { value: "telegram", label: "Телеграм" },
            { value: "email", label: "Почта" },
            { value: "phone", label: "Телефон" },
            { value: "whatsapp", label: "WhatsApp" },
            { value: "other", label: "Другое" },
          ],
          contactMethodOtherLabel: "Название сервиса",
          contactMethodOtherPlaceholder: "Например, Slack или Signal",
          contactValueLabel: "Ваш контакт",
          contactValuePlaceholders: {
            telegram: "Например, @username",
            email: "Например, hello@company.ru",
            phone: "Например, +7 (999) 123-45-67",
            whatsapp: "Например, +7 (999) 123-45-67",
            other: "Например, логин или адрес канала",
            default: "@username, email или номер",
          },
          projectTypeLabel: "Что нужно автоматизировать?",
          projectTypePlaceholder: "Выберите ближайший вариант",
          projectTypeOptions: [
            { value: "procurement_route", label: "Закупочный маршрут" },
            { value: "rfq_quotes", label: "RFQ и сравнение ТКП" },
            { value: "risk_review", label: "Договорные и коммерческие риски" },
            { value: "operations", label: "Операционный процесс" },
            { value: "secure_pilot", label: "Закрытый AI-пилот" },
            { value: "other", label: "Другое" },
          ],
          messageLabel: "Кратко опишите задачу",
          messagePlaceholder:
            "Какой процесс сейчас ручной, где теряются документы, статусы, сроки или риски, и какой первый результат хотите получить",
          deadlineLabel: "Горизонт пилота",
          deadlinePlaceholder: "Например, 2-4 недели",
          budgetLabel: "Бюджетный диапазон",
          budgetPlaceholder: "Например, от 300 000 ₽",
          submitLabel: "Отправить заявку",
          legalNotice:
            "Отправляя заявку, вы соглашаетесь на обработку персональных данных для подготовки ответа и обсуждения пилота.",
          successContacts:
            "Если письмо не пришло сразу, напишите напрямую: info@arvectum.com или t.me/arvectum",
          errorFallback:
            "Не удалось отправить заявку. Напишите напрямую на info@arvectum.com или в Телеграм.",
          validation: {
            nameRequired: "Пожалуйста, введите ваше имя.",
            contactMethodRequired: "Пожалуйста, выберите способ связи.",
            contactMethodOtherRequired:
              "Пожалуйста, уточните ваш способ связи.",
            contactValueRequired: "Пожалуйста, введите контактные данные.",
            projectTypeRequired:
              "Пожалуйста, выберите тип процесса или сценария.",
            messageRequired:
              "Пожалуйста, опишите задачу хотя бы в нескольких словах.",
            sending: "Отправляем заявку в Телеграм и на email...",
            success:
              "Заявка отправлена. Мы вернемся после первичного разбора процесса.",
            error:
              "Не удалось отправить заявку. Напишите напрямую на info@arvectum.com или в Телеграм.",
          },
        },
        cookies: {
          bannerEyebrow: "Cookies",
          bannerTitle: "Настройки cookies",
          bannerText:
            "Обязательные cookies поддерживают работу сайта. Аналитику включаем только с вашего согласия.",
          bannerLinksLabel: "Подробнее:",
          decline: "Только обязательные",
          customize: "Настроить",
          accept: "Принять все",
          prefsEyebrow: "Настройки cookies",
          prefsTitle: "Настройки cookies",
          essentialTitle: "Обязательные cookies",
          essentialText:
            "Нужны для базовой работы сайта, формы и хранения вашего выбора по cookies.",
          essentialAlwaysOn: "Всегда включено",
          analyticsTitle: "Аналитические cookies",
          analyticsText:
            "Сохраняют first-party идентификатор визита, источник перехода и UTM-параметры только при согласии на аналитику.",
          analyticsOn: "Включено",
          analyticsOff: "Выключено",
          saveEssential: "Сохранить только обязательные",
          savePrefs: "Сохранить настройки",
          closeLabel: "Закрыть",
        },
        labels: {
          challenge: "Бизнес-вызов",
          solution: "Что строим",
          result: "Ожидаемый эффект / результат",
          timing: "Срок первого этапа",
          audience: "Для кого",
          firstResult: "Первый результат",
          status: "Статус сценария",
          demo: "Что увидите на демо",
        },
      },
      pages: {
        home: {
          meta: {
            title: "Arvectum — AI-автоматизация бизнес-процессов",
            description:
              "Arvectum автоматизирует закупки, согласования и документооборот: от ручных действий к рабочей системе с документами, статусами и контролем.",
            ogTitle: "Arvectum — AI-автоматизация бизнес-процессов",
            ogDescription:
              "Arvectum автоматизирует закупки, согласования и документооборот: от ручных действий к рабочей системе с документами, статусами и контролем.",
          },
          hero: {
            eyebrow: "AI-автоматизация бизнес-процессов",
            title:
              "Автоматизируем процессы, где теряются документы, статусы и сроки",
            text: "Собираем рабочую систему для закупок, согласований и документооборота без потери контроля.",
            bullets: [
              "Один процесс вместо большой платформы",
              "MVP за 2-4 недели",
              "Роли, доступы и история решений под контролем",
            ],
            primaryCta: "Связаться с нами",
            secondaryCta: "Открыть решения",
            sideLabel: "Коротко",
            sideItems: [
              {
                title: "Один процесс",
                text: "Без запуска большой платформы.",
              },
              {
                title: "2-4 недели",
                text: "Чтобы собрать первый MVP.",
              },
              {
                title: "Контроль",
                text: "Роли, доступы и история решений.",
              },
            ],
          },
          automation: {
            title: "Что можно запустить первым",
            text: "Подходит для процессов, которые ещё держатся на таблицах, почте и чатах.",
            items: [
              {
                title: "Закупки и тендеры",
                text: "RFQ, ТКП, документы и контроль исполнения.",
              },
              {
                title: "Согласования и документооборот",
                text: "Маршруты, версии документов и журнал решений.",
              },
              {
                title: "Проверки и статусы",
                text: "Комплектность, риски, ответственные и следующий шаг.",
              },
            ],
          },
          cta: {
            title: "Первый шаг — короткий разбор процесса",
            text: "Поймём, что имеет смысл автоматизировать первым.",
            primary: "Связаться с нами",
            secondary: "Перейти в контакты",
            primaryLink: { slug: "contact" },
            secondaryLink: { slug: "contact" },
          },
        },
        solutions: {
          meta: {
            title:
              "Решения Arvectum — закупки, согласования, операции, AI-модули и закрытые контуры",
            description:
              "Решения Arvectum для закупок, согласований, операционных процессов, AI-модулей и закрытых контуров.",
            ogTitle:
              "Решения Arvectum — закупки, согласования, операции, AI-модули и закрытые контуры",
            ogDescription:
              "Решения Arvectum для закупок, согласований, операционных процессов, AI-модулей и закрытых контуров.",
          },
          hero: {
            eyebrow: "Решения",
            title:
              "Решения для закупок, согласований, операционных процессов и AI-модулей",
            text: "Здесь раскрыты основные направления автоматизации, которые Arvectum запускает на реальных бизнес-процессах.",
          },
          quickLinks: [
            { id: "procurement", label: "Закупки и тендеры" },
            { id: "approvals", label: "Согласования и документооборот" },
            { id: "documents", label: "Документы и проверки" },
            { id: "operations", label: "Операционные процессы" },
            { id: "ai-modules", label: "AI-модули" },
            { id: "secure", label: "Закрытые контуры" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Флагманский сценарий",
              title: "Закупки и тендеры",
              audience:
                "Для закупочных отделов, тендерных групп и поставщиков.",
              pain: "Автоматизируем закупочный контур от первого запроса до контроля исполнения, чтобы документы, статусы и экономика сделки не терялись между каналами.",
              modules: [
                "RFQ и вопросы поставщикам",
                "Сравнение ТКП и экономика сделки",
                "Договорные и коммерческие риски",
                "Комплект документов",
                "Статусы и журнал решений",
                "Контроль исполнения",
              ],
              firstResult:
                "Карта процесса и первый рабочий сценарий на одном реальном участке.",
              timing: "Разбор 1-2 недели, MVP 2-4 недели",
              cta: "Обсудить закупочный контур",
            },
            {
              id: "approvals",
              label: "Документы и ответственность",
              title: "Согласования и документооборот",
              audience:
                "Для команд, где нужно упорядочить прохождение документов и решений.",
              pain: "Собираем маршруты согласования, ответственных, версии документов и комментарии в одном процессе.",
              modules: [
                "Маршруты согласования",
                "Ответственные и роли",
                "Документы и версии",
                "Комментарии и журнал решений",
              ],
              firstResult:
                "Процесс, где видно, кто отвечает за следующий шаг и какая версия документа актуальна.",
              timing: "MVP 2-4 недели",
              cta: "Разобрать процесс согласования",
            },
            {
              id: "documents",
              label: "Документы и проверки",
              title: "Документы и проверки",
              audience:
                "Для команд, которым нужно быстрее проверять комплектность, версии и замечания.",
              pain: "Собираем комплектность, требования, замечания и историю изменений в одном рабочем сценарии.",
              modules: [
                "Комплектность и требования",
                "Версии документов",
                "Замечания и комментарии",
                "Журнал изменений",
              ],
              firstResult:
                "Сценарий, где видно, что проверено, что отсутствует и что требует решения.",
              timing: "MVP 2-4 недели",
              cta: "Обсудить проверку документов",
            },
            {
              id: "operations",
              label: "Внутренние маршруты",
              title: "Операционные процессы",
              audience:
                "Для компаний с повторяющимися внутренними сценариями и большим числом ручных статусов.",
              pain: "Упорядочиваем внутренние маршруты, где важны сроки, SLA, точки контроля и понятная отчётность.",
              modules: [
                "Повторяющиеся внутренние маршруты",
                "Статусы и SLA",
                "Контроль зависших шагов",
                "Отчётность и контроль исполнения",
              ],
              firstResult:
                "Маршрут, в котором видны узкие места и следующие действия без ручной координации.",
              timing: "MVP 2-4 недели",
              cta: "Описать операционный процесс",
            },
            {
              id: "ai-modules",
              label: "AI-модули",
              title: "AI-модули",
              audience:
                "Для команд, которым нужно быстрее анализировать документы и сравнивать варианты.",
              pain: "Подключаем AI-модули туда, где они реально ускоряют проверку, сравнение и подготовку материалов для решения.",
              modules: [
                "Анализ документов",
                "Сравнение вариантов",
                "Выделение рисков",
                "Подготовка memo",
                "Подсказки для человека",
                "Контроль качества",
              ],
              firstResult:
                "Рабочий модуль, который помогает проверять данные быстрее, но не забирает финальное решение у команды.",
              timing: "MVP 2-4 недели",
              cta: "Обсудить первый сценарий",
            },
            {
              id: "secure",
              label: "Архитектура и безопасность",
              title: "Закрытые контуры",
              audience:
                "Для компаний, которым важны доступы, аудит и границы данных.",
              pain: "Проектируем локальную или гибридную архитектуру там, где нельзя выносить чувствительные данные и терять контроль над доступами.",
              modules: [
                "Роли и доступы",
                "Аудит действий",
                "Локальная или гибридная архитектура",
                "Ограничения по данным",
                "Безопасность и контроль использования модели",
              ],
              firstResult: "Архитектурная схема и план первого пилота.",
              timing: "Архитектурный разбор 1-2 недели",
              cta: "Обсудить закрытый пилот",
            },
          ],
          cta: {
            title: "Нужен первый сценарий для запуска?",
            text: "Опишите задачу, и мы предложим, с какого процесса лучше начать и как собрать первый MVP.",
            primary: "Обсудить первый сценарий",
            secondary: "Как запускаем",
            primaryLink: { slug: "contact" },
            secondaryLink: { slug: "approach" },
          },
        },
        cases: {
          meta: {
            title: "Примеры сценариев — Arvectum",
            description:
              "Примеры демо-сценариев для закупок, согласований и проверки документов без выдуманных кейсов и лишних обещаний.",
            ogTitle: "Примеры сценариев — Arvectum",
            ogDescription:
              "Короткие сценарии демо для закупок, согласований и проверки документов.",
          },
          hero: {
            eyebrow: "Примеры сценариев",
            title: "Что можно показать на демо",
            text: "Ниже — три сценария, которые помогают быстро понять, как может выглядеть пилот на вашем процессе.",
          },
          demoBlock: {
            title: "На демонстрации вы увидите",
            items: [
              "Маршрут закупки",
              "Карточка сделки",
              "Сравнение ТКП",
              "Риск-мемо",
            ],
          },
          cases: [
            {
              id: "procurement-case",
              label: "Сценарий закупки",
              status: "Пилотный сценарий",
              title: "Закупочный сценарий",
              challenge:
                "Документы, статусы и вопросы поставщикам собраны в разных каналах, поэтому состояние сделки видно не сразу.",
              solution:
                "Собираем закупку, RFQ, ТКП, риски и историю решений в одной рабочей системе.",
              result:
                "На демо видно, как появляется прозрачный статус сделки и понятный следующий шаг.",
              outcomes: [],
              demo: [
                "Карточку закупки и список документов",
                "Этапы маршрута и RFQ",
                "Сравнение ТКП, экономику и риск-мемо",
                "Журнал решений по сделке",
              ],
            },
            {
              id: "ops-case",
              label: "Сценарий согласований",
              status: "Демо-маршрут",
              title: "Сценарий согласований",
              challenge:
                "Неясно, где остановился процесс и кто должен двигать его дальше.",
              solution:
                "Собираем этапы, ответственных, SLA и комментарии в одной точке.",
              result:
                "На демо видно, как находить зависшие шаги и убирать лишнюю ручную координацию.",
              outcomes: [],
              demo: [
                "Этапы и ответственных",
                "Зависшие шаги и SLA",
                "Комментарии и историю действий",
              ],
            },
            {
              id: "risk-case",
              label: "Сценарий проверки документов",
              status: "Внутренний прототип",
              title: "Сценарий проверки документов",
              challenge:
                "Проверка комплектности и замечаний занимает время и часто держится на ручном пересмотре файлов.",
              solution:
                "Собираем требования, замечания, версии и комментарии в одном сценарии проверки.",
              result:
                "На демо видно, как быстрее находить пробелы и готовить материалы для финального решения.",
              outcomes: [],
              demo: [
                "Чек-лист комплектности",
                "Найденные пробелы и потенциальные риски",
                "Комментарии человека и итоговый memo",
              ],
            },
          ],
          cta: {
            title: "Запросите демо на похожем процессе",
            text: "Покажем, какой сценарий имеет смысл разбирать первым именно в вашей ситуации.",
            primary: "Запросить демо на похожем процессе",
            secondary: "Открыть решения",
          },
        },
        approach: {
          meta: {
            title: "Как Arvectum запускает проект — диагностика, MVP и пилот",
            description:
              "Как Arvectum запускает проект: диагностика, карта процесса, MVP, пилот и короткий план следующего шага.",
            ogTitle: "Как Arvectum запускает проект — диагностика, MVP и пилот",
            ogDescription:
              "Коротко о том, как идет работа, какие есть форматы и что важно обсудить до старта.",
          },
          hero: {
            eyebrow: "Как запускаем",
            title: "Как запускаем автоматизацию процесса",
            text: "Подход Arvectum универсален: сначала диагностируем процесс, затем собираем первый рабочий сценарий, проверяем его на практике и только после этого масштабируем.",
          },
          timeline: {
            title: "Как идет работа",
            text: "Работа идёт по короткому маршруту, который подходит и для закупки, и для согласования, и для внутреннего операционного сценария.",
            items: [
              "Диагностика процесса",
              "Карта ролей, данных и решений",
              "Выбор первого сценария и MVP",
              "Пилот, метрики и масштабирование",
            ],
          },
          formats: {
            title: "Форматы работы",
            text: "Формат зависит от зрелости процесса и того, насколько быстро нужно получить первый проверяемый результат.",
            note: "Стоимость зависит от процесса, данных, интеграций и требований к размещению. Для оценки достаточно первичного разбора.",
            items: [
              {
                title: "Диагностика процесса",
                audienceLabel: "Для кого",
                audience: "Если нужно понять, что автоматизировать первым.",
                resultLabel: "Результат",
                result: "Карта процесса, список узких мест и сценарий MVP.",
                timingLabel: "Срок",
                timing: "1-2 недели",
              },
              {
                title: "MVP одного сценария",
                audienceLabel: "Для кого",
                audience:
                  "Если уже понятно, какой процесс нужно автоматизировать первым.",
                resultLabel: "Результат",
                result:
                  "Рабочий прототип с ролями, статусами, документами и журналом решений.",
                timingLabel: "Срок",
                timing: "2-4 недели",
              },
              {
                title: "Пилот с метриками",
                audienceLabel: "Для кого",
                audience: "Если нужно проверить пользу на реальных данных.",
                resultLabel: "Результат",
                result:
                  "Сценарий, метрики, ограничения и план масштабирования.",
                timingLabel: "Срок",
                timing: "4-8 недель",
              },
            ],
          },
          startingPoints: {
            title: "С какого процесса можно начать",
            text: "Обычно стартуем с процесса, где уже много ручных статусов, документов и проверок.",
            items: [
              "Закупка или тендер",
              "Согласование документов",
              "Регулярная проверка комплектности",
              "Контроль исполнения",
              "Внутренний маршрут с большим количеством ручных статусов",
            ],
          },
          faq: {
            title: "Что обычно важно обсудить до старта",
            items: [
              {
                question: "Сколько времени до первого полезного результата?",
                answer:
                  "Обычно карта процесса и первый набор решений формируются в течение 1-2 недель, а рабочий MVP — в пределах 2-4 недель.",
              },
              {
                question:
                  "Можно ли начать без большой платформы и тяжелых интеграций?",
                answer:
                  "Да. В большинстве случаев так и лучше: сначала один процесс, один маршрут и одна измеримая зона пользы.",
              },
              {
                question:
                  "Когда нужен локальный контур, а когда можно стартовать в облаке?",
                answer:
                  "Если в процессе есть NDA, чувствительные документы или строгие требования к доступам, лучше сразу закладывать локальный или гибридный запуск.",
              },
            ],
          },
          cta: {
            title: "Начать можно с короткой диагностики",
            text: "Этого достаточно, чтобы выбрать первый сценарий, собрать MVP и определить границы пилота.",
            primary: "Начать с диагностики",
            secondary: "Обсудить MVP одного процесса",
            primaryLink: { slug: "contact" },
            secondaryLink: { slug: "contact" },
          },
        },
        contact: {
          meta: {
            title:
              "Контакты Arvectum — обсудить AI-пилот или автоматизацию процесса",
            description:
              "Оставьте заявку на разбор закупочного, тендерного или операционного процесса. Связь через email, Telegram или удобный канал.",
            ogTitle:
              "Контакты Arvectum — обсудить AI-пилот или автоматизацию процесса",
            ogDescription:
              "Форма заявки, прямые контакты и юридические ссылки для первого B2B-обращения.",
          },
          hero: {
            eyebrow: "Контакты",
            title: "Оставьте заявку на разбор процесса",
            text: "Опишите задачу, текущие ограничения и желаемый результат. Мы предложим следующий шаг.",
          },
          firstCall: {
            title: "Что будет на первом разборе",
            items: [
              "Уточним, какой именно процесс вы хотите ускорить или привести в порядок.",
              "Найдем точки, где теряются документы, статусы и управленческий контекст.",
              "Выберем один сценарий для MVP или пилота.",
              "Согласуем ограничения по данным, доступам и безопасности.",
              "Зафиксируем ближайший план работ на 1-2 и 2-4 недели.",
            ],
          },
        },
      },
    },
    en: {
      common: {
        locale: "en_US",
        brandMeta: "",
        skipLink: "Skip to content",
        menuLabel: "Menu",
        menuTitle: "Site navigation",
        menuClose: "Close menu",
        telegramLabel: "Telegram",
        headerCta: "Contact Us",
        pagesLabel: "Pages",
        nav: [
          { slug: "home", label: "Home" },
          { slug: "solutions", label: "Solutions" },
          { slug: "approach", label: "How We Launch" },
        ],
        footerNav: [
          { slug: "home", label: "Home" },
          { slug: "solutions", label: "Solutions" },
          { slug: "approach", label: "How We Launch" },
          { slug: "contact", label: "Contact" },
        ],
        footer: {
          companyName: "Arvectum LLC",
          contactsTitle: "Contacts",
          inn: "",
          ogrn: "",
          address: "",
          phone: "",
          email: "info@arvectum.com",
          telegramUrl: "https://t.me/arvectum",
          telegramLabel: "Arvectum Telegram",
          telegramHandle: "t.me/arvectum",
          note: "",
          legalLinksTitle: "Legal",
          legalLinks: [
            { slug: "privacy", label: "Privacy policy" },
            {
              slug: "personalDataConsent",
              label: "Personal data consent",
            },
            { slug: "cookiesPolicy", label: "Cookies policy" },
          ],
        },
        contactBand: {
          title: "Contacts and company details",
          text: "A short note about the workflow, desired result and data constraints is enough for the first conversation.",
          directTitle: "Direct contact",
          formatTitle: "What we can discuss first",
          formatText:
            "Procurement route, tender workflow, RFQ, vendor quotes, approvals, document checks, operational controls and secure AI pilots.",
          requisitesTitle: "Company details",
          demoTitle: "What we can show in a demo",
          demoItems: [
            "Procurement route and deal card",
            "Vendor quote comparison and commercial view",
            "Completeness check and risk memo",
            "Decision log, statuses and ownership",
          ],
        },
        form: {
          title: "Get a workflow assessment",
          intro:
            "Describe the procurement, tender or operational workflow you want to turn into a working system with documents, statuses and clear next steps. The request will be sent to Telegram and email.",
          nameLabel: "What is your name?",
          namePlaceholder: "For example, Alex",
          contactMethodLabel: "Preferred contact channel",
          contactMethodPlaceholder: "Choose a channel",
          contactMethodOptions: [
            { value: "telegram", label: "Telegram" },
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "whatsapp", label: "WhatsApp" },
            { value: "other", label: "Other" },
          ],
          contactMethodOtherLabel: "Service name",
          contactMethodOtherPlaceholder: "For example, Slack or Signal",
          contactValueLabel: "Your contact",
          contactValuePlaceholders: {
            telegram: "For example, @username",
            email: "For example, hello@company.com",
            phone: "For example, +1 555 123 45 67",
            whatsapp: "For example, +1 555 123 45 67",
            other: "For example, username or channel details",
            default: "@username, email or phone",
          },
          projectTypeLabel: "What should we automate?",
          projectTypePlaceholder: "Choose the closest option",
          projectTypeOptions: [
            { value: "procurement_route", label: "Procurement route" },
            { value: "rfq_quotes", label: "RFQ and vendor quotes" },
            {
              value: "risk_review",
              label: "Contract and commercial risk review",
            },
            { value: "operations", label: "Operational workflow" },
            { value: "secure_pilot", label: "Secure AI pilot" },
            { value: "other", label: "Other" },
          ],
          messageLabel: "Briefly describe the task",
          messagePlaceholder:
            "Which workflow is still manual, where documents or statuses get lost, and what first result matters most",
          deadlineLabel: "Pilot timeline",
          deadlinePlaceholder: "For example, 2-4 weeks",
          budgetLabel: "Budget range",
          budgetPlaceholder: "For example, from $5,000",
          submitLabel: "Send request",
          legalNotice:
            "By sending the request, you agree to the processing of personal data for preparing a reply and discussing the pilot.",
          successContacts:
            "If you do not hear back immediately, contact us directly: info@arvectum.com or t.me/arvectum",
          errorFallback:
            "Could not send the request. Please contact us directly at info@arvectum.com or on Telegram.",
          validation: {
            nameRequired: "Please enter your name.",
            contactMethodRequired: "Please choose a contact method.",
            contactMethodOtherRequired: "Please specify your contact method.",
            contactValueRequired: "Please enter your contact details.",
            projectTypeRequired: "Please choose the workflow or scenario type.",
            messageRequired:
              "Please describe the task in at least a few words.",
            sending: "Sending your request to Telegram and email...",
            success:
              "Request sent. We will get back to you after the initial workflow review.",
            error:
              "Could not send the request. Please contact us directly at info@arvectum.com or on Telegram.",
          },
        },
        cookies: {
          bannerEyebrow: "Cookies",
          bannerTitle: "Cookie settings",
          bannerText:
            "Essential cookies keep the site working. Analytics are enabled only with your consent.",
          bannerLinksLabel: "More:",
          decline: "Essential only",
          customize: "Customize",
          accept: "Accept all",
          prefsEyebrow: "Cookie settings",
          prefsTitle: "Cookie settings",
          essentialTitle: "Essential cookies",
          essentialText:
            "Required for basic site operation, form handling and storing your cookie choice.",
          essentialAlwaysOn: "Always on",
          analyticsTitle: "Analytics cookies",
          analyticsText:
            "Store a first-party visit identifier, traffic source and UTM parameters only when analytics consent is granted.",
          analyticsOn: "On",
          analyticsOff: "Off",
          saveEssential: "Save essential only",
          savePrefs: "Save settings",
          closeLabel: "Close",
        },
        labels: {
          challenge: "Business challenge",
          solution: "What we build",
          result: "Expected effect / result",
          timing: "First-stage timing",
          audience: "For whom",
          firstResult: "First result",
          status: "Scenario status",
          demo: "What you will see in the demo",
        },
      },
      pages: {
        home: {
          meta: {
            title: "Arvectum — AI automation for business processes",
            description:
              "Arvectum automates procurement, approvals and document-heavy workflows: from manual work to a controllable operating system.",
            ogTitle: "Arvectum — AI automation for business processes",
            ogDescription:
              "Arvectum automates procurement, approvals and document-heavy workflows: from manual work to a controllable operating system.",
          },
          hero: {
            eyebrow: "AI automation for business processes",
            title:
              "We automate workflows where documents, statuses and deadlines get lost",
            text: "We build practical systems for procurement, approvals and document-heavy workflows without losing control.",
            bullets: [
              "One process instead of a large platform",
              "MVP in 2-4 weeks",
              "Roles, access and decision history stay under control",
            ],
            primaryCta: "Contact us",
            secondaryCta: "Open solutions",
            sideLabel: "In short",
            sideItems: [
              {
                title: "One process",
                text: "Without launching a large platform.",
              },
              {
                title: "2-4 weeks",
                text: "To assemble the first MVP.",
              },
              {
                title: "Control",
                text: "Roles, access and decision history.",
              },
            ],
          },
          automation: {
            title: "What you can launch first",
            text: "Useful for workflows still running through spreadsheets, email and chat.",
            items: [
              {
                title: "Procurement and tenders",
                text: "RFQ, quotes, documents and execution control.",
              },
              {
                title: "Approvals and document flow",
                text: "Approval routes, document versions and decision logs.",
              },
              {
                title: "Checks and statuses",
                text: "Completeness, risks, ownership and the next step.",
              },
            ],
          },
          cta: {
            title: "The first step is a short workflow review",
            text: "We will identify what is worth automating first.",
            primary: "Contact us",
            secondary: "Go to contact",
            primaryLink: { slug: "contact" },
            secondaryLink: { slug: "contact" },
          },
        },
        solutions: {
          meta: {
            title:
              "Arvectum solutions — procurement, approvals, operations, AI modules and secure setups",
            description:
              "Arvectum solutions for procurement, approvals, operational workflows, AI modules and secure setups.",
            ogTitle:
              "Arvectum solutions — procurement, approvals, operations, AI modules and secure setups",
            ogDescription:
              "Arvectum solutions for procurement, approvals, operational workflows, AI modules and secure setups.",
          },
          hero: {
            eyebrow: "Solutions",
            title:
              "Solutions for procurement, approvals, operations and AI-enabled checks",
            text: "This is where the main automation directions are explained in more practical detail.",
          },
          quickLinks: [
            { id: "procurement", label: "Procurement and tenders" },
            { id: "approvals", label: "Approvals and document flow" },
            { id: "documents", label: "Documents and checks" },
            { id: "operations", label: "Operational workflows" },
            { id: "ai-modules", label: "AI modules" },
            { id: "secure", label: "Secure setups" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Flagship scenario",
              title: "Procurement and tenders",
              audience:
                "For procurement departments, tender teams and suppliers.",
              pain: "We automate the procurement route from the first request to execution control so documents, statuses and deal economics do not get lost between channels.",
              modules: [
                "RFQ and supplier questions",
                "Quote comparison and deal economics",
                "Contract and commercial risks",
                "Document package",
                "Statuses and decision log",
                "Execution control",
              ],
              firstResult:
                "A mapped process and the first working scenario on a live workflow.",
              timing: "Review in 1-2 weeks, MVP in 2-4 weeks",
              cta: "Discuss a procurement contour",
            },
            {
              id: "approvals",
              label: "Documents and ownership",
              title: "Approvals and document flow",
              audience:
                "For teams that need cleaner document movement and clearer ownership.",
              pain: "We bring approval routes, document versions, owners and comments into one governed process.",
              modules: [
                "Approval routes",
                "Owners and roles",
                "Documents and versions",
                "Comments and decision log",
              ],
              firstResult:
                "A process where the next step, owner and current document version are clear.",
              timing: "MVP in 2-4 weeks",
              cta: "Review an approval workflow",
            },
            {
              id: "documents",
              label: "Documents and checks",
              title: "Documents and checks",
              audience:
                "For teams that need faster completeness checks, version control and review notes.",
              pain: "We structure completeness checks, requirements, comments and document history in one working flow.",
              modules: [
                "Completeness and requirements",
                "Document versions",
                "Comments and review notes",
                "Change log",
              ],
              firstResult:
                "A flow where it is clear what was checked, what is missing and what needs a decision.",
              timing: "MVP in 2-4 weeks",
              cta: "Discuss document review",
            },
            {
              id: "operations",
              label: "Internal routes",
              title: "Operational workflows",
              audience:
                "For companies with recurring internal routes and too many manual status updates.",
              pain: "We structure internal workflows where deadlines, SLA signals and execution checkpoints matter.",
              modules: [
                "Recurring internal routes",
                "Statuses and SLA signals",
                "Stalled-step control",
                "Reporting and execution control",
              ],
              firstResult:
                "A route where bottlenecks and the next actions are visible without manual coordination.",
              timing: "MVP in 2-4 weeks",
              cta: "Describe an operational workflow",
            },
            {
              id: "ai-modules",
              label: "AI modules",
              title: "AI modules",
              audience:
                "For teams that need faster document analysis and clearer comparison of options.",
              pain: "We add AI modules where they really speed up review, comparison and memo preparation without taking control away from the team.",
              modules: [
                "Document analysis",
                "Option comparison",
                "Risk extraction",
                "Memo preparation",
                "Human-facing guidance",
                "Quality control",
              ],
              firstResult:
                "A working module that helps people review data faster while final decisions stay human.",
              timing: "MVP in 2-4 weeks",
              cta: "Discuss the first scenario",
            },
            {
              id: "secure",
              label: "Architecture and security",
              title: "Secure setups",
              audience:
                "For companies where access control, audit and data boundaries matter.",
              pain: "We design local or hybrid architectures when sensitive data cannot be pushed into uncontrolled environments.",
              modules: [
                "Roles and access control",
                "Action audit",
                "Local or hybrid architecture",
                "Data constraints",
                "Security and model-use boundaries",
              ],
              firstResult:
                "An architecture scheme and a plan for the first pilot.",
              timing: "Architecture review in 1-2 weeks",
              cta: "Discuss a secure pilot",
            },
          ],
          cta: {
            title: "Need a first scenario to launch?",
            text: "Describe the task and we will suggest which process should move first and how to frame the first MVP.",
            primary: "Discuss the first scenario",
            secondary: "How we launch",
            primaryLink: { slug: "contact" },
            secondaryLink: { slug: "approach" },
          },
        },
        cases: {
          meta: {
            title: "Example scenarios — Arvectum",
            description:
              "Short demo scenarios for procurement, approvals and document review without invented case studies.",
            ogTitle: "Example scenarios — Arvectum",
            ogDescription:
              "Short demo scenarios for procurement, approvals and document review.",
          },
          hero: {
            eyebrow: "Example scenarios",
            title: "What we can show in a demo",
            text: "These three scenarios quickly show how a pilot can look on your process.",
          },
          demoBlock: {
            title: "What you will see in a demo",
            items: [
              "Procurement route",
              "Deal card",
              "Quote comparison",
              "Risk memo",
            ],
          },
          cases: [
            {
              id: "procurement-case",
              label: "Procurement scenario",
              status: "Pilot scenario",
              title: "Procurement scenario",
              challenge:
                "Documents, statuses and supplier questions are spread across separate channels, so the deal status is hard to read.",
              solution:
                "We bring procurement, RFQ, quotes, risks and decisions into one working system.",
              result:
                "The demo shows how the next step and the current deal status become visible.",
              outcomes: [],
              demo: [
                "Procurement card and document list",
                "Route stages and RFQ",
                "Quote comparison, economics and risk memo",
                "Decision log for the deal",
              ],
            },
            {
              id: "ops-case",
              label: "Approval scenario",
              status: "Demo route",
              title: "Approval scenario",
              challenge:
                "It is not clear where the workflow stopped and who should move it forward.",
              solution:
                "We bring stages, owners, SLA signals and comments into one place.",
              result:
                "The demo shows how stalled steps become visible and manual coordination drops.",
              outcomes: [],
              demo: [
                "Stages and owners",
                "Stalled steps and SLA signals",
                "Comments and action history",
              ],
            },
            {
              id: "risk-case",
              label: "Document review scenario",
              status: "Internal prototype",
              title: "Document review scenario",
              challenge:
                "Completeness checks and remarks still depend on repeated manual review of files.",
              solution:
                "We structure requirements, comments, versions and review notes in one scenario.",
              result:
                "The demo shows how gaps can be found faster and prepared for the final human decision.",
              outcomes: [],
              demo: [
                "Completeness checklist",
                "Detected gaps and potential risks",
                "Human comments and final memo",
              ],
            },
          ],
          cta: {
            title: "Request a demo for a similar process",
            text: "We will show which scenario makes sense to review first in your situation.",
            primary: "Request a demo for a similar workflow",
            secondary: "Open solutions",
          },
        },
        approach: {
          meta: {
            title:
              "How Arvectum launches a project — diagnostics, MVP and pilot",
            description:
              "How Arvectum launches a project: diagnostics, process map, MVP, pilot and the next step.",
            ogTitle:
              "How Arvectum launches a project — diagnostics, MVP and pilot",
            ogDescription:
              "A short explanation of how the work moves, which formats are available and what is worth clarifying before the start.",
          },
          hero: {
            eyebrow: "How We Launch",
            title: "How we launch workflow automation",
            text: "The Arvectum approach is universal: we diagnose the workflow, build the first working scenario, validate it in practice and only then scale it up.",
          },
          timeline: {
            title: "How the work moves",
            text: "The route is short enough to fit procurement, approvals, document review and internal operational workflows.",
            items: [
              "Workflow diagnostics",
              "Map of roles, data and decisions",
              "First scenario and MVP",
              "Pilot, metrics and scale-up",
            ],
          },
          formats: {
            title: "Work formats",
            text: "The right format depends on workflow maturity and on how quickly the first testable result is needed.",
            note: "Pricing depends on the workflow, data, integrations and deployment requirements. An initial review is enough for a first estimate.",
            items: [
              {
                title: "Workflow diagnostics",
                audienceLabel: "For whom",
                audience: "When you need to understand what to automate first.",
                resultLabel: "Result",
                result: "Workflow map, bottlenecks and an MVP scenario.",
                timingLabel: "Timing",
                timing: "1-2 weeks",
              },
              {
                title: "MVP of one scenario",
                audienceLabel: "For whom",
                audience:
                  "When it is already clear which workflow should be automated first.",
                resultLabel: "Result",
                result:
                  "A working prototype with roles, statuses, documents and a decision log.",
                timingLabel: "Timing",
                timing: "2-4 weeks",
              },
              {
                title: "Pilot with metrics",
                audienceLabel: "For whom",
                audience: "When value needs to be validated on real data.",
                resultLabel: "Result",
                result:
                  "Pilot scenario, metrics, constraints and scale-up plan.",
                timingLabel: "Timing",
                timing: "4-8 weeks",
              },
            ],
          },
          startingPoints: {
            title: "Where you can start",
            text: "The usual entry point is a workflow with too many manual statuses, documents and checks.",
            items: [
              "A procurement or tender route",
              "Document approvals",
              "Recurring completeness checks",
              "Execution control",
              "An internal route with too many manual status updates",
            ],
          },
          faq: {
            title: "What is usually worth clarifying before kickoff",
            items: [
              {
                question: "How long does the first useful result take?",
                answer:
                  "The workflow map and first set of decisions usually appear within 1-2 weeks, while the working MVP often lands within 2-4 weeks.",
              },
              {
                question:
                  "Can we start without a large platform and heavy integrations?",
                answer:
                  "Yes. In most cases that is the right path: one workflow, one route and one measurable zone of value first.",
              },
              {
                question: "When do we need a local or hybrid setup?",
                answer:
                  "If the workflow involves NDA, sensitive documents or strict access requirements, it is better to plan a local or hybrid setup from the start.",
              },
            ],
          },
          cta: {
            title: "A short diagnostic is enough to begin",
            text: "That is usually enough to choose the first scenario, frame the MVP and define the pilot boundaries.",
            primary: "Start with diagnostics",
            secondary: "Discuss an MVP for one process",
            primaryLink: { slug: "contact" },
            secondaryLink: { slug: "contact" },
          },
        },
        contact: {
          meta: {
            title:
              "Arvectum contact — discuss an AI pilot or workflow automation",
            description:
              "Request a review of your procurement, tender or operational workflow. Contact Arvectum through email, Telegram or another preferred channel.",
            ogTitle:
              "Arvectum contact — discuss an AI pilot or workflow automation",
            ogDescription:
              "Request form, direct contacts and legal links for the first B2B conversation.",
          },
          hero: {
            eyebrow: "Contact",
            title: "Request a workflow assessment",
            text: "Describe the workflow, its constraints and the result you want to achieve. We will suggest the next step.",
          },
          firstCall: {
            title: "What happens in the first review call",
            items: [
              "We clarify which workflow you want to speed up or make controllable.",
              "We find where documents, statuses and decision context are getting lost.",
              "We choose one scenario for MVP or pilot.",
              "We align data, access and security constraints.",
              "We outline the next 1-2 week and 2-4 week plan.",
            ],
          },
        },
      },
    },
  },
};
