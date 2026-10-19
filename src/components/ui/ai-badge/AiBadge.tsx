import aiBadgeStyles from '@/components/ui/ai-badge/ai-badge.module.scss';

interface IAiBadgeProps {
  text?: string
}

const AiBadge: React.FC<IAiBadgeProps> = ({ text = 'AI' }) => {
  return (
    <div className={aiBadgeStyles.badge}>
      {text}
    </div>
  );
};

export default AiBadge;
