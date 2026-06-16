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
          { slug: "cases", label: "Сценарии" },
          { slug: "approach", label: "Подход" },
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
            "Опишите закупочный, тендерный или операционный процесс, который хотите перевести в управляемый цифровой контур. Заявка уйдет в Телеграм и на email.",
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
              "Arvectum проектирует закрытые AI-контуры для закупок, тендеров, согласований и операционных процессов: диагностика, MVP, пилот и внедрение.",
            ogTitle: "Arvectum — AI-автоматизация закупок и бизнес-процессов",
            ogDescription:
              "Закрытые AI-контуры для закупок, тендеров и операционных процессов: от диагностики до MVP и пилота.",
          },
          hero: {
            eyebrow:
              "AI-автоматизация закупок, тендеров и сложных бизнес-процессов",
            title:
              "Превращаем ручные закупочные и операционные процессы в управляемые AI-контуры",
            text: "Arvectum строит рабочие системы для процессов, где важно не терять документы, статусы, сроки, риски и экономику сделки.",
            bullets: [
              "Разбор процесса и карта автоматизации за 1-2 недели",
              "MVP закупочного или операционного маршрута за 2-4 недели",
              "Закрытая архитектура: роли, доступы и журнал действий",
              "AI помогает проверять документы, ТКП, риски и статусы",
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
          audiences: {
            title: "Где Arvectum полезен",
            text: "Там, где ручной процесс уже влияет на сроки, маржу и качество решений.",
            items: [
              {
                title: "Поставщикам и тендерным командам",
                text: "Чтобы быстрее собирать заявку и видеть следующий шаг.",
              },
              {
                title: "Закупочным отделам",
                text: "Чтобы держать в одном контуре статусы, ТКП и проверку рисков.",
              },
              {
                title: "Операционным руководителям",
                text: "Чтобы процесс читался без чатов, таблиц и ручных уточнений.",
              },
              {
                title: "Компаниям с закрытым контуром",
                text: "Чтобы данные, роли и доступы оставались под контролем.",
              },
            ],
          },
          automation: {
            title: "Что автоматизируем",
            text: "Под контуром мы понимаем не чат-бота, а рабочую систему: роли, статусы, документы, проверки, логи и понятный следующий шаг.",
            items: [
              "Закупочный маршрут",
              "RFQ и ТКП",
              "Договорные и коммерческие риски",
              "Согласования и статусы",
              "Контроль исполнения",
            ],
          },
          process: {
            title: "Как начинается проект",
            text: "Стартуем с одного процесса и быстро доводим его до пилота.",
            items: [
              "Диагностика процесса",
              "Карта ролей и данных",
              "MVP на одном сценарии",
              "Пилот и метрики",
            ],
          },
          who: {
            title: "Кто стоит за Arvectum",
            text: "Arvectum развивает Никита Арутюнов — разработчик и основатель компании. Фокус проекта — практическая автоматизация закупочных, тендерных и операционных процессов.",
            items: [
              {
                title: "Практический фокус",
                text: "Закупки, тендеры, документы, риски и статусы без лишней абстракции.",
              },
              {
                title: "Закрытая архитектура",
                text: "Контроль данных, доступов и логов с учетом требований к безопасности.",
              },
              {
                title: "MVP-подход",
                text: "Сначала один реальный процесс, потом масштабирование на соседние маршруты.",
              },
            ],
          },
          firstCall: {
            title: "Что будет на первом разборе",
            items: [
              "Уточним процесс: закупка, тендер, RFQ, ТКП, согласование или операционная проверка.",
              "Определим, где теряются документы, статусы, сроки и решения.",
              "Выберем один сценарий для MVP или пилота.",
              "Зафиксируем ограничения по данным, доступам и безопасности.",
              "Сформируем первый план: что можно сделать за 1-2 недели и что проверить за 2-4 недели.",
            ],
          },
          safety: {
            title: "Почему это безопаснее, чем просто подключить чат-бота",
            text: "Система собирается вокруг процесса и ответственности, а не вокруг свободного чата без границ.",
            items: [
              "Роли и доступы",
              "Журнал действий",
              "Локальный или гибридный контур",
              "Проверяемые артефакты",
              "Человек принимает финальные решения",
            ],
          },
          flow: {
            title: "Процессный маршрут",
            items: [
              "Закупка",
              "Разбор требований",
              "RFQ",
              "ТКП",
              "Экономика",
              "Риски",
              "Заявка",
              "Исполнение",
            ],
          },
          cta: {
            title: "Первый шаг — короткий разбор процесса",
            text: "После него станет понятно, какой сценарий брать в MVP и как быстро запускать пилот.",
            primary: "Получить разбор процесса",
            secondary: "Открыть решения",
          },
        },
        solutions: {
          meta: {
            title:
              "Решения Arvectum — закупки, тендеры, операции и закрытые AI-контуры",
            description:
              "Сценарии автоматизации для закупок, RFQ, анализа ТКП, контроля рисков, согласований и закрытых AI-пилотов.",
            ogTitle:
              "Решения Arvectum — закупки, тендеры, операции и закрытые AI-контуры",
            ogDescription:
              "Закупки и тендеры как основной продуктовый фокус, плюс операционные процессы и закрытые AI-пилоты.",
          },
          hero: {
            eyebrow: "Решения",
            title: "Решения для закупок, тендеров и операционных процессов",
            text: "Основной фокус Arvectum — закупочный контур. Остальные сценарии строятся на той же управляемой архитектуре.",
          },
          quickLinks: [
            { id: "procurement", label: "Закупки и тендеры" },
            { id: "operations", label: "Операции" },
            { id: "secure", label: "Закрытый AI-пилот" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Основной фокус",
              title: "Закупки и тендеры",
              audience:
                "Для закупочных отделов, тендерных групп и поставщиков.",
              pain: "Ручной маршрут теряет статусы, документы, вопросы поставщикам и историю решений; сравнение ТКП и контроль рисков остаются фрагментированными.",
              modules: [
                "Поиск или ввод закупки",
                "Разбор требований и комплектности",
                "Вопросы поставщикам / RFQ",
                "Сбор и сравнение ТКП",
                "Экономика сделки",
                "Договорные риски",
                "Комплект заявки",
                "Контроль исполнения и оплат",
              ],
              firstResult:
                "Карта маршрута, статусы, проверка документов и первый рабочий сценарий на одном реальном процессе.",
              timing: "Разбор 1-2 недели, MVP 2-4 недели",
              cta: "Обсудить закупочный контур",
            },
            {
              id: "operations",
              label: "Расширение компетенции",
              title: "Операционные процессы и внутренние проверки",
              audience:
                "Для операционных команд, бэк-офиса и согласовательных маршрутов.",
              pain: "Статусы, документы и история решений живут в переписке и таблицах, из-за чего процесс трудно читать и контролировать.",
              modules: [
                "Роли и ответственные",
                "Статусы и зависшие шаги",
                "История действий и комментариев",
                "Проверки комплектности и критериев",
              ],
              firstResult:
                "Один измеримый внутренний контур с ролями, статусами и журналом действий.",
              timing: "MVP 2-4 недели",
              cta: "Разобрать операционный процесс",
            },
            {
              id: "secure",
              label: "Архитектурный вход",
              title: "Закрытые AI-пилоты и локальные контуры",
              audience:
                "Для компаний, которым важны доступы, аудит и контроль выноса данных.",
              pain: "Если AI внедрять без понятной архитектуры, быстро теряется контроль над ролями, логами и границами данных.",
              modules: [
                "Требования к данным и доступам",
                "Локальный или гибридный контур",
                "Логи и аудит действий",
                "Границы использования модели",
              ],
              firstResult:
                "Архитектурное решение и безопасный маршрут первого пилота.",
              timing: "Архитектурный разбор 1-2 недели",
              cta: "Обсудить закрытый пилот",
            },
          ],
          cta: {
            title: "Начать можно с одного приоритетного маршрута",
            text: "Обычно это закупки, тендеры или связанный с ними процесс согласований.",
            primary: "Получить разбор",
            secondary: "Посмотреть сценарии",
          },
        },
        cases: {
          meta: {
            title: "Сценарии внедрения — Arvectum",
            description:
              "Сценарии внедрения для закупок, согласований и проверки документов: маршруты, статусы, журнал решений и демонстрация без выдуманных метрик.",
            ogTitle: "Сценарии внедрения — Arvectum",
            ogDescription:
              "Пилотные сценарии, демо-маршруты и то, что можно показать на демонстрации без выдуманных метрик.",
          },
          hero: {
            eyebrow: "Сценарии",
            title:
              "Сценарии внедрения для закупок, согласований и проверки документов",
            text: "Ниже — типовые маршруты, на которых мы обычно запускаем первый пилот.",
          },
          demoBlock: {
            title: "На демонстрации вы увидите",
            items: [
              "Маршрут закупки",
              "Карточка сделки",
              "Сравнение ТКП",
              "Риск-мемо",
              "Журнал решений",
            ],
          },
          cases: [
            {
              id: "procurement-case",
              label: "Сценарий закупки",
              status: "Пилотный сценарий",
              title:
                "Маршрут закупки с прозрачными статусами и журналом решений",
              challenge:
                "Документы, статусы, вопросы поставщикам и согласования были разнесены по чатам и файлам; чтобы понять реальное состояние сделки, приходилось заново собирать контекст.",
              solution:
                "Собираем управляемый закупочный контур со статусами, проверкой комплектности, RFQ, сравнением ТКП и журналом решений по маршруту.",
              result:
                "Ожидаемый эффект в пилоте: прозрачный статус по сделке, понятный следующий шаг, меньше ручного пересбора и измеримость времени на этапах.",
              outcomes: [
                "Единая карточка закупки и документов",
                "Видно, кто отвечает за следующий шаг",
                "История решений и контроль рисков по маршруту",
              ],
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
              title: "Контур согласований и зависших шагов",
              challenge:
                "Руководитель не видел, где процесс остановился, а исполнители тратили время на постоянные напоминания и пересылки.",
              solution:
                "Выстраиваем роли, этапы, ответственных, SLA и журнал действий, чтобы зависшие шаги и узкие места были видны сразу.",
              result:
                "Что измеряем в пилоте: скорость прохождения этапов, количество зависших задач, полнота статусов и доля ручных уточнений.",
              outcomes: [
                "Понятная карта этапов и ответственных",
                "Видимость зависших шагов и эскалаций",
                "История действий по каждому кейсу",
              ],
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
              title: "Проверка комплектности и договорных рисков",
              challenge:
                "Команда тратила время на ручную сверку комплектности, требований и договорных ограничений перед подачей или согласованием.",
              solution:
                "Строим контур, где AI-агенты помогают выделять требования, отмечать пробелы, сравнивать версии и формировать риск-мемо для человека.",
              result:
                "Ожидаемый эффект в пилоте: меньше пропусков, быстрее проверка документов и более понятная точка входа для финального решения человека.",
              outcomes: [
                "Чек-лист комплектности по сценарию",
                "Выделение потенциальных рисков и отклонений",
                "Фиксация истории изменений и комментариев",
              ],
              demo: [
                "Чек-лист комплектности",
                "Найденные пробелы и потенциальные риски",
                "Комментарии человека и итоговый memo",
              ],
            },
          ],
          cta: {
            title: "Можно разобрать такой же маршрут на вашем процессе",
            text: "Покажем, какой сценарий имеет смысл запускать первым и что измерять в пилоте.",
            primary: "Запросить демо на похожем процессе",
            secondary: "Открыть решения",
          },
        },
        approach: {
          meta: {
            title: "Подход Arvectum — диагностика, MVP и пилот AI-системы",
            description:
              "Как Arvectum запускает AI-контуры: разбор процесса, архитектура, MVP, пилот, контроль качества, безопасность данных и масштабирование.",
            ogTitle: "Подход Arvectum — диагностика, MVP и пилот AI-системы",
            ogDescription:
              "Что получает клиент после первого этапа, какие есть ограничения и почему подход удобен для B2B.",
          },
          hero: {
            eyebrow: "Подход",
            title: "Диагностика, MVP и пилот на одном реальном процессе",
            text: "Сначала разбираем маршрут и ограничения, затем собираем MVP и запускаем пилот.",
          },
          quickLinks: [
            { id: "deliverables", label: "После первого этапа" },
            { id: "timeline", label: "Этапы" },
            { id: "formats", label: "Форматы работы" },
            { id: "limits", label: "Чего не обещаем" },
            { id: "faq", label: "FAQ" },
          ],
          signals: {
            title: "Когда процесс уже пора переводить в управляемый контур",
            text: "Обычно старт нужен там, где уже дорогой риск ошибки, а ручная координация тормозит маршрут и прячет реальное состояние процесса.",
            items: [
              {
                value: "01",
                title: "Контекст живет в людях и чатах",
                text: "Статусы, исключения и договоренности не собраны в единую точку управления.",
              },
              {
                value: "02",
                title: "Процесс плохо читается руководителю",
                text: "Чтобы понять, где застряла задача, приходится вручную собирать данные из переписки и файлов.",
              },
              {
                value: "03",
                title: "Документы и риски проверяются вручную",
                text: "Комплектность, сроки и коммерческие ограничения отнимают время у сильных людей.",
              },
              {
                value: "04",
                title: "AI уже нужен, но без хаоса",
                text: "Нужен не очередной чат, а контур с ролями, логами, критериями качества и контролем доступа.",
              },
            ],
          },
          deliverables: {
            title: "Что клиент получает после первого этапа",
            text: "После первого этапа у вас есть понятная карта работ и следующий шаг.",
            items: [
              {
                label: "Артефакт",
                title: "Карта процесса",
                text: "Пошаговый маршрут, статусы, роли, документы и точки принятия решений.",
              },
              {
                label: "Артефакт",
                title: "Список шагов для автоматизации",
                text: "Что имеет смысл автоматизировать в первую очередь.",
              },
              {
                label: "Артефакт",
                title: "Требования к данным и доступам",
                text: "Какие источники, роли и ограничения нужны для пилота.",
              },
              {
                label: "Артефакт",
                title: "Прототип или MVP",
                text: "Первый рабочий сценарий, который можно проверить на реальном процессе.",
              },
            ],
          },
          timeline: {
            title: "Как идет работа",
            text: "Двигаемся короткими этапами, чтобы быстро проверить пользу.",
            items: [
              "Диагностика процесса и бизнес-вызова",
              "Карта ролей, данных и решений",
              "MVP на одном реальном сценарии",
              "Пилот, метрики и следующий шаг",
            ],
          },
          formats: {
            title: "Форматы работы",
            text: "Старт можно подобрать по зрелости процесса и ожидаемой глубине проверки.",
            note: "Стоимость зависит от процесса, данных, интеграций и требований к закрытому контуру. Для оценки достаточно первичного разбора.",
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
          trust: {
            title: "Почему такой подход повышает доверие",
            text: "Покупателю важно видеть не только идею, но и ограничения: где человек остается в контуре и как защищаются данные.",
            items: [
              {
                title: "Роли и доступы",
                text: "Каждое действие имеет владельца, а права и ограничения задаются явно.",
              },
              {
                title: "Логи и проверяемые артефакты",
                text: "Решения, изменения и результаты можно объяснить и проверить.",
              },
              {
                title: "Локальный или гибридный контур",
                text: "Чувствительные данные не выносятся наружу без согласованной архитектуры.",
              },
            ],
          },
          limits: {
            title: "Что мы не обещаем",
            items: [
              "Не обещаем магическую замену отдела.",
              "Не подключаем AI без границ ответственности и контроля.",
              "Не выносим чувствительные данные во внешние сервисы без согласования.",
              "Не делаем большой продукт до проверки одного процесса.",
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
                  "Если в процессе есть NDA, чувствительные документы или строгие требования к доступам, лучше сразу закладывать локальный или гибридный контур.",
              },
            ],
          },
          cta: {
            title: "Начать можно с короткой диагностики процесса",
            text: "Этого достаточно, чтобы определить сценарий для MVP и пилота.",
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
          { slug: "cases", label: "Scenarios" },
          { slug: "approach", label: "Approach" },
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
            "Describe the procurement, tender or operational workflow you want to move into a controlled digital contour. The request will be sent to Telegram and email.",
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
              "Arvectum builds controlled AI-powered systems for procurement, tenders, approvals and operational workflows: diagnostics, MVP, pilot and rollout.",
            ogTitle: "Arvectum — AI automation for procurement and workflows",
            ogDescription:
              "Controlled AI-powered systems for procurement, tenders and document-heavy operational workflows.",
          },
          hero: {
            eyebrow:
              "AI automation for procurement, tenders and complex workflows",
            title:
              "We turn manual procurement and operational workflows into controlled AI-powered systems",
            text: "Arvectum builds working systems for document-heavy workflows where statuses, risks, deadlines and commercials must stay visible.",
            bullets: [
              "Workflow review and automation map in 1-2 weeks",
              "MVP for procurement or operations in 2-4 weeks",
              "Controlled architecture with roles, access control and logs",
              "AI helps review documents, quotes, risks and statuses",
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
          audiences: {
            title: "Where Arvectum is useful",
            text: "Where manual coordination already affects timing, margin and decision quality.",
            items: [
              {
                title: "Vendors and tender teams",
                text: "To assemble bid packages faster and keep the next step visible.",
              },
              {
                title: "Procurement teams",
                text: "To keep statuses, quotes and risk checks in one controlled layer.",
              },
              {
                title: "Operations leaders",
                text: "To read the process without chasing chats and spreadsheets.",
              },
              {
                title: "Companies with a closed data contour",
                text: "To keep data, roles and access boundaries under control.",
              },
            ],
          },
          automation: {
            title: "What we automate",
            text: "By a contour we mean not a chatbot, but a working system with roles, statuses, documents, checks, logs and a clear next step.",
            items: [
              "Procurement route",
              "RFQ and vendor quotes",
              "Contract and commercial risks",
              "Approvals and statuses",
              "Execution control",
            ],
          },
          process: {
            title: "How a project starts",
            text: "We start from one workflow and move it quickly into a pilot.",
            items: [
              "Workflow diagnostics",
              "Map of roles and data",
              "MVP on one scenario",
              "Pilot and metrics",
            ],
          },
          who: {
            title: "Who is behind Arvectum",
            text: "Arvectum is developed by Nikita Arutyunov, the company's founder and builder. The focus is practical automation of procurement, tender and operational workflows.",
            items: [
              {
                title: "Practical focus",
                text: "Procurement, tenders, documents, risks and statuses without vague AI language.",
              },
              {
                title: "Controlled architecture",
                text: "Data, access and logs stay visible and reviewable.",
              },
              {
                title: "MVP first",
                text: "One real workflow first, then scale across adjacent routes.",
              },
            ],
          },
          firstCall: {
            title: "What happens in the first review call",
            items: [
              "We clarify the workflow: procurement, tender, RFQ, quotes, approvals or an operational check.",
              "We identify where documents, statuses, deadlines and decisions get lost.",
              "We choose one scenario for MVP or pilot.",
              "We capture data, access and security constraints.",
              "We shape the first plan: what can be done in 1-2 weeks and what to test in 2-4 weeks.",
            ],
          },
          safety: {
            title: "Why this is safer than simply connecting a chatbot",
            text: "The system is designed around a business process and accountability, not around an unrestricted chat box.",
            items: [
              "Roles and access control",
              "Action logs",
              "Local or hybrid contour",
              "Verifiable artifacts",
              "Final decisions stay with humans",
            ],
          },
          flow: {
            title: "Process route",
            items: [
              "Opportunity",
              "Requirement review",
              "RFQ",
              "Quotes",
              "Economics",
              "Risks",
              "Bid package",
              "Execution",
            ],
          },
          cta: {
            title: "The first step is a short workflow review",
            text: "After that, it becomes clear which scenario should move into MVP and pilot first.",
            primary: "Get an assessment",
            secondary: "Open solutions",
          },
        },
        solutions: {
          meta: {
            title:
              "Arvectum solutions — procurement, tenders, operations and secure AI contours",
            description:
              "Automation scenarios for procurement workflows, RFQ, vendor quotes, risk control, approvals and secure AI pilots.",
            ogTitle:
              "Arvectum solutions — procurement, tenders, operations and secure AI contours",
            ogDescription:
              "Procurement and tenders as the primary product focus, with operations and secure AI pilots as extensions.",
          },
          hero: {
            eyebrow: "Solutions",
            title:
              "Solutions for procurement, tenders and operational workflows",
            text: "Arvectum is primarily focused on procurement contours. The other scenarios extend the same controlled architecture.",
          },
          quickLinks: [
            { id: "procurement", label: "Procurement and tenders" },
            { id: "operations", label: "Operations" },
            { id: "secure", label: "Secure AI pilot" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Primary focus",
              title: "Procurement and tenders",
              audience:
                "For procurement departments, tender teams and suppliers.",
              pain: "Manual routes lose statuses, documents, vendor questions and decision history, while quote comparison and risk control stay fragmented.",
              modules: [
                "Opportunity intake or capture",
                "Requirement review and completeness checks",
                "Supplier questions / RFQ",
                "Vendor quote collection and comparison",
                "Deal economics",
                "Contract risk review",
                "Bid package completeness",
                "Execution and payment control",
              ],
              firstResult:
                "A mapped route, statuses, document checks and the first working scenario on a real process.",
              timing: "Review in 1-2 weeks, MVP in 2-4 weeks",
              cta: "Discuss a procurement contour",
            },
            {
              id: "operations",
              label: "Extension",
              title: "Operational workflows and internal controls",
              audience:
                "For operations teams, back-office functions and approval routes.",
              pain: "Routine work consumes valuable time, while statuses, documents and decision history remain scattered across messages and spreadsheets.",
              modules: [
                "Roles and ownership",
                "Statuses and stuck-step visibility",
                "Action and comment history",
                "Completeness and rules checks",
              ],
              firstResult:
                "One measurable internal contour with roles, statuses and action logs.",
              timing: "MVP in 2-4 weeks",
              cta: "Review an operations workflow",
            },
            {
              id: "secure",
              label: "Architectural entry point",
              title: "Secure AI pilots and local contours",
              audience:
                "For companies where access control, audit and data boundaries matter.",
              pain: "AI is needed, but without a controlled architecture it is easy to lose track of access, logs and data boundaries.",
              modules: [
                "Data and access requirements",
                "Local or hybrid contour",
                "Logs and audit trail",
                "Model-usage boundaries",
              ],
              firstResult:
                "An architecture decision and a safe route for the first pilot.",
              timing: "Architecture review in 1-2 weeks",
              cta: "Discuss a secure pilot",
            },
          ],
          cta: {
            title: "You can start from one priority route",
            text: "Most often that is procurement, tenders or a linked approval workflow.",
            primary: "Get an assessment",
            secondary: "View scenarios",
          },
        },
        cases: {
          meta: {
            title: "Implementation scenarios — Arvectum",
            description:
              "Implementation scenarios for procurement, approvals and document review with clear demo routes and no invented metrics.",
            ogTitle: "Implementation scenarios — Arvectum",
            ogDescription:
              "Pilot scenarios, demo routes and what can be shown without invented metrics.",
          },
          hero: {
            eyebrow: "Scenarios",
            title:
              "Implementation scenarios for procurement, approvals and document review",
            text: "Below are the routes we most often use to launch the first pilot.",
          },
          demoBlock: {
            title: "What you will see in a demo",
            items: [
              "Procurement route",
              "Deal card",
              "Quote comparison",
              "Risk memo",
              "Decision log",
            ],
          },
          cases: [
            {
              id: "procurement-case",
              label: "Procurement scenario",
              status: "Pilot scenario",
              title:
                "Procurement route with transparent statuses and a decision log",
              challenge:
                "Documents, statuses, supplier questions and approvals were scattered across chats and files, so the actual state of the deal had to be rebuilt each time.",
              solution:
                "We assemble a controlled procurement contour with statuses, completeness checks, RFQ, vendor quote comparison and a decision log across the route.",
              result:
                "Expected pilot effect: transparent deal status, a clear next step, less manual context reconstruction and measurable stage timing.",
              outcomes: [
                "One card for the procurement item and its documents",
                "Clear ownership of the next step",
                "Decision history and risk control across the route",
              ],
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
              title: "Approval contour and stuck-step visibility",
              challenge:
                "Leadership could not see where the workflow had stopped, while the team spent time on reminders and manual coordination.",
              solution:
                "We structure roles, stages, owners, SLA signals and an action log so stuck steps and bottlenecks are visible immediately.",
              result:
                "What we measure in the pilot: stage timing, stuck tasks, status completeness and reduction of manual clarifications.",
              outcomes: [
                "Clear stage map and ownership",
                "Visibility into stalled steps and escalations",
                "Action history for every case",
              ],
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
              title: "Completeness and contract-risk review",
              challenge:
                "The team spent time manually checking completeness, requirements and contractual constraints before submission or approval.",
              solution:
                "We build a contour where AI agents help surface requirements, highlight gaps, compare versions and prepare a risk memo for human review.",
              result:
                "Expected pilot effect: fewer misses, faster document review and a clearer input layer for the human decision-maker.",
              outcomes: [
                "Scenario-based completeness checklist",
                "Potential risk and deviation highlights",
                "Version history and comments",
              ],
              demo: [
                "Completeness checklist",
                "Detected gaps and potential risks",
                "Human comments and final memo",
              ],
            },
          ],
          cta: {
            title: "We can review the same route on your workflow",
            text: "We will show which scenario makes sense first and what to measure in the pilot.",
            primary: "Request a demo for a similar workflow",
            secondary: "Open solutions",
          },
        },
        approach: {
          meta: {
            title: "Arvectum approach — diagnostics, MVP and pilot",
            description:
              "How Arvectum launches AI contours: workflow review, architecture, MVP, pilot, quality control, data security and scale-up.",
            ogTitle: "Arvectum approach — diagnostics, MVP and pilot",
            ogDescription:
              "What the client gets after the first stage, what we do not promise and how the route stays controlled.",
          },
          hero: {
            eyebrow: "Approach",
            title: "Diagnostics, MVP and pilot on one real workflow",
            text: "We start with the route and constraints, then move into MVP and pilot.",
          },
          quickLinks: [
            { id: "deliverables", label: "After stage one" },
            { id: "timeline", label: "Stages" },
            { id: "formats", label: "Work formats" },
            { id: "limits", label: "What we do not promise" },
            { id: "faq", label: "FAQ" },
          ],
          signals: {
            title: "When the workflow should move into a controlled contour",
            text: "The need usually appears when the cost of error is already high and manual coordination hides the true state of the route.",
            items: [
              {
                value: "01",
                title: "Context lives in people and chats",
                text: "Statuses, exceptions and agreements are not captured in one managed layer.",
              },
              {
                value: "02",
                title: "The route is hard for leadership to read",
                text: "Understanding where the workflow got stuck still requires manual reconstruction from files and messages.",
              },
              {
                value: "03",
                title: "Documents and risks are reviewed manually",
                text: "Completeness, timing and commercial constraints consume time from strong specialists.",
              },
              {
                value: "04",
                title: "AI is needed, but not chaos",
                text: "What is needed is not another chatbot, but a contour with roles, logs, quality criteria and access control.",
              },
            ],
          },
          deliverables: {
            title: "What the client gets after the first stage",
            text: "After the first stage, you have a clear map of the work and the next step.",
            items: [
              {
                label: "Artifact",
                title: "Workflow map",
                text: "A route of stages, statuses, roles, documents and decision points.",
              },
              {
                label: "Artifact",
                title: "List of automatable steps",
                text: "Which actions are worth automating first.",
              },
              {
                label: "Artifact",
                title: "Data and access requirements",
                text: "Sources, roles and constraints needed for the pilot.",
              },
              {
                label: "Artifact",
                title: "Prototype or MVP",
                text: "The first working scenario that can be tested on a live workflow.",
              },
            ],
          },
          timeline: {
            title: "How the work moves",
            text: "We move in short stages to validate value quickly.",
            items: [
              "Workflow diagnostics and business challenge review",
              "Map of roles, data and decisions",
              "MVP on one real scenario",
              "Pilot, metrics and the next step",
            ],
          },
          formats: {
            title: "Work formats",
            text: "The entry format depends on how clear the workflow already is and how much proof is needed.",
            note: "Pricing depends on the workflow, data, integrations and secure deployment requirements. An initial review is enough for a first estimate.",
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
          trust: {
            title: "Why this improves trust",
            text: "Buyers need to see not only the idea, but also the limits: where humans stay in control and how data is protected.",
            items: [
              {
                title: "Roles and access control",
                text: "Every action has an owner, and permissions are defined explicitly.",
              },
              {
                title: "Logs and verifiable artifacts",
                text: "Decisions, changes and outputs can be reviewed and explained.",
              },
              {
                title: "Local or hybrid contour",
                text: "Sensitive data is not moved out without an agreed architecture.",
              },
            ],
          },
          limits: {
            title: "What we do not promise",
            items: [
              "We do not promise a magical replacement of an entire department.",
              "We do not connect AI without responsibility boundaries and control.",
              "We do not move sensitive data into external services without approval.",
              "We do not build a large product before validating one process.",
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
                question:
                  "When do we need a local contour instead of the cloud?",
                answer:
                  "If the workflow involves NDA, sensitive documents or strict access requirements, it is better to design a local or hybrid contour from the start.",
              },
            ],
          },
          cta: {
            title: "A short workflow diagnosis is usually enough to start",
            text: "That is enough to define the first MVP and pilot route.",
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
