import pulsedDotStyles from '@/components/ui/pulsed-dot/pulsed-dot.module.scss';

interface IPulsedDotProps {
  size?: number
}

const PulsedDot: React.FC<IPulsedDotProps> = ({ size = 8 }) => {
  return (
    <span
      className={pulsedDotStyles.wrapper}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span className={pulsedDotStyles.slow} />
      <span
        className={pulsedDotStyles.dot}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </span>
  );
};

export default PulsedDot;
