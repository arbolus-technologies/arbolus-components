import React from 'react';
import { ButtonNativeType } from '../../../models/types';
import { Icon } from '../../Icon/Icon';
import styles from './IconButton.module.scss';

export interface IconButtonProps {
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
  id?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  nativeType = 'button',
  id
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={nativeType}
      className={styles.iconButton}
      id={id}
      data-testid={id}
    >
      <Icon name={icon} fontSize='24px' />
    </button>
  );
};
