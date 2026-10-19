'use client';

import { ChangeEvent, useId } from 'react';
import clsx from '@/app/utils/style-utils/clsx';
import checkboxStyles from '@/components/ui/checkbox/checkbox.module.scss';

interface IWCheckboxProps {
  checked?: boolean
  label?: string
  name?: string
  disabled?: boolean
  onChange?: (state: boolean) => void
}

const WCheckbox: React.FC<IWCheckboxProps> = ({
  checked,
  label,
  name,
  disabled = false,
  onChange,
}) => {
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className="w-flex w-align-center w-gap-8">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={checkboxStyles.checkbox}
      />
      {!!label && (
        <label
          htmlFor={id}
          className={clsx('w-text-xs w-text-color--muted', checkboxStyles.label)}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default WCheckbox;
