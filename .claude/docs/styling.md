# Стили

## Подход
- Глобальные утилитарные классы с префиксом **`w-`** (аналог Tailwind, самописный) — для раскладки, отступов, текста.
- **CSS Modules (`*.module.scss`)** — для уникальной визуалки компонента (градиенты, анимации, сетки, размеры).
- Совмещаем через `clsx('w-flex w-gap-12', styles.root, cond && styles.active)`.
- Tailwind-классы (`flex`, `bg-gray-100`, `gap-2` без `w-`) **не работают** — Tailwind не подключён.
- Тема одна — тёмная. Брейкпоинты задаются mobile-first `@media (min-width: 640px | 768px)` внутри модулей.

Все глобальные стили подключаются в `src/app/globals.css`. Новый глобальный файл — добавить туда `@import`.

## Цвета — `src/styles/colors.css`
| Переменная | Значение | Назначение |
|---|---|---|
| `--main-background` | `#08080E` | фон страницы |
| `--card` | `#141420` | фон карточек |
| `--accent` | `#ff5533` | основной акцент (оранжево-красный) |
| `--accent-secondary` | `#FFB84D` | второй акцент (жёлтый), градиенты |
| `--cream` | `#F5F0E8` | основной текст |
| `--muted` | `#f5f0e873` | второстепенный текст |
| `--white` | `#fff` | |
| `--button-border` | `#ffffff12` | тонкие бордеры |

Акцент с прозрачностью часто пишется прямо: `rgba(255, 85, 51, 0.08..0.35)` / `#ff553366`. Новые повторяющиеся цвета — выносить в переменные.

## Шрифты (`src/app/layout.tsx`, next/font)
- `--font-jakarta` — Plus Jakarta Sans, основной (body, 14px/20px).
- `--font-fraunces` — Fraunces, заголовки/логотип/крупные цифры (`w-text-fraunces` или `font-family: var(--font-fraunces), serif`).

## Утилитарные классы
**Flex** (`flexes.scss`): `w-flex`, `w-flex-center` (центр по обеим осям), `w-flex-column`, `w-flex--inline`, `w-flex--space-between`, `w-flex-wrap`, `w-flex-grow-0|1`, `w-flex-shrink-0|1`;
`w-justify-start|end|center|space-between`; `w-align-start|end|center|baseline`, `w-align-self-*`.
**Gap**: `w-gap-{N}` — N чётное, 0…200 (px).

**Отступы** (`variables.scss`): `w-{m|p}{,x,y,t,b,l,r}-{N}` — N чётное 0…200 (px): `w-mt-16`, `w-px-24`, `w-p-12`. Плюс `w-m-auto`, `w-ml-auto`, `w-mr-auto`, `w-mt-auto`, `w-mb-auto`.
⚠️ Нечётные значения (`w-p-5`) не существуют.

**Текст** (`text.scss`): размеры `w-text-xs` (12/16), `w-text-sm` (14/20), `w-text-base` (16/24), `w-text-lg` (18/28), `w-text-2xl` (24/32);
цвета `w-text-color--cream|muted|accent`; `w-fweight-{100..900}`; `w-text-fraunces`; `w-text-center`.

**Прочее** (`colors.css`): `w-card` (карточка: фон, бордер, blur, radius 16, hover-свечение), `w-gradient-text` (градиент accent→accent-secondary на тексте), `w-link`, `w-border--full`, `w-w-full`, `w-absolute`, `w-relative`.

## Типовые паттерны секции лендинга
```scss
.section { padding: 80px 48px 40px; }
.content { width: 100%; max-width: 1152px; }
.preHeadLine { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; } // + w-text-color--accent w-fweight-600
.headLine { font-family: 'Fraunces', serif; font-size: 70px; line-height: 1; letter-spacing: -0.025em; } // + w-fweight-900
```
Акцентное слово заголовка оборачивается в `<span className="w-gradient-text">`.

## Анимации
`@keyframes` объявляются внутри модуля компонента (`float`, `fadeIn`, `gradient-shift`, `pingSlow`). Переходы — `transition: ... 0.2s–0.3s ease`.
