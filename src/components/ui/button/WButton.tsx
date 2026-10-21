'use client';

import Link from 'next/link';
import styles from '@/components/ui/button/wbutton.module.scss';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { useMemo } from 'react';
import clsx from '@/app/utils/style-utils/clsx';

interface IWButtonProps {
  radius?: number
  paddingX?: number
  paddingY?: number
  text: string
  textSize?: EBUTTON_SIZE
  type?: EBUTTON_TYPE
  fullWidth?: boolean
  selected?: boolean
  disabled?: boolean
  href?: string
  slotBefore?: React.ReactNode
  onClick?: () => void
}

const WButton: React.FC<IWButtonProps> = ({
  text,
  type = EBUTTON_TYPE.BORDERED,
  textSize = EBUTTON_SIZE.XS,
  selected,
  fullWidth,
  disabled,
  href,
  radius = 999,
  paddingX = 20,
  paddingY = 10,
  slotBefore,
  onClick,
}) => {
  const className = useMemo(() => {
    if (type === EBUTTON_TYPE.BORDERED) {
      return styles.wButtonBordered;
    }

    if (type === EBUTTON_TYPE.OPTION) {
      return styles.wButtonOption;
    }

    if (type === EBUTTON_TYPE.GRADIENT) {
      return styles.wButtonGradient;
    }

    return styles.wButtonFilled;
  }, [type]);

  const computedStyles = useMemo(() => ({
    borderRadius: `${radius}px`,
    paddingTop: `${paddingY}px`,
    paddingBottom: `${paddingY}px`,
    paddingLeft: `${paddingX}px`,
    paddingRight: `${paddingX}px`,
  }), [radius, paddingY, paddingX]);

  const computedClassName = clsx(
    styles.button,
    className,
    selected && styles.selected,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    textSize === EBUTTON_SIZE.XS && 'w-text-xs',
    textSize === EBUTTON_SIZE.SM && 'w-text-sm',
    textSize === EBUTTON_SIZE.LG && 'w-text-lg',
  );

  const content = (
    <div className="w-flex w-align-center w-justify-center">
      {slotBefore}
      <span className={clsx(!!slotBefore && 'w-ml-8')}>
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={computedClassName}
        style={computedStyles}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={computedClassName}
      disabled={disabled}
      onClick={onClick}
      style={computedStyles}
    >
      {content}
    </button>
  );
};

export default WButton;
