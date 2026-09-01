import styles from '@/components/ui/button/wbutton.module.scss';
import { EBUTTON_TYPE } from './interfaces';
import { useMemo } from 'react';
import clsx from '@/app/utils/style-utils/clsx';

interface IWButtonProps {
  text: string
  type?: EBUTTON_TYPE
  onClick: () => void
}

const WButton: React.FC<IWButtonProps> = ({ text, type = EBUTTON_TYPE.BORDERED, onClick }) => {
  const className = useMemo(() => {
    if (type === EBUTTON_TYPE.BORDERED) {
      return styles.wButtonBordered;
    }

    return styles.wButtonFilled;
  }, [type]);
  return (
    <button
      className={clsx('w-px-20 w-py-10', styles.button, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default WButton;
