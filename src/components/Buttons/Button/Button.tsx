import React from 'react';
import { ButtonNativeTypeEnum, ButtonTypeEnum } from '../../../models/enums';
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
  type = ButtonTypeEnum.PRIMARY,
  onClick,
  disabled = false,
  nativeType = ButtonNativeTypeEnum.BUTTON,
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
      data-testid={id}
    >
      {startIcon && <Icon name={startIcon} fontSize='20px' disabled={disabled} cursor={true} />}
      {text}
      {endIcon && <Icon name={endIcon} fontSize='20px' disabled={disabled} cursor={true} />}
    </button>
  );
};
