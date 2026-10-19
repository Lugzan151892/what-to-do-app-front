# Архитектура и структура

## Дерево `src/`
```
src/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout: шрифты (next/font), globals.css
│   ├── globals.css                   # Импортирует все глобальные стили из src/styles
│   ├── (views)/                      # Route group — все страницы приложения (не влияет на URL)
│   │   ├── (main-page)/              # Route group главной → URL "/"
│   │   │   ├── layout.tsx            # Layout с AppHeader
│   │   │   ├── page.tsx              # Лендинг: hero + секции
│   │   │   ├── styles/               # Стили самой страницы (mainsection.module.scss)
│   │   │   └── components/           # Компоненты, используемые ТОЛЬКО этой страницей
│   │   └── (auth)/                   # Route group авторизации
│   │       ├── layout.tsx            # Фон, AuthHeader, карточка (AuthTabs + форма + SocialAuth), AuthPromo, футер
│   │       ├── login/page.tsx        # URL "/login" — форма входа (только UI)
│   │       ├── registration/page.tsx # URL "/registration" — форма регистрации (только UI)
│   │       ├── styles/auth.module.scss
│   │       └── components/           # auth-header, auth-tabs, social-auth, auth-promo
│   │   └── generation/               # AI-генерация (доступна без авторизации)
│   │       ├── layout.tsx            # Фон, AppHeader variant="app", AppFooter
│   │       ├── page.tsx              # "/generation" — форма генератора + лента идей других пользователей
│   │       ├── result/page.tsx       # "/generation/result?..." — результат: лучшее совпадение + альтернативы
│   │       ├── [id]/page.tsx         # "/generation/<id>" — карточка идеи (404 для неизвестного id)
│   │       ├── styles/               # generation-layout + generation.module.scss (общие стили трёх страниц)
│   │       └── components/           # generator-form, community-feed, idea-card, best-match-card, ...
│   ├── utils/style-utils/clsx.ts     # Утилита склейки классов
│   ├── utils/generation/             # Настройки генерации <-> query-строка, сводка тегов
│   ├── utils/text/plural.ts          # Склонение по числу
│   ├── page.module.css, test.tsx     # Остатки create-next-app (не используются)
├── components/                       # Общие (переиспользуемые) компоненты
│   ├── header/, logo/, rate-stars/   # Составные/брендовые
│   └── ui/                           # Базовый UI-кит: button, switch-button, stepper, ...
├── assets/
│   ├── images/                       # jpg-картинки (импортируются статически)
│   └── static-icons/                 # svg-иконки; activitys/ — иконки активностей
├── constants/                        # Справочники (generation-options: города, состав, бюджет, категории)
├── hooks/                            # Общие React-хуки (useYandexMapsV21 — загрузка Яндекс Карт 2.1)
├── mocks/                            # Мок-данные, общие для нескольких страниц (ideas.ts: идеи, лента, результат)
└── styles/                           # Глобальные стили: цвета, flex, текст, отступы
```

## Принципы размещения
- **Страница** → `src/app/(views)/<page>/page.tsx`. Группы в скобках `( )` — только для организации, в URL не попадают.
- **Компонент нужен одной странице** → `src/app/(views)/<page>/components/<kebab-name>/`.
- **Компонент переиспользуемый** → `src/components/<name>/`; базовый «кирпич» UI → `src/components/ui/<name>/`.
- **Стили страницы целиком** → `<page>/styles/*.module.scss`.
- **Иконки/картинки** → `src/assets/...`, импортируются как модули и передаются в `next/image`.
- **Утилиты** → `src/app/utils/<group>/`.

## Главная страница (композиция)
`page.tsx` ('use client') = hero-секция (inline в page) → `FloatingCards` → `TickerText` → `WorkDescription` → `OppurtunitiesSection` → `SettingsSection`.
Каждая секция — `<section>` со своим CSS-модулем; внутри `.section` (padding `80px 48px 40px`) и `.content` (`max-width: 1152px`).

## Данные
- Бэкенда/fetch пока нет. Данные для вёрстки — константы-массивы в файле компонента над ним (`const activities: Array<I...> = [...]`, `cardsData`, `baseItems`).
- Данные, нужные нескольким страницам, — в `src/mocks/` (идеи генерации), справочники опций — в `src/constants/`.

## Флоу генерации (на моках)
- Точки входа: «Начать бесплатно» (hero, шапка, CTA) → `/generation`; «Смотреть демо» → `/generation/result`; «Сгенерировать идеи» в `SettingsSection` → сразу `/generation/result?<настройки>`.
- Настройки передаются query-строкой (`buildGenerationQuery` / `parseGenerationSettings` в `utils/generation`): `city`, `people`, `budget`, `onlyNew=0|1`, `categories=a,b`. Невалидные значения → дефолты.
- `GeneratorForm` имитирует запрос (спиннер 1.5 c) и делает `router.push` на результат. Результат всегда один и тот же (`generationResult` в моках), меняются только теги настроек.
- «Изменить настройки» → `/generation?<те же настройки>`, форма предзаполняется. Карточки ведут на `/generation/<id>`, «Назад к идеям» — `router.back()` с fallback на `/generation`.
- Стейт-менеджера нет; интерактив пока в основном заглушки (`onChange={() => true}`).

## Server / Client компоненты
- `page.tsx` главной и `WButton` помечены `'use client'` → всё дерево главной клиентское, поэтому хуки в дочерних (`ProgressBar`, `MainCardIcon`) работают без директивы.
- Новый компонент с хуками/обработчиками событий, который может использоваться из серверного компонента, — помечать `'use client'`.

## Переменные окружения
- `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` — необязательный ключ Яндекс Карт; без него карта 2.1 тоже работает (для продакшена ключ рекомендуется).

## Конфиги
- `next.config.ts` — разрешён remote-хост картинок `api.designfast.io`.
- `tsconfig.json` — алиас `@/*` → `./src/*`, strict.
- `eslint.config.mjs` — next core-web-vitals + typescript + stylistic (см. conventions.md).
