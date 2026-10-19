'use client';

import { ChangeEvent, useId, useMemo, useState } from 'react';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import inputStyles from '@/components/ui/input/input.module.scss';
import eye from '@/assets/static-icons/eye.svg';
import eyeOff from '@/assets/static-icons/eye-off.svg';

export type TInputType = 'text' | 'email' | 'password';

interface IWInputProps {
  type?: TInputType
  value?: string
  label?: string
  placeholder?: string
  name?: string
  autoComplete?: string
  required?: boolean
  minLength?: number
  disabled?: boolean
  slotLabelAfter?: React.ReactNode
  onChange?: (value: string) => void
}

const WInput: React.FC<IWInputProps> = ({
  type = 'text',
  value,
  label,
  placeholder,
  name,
  autoComplete,
  required,
  minLength,
  disabled = false,
  slotLabelAfter,
  onChange,
}) => {
  const id = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === 'password';

  const inputType = useMemo(() => {
    if (isPassword && isPasswordVisible) {
      return 'text';
    }

    return type;
  }, [type, isPassword, isPasswordVisible]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="w-flex w-flex-column w-gap-8">
      {(!!label || !!slotLabelAfter) && (
        <div className="w-flex w-align-center w-justify-space-between w-gap-12">
          {!!label && (
            <label
              htmlFor={id}
              className={clsx('w-text-xs w-fweight-600 w-text-color--muted', inputStyles.label)}
            >
              {label}
            </label>
          )}
          {slotLabelAfter}
        </div>
      )}
      <div className="w-relative w-flex w-align-center">
        <input
          id={id}
          type={inputType}
          value={value}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
          disabled={disabled}
          onChange={handleChange}
          className={clsx('w-text-sm', inputStyles.input, isPassword && inputStyles.withToggle)}
        />
        {isPassword && (
          <button
            type="button"
            aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
            className={clsx('w-absolute w-flex w-flex-center', inputStyles.toggle, isPasswordVisible && inputStyles.toggleActive)}
            onClick={() => setIsPasswordVisible(prev => !prev)}
          >
            <Image
              src={isPasswordVisible ? eyeOff : eye}
              alt=""
              width={16}
              height={16}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default WInput;
