'use client';

import clsx from '@/app/utils/style-utils/clsx';
import chipsStyles from '@/components/ui/chips/chips.module.scss';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { IOption, TOptionId } from '@/components/ui/interfaces';

interface IWChipsProps {
  options: Array<IOption>
  label?: string
  value?: Array<TOptionId>
  onChange?: (ids: Array<TOptionId>) => void
}

const WChips: React.FC<IWChipsProps> = ({
  options,
  label,
  value = [],
  onChange,
}) => {
  const handleToggle = (id: TOptionId) => {
    if (!onChange) {
      return;
    }

    onChange(value.includes(id) ? value.filter(v => v !== id) : [...value, id]);
  };

  return (
    <div className="w-flex w-flex-column w-gap-12">
      {!!label && (
        <span className={clsx('w-text-xs w-fweight-600 w-text-color--muted', chipsStyles.label)}>
          {label}
        </span>
      )}
      <div className="w-flex w-flex-wrap w-gap-8">
        {options.map(o => (
          <WButton
            key={o.id}
            type={EBUTTON_TYPE.OPTION}
            textSize={EBUTTON_SIZE.XS}
            paddingX={16}
            paddingY={8}
            selected={value.includes(o.id)}
            text={o.text}
            onClick={() => handleToggle(o.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default WChips;
