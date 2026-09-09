import switchbuttonStyles from '@/components/ui/switch-button/wswitchbutton.module.scss';
import { ChangeEvent } from 'react';

interface IWSwitchButtonProps {
  checked: boolean
  onChange: (state: boolean) => boolean
  label: string
  disabled: boolean
  name: string
}

const WSwitchButton: React.FC<IWSwitchButtonProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  name,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (onChange && event.target) {
      onChange(event.target.checked);
    }
  };

  return (
    <label className={switchbuttonStyles.wrapper}>
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
      {label && <span className={switchbuttonStyles.label}>{label}</span>}
    </label>
  );
};

export default WSwitchButton;
