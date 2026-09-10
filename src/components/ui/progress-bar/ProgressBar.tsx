import { useEffect, useMemo, useState } from 'react';
import progressBarStyles from '@/components/ui/progress-bar/progress-bar.module.scss';

interface IProgressBarProps {
  filled: number
  total: number
  text?: string
}

const ProgressBar: React.FC<IProgressBarProps> = ({ filled, total, text }) => {
  const progress = useMemo(() => filled / total * 100, [filled, total]);
  const clampedProgress = useMemo(() => Math.min(Math.max(progress, 0), 100), [progress]);

  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimatedWidth(clampedProgress);
    });

    return () => cancelAnimationFrame(frame);
  }, [clampedProgress]);

  return (
    <div className="w-flex w-flex-column">
      {!!text && (
        <div className="w-flex w-flex--space-between w-align-center w-mb-4">
          <div className={progressBarStyles.label}>
            {text}
          </div>
          <div className={progressBarStyles.percent}>
            {`${clampedProgress} %`}
          </div>
        </div>
      )}
      <div className={progressBarStyles.progressWrapper}>
        <div
          className={progressBarStyles.progress}
          style={{
            width: `${animatedWidth}%`,
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
