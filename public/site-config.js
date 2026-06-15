window.SITE_CONFIG = {
  defaultLanguage: "ru",
  routes: {
    home: "index.html",
    solutions: "solutions.html",
    cases: "cases.html",
    approach: "approach.html",
    contact: "contact.html",
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
        headerCta: "Разобрать процесс",
        mobileMenuCta: "Открыть меню",
        pagesLabel: "Разделы",
        nav: [
          { slug: "home", label: "Главная" },
          { slug: "solutions", label: "Решения" },
          { slug: "cases", label: "Кейсы" },
          { slug: "approach", label: "Подход" },
          { slug: "contact", label: "Контакты" },
        ],
        footer: {
          shortText:
            "AI-системы и цифровые контуры для процессов, где важны скорость, контроль и качество результата.",
          linksTitle: "Разделы",
          directTitle: "Связаться напрямую",
          requisitesTitle: "Реквизиты",
          requisites: [
            { label: "Название", value: 'ООО "Арвектум"' },
            { label: "ИНН / КПП", value: "Будут добавлены" },
            { label: "Почта", value: "info@arvectum.com", type: "email" },
            { label: "Телефон", value: "Будет добавлен" },
          ],
        },
        contactBand: {
          title: "Контакты и реквизиты",
          text: "Для первого контакта достаточно кратко описать задачу, желаемый результат и ограничения по данным или доступам.",
          directTitle: "Прямой контакт",
          formatTitle: "Формат работы",
          formatText:
            "Диагностика, MVP, пилоты, закрытые контуры, прикладные AI-системы и продуктовая упаковка под конкретный процесс.",
          requisitesTitle: "Реквизиты",
        },
        form: {
          title: "Обсудить пилот или архитектуру решения",
          intro:
            "Опишите процесс, который хотите перевести в управляемый цифровой контур. Заявка уйдет в Телеграм и на email.",
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
          projectTypeLabel: "Что нужно спроектировать?",
          projectTypePlaceholder: "Выберите ближайший вариант",
          projectTypeOptions: [
            { value: "closed_contour", label: "Закрытый AI-контур" },
            { value: "ai_agent", label: "AI-агент / автоматизация" },
            { value: "ops_cabinet", label: "Операционный кабинет" },
            { value: "procurement", label: "Контур для закупок" },
            { value: "marketing", label: "Контур для маркетинга" },
            { value: "other", label: "Другое" },
          ],
          messageLabel: "Кратко опишите задачу",
          messagePlaceholder:
            "Какой процесс хотите улучшить, какие данные участвуют, нужен ли закрытый контур и какой результат нужен первым",
          deadlineLabel: "Горизонт пилота",
          deadlinePlaceholder: "Например, 2-4 недели",
          budgetLabel: "Бюджетный диапазон",
          budgetPlaceholder: "Например, от 300 000 ₽",
          submitLabel: "Отправить запрос",
          legalNotice:
            "Отправляя заявку, вы соглашаетесь на обработку персональных данных для подготовки ответа и обсуждения пилота.",
          validation: {
            nameRequired: "Пожалуйста, введите ваше имя.",
            contactMethodRequired: "Пожалуйста, выберите способ связи.",
            contactMethodOtherRequired:
              "Пожалуйста, уточните ваш способ связи.",
            contactValueRequired: "Пожалуйста, введите контактные данные.",
            sending: "Отправляем заявку в Телеграм и на email...",
            success:
              "Заявка отправлена. Мы вернемся после первичного разбора процесса.",
            error:
              "Не удалось отправить заявку. Попробуйте еще раз или напишите нам напрямую.",
          },
        },
        cookies: {
          bannerEyebrow: "Cookies и аналитика",
          bannerTitle:
            "Мы используем cookies для работы сайта и аналитики посещений",
          bannerText:
            "Обязательные cookies нужны для базовой работы сайта. При вашем согласии мы также сохраняем first-party cookies с данными визита и источником перехода.",
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
            "Сохраняют first-party идентификатор визита, источник перехода, UTM-параметры, дату первого и последнего визита.",
          analyticsOn: "Включено",
          analyticsOff: "Выключено",
          saveEssential: "Сохранить только обязательные",
          savePrefs: "Сохранить настройки",
          closeLabel: "Закрыть",
        },
      },
      pages: {
        home: {
          meta: {
            title: "Arvectum — AI-системы и цифровые контуры для бизнеса",
            description:
              "Arvectum проектирует AI-системы, закрытые контуры автоматизации и цифровые решения для бизнеса.",
            ogTitle: "Arvectum — AI-системы и цифровые контуры для бизнеса",
            ogDescription:
              "Короткая главная, понятные разделы и отдельные страницы по решениям, кейсам и подходу.",
          },
          hero: {
            eyebrow:
              'ООО "Арвектум" · AI-системы для операционных, закупочных и маркетинговых процессов',
            title:
              "AI-системы для процессов, где уже нельзя терять контекст, сроки и качество",
            text: "Arvectum помогает перевести ручные бизнес-процессы в управляемый цифровой контур: с ролями, критериями качества, журналом действий и понятным результатом первого этапа.",
            bullets: [
              "MVP за 2-4 недели",
              "Локальный, облачный или гибридный контур",
              "Пилот с понятной логикой и границами",
            ],
            primaryCta: "Обсудить задачу",
            secondaryCta: "Смотреть решения",
            sideLabel: "Что получает команда",
            sideItems: [
              {
                title: "Управляемый первый шаг",
                text: "Сначала архитектурный разбор и понятный объем пилота, а не бесконечная платформа.",
              },
              {
                title: "Контроль над данными",
                text: "Подбираем архитектуру под чувствительность процесса и требования к доступам.",
              },
              {
                title: "Практический результат",
                text: "Каждый этап дает артефакты, которыми можно пользоваться и принимать решения.",
              },
            ],
          },
          sectors: {
            title: "Куда идти дальше",
            text: "Как и у крупных ИТ-компаний, главная страница здесь работает как обзор: коротко показывает специализацию, а детали раскрываются на отдельных страницах.",
            cards: [
              {
                label: "Решения",
                title: "Какие контуры и AI-сценарии мы проектируем",
                text: "Закупки, маркетинг, внутренние сервисы и закрытые AI-пилоты с управляемой архитектурой.",
                route: "solutions",
                hash: "#procurement",
                cta: "Открыть решения",
              },
              {
                label: "Кейсы",
                title: "Как выглядит логика «вызов — решение — результат»",
                text: "Показываем не только идею, но и маршрут внедрения, границы пилота и измеримый эффект.",
                route: "cases",
                hash: "#procurement-case",
                cta: "Смотреть кейсы",
              },
              {
                label: "Подход",
                title: "Как устроен первый цикл: диагностика, MVP, пилот",
                text: "Разложили по шагам, что получает клиент до масштабирования и почему это удобно для B2B.",
                route: "approach",
                hash: "#signals",
                cta: "Изучить подход",
              },
            ],
          },
          focus: {
            title: "Где Arvectum особенно полезен",
            text: "Лучше всего наш подход работает там, где процесс уже влияет на выручку, качество или скорость команды, но пока держится на ручной координации.",
            items: [
              "Закупочные команды и контуры согласований",
              "Операционные команды и бэк-офис",
              "Маркетинговые и креативные команды",
              "Владельцы процессов и руководители трансформации",
            ],
          },
          compactCase: {
            title: "Пример маршрута",
            badge: "Закупочный контур",
            text: "Команда работала через документы, чаты и ручные согласования. Мы собрали единый маршрут сделки со статусами, AI-проверкой комплектности и журналом решений.",
            points: [
              "Прозрачный статус по каждой сделке",
              "Понятно, где завис следующий шаг",
              "Руководитель видит картину без ручного пересбора контекста",
            ],
            route: "cases",
            hash: "#procurement-case",
            cta: "Развернуть кейс",
          },
          process: {
            title: "Как обычно начинается работа",
            steps: [
              "Фиксируем бизнес-вызов и ограничения процесса",
              "Проектируем первый контур и критерии качества",
              "Собираем MVP или пилот на реальных кейсах",
            ],
          },
          cta: {
            title:
              "Если нужно быстро понять, с чего начинать, начнем с архитектурного разбора процесса",
            text: "На отдельной странице контактов оставили форму, прямые каналы связи и блок реквизитов. Главную сокращаем до обзора, чтобы она не перегружала мобильный экран.",
            primary: "Перейти к контактам",
            secondary: "Посмотреть подход",
          },
        },
        solutions: {
          meta: {
            title: "Решения — Arvectum",
            description:
              "Сценарии решений Arvectum: закупки, маркетинг, внутренние команды и закрытые AI-пилоты.",
            ogTitle: "Решения — Arvectum",
            ogDescription:
              "Подробные страницы по сценариям решений и форматам внедрения.",
          },
          hero: {
            eyebrow: "Solutions overview",
            title: "Сценарии решений и рабочие контуры",
            text: "На этой странице собраны направления, которые чаще всего становятся первым этапом внедрения: от согласований и закупок до закрытых AI-пилотов.",
          },
          quickLinks: [
            { id: "procurement", label: "Закупки" },
            { id: "marketing", label: "Маркетинг" },
            { id: "operations", label: "Внутренние команды" },
            { id: "secure", label: "Закрытый AI-пилот" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Закупки и согласования",
              title: "Контур для закупок и многоэтапных согласований",
              audience:
                "Для закупочных команд, категорийных менеджеров и операционных руководителей.",
              pain: "Сделки, документы, поставщики и риски живут в разных местах; команда теряет прозрачность статусов и времени на каждом шаге.",
              steps: [
                "Картируем маршрут сделки, роли и контрольные точки.",
                "Собираем интерфейс статусов, журнал решений и логику переходов.",
                "Добавляем AI-проверки комплектности, рисков и качества входных данных.",
              ],
              timing: "MVP 2-4 недели, пилот 4-6 недель",
              result:
                "Команда видит, где находится сделка, что тормозит следующий шаг и какие решения уже приняты.",
            },
            {
              id: "marketing",
              label: "Маркетинг и креатив",
              title:
                "Закрытый контур для оценки креатива и маркетинговых материалов",
              audience:
                "Для агентств и внутренних маркетинговых команд, работающих с чувствительными брифами и бренд-материалами.",
              pain: "Нужно быстро тестировать креативы, контент и сценарии, не вынося материалы в открытые сервисы и не теряя контроль над качеством.",
              steps: [
                "Подключаем брендовые и методологические материалы как управляемый контекст.",
                "Строим сценарии оценки понятности, доверия, бренд-безопасности и силы сообщения.",
                "Готовим локальный или гибридный контур при необходимости.",
              ],
              timing: "Пилотный сценарий 2-5 недель",
              result:
                "Команда получает внутренний фильтр качества и рисков до того, как материал уйдет клиенту или в кампанию.",
            },
            {
              id: "operations",
              label: "Операции и сервисные функции",
              title:
                "Операционный кабинет и AI-ассистенты для внутренних команд",
              audience:
                "Для бэк-офиса, поддержки, пресейл-команд, команд баз знаний и сервисных функций.",
              pain: "Рутина занимает время сильных людей, а процесс остается непрозрачным: много ручных действий, пересылок и повторяющихся проверок.",
              steps: [
                "Разбиваем процесс на роли, этапы, критерии и типовые исключения.",
                "Добавляем ассистентов, панели статусов и историю действий по каждому кейсу.",
                "Настраиваем первый сценарий так, чтобы его можно было измерять и расширять.",
              ],
              timing: "Первый рабочий контур 2-4 недели",
              result:
                "Компания получает инструмент, который снимает часть ручной нагрузки и при этом не ломает управляемость процесса.",
            },
            {
              id: "secure",
              label: "Закрытая архитектура",
              title: "Архитектура закрытого AI-пилота",
              audience:
                "Для компаний, которым важны NDA, чувствительные документы, доступы и контроль за тем, где живут данные.",
              pain: "Бизнес хочет использовать AI, но не готов передавать контекст и внутренние материалы во внешние контуры без управления доступом.",
              steps: [
                "Фиксируем требования к данным, ролям, хранению и границам использования модели.",
                "Подбираем локальный, облачный или гибридный контур под реальный уровень риска.",
                "Проектируем пилот, который можно безопасно показать команде и руководителю.",
              ],
              timing: "Архитектурный разбор 1-2 недели",
              result:
                "Появляется понятный маршрут запуска AI без потери контроля над данными, доступами и юридическими ограничениями.",
            },
          ],
          cta: {
            title: "Нужно выбрать, какое направление брать первым?",
            text: "Обычно стартуем с одного процесса и делаем первый контур так, чтобы его можно было масштабировать дальше.",
            primary: "Оставить заявку",
            secondary: "Посмотреть кейсы",
          },
        },
        cases: {
          meta: {
            title: "Кейсы — Arvectum",
            description: "Кейсы Arvectum в логике вызов — решение — результат.",
            ogTitle: "Кейсы — Arvectum",
            ogDescription:
              "Подробные кейсы по закупкам, маркетингу и внутренним командам.",
          },
          hero: {
            eyebrow: "Case studies",
            title: "Кейсы в логике «бизнес-вызов — решение — результат»",
            text: "Собрали ключевые сценарии так, чтобы можно было и быстро понять ценность, и предметно прочитать, как выглядит внедрение.",
          },
          cases: [
            {
              id: "procurement-case",
              label: "Закупки",
              title: "Единый маршрут сделки и прозрачные статусы",
              challenge:
                "Команда работала через документы, чаты и ручные согласования; чтобы понять статус сделки, приходилось каждый раз заново собирать контекст.",
              solution:
                "Спроектировали цифровой контур с ролями, статусами, контрольными точками, AI-проверкой комплектности и журналом решений по каждой сделке.",
              result:
                "Руководитель получает прозрачную картину по маршруту сделки, а команда — повторяемый процесс без постоянного ручного пересбора статусов.",
              outcomes: [
                "Единая точка входа для документов, статусов и согласований",
                "Понятно, кто отвечает за следующий шаг и где зависла сделка",
                "Появляется история решений и контроль рисков по маршруту",
              ],
            },
            {
              id: "marketing-case",
              label: "Маркетинг",
              title: "Быстрая внутренняя проверка до клиентской презентации",
              challenge:
                "Креативной команде нужен быстрый фильтр качества, но брендовые материалы, брифы и гипотезы нельзя свободно выносить во внешние сервисы.",
              solution:
                "Собрали локальный или гибридный сценарий оценки материалов с критериями понятности, доверия, бренд-безопасности и рекомендациями по доработке.",
              result:
                "Команда может быстрее принимать решения по материалам, снижая риск слабой или небезопасной коммуникации еще до внешнего показа.",
              outcomes: [
                "Можно читать рекомендации и смотреть материалы в одном контуре",
                "Критерии оценки становятся повторяемыми, а не интуитивными",
                "Снижается риск ошибок перед клиентской или публичной коммуникацией",
              ],
            },
            {
              id: "ops-case",
              label: "Операции",
              title: "Меньше ручной рутины и больше прозрачности процесса",
              challenge:
                "Внутренние сервисные функции тратят время на пересбор информации, повторяющиеся проверки и координацию между несколькими участниками.",
              solution:
                "Разбили процесс на роли и этапы, добавили AI-ассистентов, статусы, панели видимости и историю действий по каждому кейсу.",
              result:
                "Компания получает не демо нейросети, а инструмент, который помогает команде быстрее двигать процесс и яснее видеть нагрузку и узкие места.",
              outcomes: [
                "Руководителю видна нагрузка, этапы и точки задержки",
                "Команда меньше тратит времени на однотипные ручные действия",
                "Контур можно расширять на соседние процессы без полной пересборки",
              ],
            },
          ],
          cta: {
            title:
              "Если нужен похожий кейс под ваш процесс, соберем маршрут первого этапа",
            text: "Для B2B-клиента важно не только увидеть результат, но и понять, как пилот будет устроен с точки зрения ролей, данных и критериев качества.",
            primary: "Перейти к контактам",
            secondary: "Открыть решения",
          },
        },
        approach: {
          meta: {
            title: "Подход — Arvectum",
            description:
              "Как Arvectum ведет проект: сигналы, deliverables, этапы пилота и архитектура запуска.",
            ogTitle: "Подход — Arvectum",
            ogDescription:
              "Диагностика, MVP, пилот, доверие к архитектуре и стек запуска.",
          },
          hero: {
            eyebrow: "Delivery approach",
            title: "Как выглядит работа с Arvectum от диагностики до пилота",
            text: "На этой странице собраны сигналы для старта, артефакты первого цикла, дорожная карта пилота и требования к архитектуре под B2B-задачи.",
          },
          quickLinks: [
            { id: "signals", label: "Сигналы" },
            { id: "deliverables", label: "Артефакты" },
            { id: "timeline", label: "Этапы" },
            { id: "trust", label: "Почему это управляемо" },
            { id: "faq", label: "FAQ" },
          ],
          signals: {
            title:
              "Когда процесс уже пора переводить в управляемый цифровой контур",
            text: "Эти признаки обычно показывают, что ручная координация уже тормозит рост и мешает видеть реальную картину процесса.",
            items: [
              {
                value: "01",
                title: "Контекст живет в головах команды",
                text: "Процесс работает, пока конкретные люди помнят статусы, исключения и скрытые правила.",
              },
              {
                value: "02",
                title: "Статусы и ответственность непрозрачны",
                text: "Чтобы понять, где застряла задача, приходится вручную собирать картину из чатов, таблиц и переписок.",
              },
              {
                value: "03",
                title: "Ошибки дорого стоят",
                text: "Чем выше цена решения, тем болезненнее ручные проверки, пропущенные шаги и потерянный контекст.",
              },
              {
                value: "04",
                title: "AI нужен, но без хаоса",
                text: "Бизнес хочет автоматизацию, но не готов к еще одному умному чату без маршрута и критериев качества.",
              },
            ],
          },
          deliverables: {
            title: "Что получает клиент в первом цикле",
            text: "Мы явно показываем артефакты первого этапа, чтобы до глубокой передачи данных было понятно, как устроена работа и что считается полезным результатом.",
            items: [
              {
                label: "1-й этап",
                title: "Карта процесса и архитектурное решение",
                text: "Фиксируем роли, ограничения, входные данные и точки, где AI действительно полезен.",
              },
              {
                label: "MVP",
                title: "Первая рабочая версия",
                text: "Интерфейс, логика этапов, проверки, отчет и история действий в контуре, который можно обсуждать предметно.",
              },
              {
                label: "Пилот",
                title: "Сценарий проверки на реальных кейсах",
                text: "Определяем задачи, участников со стороны клиента и критерии, по которым пилот считается полезным.",
              },
              {
                label: "Масштабирование",
                title: "План развития после пилота",
                text: "Показываем, как наращивать контур на новые роли, память, интеграции и соседние процессы.",
              },
            ],
          },
          timeline: {
            title: "Этапы проекта",
            text: "Двигаемся от диагностики к полезному первому результату без потери контроля над качеством, данными и границами пилота.",
            items: [
              "Диагностика бизнес-вызова",
              "Архитектура и критерии качества",
              "MVP и первый рабочий контур",
              "Пилот и проверка на практике",
              "Расширение и продуктовая упаковка",
            ],
          },
          trust: {
            title: "Почему такой подход удобен для B2B",
            text: "Для серьезных ИТ-задач важны не только идеи, но и способ внедрения: безопасность, управляемость и ясная дорожная карта следующего шага.",
            items: [
              {
                title: "Сначала бизнес-вызов, потом AI",
                text: "Начинаем не с модели, а с маршрута процесса, ролей, рисков и результата, который действительно важен бизнесу.",
              },
              {
                title: "Видимый объем и измеримый первый результат",
                text: "В первом цикле клиент получает не обещание будущей платформы, а конкретный пилот и критерии для следующего решения.",
              },
              {
                title: "Архитектура под чувствительность данных",
                text: "Если в процессе важны NDA, внутренние документы или брендовые материалы, закладываем локальный или гибридный контур.",
              },
            ],
          },
          stack: {
            title: "Стек и среда запуска",
            text: "Подбираем инструменты под задачу: от облачных гипотез до локальных контуров с изоляцией данных.",
            items: [
              "OpenAI",
              "Anthropic",
              "Ollama",
              "LM Studio",
              "vLLM",
              "RAG",
              "Telegram",
              "Bitrix24",
              "amoCRM",
              "PostgreSQL",
              "n8n",
              "Make",
              "Webhooks",
              "Локальные VLM",
              "Изолированные VM",
              "SQLite",
            ],
          },
          faq: {
            title: "Что обычно важно уточнить до старта",
            items: [
              {
                question: "Сколько времени до первого полезного результата?",
                answer:
                  "Обычно первый полезный артефакт появляется уже на этапе диагностики и архитектуры, а первая рабочая версия — в диапазоне 2-4 недель.",
              },
              {
                question:
                  "Можно ли начать без большой платформы и тяжелых интеграций?",
                answer:
                  "Да. Чаще всего так и лучше: сначала собираем управляемый контур вокруг одного процесса, затем подключаем соседние сценарии и более сложную инфраструктуру.",
              },
              {
                question:
                  "Когда нужен закрытый контур, а когда достаточно облака?",
                answer:
                  "Если в процессе участвуют чувствительные документы, NDA, брендовые материалы или внутренние регламенты, лучше закладывать локальный или гибридный контур.",
              },
            ],
          },
          cta: {
            title:
              "Если хотите оценить, подходит ли этот маршрут вашему процессу",
            text: "На контактах оставили форму и прямые каналы связи. Дальше можно быстро перейти к разбору первого сценария.",
            primary: "Перейти к контактам",
            secondary: "Вернуться на главную",
          },
        },
        contact: {
          meta: {
            title: "Контакты — Arvectum",
            description: "Форма заявки, прямые контакты и реквизиты Arvectum.",
            ogTitle: "Контакты — Arvectum",
            ogDescription:
              "Отправка заявки в Телеграм и на email, контакты и реквизиты компании.",
          },
          hero: {
            eyebrow: "Contact",
            title: "Контакты, заявка и следующий шаг",
            text: "Здесь собрали все, что нужно для старта: форму заявки, прямые каналы связи и реквизиты компании.",
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
        headerCta: "Review your process",
        mobileMenuCta: "Open menu",
        pagesLabel: "Pages",
        nav: [
          { slug: "home", label: "Home" },
          { slug: "solutions", label: "Solutions" },
          { slug: "cases", label: "Cases" },
          { slug: "approach", label: "Approach" },
          { slug: "contact", label: "Contact" },
        ],
        footer: {
          shortText:
            "AI systems and digital contours for processes where speed, control and result quality already matter.",
          linksTitle: "Pages",
          directTitle: "Direct contact",
          requisitesTitle: "Company details",
          requisites: [
            { label: "Name", value: "Arvectum LLC" },
            { label: "Tax ID", value: "To be added" },
            { label: "Email", value: "info@arvectum.com", type: "email" },
            { label: "Phone", value: "To be added" },
          ],
        },
        contactBand: {
          title: "Contacts and company details",
          text: "For the first conversation, a short description of the task, desired outcome and data or access constraints is enough.",
          directTitle: "Direct contact",
          formatTitle: "Working format",
          formatText:
            "Diagnostics, MVPs, pilots, internal contours, applied AI systems and product packaging around a concrete business process.",
          requisitesTitle: "Company details",
        },
        form: {
          title: "Discuss a pilot or solution architecture",
          intro:
            "Describe the process you want to move into a controlled digital contour. The request will go to Telegram and email.",
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
          projectTypeLabel: "What should we design?",
          projectTypePlaceholder: "Choose the closest option",
          projectTypeOptions: [
            { value: "closed_contour", label: "Closed AI contour" },
            { value: "ai_agent", label: "AI agent / automation" },
            { value: "ops_cabinet", label: "Operating cockpit" },
            { value: "procurement", label: "Procurement contour" },
            { value: "marketing", label: "Marketing contour" },
            { value: "other", label: "Other" },
          ],
          messageLabel: "Briefly describe the task",
          messagePlaceholder:
            "Which process do you want to improve, what data is involved, do you need a closed contour and what result matters first",
          deadlineLabel: "Pilot timeline",
          deadlinePlaceholder: "For example, 2-4 weeks",
          budgetLabel: "Budget range",
          budgetPlaceholder: "For example, from $5,000",
          submitLabel: "Send request",
          legalNotice:
            "By sending the request, you agree to the processing of personal data for preparing a reply and discussing the pilot.",
          validation: {
            nameRequired: "Please enter your name.",
            contactMethodRequired: "Please choose a contact method.",
            contactMethodOtherRequired: "Please specify your contact method.",
            contactValueRequired: "Please enter your contact details.",
            sending: "Sending your request to Telegram and email...",
            success:
              "Request sent. We will get back to you after the initial process review.",
            error:
              "Could not send the request. Please try again or contact us directly.",
          },
        },
        cookies: {
          bannerEyebrow: "Cookies and analytics",
          bannerTitle: "We use cookies for site operation and visit analytics",
          bannerText:
            "Essential cookies keep the site working. With your consent, we also store first-party cookies with visit and source data.",
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
            "Store a first-party visit identifier, traffic source, UTM parameters and first/last visit timestamps.",
          analyticsOn: "On",
          analyticsOff: "Off",
          saveEssential: "Save essential only",
          savePrefs: "Save settings",
          closeLabel: "Close",
        },
      },
      pages: {
        home: {
          meta: {
            title: "Arvectum — AI systems and digital business contours",
            description:
              "Arvectum designs AI systems, controlled automation contours and digital solutions for business.",
            ogTitle: "Arvectum — AI systems and digital business contours",
            ogDescription:
              "A compact overview page with dedicated pages for solutions, cases and delivery approach.",
          },
          hero: {
            eyebrow:
              "Arvectum LLC · AI systems for operations, procurement and marketing processes",
            title:
              "AI systems for processes where losing context, timing and quality is already expensive",
            text: "Arvectum helps move manual business processes into a controlled digital contour with roles, quality criteria, action logs and a clear first-stage outcome.",
            bullets: [
              "MVP in 2-4 weeks",
              "Local, cloud or hybrid contour",
              "Pilot with clear logic and boundaries",
            ],
            primaryCta: "Discuss your task",
            secondaryCta: "See solutions",
            sideLabel: "What the team gets",
            sideItems: [
              {
                title: "A controlled first step",
                text: "We start with architecture and pilot scope, not with endless platform-building.",
              },
              {
                title: "Control over data",
                text: "The architecture is chosen around process sensitivity and access requirements.",
              },
              {
                title: "Practical outcome",
                text: "Every stage delivers artifacts the team can use for real decisions.",
              },
            ],
          },
          sectors: {
            title: "Where to go next",
            text: "Following large IT-company patterns, the homepage works as an overview. The detailed communication lives on focused pages.",
            cards: [
              {
                label: "Solutions",
                title: "Which contours and AI scenarios we design",
                text: "Procurement, marketing, internal services and secure AI pilots with a controlled architecture.",
                route: "solutions",
                hash: "#procurement",
                cta: "Open solutions",
              },
              {
                label: "Cases",
                title: "How challenge — solution — result looks in practice",
                text: "We show not just the idea, but the rollout path, pilot boundaries and measurable effect.",
                route: "cases",
                hash: "#procurement-case",
                cta: "View cases",
              },
              {
                label: "Approach",
                title: "How the first cycle works: diagnostics, MVP, pilot",
                text: "We break down what the client gets before scaling and why that works well for B2B.",
                route: "approach",
                hash: "#signals",
                cta: "Explore approach",
              },
            ],
          },
          focus: {
            title: "Where Arvectum is especially useful",
            text: "This works best where the process already affects revenue, quality or team speed, but still depends on manual coordination.",
            items: [
              "Procurement teams and approval contours",
              "Operations teams and back-office functions",
              "Marketing and creative teams",
              "Process owners and transformation leaders",
            ],
          },
          compactCase: {
            title: "One route example",
            badge: "Procurement contour",
            text: "The team worked through documents, chats and manual approvals. We built a single route with statuses, AI completeness checks and a decision log.",
            points: [
              "Transparent status for every deal",
              "Clear visibility into what blocks the next step",
              "Leadership sees the picture without manual context reconstruction",
            ],
            route: "cases",
            hash: "#procurement-case",
            cta: "Open case",
          },
          process: {
            title: "How the work usually starts",
            steps: [
              "Define the business challenge and process constraints",
              "Design the first contour and quality criteria",
              "Build an MVP or pilot on real cases",
            ],
          },
          cta: {
            title:
              "If you need a fast decision on where to start, we can begin with an architecture review",
            text: "The contact page keeps the form, direct channels and company details. The homepage stays compact by design.",
            primary: "Go to contact",
            secondary: "View approach",
          },
        },
        solutions: {
          meta: {
            title: "Solutions — Arvectum",
            description:
              "Arvectum solution scenarios: procurement, marketing, internal teams and secure AI pilots.",
            ogTitle: "Solutions — Arvectum",
            ogDescription:
              "Focused solution pages instead of one overloaded landing page.",
          },
          hero: {
            eyebrow: "Solutions overview",
            title: "Solution scenarios and working contours",
            text: "This page brings together the directions that most often become the first stage of rollout: from procurement and approvals to secure AI pilots.",
          },
          quickLinks: [
            { id: "procurement", label: "Procurement" },
            { id: "marketing", label: "Marketing" },
            { id: "operations", label: "Internal teams" },
            { id: "secure", label: "Secure AI pilot" },
          ],
          cards: [
            {
              id: "procurement",
              label: "Procurement and approvals",
              title: "Contour for procurement and multi-step approvals",
              audience:
                "For procurement teams, category managers and operations leaders.",
              pain: "Deals, documents, suppliers and risks live in different places; the team loses visibility into statuses and timing at each step.",
              steps: [
                "Map the deal route, roles and checkpoints.",
                "Build a status interface, decision log and transition logic.",
                "Add AI-based checks for completeness, risks and input quality.",
              ],
              timing: "MVP in 2-4 weeks, pilot in 4-6 weeks",
              result:
                "The team sees where the deal stands, what blocks the next step and which decisions are already made.",
            },
            {
              id: "marketing",
              label: "Marketing and creative",
              title:
                "Closed contour for creative and marketing material review",
              audience:
                "For agencies and in-house marketing teams working with sensitive briefs and brand assets.",
              pain: "You need to test creatives and scenarios quickly without exposing materials to open services or losing quality control.",
              steps: [
                "Connect brand and methodology materials as controlled context.",
                "Build evaluation flows for clarity, trust, brand safety and message strength.",
                "Prepare a local or hybrid contour when required.",
              ],
              timing: "Pilot scenario in 2-5 weeks",
              result:
                "The team gets an internal quality and risk filter before content goes to the client or campaign.",
            },
            {
              id: "operations",
              label: "Operations and service functions",
              title: "Operating cockpit and AI assistants for internal teams",
              audience:
                "For back-office, support, pre-sales, knowledge and service functions.",
              pain: "Routine consumes valuable team time, while the process stays opaque because too many actions and checks are still manual.",
              steps: [
                "Split the process into roles, stages, criteria and typical exceptions.",
                "Add assistants, status panels and an action history for every case.",
                "Set up the first scenario so it can be measured and expanded.",
              ],
              timing: "First working contour in 2-4 weeks",
              result:
                "The company gets a tool that removes part of the manual load without breaking process control.",
            },
            {
              id: "secure",
              label: "Secure architecture",
              title: "Architecture for a secure AI pilot",
              audience:
                "For companies where NDA, sensitive documents, access control and data location matter.",
              pain: "The business wants AI but is not ready to move context and internal materials into external environments without access governance.",
              steps: [
                "Define requirements for data, roles, storage and model usage boundaries.",
                "Choose the local, cloud or hybrid contour according to the actual risk level.",
                "Design a pilot that can be shown safely to both the team and leadership.",
              ],
              timing: "Architecture review in 1-2 weeks",
              result:
                "You get a clear launch path for AI without losing control over data, access and legal constraints.",
            },
          ],
          cta: {
            title: "Need to choose which direction should come first?",
            text: "We usually start with one process and build the first contour so it can scale further.",
            primary: "Send request",
            secondary: "View cases",
          },
        },
        cases: {
          meta: {
            title: "Cases — Arvectum",
            description:
              "Arvectum cases in a challenge — solution — result format.",
            ogTitle: "Cases — Arvectum",
            ogDescription:
              "Detailed cases for procurement, marketing and internal teams.",
          },
          hero: {
            eyebrow: "Case studies",
            title: "Cases in a challenge — solution — result format",
            text: "These examples are written so the reader can both grasp the value quickly and understand how the implementation route works.",
          },
          cases: [
            {
              id: "procurement-case",
              label: "Procurement",
              title: "One deal route with transparent statuses",
              challenge:
                "The team worked through documents, chats and manual approvals; every status check required rebuilding the context from scratch.",
              solution:
                "We designed a digital contour with roles, statuses, checkpoints, AI completeness checks and a decision log for every deal.",
              result:
                "Leadership gets a transparent view of the route, while the team gets a repeatable process instead of constant manual status reconstruction.",
              outcomes: [
                "One entry point for documents, statuses and approvals",
                "Clear ownership of the next step and visibility into where a deal is stuck",
                "Decision history and risk control across the route",
              ],
            },
            {
              id: "marketing-case",
              label: "Marketing",
              title: "Fast internal review before client presentation",
              challenge:
                "The creative team needed a fast quality filter, but brand materials, briefs and hypotheses could not be freely exposed to external services.",
              solution:
                "We assembled a local or hybrid review flow with criteria for clarity, trust, brand safety and improvement recommendations.",
              result:
                "The team can make decisions faster while reducing the risk of weak or unsafe communication before external review.",
              outcomes: [
                "Recommendations and materials stay in one contour",
                "Evaluation criteria become repeatable instead of intuitive",
                "Risk is reduced before public or client-facing communication",
              ],
            },
            {
              id: "ops-case",
              label: "Operations",
              title: "Less manual routine and more process visibility",
              challenge:
                "Internal service functions spent time on context reconstruction, repetitive checks and coordination between multiple participants.",
              solution:
                "We split the process into roles and stages, then added AI assistants, status panels and action history for each case.",
              result:
                "The company gets not an AI demo, but a tool that helps the team move faster and gives leaders a clearer view of load and bottlenecks.",
              outcomes: [
                "Leadership sees load, stages and delay points",
                "The team spends less time on repetitive manual work",
                "The contour can be extended to adjacent processes without being rebuilt from scratch",
              ],
            },
          ],
          cta: {
            title:
              "If you want a similar route for your process, we can outline the first stage together",
            text: "B2B buyers usually need to see not only the result, but also the implementation logic behind the pilot.",
            primary: "Go to contact",
            secondary: "Open solutions",
          },
        },
        approach: {
          meta: {
            title: "Approach — Arvectum",
            description:
              "How Arvectum runs diagnostics, MVP, pilot and architecture planning.",
            ogTitle: "Approach — Arvectum",
            ogDescription:
              "Signals, deliverables, pilot stages and stack selection.",
          },
          hero: {
            eyebrow: "Delivery approach",
            title: "How working with Arvectum looks from diagnostics to pilot",
            text: "This page covers the start signals, first-cycle deliverables, pilot roadmap and architecture decisions behind serious B2B rollout.",
          },
          quickLinks: [
            { id: "signals", label: "Signals" },
            { id: "deliverables", label: "Deliverables" },
            { id: "timeline", label: "Stages" },
            { id: "trust", label: "Why controlled" },
            { id: "faq", label: "FAQ" },
          ],
          signals: {
            title:
              "When the process should move into a controlled digital contour",
            text: "These signs usually show that manual coordination is already slowing growth and reducing visibility.",
            items: [
              {
                value: "01",
                title: "Context lives in people’s heads",
                text: "The process works only while specific people remember statuses, exceptions and hidden rules.",
              },
              {
                value: "02",
                title: "Statuses and ownership are not visible",
                text: "To understand where work is stuck, the team still has to rebuild the picture from chats and spreadsheets.",
              },
              {
                value: "03",
                title: "Errors are expensive",
                text: "The higher the value of a decision, the more painful missed steps and lost context become.",
              },
              {
                value: "04",
                title: "AI is needed, but not chaos",
                text: "The business wants automation but is not ready for another smart chat without route and quality criteria.",
              },
            ],
          },
          deliverables: {
            title: "What the client gets in the first cycle",
            text: "We show the first-stage artifacts explicitly so it is clear how the work is structured before deep data transfer begins.",
            items: [
              {
                label: "Stage 1",
                title: "Process map and architecture decision",
                text: "We define roles, constraints, inputs and the points where AI is truly useful.",
              },
              {
                label: "MVP",
                title: "First working version",
                text: "Interface, stage logic, checks, reporting and action history inside a contour that can be reviewed seriously.",
              },
              {
                label: "Pilot",
                title: "Validation scenario on real cases",
                text: "We define the tasks, client-side participants and criteria that make the pilot useful.",
              },
              {
                label: "Scale",
                title: "Post-pilot development plan",
                text: "We show how to extend the contour with new roles, memory, integrations and adjacent processes.",
              },
            ],
          },
          timeline: {
            title: "Project stages",
            text: "We move from diagnostics to a useful first result without losing control over quality, data or pilot boundaries.",
            items: [
              "Business challenge diagnostics",
              "Architecture and quality criteria",
              "MVP and first working contour",
              "Pilot and live validation",
              "Expansion and productization",
            ],
          },
          trust: {
            title: "Why this works for B2B",
            text: "Serious IT projects need more than ideas. They need security, control and a clear roadmap for the next step.",
            items: [
              {
                title: "Business challenge first, AI second",
                text: "We start from route, roles, risks and outcome, not from the model itself.",
              },
              {
                title: "Visible scope and measurable first result",
                text: "The first cycle gives a concrete pilot and criteria for the next decision, not a future-platform promise.",
              },
              {
                title: "Architecture aligned to data sensitivity",
                text: "If the process involves NDA or internal materials, we design a local or hybrid contour.",
              },
            ],
          },
          stack: {
            title: "Stack and deployment environment",
            text: "We choose tools according to the task: from cloud hypotheses to isolated local contours.",
            items: [
              "OpenAI",
              "Anthropic",
              "Ollama",
              "LM Studio",
              "vLLM",
              "RAG",
              "Telegram",
              "Bitrix24",
              "amoCRM",
              "PostgreSQL",
              "n8n",
              "Make",
              "Webhooks",
              "Local VLMs",
              "Isolated VM",
              "SQLite",
            ],
          },
          faq: {
            title: "What is worth clarifying before kickoff",
            items: [
              {
                question: "How long does the first useful result take?",
                answer:
                  "The first useful artifact usually appears at the diagnostics and architecture stage, while the first working version typically lands within 2-4 weeks.",
              },
              {
                question:
                  "Can we start without a big platform and heavy integrations?",
                answer:
                  "Yes. In most cases that is the better path: first build a controlled contour around one process, then connect adjacent scenarios and heavier infrastructure.",
              },
              {
                question:
                  "When do we need a closed contour and when is cloud enough?",
                answer:
                  "If the process includes sensitive documents, NDA, brand materials or internal regulations, local or hybrid is the better architecture.",
              },
            ],
          },
          cta: {
            title: "If you want to assess whether this route fits your process",
            text: "The contact page keeps the form and direct channels, so the next step is easy to start.",
            primary: "Go to contact",
            secondary: "Back to homepage",
          },
        },
        contact: {
          meta: {
            title: "Contact — Arvectum",
            description:
              "Lead form, direct contacts and company details for Arvectum.",
            ogTitle: "Contact — Arvectum",
            ogDescription:
              "Send the request to Telegram and email, or use direct contact details.",
          },
          hero: {
            eyebrow: "Contact",
            title: "Contact, request form and next step",
            text: "Everything needed to start is here: the request form, direct contact channels and company details.",
          },
        },
      },
    },
  },
};
