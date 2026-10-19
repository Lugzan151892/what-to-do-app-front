# Известные проблемы и техдолг

Проект в процессе вёрстки. Не исправлять это попутно без запроса пользователя — но учитывать и при случае предлагать.

## Логика
- `Stepper`: условие `value && value >= 0` блокирует обе кнопки при `value = 0` (дефолт) — нельзя увеличить с нуля.
- `ActivityRow`: `alt={getIcon}` — передаётся объект картинки вместо строки; иконки и подписи в моках перепутаны (`movie` ↔ галерея).
- `MainCardIcon`: `alt="clock"` для всех иконок.

## Стили
- `login/page.tsx` использует Tailwind-классы, которых нет в проекте.
- В `OpportunitiesSection` опечатка `w-text-sx`.
- `.w-gradient-text` объявлен дважды в `colors.css`; `w-fweight-*` генерируется в двух местах (`text.scss` и цикл 100…900 по каждому числу в `variables.scss`).
- `floatingcards.module.scss` дублирует цвета SCSS-переменными и свой `.aiBadge` вместо `var(--...)` / `AiBadge`; звёзды там не через `RateStars`.
- Шрифты местами заданы строкой `'Fraunces'` / `'Plus Jakarta Sans'` вместо `var(--font-fraunces)` / `var(--font-jakarta)` — next/font может не подхватить их по имени.
- `colors.css` использует CSS nesting (`&:hover`) в обычном `.css`.
- В `colors.css` блок `prefers-color-scheme: dark` задаёт неиспользуемые `--background/--foreground`.

## Линт
- `npm run lint` падает на старых файлах: `(main-page)/layout.tsx`, `login/page.tsx`, `test.tsx` (кавычки, `;`, отступы) и `clsx.ts` (`any`).

## Мусор / заглушки
- Строки `tut main page layout`, `tut man page` в `layout.tsx`/`page.tsx`.
- `src/app/page.module.css`, `src/app/test.tsx`, svg в `public/` — остатки create-next-app.
- `metadata` в root layout дефолтный («Create Next App»), `lang="en"` при русском контенте.
- Опечатки в именах: `OppurtunitiesSection`, папка `activitys`.
- `README.md` — дефолтный от create-next-app.
