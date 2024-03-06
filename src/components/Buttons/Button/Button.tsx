import React from 'react';
import { ButtonNativeTypeEnum, ButtonSizeEnum, ButtonTypeEnum } from '../../../models/enums';
import { ButtonNativeType, ButtonSize, ButtonType } from '../../../models/types';
import { Icon } from '../../Icon/Icon';
import styles from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMouseDown?: (e: any) => void;
  type?: ButtonType;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
  startIcon?: string;
  endIcon?: string;
  id?: string;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = ButtonTypeEnum.PRIMARY,
  onClick,
  onMouseDown,
  disabled = false,
  nativeType = ButtonNativeTypeEnum.BUTTON,
  startIcon,
  endIcon,
  id,
  size = ButtonSizeEnum.LARGE
}) => {
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      type={nativeType}
      className={clsx(styles[type], styles[size])}
      id={id}
      data-testid={id}
    >
      {startIcon && <Icon name={startIcon} fontSize='20px' disabled={disabled} cursor={true} />}
      {text}
      {endIcon && <Icon name={endIcon} fontSize='20px' disabled={disabled} cursor={true} />}
    </button>
  );
};
