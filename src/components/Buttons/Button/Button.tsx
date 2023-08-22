import clsx from 'clsx';
import React from 'react';
import { ButtonTypeEnum } from '../../../models/enums';
import { ButtonNativeType, ButtonType } from '../../../models/types';
import { Icon } from '../../Icon/Icon';
import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  onClick: (e: unknown) => void;
  type?: ButtonType;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
  startIcon?: string;
  endIcon?: string;
  id?: string;
}

interface IconColor {
  [key: string]: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'primary',
  disabled = false,
  nativeType = 'button',
  startIcon,
  endIcon,
  id
}) => {
  const { primary, secondary, tertiary, confirmation, rejection } = ButtonTypeEnum;
  const iconColor: IconColor = {
    [primary]: '#ffffff',
    [secondary]: '#6157fc',
    [tertiary]: '#6157fc',
    [confirmation]: '#ffffff',
    [rejection]: '#ffffff'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={nativeType}
      className={styles[type]}
      id={id}
    >
      {startIcon && <Icon name={startIcon} fontSize='20px' color={iconColor[type]} />}
      <p
        className={clsx(styles.text, { [styles.startIcon]: startIcon, [styles.endIcon]: endIcon })}
      >
        {text}
      </p>
      {endIcon && <Icon name={endIcon} fontSize='20px' color={iconColor[type]} />}
    </button>
  );
};
