import clsx from 'clsx';
import React from 'react';
import { ButtonNativeType, ButtonType } from '../../../models/types';
import { Icon } from '../../Icon/Icon';
import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  type?: ButtonType;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
  startIcon?: string;
  endIcon?: string;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'primary',
  onClick,
  disabled = false,
  nativeType = 'button',
  startIcon,
  endIcon,
  id
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={nativeType}
      className={styles[type]}
      id={id}
    >
      {startIcon && <Icon name={startIcon} fontSize='20px' />}
      <p
        className={clsx(styles.text, { [styles.startIcon]: startIcon, [styles.endIcon]: endIcon })}
      >
        {text}
      </p>
      {endIcon && <Icon name={endIcon} fontSize='20px' />}
    </button>
  );
};
