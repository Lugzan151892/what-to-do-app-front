import clsx from '@/app/utils/style-utils/clsx';
import buttonOptionsStyle from '@/components/ui/button-options/button-options.module.scss';
import WButton from '@/components/ui/button/WButton';

interface IButtonOptionsProps {
  options: Array<{ id: string | number, text: string }>
  label?: string
}

const ButtonOptions: React.FC<IButtonOptionsProps> = ({ options, label }) => {
  return (
    <div className="w-flex w-flex-column w-gap-12">
      {!!label && (
        <label className={clsx('w-text-xs w-fweight-600 w-text-color--muted', buttonOptionsStyle.label)}>
          {label}
        </label>
      )}
      <div className="w-flex w-gap-8">
        {options.map(o => (
          <WButton
            fullWidth
            radius={12}
            selected={o.id === 1 || o.id === 3}
            key={o.id}
            text={o.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonOptions;
