import clsx from 'clsx';
import React from 'react';
import { ButtonTypeEnum } from '../../../models/enums';
import { ButtonNativeType, ButtonType } from '../../../models/types';
import { ARBOLUS_COLORS } from '../../../theme/colors/colorConstants';
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

interface IconColor {
  [key: string]: string;
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
  const { primary, secondary, tertiary, confirmation, rejection } = ButtonTypeEnum;
  const { bColorBaseWhite, bColorBasePurple } = ARBOLUS_COLORS;

  const iconColor: IconColor = {
    [primary]: bColorBaseWhite,
    [secondary]: bColorBasePurple,
    [tertiary]: bColorBasePurple,
    [confirmation]: bColorBaseWhite,
    [rejection]: bColorBaseWhite
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
