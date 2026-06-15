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
          shortText:
            "Arvectum автоматизирует закупочные, тендерные и операционные процессы с помощью AI-агентов и управляемых цифровых контуров.",
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
          requisites: [
            { label: "Название", value: 'ООО "Арвектум"' },
            { label: "Почта", value: "info@arvectum.com", type: "email" },
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
            text: "Arvectum проектирует и внедряет закрытые цифровые системы для процессов, где важно не потерять документы, сроки, риски, экономику и историю решений. Начинаем с диагностики, затем собираем MVP или пилот на реальном процессе.",
            bullets: [
              "Разбор процесса и карта автоматизации за 1-2 недели",
              "MVP закупочного или операционного контура за 2-4 недели",
              "Закрытая архитектура: данные, роли, логи и контроль доступа",
              "AI-агенты не болтают, а помогают проверять документы, риски, ТКП и статусы",
            ],
            primaryCta: "Получить разбор процесса",
            secondaryCta: "Посмотреть сценарии",
            sideLabel: "Что можно автоматизировать первым",
            sideItems: [
              {
                title: "Закупки и тендеры",
                text: "Поиск, анализ закупки, RFQ, сбор ТКП, сравнение предложений, экономика и риски.",
              },
              {
                title: "Согласования и статусы",
                text: "Роли, этапы, ответственные, журнал решений и контроль зависших шагов.",
              },
              {
                title: "Документы и проверки",
                text: "Комплектность, договорные риски, требования, протоколы и история изменений.",
              },
            ],
          },
          audiences: {
            title: "Кому это нужно",
            text: "Сервис особенно полезен там, где процесс уже влияет на сделку, маржу, сроки или риски, но пока держится на ручной координации.",
            items: [
              {
                title: "Поставщикам, участвующим в тендерах",
                text: "Когда нужно быстрее собирать комплект заявки, проверять требования и не терять историю решений.",
              },
              {
                title: "Закупочным и тендерным отделам",
                text: "Когда важно видеть статусы, сравнение предложений, контроль сроков и экономику по маршруту.",
              },
              {
                title: "Операционным руководителям",
                text: "Когда ручные проверки и постоянный пересбор контекста начинают тормозить команду.",
              },
              {
                title: "Компаниям с чувствительными документами",
                text: "Когда нужен закрытый контур с ролями, логами, доступами и контролем выноса данных.",
              },
            ],
          },
          automation: {
            title: "Что автоматизируем",
            text: "Берем не абстрактный AI для бизнеса, а конкретные маршруты, где уже важны документы, статусы, риски и экономика.",
            items: [
              "Закупочный маршрут",
              "RFQ и ТКП",
              "Договорные и коммерческие риски",
              "Контроль исполнения",
              "Внутренние операционные процессы",
            ],
          },
          process: {
            title: "Как начинается работа",
            items: [
              "Диагностика процесса",
              "Карта ролей, данных и решений",
              "MVP на одном реальном сценарии",
              "Пилот и метрики",
            ],
          },
          safety: {
            title: "Почему это безопаснее, чем просто подключить чат-бота",
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
            title:
              "Если процесс уже упирается в документы, статусы и ручные проверки, можно быстро собрать первый управляемый контур",
            text: "Первый шаг — короткий разбор процесса и сценария, на котором имеет смысл запускать MVP.",
            primary: "Получить разбор процесса",
            secondary: "Открыть решения",
          },
        },
        solutions: {
          meta: {
            title:
              "Решения Arvectum — закупки, тендеры, операции и закрытые AI-контуры",
            description:
              "Сценарии автоматизации: закупочный контур, RFQ, анализ ТКП, контроль рисков, маркетинговые проверки и внутренние AI-ассистенты.",
            ogTitle:
              "Решения Arvectum — закупки, тендеры, операции и закрытые AI-контуры",
            ogDescription:
              "Закупки и тендеры как основной продуктовый фокус, плюс операционные процессы и закрытые AI-пилоты.",
          },
          hero: {
            eyebrow: "Решения",
            title:
              "Сценарии автоматизации для закупок, тендеров и операционных процессов",
            text: "Основной фокус Arvectum — закупочный и тендерный контур. Остальные направления расширяют ту же архитектурную логику: статусы, документы, проверки, риски и управляемые роли.",
          },
          quickLinks: [
            { id: "procurement", label: "Закупки и тендеры" },
            { id: "operations", label: "Операции" },
            { id: "marketing", label: "Маркетинговые проверки" },
            { id: "secure", label: "Закрытый AI-пилот" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Основной фокус",
              title: "Закупки и тендеры",
              audience:
                "Для закупочных отделов, тендерных групп, категорийных менеджеров, поставщиков и операционных руководителей.",
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
                "Для бэк-офиса, сервисных функций, согласовательных маршрутов и операционных команд.",
              pain: "Рутина съедает время сильных людей, а статусы, документы и история решений живут в переписке и таблицах.",
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
              id: "marketing",
              label: "Дополнительный сценарий",
              title: "Маркетинговые проверки и контуры согласования материалов",
              audience:
                "Для команд, которым важно держать брифы, материалы и рекомендации внутри контролируемой среды.",
              pain: "Материалы, комментарии и критерии оценки разбросаны, а вынос чувствительного контента во внешние сервисы нежелателен.",
              modules: [
                "Контроль бренд-материалов",
                "Проверка понятности и рисков",
                "Согласование версий и комментариев",
              ],
              firstResult:
                "Первый внутренний сценарий проверки материалов и управляемой обратной связи.",
              timing: "Пилот 2-5 недель",
              cta: "Обсудить сценарий проверки",
            },
            {
              id: "secure",
              label: "Архитектурный вход",
              title: "Закрытые AI-пилоты и локальные контуры",
              audience:
                "Для компаний, которым важны NDA, контроль выноса данных, роли, аудит и юридические ограничения.",
              pain: "AI нужен, но без понятной архитектуры легко потерять контроль над доступами, логами и происхождением данных.",
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
            title:
              "Если в приоритете закупки, тендеры или связанный с ними маршрут согласований, начнем с него как с первого продукта",
            text: "Остальные сценарии подключаются как развитие той же системы, а не как отдельный абстрактный AI-проект.",
            primary: "Получить разбор",
            secondary: "Посмотреть сценарии",
          },
        },
        cases: {
          meta: {
            title: "Сценарии внедрения — Arvectum",
            description:
              "Примеры маршрутов внедрения AI-контуров: от ручных процессов и разрозненных документов к статусам, журналу решений и прозрачному управлению.",
            ogTitle: "Сценарии внедрения — Arvectum",
            ogDescription:
              "Пилотные сценарии, демо-маршруты и то, что можно показать на демонстрации без выдуманных метрик.",
          },
          hero: {
            eyebrow: "Сценарии",
            title:
              "Сценарии внедрения: что можно показать на демо и как выглядит первый маршрут",
            text: "Если реальных клиентских кейсов еще немного, лучше честно показывать пилотные сценарии, демо-маршруты и внутренние прототипы, чем создавать ощущение выдуманных кейсов.",
          },
          demoBlock: {
            title: "Что можно показать на демо",
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
            },
          ],
          cta: {
            title:
              "Если хотите увидеть похожий маршрут на своей задаче, соберем демо под конкретный процесс",
            text: "Без выдуманных цифр: покажем, что именно можно измерять в пилоте и какой первый сценарий имеет смысл запускать.",
            primary: "Получить разбор",
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
            title: "Диагностика, MVP и пилот без абстрактного AI-шума",
            text: "Подход Arvectum строится вокруг одного реального процесса: сначала разбор маршрута, затем архитектура и MVP, после этого пилот на измеримом сценарии.",
          },
          quickLinks: [
            { id: "signals", label: "Когда стартовать" },
            { id: "deliverables", label: "После первого этапа" },
            { id: "timeline", label: "Этапы" },
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
            text: "Первый этап должен снижать неопределенность, а не увеличивать ее. Поэтому мы фиксируем понятные артефакты и ограничения.",
            items: [
              {
                label: "Артефакт",
                title: "Карта процесса",
                text: "Пошаговый маршрут, статусы, роли, документы и точки принятия решений.",
              },
              {
                label: "Артефакт",
                title: "Список автоматизируемых шагов",
                text: "Что реально автоматизируем первым, а что пока оставляем человеку.",
              },
              {
                label: "Артефакт",
                title: "Требования к данным и доступам",
                text: "Какие источники, роли и ограничения нужны для пилота.",
              },
              {
                label: "Артефакт",
                title: "Прототип интерфейса или MVP",
                text: "Первый сценарий, на котором можно проверять маршрут и полезность.",
              },
              {
                label: "Артефакт",
                title: "Критерии качества",
                text: "По каким признакам считаем, что пилот полезен и управляем.",
              },
              {
                label: "Артефакт",
                title: "План пилота",
                text: "Кто участвует, какие сценарии проверяем и что измеряем.",
              },
              {
                label: "Артефакт",
                title: "Риски и ограничения",
                text: "Где нужны ручные проверки, какие есть чувствительные данные и что нельзя обещать заранее.",
              },
            ],
          },
          timeline: {
            title: "Как идет работа",
            text: "Маршрут построен так, чтобы быстро проверить пользу на одном процессе и не строить большой продукт до появления фактов.",
            items: [
              "Диагностика процесса и бизнес-вызова",
              "Карта ролей, данных и решений",
              "Архитектура и границы ответственности AI",
              "MVP на одном реальном сценарии",
              "Пилот, метрики и следующий шаг",
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
            title:
              "Если хотите быстро понять, какой процесс брать первым, начнем с диагностики и карты автоматизации",
            text: "После этого можно решить, нужен ли MVP, пилот или сначала архитектурный разбор закрытого контура.",
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
            title: "Получить разбор процесса и обсудить первый пилот",
            text: "Опишите, где у процесса теряются документы, статусы, сроки, ТКП, экономика или история решений. Мы предложим, с какого сценария имеет смысл начинать.",
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
          shortText:
            "Arvectum automates procurement, tenders and operational workflows with AI agents and controlled digital contours.",
          legalLinksTitle: "Legal",
          legalLinks: [
            { slug: "privacy", label: "Privacy policy" },
            {
              slug: "personalDataConsent",
              label: "Personal data consent",
            },
            { slug: "cookiesPolicy", label: "Cookies policy" },
          ],
          requisites: [
            { label: "Company", value: "Arvectum LLC" },
            { label: "Email", value: "info@arvectum.com", type: "email" },
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
            text: "Arvectum designs and deploys secure digital systems for workflows where documents, timing, risks, commercial logic and decision history matter. We start with diagnostics, then build an MVP or pilot on a real workflow.",
            bullets: [
              "Workflow review and automation map in 1-2 weeks",
              "MVP for procurement or operations in 2-4 weeks",
              "Controlled architecture with data, roles, logs and access control",
              "AI agents help review documents, risks, vendor quotes and statuses instead of acting like generic chatbots",
            ],
            primaryCta: "Get a workflow assessment",
            secondaryCta: "View scenarios",
            sideLabel: "What can be automated first",
            sideItems: [
              {
                title: "Procurement and tenders",
                text: "Opportunity intake, requirement review, RFQ, quote collection, comparison, commercial view and risks.",
              },
              {
                title: "Approvals and statuses",
                text: "Roles, stages, owners, decision log and visibility into stuck steps.",
              },
              {
                title: "Documents and checks",
                text: "Completeness, contract risks, requirements, protocols and version history.",
              },
            ],
          },
          audiences: {
            title: "Who this is for",
            text: "This is especially useful where the workflow already affects revenue, margin, timing or risk but still depends on manual coordination.",
            items: [
              {
                title: "Suppliers taking part in tenders",
                text: "When bid-package assembly, requirement review and decision history still live in scattered documents.",
              },
              {
                title: "Procurement and tender teams",
                text: "When route visibility, vendor quote comparison and timing control matter at every stage.",
              },
              {
                title: "Operations leaders",
                text: "When manual checks and status chasing start slowing down the team.",
              },
              {
                title: "Companies with sensitive documents",
                text: "When a secure contour with roles, logs, access control and limited data exposure is required.",
              },
            ],
          },
          automation: {
            title: "What we automate",
            text: "Not abstract AI for business, but concrete document-heavy routes where timing, statuses, risks and economics already matter.",
            items: [
              "Procurement route",
              "RFQ and vendor quotes",
              "Contract and commercial risks",
              "Execution control",
              "Internal operational workflows",
            ],
          },
          process: {
            title: "How the work starts",
            items: [
              "Workflow diagnostics",
              "Map of roles, data and decisions",
              "MVP on one real scenario",
              "Pilot and metrics",
            ],
          },
          safety: {
            title: "Why this is safer than simply connecting a chatbot",
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
            title:
              "If the workflow already depends on manual document checks and status coordination, we can quickly define the first controlled contour",
            text: "The first step is a short review of the workflow and the most sensible scenario for the MVP.",
            primary: "Get an assessment",
            secondary: "Open solutions",
          },
        },
        solutions: {
          meta: {
            title:
              "Arvectum solutions — procurement, tenders, operations and secure AI contours",
            description:
              "Automation scenarios for procurement workflows, RFQ, vendor quotes, risk control, marketing review and internal AI assistants.",
            ogTitle:
              "Arvectum solutions — procurement, tenders, operations and secure AI contours",
            ogDescription:
              "Procurement and tenders as the primary product focus, with operations and secure AI pilots as extensions.",
          },
          hero: {
            eyebrow: "Solutions",
            title:
              "Automation scenarios for procurement, tenders and operational workflows",
            text: "Arvectum is primarily focused on procurement and tender automation. The other directions extend the same architectural logic: statuses, documents, checks, risks and controlled ownership.",
          },
          quickLinks: [
            { id: "procurement", label: "Procurement and tenders" },
            { id: "operations", label: "Operations" },
            { id: "marketing", label: "Marketing review" },
            { id: "secure", label: "Secure AI pilot" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Primary focus",
              title: "Procurement and tenders",
              audience:
                "For procurement departments, tender teams, category managers, suppliers and operations leaders.",
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
                "For back-office teams, service functions, approval routes and operations teams.",
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
              id: "marketing",
              label: "Additional scenario",
              title: "Marketing review and controlled material approval",
              audience:
                "For teams that need to keep briefs, materials and review comments inside a controlled environment.",
              pain: "Materials, comments and review criteria are spread out, while pushing sensitive content into open tools is undesirable.",
              modules: [
                "Brand-material control",
                "Clarity and risk checks",
                "Version approval and comments",
              ],
              firstResult:
                "A first internal review flow for materials and controlled feedback.",
              timing: "Pilot in 2-5 weeks",
              cta: "Discuss a review scenario",
            },
            {
              id: "secure",
              label: "Architectural entry point",
              title: "Secure AI pilots and local contours",
              audience:
                "For companies where NDA, data exposure control, roles, audit and legal constraints matter.",
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
            title:
              "If procurement or tender automation is the priority, we can treat it as the first product contour",
            text: "The other scenarios then extend the same system instead of becoming a separate abstract AI project.",
            primary: "Get an assessment",
            secondary: "View scenarios",
          },
        },
        cases: {
          meta: {
            title: "Implementation scenarios — Arvectum",
            description:
              "Examples of AI contour rollouts: from manual document-heavy workflows to statuses, decision logs and transparent control.",
            ogTitle: "Implementation scenarios — Arvectum",
            ogDescription:
              "Pilot scenarios, demo routes and what can be shown without invented metrics.",
          },
          hero: {
            eyebrow: "Scenarios",
            title:
              "Implementation scenarios: what we can demo and how the first route looks",
            text: "If there are not many public client cases yet, it is more honest to show pilot scenarios, demo routes and internal prototypes than to create fake certainty.",
          },
          demoBlock: {
            title: "What we can show in a demo",
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
            },
          ],
          cta: {
            title:
              "If you want to see a similar route applied to your workflow, we can build a demo around the exact process",
            text: "No invented numbers: we show what can actually be measured in the pilot and which first scenario makes sense.",
            primary: "Get an assessment",
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
            title: "Diagnostics, MVP and pilot without abstract AI noise",
            text: "The Arvectum approach is built around one real workflow: first the route and constraints, then architecture and MVP, followed by a measurable pilot.",
          },
          quickLinks: [
            { id: "signals", label: "When to start" },
            { id: "deliverables", label: "After stage one" },
            { id: "timeline", label: "Stages" },
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
            text: "The first stage should reduce uncertainty, not increase it. That is why we lock in concrete artifacts and constraints.",
            items: [
              {
                label: "Artifact",
                title: "Workflow map",
                text: "A route of stages, statuses, roles, documents and decision points.",
              },
              {
                label: "Artifact",
                title: "List of automatable steps",
                text: "Which actions can be automated first and which should stay human-led for now.",
              },
              {
                label: "Artifact",
                title: "Data and access requirements",
                text: "Sources, roles and constraints needed for the pilot.",
              },
              {
                label: "Artifact",
                title: "Prototype interface or MVP",
                text: "The first scenario that can be tested against a real route.",
              },
              {
                label: "Artifact",
                title: "Quality criteria",
                text: "How we decide that the pilot is useful and still controlled.",
              },
              {
                label: "Artifact",
                title: "Pilot plan",
                text: "Who participates, which scenarios are tested and what gets measured.",
              },
              {
                label: "Artifact",
                title: "Risks and constraints",
                text: "Where manual review remains necessary and which data cannot be exposed.",
              },
            ],
          },
          timeline: {
            title: "How the work moves",
            text: "The route is designed to validate value quickly on one workflow instead of building a large product too early.",
            items: [
              "Workflow diagnostics and business challenge review",
              "Map of roles, data and decisions",
              "Architecture and AI responsibility boundaries",
              "MVP on one real scenario",
              "Pilot, metrics and the next step",
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
            title:
              "If you want to identify which workflow should come first, we can begin with diagnostics and an automation map",
            text: "After that, it becomes clear whether the next step should be an MVP, a pilot or a secure architecture review.",
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
            title: "Get a workflow assessment and discuss the first pilot",
            text: "Tell us where documents, statuses, timing, vendor quotes, economics or decision history get lost. We will suggest the most sensible first scenario.",
          },
        },
      },
    },
  },
};
