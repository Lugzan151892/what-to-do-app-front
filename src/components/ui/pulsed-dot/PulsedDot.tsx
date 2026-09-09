import pulsedDotStyles from '@/components/ui/pulsed-dot/pulsed-dot.module.scss';

const PulsedDot = () => {
  return (
    <span className={pulsedDotStyles.wrapper}>
      <span className={pulsedDotStyles.slow} />
      <span className={pulsedDotStyles.dot} />
    </span>
  );
};

export default PulsedDot;
