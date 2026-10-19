import { ChangeEvent } from 'react';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import selectStyles from '@/components/ui/select/select.module.scss';
import { IOption, TOptionId } from '@/components/ui/interfaces';
import chevronDown from '@/assets/static-icons/chevron-down.svg';

interface IWSelectProps {
  options: Array<IOption>
  value?: TOptionId
  label?: string
  name?: string
  disabled?: boolean
  slotBefore?: React.ReactNode
  onChange?: (id: TOptionId) => void
}

const WSelect: React.FC<IWSelectProps> = ({
  options,
  value,
  label,
  name,
  disabled = false,
  slotBefore,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const option = options.find(o => String(o.id) === event.target.value);

    if (option && onChange) {
      onChange(option.id);
    }
  };

  return (
    <label className="w-flex w-flex-column w-gap-12">
      {!!label && (
        <span className={clsx('w-text-xs w-fweight-600 w-text-color--muted', selectStyles.label)}>
          {label}
        </span>
      )}
      <div className={clsx('w-relative w-flex w-align-center', selectStyles.field)}>
        {!!slotBefore && (
          <span className={clsx('w-absolute w-flex', selectStyles.before)}>
            {slotBefore}
          </span>
        )}
        <select
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={clsx('w-text-sm w-fweight-500', selectStyles.select, !!slotBefore && selectStyles.withBefore)}
        >
          {options.map(o => (
            <option
              key={o.id}
              value={o.id}
            >
              {o.text}
            </option>
          ))}
        </select>
        <Image
          className={clsx('w-absolute', selectStyles.chevron)}
          src={chevronDown}
          alt=""
          width={16}
          height={16}
        />
      </div>
    </label>
  );
};

export default WSelect;
