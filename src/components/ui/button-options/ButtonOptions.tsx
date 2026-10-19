import clsx from '@/app/utils/style-utils/clsx';
import buttonOptionsStyle from '@/components/ui/button-options/button-options.module.scss';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { IOption, TOptionId } from '@/components/ui/interfaces';

interface IButtonOptionsProps {
  options: Array<IOption>
  label?: string
  value?: TOptionId
  textSize?: EBUTTON_SIZE
  paddingY?: number
  onChange?: (id: TOptionId) => void
}

const ButtonOptions: React.FC<IButtonOptionsProps> = ({
  options,
  label,
  value,
  textSize = EBUTTON_SIZE.SM,
  paddingY = 10,
  onChange,
}) => {
  return (
    <div className="w-flex w-flex-column w-gap-12">
      {!!label && (
        <span className={clsx('w-text-xs w-fweight-600 w-text-color--muted', buttonOptionsStyle.label)}>
          {label}
        </span>
      )}
      <div className="w-flex w-gap-8">
        {options.map(o => (
          <WButton
            key={o.id}
            fullWidth
            type={EBUTTON_TYPE.OPTION}
            textSize={textSize}
            radius={12}
            paddingY={paddingY}
            selected={o.id === value}
            text={o.text}
            onClick={() => onChange?.(o.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonOptions;
