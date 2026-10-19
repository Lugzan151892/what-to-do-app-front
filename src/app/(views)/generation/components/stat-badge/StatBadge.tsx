import clsx from '@/app/utils/style-utils/clsx';
import statBadgeStyles from '@/app/(views)/generation/components/stat-badge/stat-badge.module.scss';

export type TStatBadgeVariant = 'default' | 'rating' | 'accent';

interface IStatBadgeProps {
  variant?: TStatBadgeVariant
  slotBefore?: React.ReactNode
  children: React.ReactNode
}

const StatBadge: React.FC<IStatBadgeProps> = ({
  variant = 'default',
  slotBefore,
  children,
}) => {
  return (
    <div
      className={clsx(
        'w-flex--inline w-align-center w-gap-6 w-px-12 w-py-6 w-text-xs w-fweight-500',
        statBadgeStyles.badge,
        variant === 'rating' && statBadgeStyles.rating,
        variant === 'accent' && statBadgeStyles.accent,
      )}
    >
      {slotBefore}
      {children}
    </div>
  );
};

export default StatBadge;
