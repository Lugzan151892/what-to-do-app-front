# Каталог компонентов

Перед созданием нового — проверить, нет ли подходящего здесь.

## UI-кит — `src/components/ui/`
| Компонент | Пропсы | Заметки |
|---|---|---|
| `WButton` (`ui/button/WButton.tsx`) | `text`, `type?: EBUTTON_TYPE` (`BORDERED` по умолч. / `FILLED` / `OPTION`), `textSize?: EBUTTON_SIZE` (`XS`/`SM`/`LG`), `selected?`, `fullWidth?`, `radius?=999`, `paddingX?=20`, `paddingY?=10`, `slotBefore?: ReactNode`, `onClick?` | `'use client'`. Enum'ы — `ui/button/interfaces.ts`. Скругление/паддинги — inline style. `OPTION` — кнопка-вариант выбора (серая, а при `selected` — акцентная) |
| `WSwitchButton` (`ui/switch-button/`) | `checked?`, `onChange?(state)`, `label?`, `labelPosition?: 'before'\|'after'`, `hint?`, `bordered?`, `disabled?`, `name?`, `className?` | Нативный скрытый checkbox + стилизованный `<span>` |
| `ButtonOptions` (`ui/button-options/`) | `options: IOption[]`, `label?`, `value?: TOptionId`, `onChange?(id)`, `textSize?=SM`, `paddingY?=10` | Управляемый одиночный выбор: ряд `WButton type=OPTION` во всю ширину |
| `WSelect` (`ui/select/`) | `options: IOption[]`, `value?`, `onChange?(id)`, `label?`, `name?`, `disabled?`, `slotBefore?: ReactNode` | Нативный `<select>` со своим оформлением: иконка слева (`slotBefore`), шеврон справа |
| `Stepper` (`ui/stepper/`) | `value?=0`, `prefix?`, `suffix?`, `onChange?(v)` | Кнопки −/+ на `WButton`, значение шрифтом Fraunces |
| `ProgressBar` (`ui/progress-bar/`) | `filled`, `total`, `text?` | Анимирует ширину через rAF; показывает `%` если есть `text` |
| `PulsedDot` (`ui/pulsed-dot/`) | `size?=8` | Пульсирующая точка цвета accent |
| `AiBadge` (`ui/ai-badge/`) | `text?='AI'` | Плашка с анимированным градиентом |
| `WInput` (`ui/input/`) | `type?: TInputType` (`text`/`email`/`password`), `value?`, `label?`, `placeholder?`, `name?`, `autoComplete?`, `required?`, `minLength?`, `disabled?`, `slotLabelAfter?: ReactNode`, `onChange?(value)` | `'use client'`. Для `password` — встроенная кнопка показать/скрыть. `slotLabelAfter` — справа от лейбла (ссылка «Забыли пароль?») |
| `WCheckbox` (`ui/checkbox/`) | `checked?`, `label?`, `name?`, `disabled?`, `onChange?(state)` | `'use client'`. Нативный checkbox с кастомным оформлением |

Общие типы опций — `src/components/ui/interfaces.ts`: `TOptionId = string | number`, `IOption { id, text }`. Используются во всех компонентах выбора.

## Общие — `src/components/`
| Компонент | Назначение |
|---|---|
| `AppHeader` (`header/`) | Sticky-шапка: лого, навигация (`w-link`), кнопки «Войти»/«Начать бесплатно» |
| `AppLogo` (`logo/`) | Квадрат «W» + надпись «Weeknd» (Fraunces); `small?` — уменьшенный вариант (футер) |
| `AppFooter` (`footer/`) | Футер: лого, ссылки (`w-link`), копирайт. Подключён в `(main-page)/layout.tsx` |
| `RateStars` (`rate-stars/`) | `total?`, `filled`, `size?` (px, по умолч. 12) — звёзды ★, заполненные цветом accent-secondary |

## Компоненты главной — `src/app/(views)/(main-page)/components/`
| Компонент | Назначение |
|---|---|
| `MainCardIcon` | `icon: TMainCardIcon` — иконка 28px в рамке; список иконок в `iconMap` (добавлять новую туда + в union-тип) |
| `FloatingCards` | Парящие превью-карточки под hero (скрыты < 768px) |
| `TickerText` | Бегущая строка категорий |
| `WorkDescription` + `WorkDescriptionCard` | «Как это работает» — 3 шага |
| `OppurtunitiesSection` + `ActivityRow` | «Возможности» — грид карточек (3 колонки, первая на 2) |
| `SettingsSection` | «AI-генератор»: форма настроек (город, количество человек, только новое, бюджет) на `useState` и превью результата. Готова по дизайну; кнопка генерации пока без обработчика |
| `GeneratedCard` | `background?`, `title`, `description`, `tags?`, `isNew?`, `highlighted?`, `imageHeight?=144`, `onDetailsClick?` — карточка результата: картинка с градиентом, бейдж «Новинка», теги, «Детали →» |
| `NumbersSection` | Полоса с цифрами: пользователи, «нашли новое», города, средняя оценка (2 колонки на мобильных → 4) |
| `TestimonialsSection` | «Отзывы» — 3 карточки `w-card`: звёзды `RateStars`, текст, аватар-инициал с градиентом |
| `CtaSection` | «Начните прямо сегодня» — финальный призыв: лого, заголовок, кнопка, свечение фоном |

## Компоненты авторизации — `src/app/(views)/(auth)/components/`
| Компонент | Назначение |
|---|---|
| `AuthHeader` | Шапка страниц авторизации: лого (ссылка на `/`) и «← На главную» |
| `AuthTabs` | `'use client'`. Табы «Вход в аккаунт» / «Регистрация» — ссылки на `/login` и `/registration`, активный по `usePathname` |
| `SocialAuth` | Разделитель «или войти через», кнопки VK / Яндекс / Telegram (без обработчиков), ссылка на политику |
| `AuthPromo` | Правая колонка (≥ 1024px): заголовок, парящая карточка-пример, аватары |

## Иконки
`src/assets/static-icons/*.svg` (+ `activitys/` для активностей). Использование:
```tsx
import clock from '@/assets/static-icons/clock.svg';
<Image src={clock} alt="..." width={24} height={24} />
```
