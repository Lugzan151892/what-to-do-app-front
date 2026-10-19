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
│   │   └── login/page.tsx            # URL "/login" (заглушка)
│   ├── utils/style-utils/clsx.ts     # Утилита склейки классов
│   ├── page.module.css, test.tsx     # Остатки create-next-app (не используются)
├── components/                       # Общие (переиспользуемые) компоненты
│   ├── header/, logo/, rate-stars/   # Составные/брендовые
│   └── ui/                           # Базовый UI-кит: button, switch-button, stepper, ...
├── assets/
│   ├── images/                       # jpg-картинки (импортируются статически)
│   └── static-icons/                 # svg-иконки; activitys/ — иконки активностей
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
- Стейт-менеджера нет; интерактив пока в основном заглушки (`onChange={() => true}`).

## Server / Client компоненты
- `page.tsx` главной и `WButton` помечены `'use client'` → всё дерево главной клиентское, поэтому хуки в дочерних (`ProgressBar`, `MainCardIcon`) работают без директивы.
- Новый компонент с хуками/обработчиками событий, который может использоваться из серверного компонента, — помечать `'use client'`.

## Конфиги
- `next.config.ts` — разрешён remote-хост картинок `api.designfast.io`.
- `tsconfig.json` — алиас `@/*` → `./src/*`, strict.
- `eslint.config.mjs` — next core-web-vitals + typescript + stylistic (см. conventions.md).
