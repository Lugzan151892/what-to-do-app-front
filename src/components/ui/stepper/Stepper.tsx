import WButton from '../button/WButton';

interface IStepperProps {
  value?: number
  prefix?: string
  suffix?: string
  onChange?: (val: number) => void
}

const Stepper: React.FC<IStepperProps> = ({ value = 0, prefix, suffix, onChange }) => {
  const handleChange = (v: number) => {
    if (!onChange) {
      return;
    }

    onChange(v);
  };

  return (
    <div className="w-flex w-flex--space-between w-align-center">
      <WButton
        text="−"
        radius={8}
        paddingX={10}
        paddingY={10}
        onClick={() => { if (value && value >= 0) handleChange(value - 1); }}
      />
      <div className="w-flex w-gap-4 w-align-center">
        {!!prefix && (
          <span className="w-text-sm w-text-color--muted">
            {prefix}
          </span>
        )}
        <span className="w-text-color--cream w-fweight-700 w-text-2xl w-text-fraunces">
          {value}
        </span>
        {!!suffix && (
          <span className="w-text-sm w-text-color--muted">
            {suffix}
          </span>
        )}
      </div>
      <WButton
        text="+"
        radius={8}
        paddingX={10}
        paddingY={10}
        onClick={() => { if (value && value >= 0) handleChange(value + 1); }}
      />
    </div>
  );
};

export default Stepper;
