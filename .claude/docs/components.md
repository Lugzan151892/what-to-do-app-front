# Каталог компонентов

Перед созданием нового — проверить, нет ли подходящего здесь.

## UI-кит — `src/components/ui/`
| Компонент | Пропсы | Заметки |
|---|---|---|
| `WButton` (`ui/button/WButton.tsx`) | `text`, `type?: EBUTTON_TYPE` (`BORDERED` по умолч. / `FILLED` / `OPTION` / `GRADIENT`), `textSize?: EBUTTON_SIZE` (`XS`/`SM`/`LG`), `selected?`, `fullWidth?`, `disabled?`, `href?`, `radius?=999`, `paddingX?=20`, `paddingY?=10`, `slotBefore?: ReactNode`, `onClick?` | `'use client'`. Enum'ы — `ui/button/interfaces.ts`. Скругление/паддинги — inline style. `OPTION` — кнопка-вариант выбора (серая, а при `selected` — акцентная). `GRADIENT` — анимированный градиент accent→accent-secondary. С `href` рендерится как `next/link` |
| `WSwitchButton` (`ui/switch-button/`) | `checked?`, `onChange?(state)`, `label?`, `labelPosition?: 'before'\|'after'`, `hint?`, `bordered?`, `disabled?`, `name?`, `className?` | Нативный скрытый checkbox + стилизованный `<span>` |
| `ButtonOptions` (`ui/button-options/`) | `options: IOption[]`, `label?`, `value?: TOptionId`, `onChange?(id)`, `textSize?=SM`, `paddingY?=10` | Управляемый одиночный выбор: ряд `WButton type=OPTION` во всю ширину |
| `WSelect` (`ui/select/`) | `options: IOption[]`, `value?`, `onChange?(id)`, `label?`, `name?`, `disabled?`, `slotBefore?: ReactNode` | Нативный `<select>` со своим оформлением: иконка слева (`slotBefore`), шеврон справа |
| `Stepper` (`ui/stepper/`) | `value?=0`, `prefix?`, `suffix?`, `onChange?(v)` | Кнопки −/+ на `WButton`, значение шрифтом Fraunces |
| `ProgressBar` (`ui/progress-bar/`) | `filled`, `total`, `text?` | Анимирует ширину через rAF; показывает `%` если есть `text` |
| `PulsedDot` (`ui/pulsed-dot/`) | `size?=8` | Пульсирующая точка цвета accent |
| `AiBadge` (`ui/ai-badge/`) | `text?='AI'` | Плашка с анимированным градиентом |
| `WInput` (`ui/input/`) | `type?: TInputType` (`text`/`email`/`password`), `value?`, `label?`, `placeholder?`, `name?`, `autoComplete?`, `required?`, `minLength?`, `disabled?`, `slotLabelAfter?: ReactNode`, `onChange?(value)` | `'use client'`. Для `password` — встроенная кнопка показать/скрыть. `slotLabelAfter` — справа от лейбла (ссылка «Забыли пароль?») |
| `WChips` (`ui/chips/`) | `options: IOption[]`, `label?`, `value?: TOptionId[]`, `onChange?(ids)` | `'use client'`. Множественный выбор: чипсы на `WButton type=OPTION` с переносом |
| `WTabsSwitch` (`ui/tabs-switch/`) | `options: IOption[]`, `value?`, `onChange?(id)` | `'use client'`. Сегментный переключатель-«пилюля» (Все / Популярное) |
| `RateInput` (`ui/rate-input/`) | `value?=0`, `total?=5`, `size?=24`, `onChange?(value)` | `'use client'`. Интерактивные звёзды с подсветкой при наведении (для статичных — `RateStars`) |
| `Spinner` (`ui/spinner/`) | `size?=20` | Белый круговой спиннер для кнопок |
| `WCheckbox` (`ui/checkbox/`) | `checked?`, `label?`, `name?`, `disabled?`, `onChange?(state)` | `'use client'`. Нативный checkbox с кастомным оформлением |

Общие типы опций — `src/components/ui/interfaces.ts`: `TOptionId = string | number`, `IOption { id, text }`. Используются во всех компонентах выбора.

## Общие — `src/components/`
| Компонент | Назначение |
|---|---|
| `AppHeader` (`header/`) | `variant?: 'landing' \| 'app'`. Sticky-шапка: лого (ссылка на `/`), «Войти» → `/login`. `landing` — навигация + «Начать бесплатно» → `/generation`; `app` — без навигации, «Регистрация» → `/registration` |
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

## Компоненты генерации — `src/app/(views)/generation/components/`
| Компонент | Назначение |
|---|---|
| `GeneratorForm` | `initialSettings`. `'use client'`. Форма «Создать план»: город, состав, категории (`WChips`), бюджет, «Исключить пройденное»; кнопка с имитацией загрузки → результат |
| `CommunityFeed` | `'use client'`. «Прямо сейчас в Москве»: фильтр Все/Популярное, сетка `IdeaCard` с подписью «Для кого, когда» |
| `IdeaCard` | `idea`, `tagText?`, `slotFooter?`, `className?`, `style?` — карточка-ссылка на `/generation/<id>`: картинка, тег, закладка, заголовок, описание; низ — через слот |
| `BestMatchCard` | `idea` — крупная карточка «Выбор нейросети» с градиентной рамкой, блоком «Почему вам это понравится», статами и кнопками |
| `GlassTag` | `text`, `uppercase?`, `rounded?`, `slotBefore?` — полупрозрачная плашка поверх картинки (категория, % совпадения) |
| `StatBadge` | `variant?: 'default' \| 'rating' \| 'accent'`, `slotBefore?`, `children` — плашка статистики в hero идеи |
| `IdeaActionPanel` | `idea` — sticky-панель идеи: AI-совпадение, цена, дата, места, кнопки |
| `IdeaRate` | `'use client'`. «Уже пробовали это?» с `RateInput` |
| `BackLink` | `text`, `fallbackHref` — `'use client'`, «← назад» через `router.back()` |
| `FakeMap` | Заглушка карты |

## Иконки
`src/assets/static-icons/*.svg` (+ `activitys/` для активностей). Использование:
```tsx
import clock from '@/assets/static-icons/clock.svg';
<Image src={clock} alt="..." width={24} height={24} />
```
