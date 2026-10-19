import clsx from '@/app/utils/style-utils/clsx';
import ratestarsStyles from '@/components/rate-stars/ratestars.module.scss';

interface RateStarsProps {
  total?: number
  filled: number
  size?: number
}

const RateStars: React.FC<RateStarsProps> = ({ total, filled, size }) => {
  return (
    <div className="w-flex w-gap-2">
      {Array(total).fill('*').map((_, i) => (
        <span
          key={i}
          className={clsx(ratestarsStyles.star, filled >= i + 1 && ratestarsStyles.filled)}
          style={size ? { fontSize: size, lineHeight: `${size + 4}px` } : undefined}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RateStars;
