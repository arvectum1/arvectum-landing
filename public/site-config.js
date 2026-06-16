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
        brandMeta: 'ООО "Арвектум"',
        skipLink: "Перейти к содержимому",
        menuLabel: "Меню",
        menuTitle: "Навигация по сайту",
        menuClose: "Закрыть меню",
        telegramLabel: "Телеграм",
        headerCta: "Получить разбор",
        pagesLabel: "Разделы",
        nav: [
          { slug: "home", label: "Главная" },
          { slug: "solutions", label: "Решения" },
          { slug: "approach", label: "Как запускаем" },
          { slug: "contact", label: "Контакты" },
        ],
        footerNav: [
          { slug: "home", label: "Главная" },
          { slug: "solutions", label: "Решения" },
          { slug: "cases", label: "Сценарии" },
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
          note: "Реквизиты и договорные данные предоставляются по запросу перед началом работ.",
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
            title: "Arvectum — AI-автоматизация закупок и бизнес-процессов",
            description:
              "Arvectum автоматизирует закупки, согласования и документооборот: разбор процесса, MVP, пилот и запуск рабочей системы.",
            ogTitle: "Arvectum — AI-автоматизация закупок и бизнес-процессов",
            ogDescription:
              "Автоматизация закупок, согласований и документооборота: от разбора процесса до MVP и пилота.",
          },
          hero: {
            eyebrow:
              "AI-автоматизация закупок, тендеров и операционных процессов",
            title:
              "Автоматизируем закупки, согласования и документооборот без потери контроля",
            text: "Arvectum помогает перевести ручные процессы в рабочую систему со статусами, документами, проверками и журналом решений.",
            bullets: [
              "Разбор процесса за 1-2 недели",
              "MVP на одном сценарии за 2-4 недели",
              "Закрытая архитектура и контроль доступов",
              "Человек сохраняет финальное решение",
            ],
            primaryCta: "Получить разбор процесса",
            secondaryCta: "Посмотреть решения",
            sideLabel: "Что можно автоматизировать первым",
            sideItems: [
              {
                title: "Закупки и тендеры",
                text: "RFQ, ТКП, риски, экономика и комплект заявки в одном маршруте.",
              },
              {
                title: "Согласования и статусы",
                text: "Понятные этапы, ответственные и контроль зависших шагов.",
              },
              {
                title: "Документы и проверки",
                text: "Комплектность, требования и история изменений без ручного пересбора.",
              },
            ],
          },
          automation: {
            title: "Что автоматизируем",
            text: "Берем только прикладные процессы, где важны сроки, документы, статусы и прозрачность решений.",
            items: [
              {
                title: "Закупки и тендеры",
                text: "RFQ, ТКП, риски, экономика сделки и комплект заявки в одной системе.",
              },
              {
                title: "Согласования и статусы",
                text: "Этапы, ответственные, зависшие шаги и история решений без ручных таблиц.",
              },
              {
                title: "Документы и проверки",
                text: "Комплектность, требования, комментарии и контроль изменений до финального решения.",
              },
            ],
          },
          advantages: {
            title: "Почему с нами удобно начать",
            text: "Начинаем не с большой платформы, а с одного реального процесса и понятного следующего шага.",
            items: [
              {
                title: "Один процесс в фокусе",
                text: "Сначала приводим в порядок один рабочий сценарий, а не растягиваем проект на всё сразу.",
              },
              {
                title: "Понятный MVP",
                text: "За 2-4 недели можно собрать первый рабочий вариант и проверить его на реальных данных.",
              },
              {
                title: "Контроль остается у клиента",
                text: "Данные, роли, доступы и журнал действий остаются прозрачными и управляемыми.",
              },
            ],
          },
          cta: {
            title: "Получите первичный разбор процесса",
            text: "Поймём, что стоит автоматизировать первым и какой сценарий имеет смысл запустить в пилот.",
            primary: "Оставить заявку",
            secondary: "Перейти в контакты",
          },
        },
        solutions: {
          meta: {
            title:
              "Решения Arvectum — закупки, согласования, документы и закрытые пилоты",
            description:
              "Решения Arvectum для закупок, согласований, проверки документов и закрытых пилотов.",
            ogTitle:
              "Решения Arvectum — закупки, согласования, документы и закрытые пилоты",
            ogDescription:
              "Решения Arvectum для закупок, согласований, проверки документов и закрытых пилотов.",
          },
          hero: {
            eyebrow: "Решения",
            title:
              "Решения для закупок, согласований, документов и закрытых пилотов",
            text: "Здесь собраны основные направления, с которых обычно начинают автоматизацию процесса.",
          },
          quickLinks: [
            { id: "procurement", label: "Закупки и тендеры" },
            { id: "approvals", label: "Согласования" },
            { id: "documents", label: "Документы" },
            { id: "secure", label: "Закрытый AI-пилот" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Основной фокус",
              title: "Закупки и тендеры",
              audience:
                "Для закупочных отделов, тендерных групп и поставщиков.",
              pain: "Автоматизируем RFQ, ТКП, проверку рисков, комплект заявки и контроль ключевых этапов.",
              modules: [
                "RFQ и вопросы поставщикам",
                "Сравнение ТКП и экономика сделки",
                "Риски, комплектность и статус заявки",
              ],
              firstResult:
                "Карта процесса и первый рабочий сценарий на одном реальном участке.",
              timing: "Разбор 1-2 недели, MVP 2-4 недели",
              cta: "Обсудить закупочный контур",
            },
            {
              id: "approvals",
              label: "Рабочие процессы",
              title: "Согласования и статусы",
              audience:
                "Для внутренних команд и руководителей, которым важна видимость хода процесса.",
              pain: "Собираем этапы, ответственных и зависшие шаги в одной системе без ручной координации.",
              modules: [
                "Этапы и ответственные",
                "Статусы и зависшие шаги",
                "Комментарии и журнал действий",
              ],
              firstResult:
                "Процесс, где сразу видно следующий шаг и узкие места.",
              timing: "MVP 2-4 недели",
              cta: "Разобрать процесс согласования",
            },
            {
              id: "documents",
              label: "Проверка документов",
              title: "Документы и проверки",
              audience:
                "Для команд, которым нужно быстрее проверять комплектность, версии и риски.",
              pain: "Помогаем выстроить проверку документов, требований и комментариев без постоянного ручного пересбора.",
              modules: [
                "Комплектность и требования",
                "Риски и отклонения",
                "История изменений и комментарии",
              ],
              firstResult:
                "Понятный сценарий проверки с единым журналом и итоговыми замечаниями.",
              timing: "MVP 2-4 недели",
              cta: "Обсудить проверку документов",
            },
            {
              id: "secure",
              label: "Архитектура и безопасность",
              title: "Закрытые AI-пилоты",
              audience:
                "Для компаний, которым важны доступы, аудит и границы данных.",
              pain: "Проектируем безопасный пилот там, где нельзя терять контроль над документами, логами и правами доступа.",
              modules: [
                "Требования к данным и доступам",
                "Локальный или гибридный контур",
                "Логи и контроль действий",
                "Границы использования модели",
              ],
              firstResult: "Архитектурная схема и план первого пилота.",
              timing: "Архитектурный разбор 1-2 недели",
              cta: "Обсудить закрытый пилот",
            },
          ],
          cta: {
            title:
              "Если нужен более предметный пример, покажем похожий сценарий",
            text: "На отдельной странице собраны короткие демо-сценарии, которые можно разобрать на вашем процессе.",
            primary: "Получить разбор",
            secondary: "Посмотреть сценарии",
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
            title: "Как запускаем проект: диагностика, MVP и пилот",
            text: "Сначала разбираем один процесс, затем собираем первый рабочий сценарий и проверяем его в пилоте.",
          },
          timeline: {
            title: "Как идет работа",
            text: "Работа строится короткими этапами, чтобы быстро проверить результат и не раздувать проект.",
            items: ["Диагностика", "Карта процесса", "MVP", "Пилот"],
          },
          formats: {
            title: "Форматы работы",
            text: "Формат зависит от того, насколько уже понятен процесс и что именно нужно проверить первым.",
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
                title: "MVP одного маршрута",
                audienceLabel: "Для кого",
                audience:
                  "Если уже есть конкретный закупочный или операционный сценарий.",
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
            title: "Достаточно короткого разбора, чтобы понять следующий шаг",
            text: "После него становится ясно, что брать в работу первым и как проверять результат.",
            primary: "Получить разбор",
            secondary: "Открыть контакты",
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
        brandMeta: "Arvectum LLC",
        skipLink: "Skip to content",
        menuLabel: "Menu",
        menuTitle: "Site navigation",
        menuClose: "Close menu",
        telegramLabel: "Telegram",
        headerCta: "Get an assessment",
        pagesLabel: "Pages",
        nav: [
          { slug: "home", label: "Home" },
          { slug: "solutions", label: "Solutions" },
          { slug: "approach", label: "How We Launch" },
          { slug: "contact", label: "Contact" },
        ],
        footerNav: [
          { slug: "home", label: "Home" },
          { slug: "solutions", label: "Solutions" },
          { slug: "cases", label: "Scenarios" },
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
          note: "Company details and contracting data are shared on request before the start of work.",
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
            title: "Arvectum — AI automation for procurement and workflows",
            description:
              "Arvectum automates procurement, approvals and document-heavy workflows: diagnostics, MVP, pilot and launch.",
            ogTitle: "Arvectum — AI automation for procurement and workflows",
            ogDescription:
              "Automation for procurement, approvals and document-heavy workflows from diagnostics to pilot.",
          },
          hero: {
            eyebrow:
              "AI automation for procurement, tenders and operational workflows",
            title:
              "We automate procurement, approvals and document-heavy workflows without losing control",
            text: "Arvectum turns manual work into a practical system with statuses, documents, checks and a decision log.",
            bullets: [
              "Workflow review in 1-2 weeks",
              "MVP on one scenario in 2-4 weeks",
              "Controlled architecture and access control",
              "Final decisions stay with people",
            ],
            primaryCta: "Get a workflow assessment",
            secondaryCta: "View solutions",
            sideLabel: "What can be automated first",
            sideItems: [
              {
                title: "Procurement and tenders",
                text: "RFQ, quotes, risks, commercials and bid-package control in one route.",
              },
              {
                title: "Approvals and statuses",
                text: "Clear stages, ownership and stalled-step visibility.",
              },
              {
                title: "Documents and checks",
                text: "Completeness, requirements and version history without manual reconstruction.",
              },
            ],
          },
          automation: {
            title: "What we automate",
            text: "We focus on practical workflows where timing, documents, statuses and clear decisions matter.",
            items: [
              {
                title: "Procurement and tenders",
                text: "RFQ, quotes, risks, commercials and bid-package control in one system.",
              },
              {
                title: "Approvals and statuses",
                text: "Stages, ownership, stalled steps and decision history without manual chasing.",
              },
              {
                title: "Documents and checks",
                text: "Completeness, requirements, comments and change control before the final decision.",
              },
            ],
          },
          advantages: {
            title: "Why it is easy to start with us",
            text: "We start from one real workflow and a clear next step instead of turning the project into a large platform immediately.",
            items: [
              {
                title: "One workflow first",
                text: "We focus on one practical scenario instead of trying to redesign everything at once.",
              },
              {
                title: "Clear MVP",
                text: "In 2-4 weeks you can get a first working version and test it on real work.",
              },
              {
                title: "Control stays visible",
                text: "Data, roles, access and logs remain clear and reviewable.",
              },
            ],
          },
          cta: {
            title: "Get an initial workflow review",
            text: "We will see what should be automated first and which scenario makes sense for a pilot.",
            primary: "Send a request",
            secondary: "Go to contact",
          },
        },
        solutions: {
          meta: {
            title:
              "Arvectum solutions — procurement, approvals, document review and secure pilots",
            description:
              "Arvectum solutions for procurement, approvals, document review and secure pilots.",
            ogTitle:
              "Arvectum solutions — procurement, approvals, document review and secure pilots",
            ogDescription:
              "Arvectum solutions for procurement, approvals, document review and secure pilots.",
          },
          hero: {
            eyebrow: "Solutions",
            title:
              "Solutions for procurement, approvals, documents and secure pilots",
            text: "These are the main directions companies usually start from.",
          },
          quickLinks: [
            { id: "procurement", label: "Procurement and tenders" },
            { id: "approvals", label: "Approvals" },
            { id: "documents", label: "Documents" },
            { id: "secure", label: "Secure AI pilot" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Primary focus",
              title: "Procurement and tenders",
              audience:
                "For procurement departments, tender teams and suppliers.",
              pain: "We automate RFQ, quotes, risk review, bid-package checks and control of key stages.",
              modules: [
                "RFQ and supplier questions",
                "Quote comparison and deal economics",
                "Risks, completeness and bid status",
              ],
              firstResult:
                "A mapped process and the first working scenario on a live workflow.",
              timing: "Review in 1-2 weeks, MVP in 2-4 weeks",
              cta: "Discuss a procurement contour",
            },
            {
              id: "approvals",
              label: "Workflow visibility",
              title: "Approvals and statuses",
              audience:
                "For internal teams and managers who need clear visibility into process flow.",
              pain: "We gather stages, owners and stalled steps in one place instead of tracking them manually.",
              modules: [
                "Stages and ownership",
                "Statuses and stalled steps",
                "Comments and action log",
              ],
              firstResult:
                "A process where the next step and the bottlenecks are immediately visible.",
              timing: "MVP in 2-4 weeks",
              cta: "Review an approval workflow",
            },
            {
              id: "documents",
              label: "Document review",
              title: "Documents and checks",
              audience:
                "For teams that need faster completeness checks, version control and risk notes.",
              pain: "We structure document review so comments, requirements and changes are no longer spread across separate files.",
              modules: [
                "Completeness and requirements",
                "Risks and deviations",
                "Version history and comments",
              ],
              firstResult:
                "A clear review scenario with one log and final remarks in one place.",
              timing: "MVP in 2-4 weeks",
              cta: "Discuss document review",
            },
            {
              id: "secure",
              label: "Architecture and security",
              title: "Secure AI pilots",
              audience:
                "For companies where access control, audit and data boundaries matter.",
              pain: "We design a safe pilot where documents, logs and access rights remain under control.",
              modules: [
                "Data and access requirements",
                "Local or hybrid contour",
                "Logs and action control",
                "Model-usage boundaries",
              ],
              firstResult:
                "An architecture scheme and a plan for the first pilot.",
              timing: "Architecture review in 1-2 weeks",
              cta: "Discuss a secure pilot",
            },
          ],
          cta: {
            title:
              "If you need a more concrete example, we can show a similar scenario",
            text: "A separate page collects short demo scenarios that can be reviewed on your process.",
            primary: "Get an assessment",
            secondary: "View scenarios",
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
            title: "How we launch a project: diagnostics, MVP and pilot",
            text: "We start with one workflow, build the first working scenario and then validate it in a pilot.",
          },
          timeline: {
            title: "How the work moves",
            text: "The work moves in short stages so the result can be checked quickly and the scope does not grow too early.",
            items: ["Diagnostics", "Process map", "MVP", "Pilot"],
          },
          formats: {
            title: "Work formats",
            text: "The right entry format depends on how clear the workflow already is and what needs to be tested first.",
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
                title: "MVP of one route",
                audienceLabel: "For whom",
                audience:
                  "When there is already a specific procurement or operations route to improve.",
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
            title: "A short review is enough to define the next step",
            text: "After that it becomes clear what should move into work first and how success should be checked.",
            primary: "Get an assessment",
            secondary: "Open contact",
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
