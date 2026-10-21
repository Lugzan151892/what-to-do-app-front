import spinnerStyles from '@/components/ui/spinner/spinner.module.scss';

interface ISpinnerProps {
  size?: number
}

const Spinner: React.FC<ISpinnerProps> = ({ size = 20 }) => {
  return (
    <span
      className={spinnerStyles.spinner}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export default Spinner;
