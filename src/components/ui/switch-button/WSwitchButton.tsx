import clsx from '@/app/utils/style-utils/clsx';
import switchbuttonStyles from '@/components/ui/switch-button/wswitchbutton.module.scss';
import { ChangeEvent } from 'react';

interface IWSwitchButtonProps {
  className?: string
  checked?: boolean
  onChange: (state: boolean) => boolean
  label?: string
  labelPosition?: 'before' | 'after'
  hint?: string
  bordered?: boolean
  disabled?: boolean
  name?: string
}

const WSwitchButton: React.FC<IWSwitchButtonProps> = ({
  className,
  checked,
  onChange,
  label,
  labelPosition = 'after',
  hint,
  bordered,
  disabled = false,
  name,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (onChange && event.target) {
      onChange(event.target.checked);
    }
  };

  const renderLabel = () => {
    return (
      <div className="w-flex w-flex-column w-flex-start gap-2">
        <span className="w-text-sm w-text-color--cream">{label}</span>
        {!!hint && <span className="w-text-xs w-text-color--muted">{hint}</span>}
      </div>
    );
  };

  return (
    <label className={clsx(className, 'w-flex w-align-center w-flex--space-between w-gap-16', bordered && 'w-py-12 w-px-16', bordered && switchbuttonStyles.bordered)}>
      {label && labelPosition === 'before' && renderLabel()}
      <input
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        type="checkbox"
        className={switchbuttonStyles.checkbox}
      >
      </input>
      <span className={switchbuttonStyles.switch}></span>
      {label && labelPosition === 'after' && renderLabel()}
    </label>
  );
};

export default WSwitchButton;
