import clsx from '@/app/utils/style-utils/clsx';
import glassTagStyles from '@/app/(views)/generation/components/glass-tag/glass-tag.module.scss';

interface IGlassTagProps {
  text: string
  uppercase?: boolean
  rounded?: boolean
  slotBefore?: React.ReactNode
}

const GlassTag: React.FC<IGlassTagProps> = ({
  text,
  uppercase,
  rounded,
  slotBefore,
}) => {
  return (
    <span
      className={clsx(
        'w-flex--inline w-align-center w-gap-6 w-fweight-700',
        glassTagStyles.tag,
        uppercase && glassTagStyles.uppercase,
        rounded && glassTagStyles.rounded,
      )}
    >
      {slotBefore}
      {text}
    </span>
  );
};

export default GlassTag;
