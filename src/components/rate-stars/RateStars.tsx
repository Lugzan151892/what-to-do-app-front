import clsx from '@/app/utils/style-utils/clsx';
import ratestarsStyles from '@/components/rate-stars/ratestars.module.scss';

interface RateStarsProps {
  total?: number
  filled: number
}

const RateStars: React.FC<RateStarsProps> = ({ total, filled }) => {
  return (
    <div className="w-flex w-gap-2">
      {Array(total).fill('*').map((_, i) => (
        <span
          key={i}
          className={clsx(ratestarsStyles.star, filled >= i + 1 && ratestarsStyles.filled)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RateStars;
