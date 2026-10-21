'use client';

import clsx from '@/app/utils/style-utils/clsx';
import tabsSwitchStyles from '@/components/ui/tabs-switch/tabs-switch.module.scss';
import { IOption, TOptionId } from '@/components/ui/interfaces';

interface IWTabsSwitchProps {
  options: Array<IOption>
  value?: TOptionId
  onChange?: (id: TOptionId) => void
}

const WTabsSwitch: React.FC<IWTabsSwitchProps> = ({ options, value, onChange }) => {
  return (
    <div className={clsx('w-flex--inline w-align-center w-gap-4 w-p-4', tabsSwitchStyles.switch)}>
      {options.map(o => (
        <button
          key={o.id}
          type="button"
          className={clsx('w-text-xs w-fweight-500 w-px-16 w-py-6', tabsSwitchStyles.tab, o.id === value && tabsSwitchStyles.active)}
          onClick={() => onChange?.(o.id)}
        >
          {o.text}
        </button>
      ))}
    </div>
  );
};

export default WTabsSwitch;
