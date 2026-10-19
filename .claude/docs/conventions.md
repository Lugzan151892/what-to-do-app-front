# Правила написания кода

## Нейминг
| Что | Правило | Пример |
|---|---|---|
| Папка компонента | kebab-case | `switch-button/`, `opportunities-section/` |
| Файл компонента | PascalCase | `WSwitchButton.tsx`, `ActivityRow.tsx` |
| CSS-модуль | `*.module.scss` (имя в нижнем регистре, kebab или слитно) | `button-options.module.scss`, `wbutton.module.scss` |
| Базовые UI-контролы | префикс `W` (Weeknd) | `WButton`, `WSwitchButton` |
| Общие app-компоненты | префикс `App` | `AppHeader`, `AppLogo` |
| Интерфейс | `I` + имя | `IWButtonProps`, `IOpportunityActivityItem` |
| Тип | `T` + имя | `TMainCardIcon` |
| Enum | `E` + UPPER_SNAKE, значения строковые | `EBUTTON_TYPE.FILLED = 'FILLED'` |
| Импорт стилей | `<component>Styles` / `styles` | `import progressBarStyles from '...module.scss'` |
| Классы в модуле | camelCase | `.progressWrapper`, `.headLineSecondary` |

Enum'ы и общие интерфейсы компонента выносятся в `interfaces.ts` рядом (`ui/button/interfaces.ts`).

## Импорты
- Пути — **всегда абсолютные** через алиас `@/` (= `src/`), с полным путём до файла.
- Относительные пути (`./`, `../`) не используем, даже для файлов в той же папке.
- Пакеты из `node_modules` (`react`, `next/image`) импортируются как обычно.

```tsx
// ✅
import SettingsSection from '@/app/(views)/(main-page)/components/settings-section/SettingsSection';
import { EBUTTON_TYPE } from '@/components/ui/button/interfaces';

// ❌
import SettingsSection from './components/settings-section/SettingsSection';
import WButton from '../button/WButton';
```

## Шаблон компонента
```tsx
'use client'; // только если нужны хуки/события и компонент может попасть в серверное дерево

import clsx from '@/app/utils/style-utils/clsx';
import exampleStyles from '@/components/ui/example/example.module.scss';

interface IExampleProps {
  title: string
  size?: number
  onClick?: () => void
}

const Example: React.FC<IExampleProps> = ({ title, size = 8, onClick }) => {
  return (
    <div
      className={clsx('w-flex w-align-center w-gap-8', exampleStyles.root)}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Example;
```

## Правила
- Стрелочные функции + `React.FC<IProps>`, деструктуризация пропсов с дефолтами в сигнатуре; `export default` в конце файла.
- Члены интерфейса — без разделителей (`;`/`,`), по одному на строку.
- Импорты через `@/` с полным путём (даже внутри страницы: `@/app/(views)/(main-page)/components/...`).
- Условный рендер: `{!!value && (...)}` — с явным приведением к boolean.
- Списки: `.map()` с `key={item.id}` (у моковых данных всегда есть `id`).
- Маппинг строкового ключа на ассет — объект-словарь `iconMap`/`imagesMap` + `as const`, ключ типизирован union-типом.
- Вычисления в компоненте — через `useMemo` (так сделано в `WButton`, `ProgressBar`, `MainCardIcon`).
- Слоты — пропсами `slotBefore?: React.ReactNode` (по аналогии с Vue-слотами).
- Динамические размеры (radius, padding, size) — через inline `style`, статическая визуалка — в модуле.
- Картинки — только `next/image` (`Image`) со статическим импортом ассета; для svg задавать `width`/`height`.
- Тексты UI — на русском, прямо в JSX. Неразрывные склейки: `{' '}` между элементами.
- `// eslint-disable-next-line` — только точечно и с конкретным правилом.

## Код-стиль (ESLint, обязателен)
- одинарные кавычки, отступ 2 пробела, точка с запятой всегда;
- без лишних/висячих пробелов;
- в JSX: максимум 1 пропс на строку при многострочной записи, первый пропс — с новой строки, `>` выровнен по тегу;
- после изменений — `npm run lint`.

## Git
- Сообщения коммитов: `<область>: <что сделано>` в прошедшем времени, по-английски — `main-page: added button options, fixed switch button`.
