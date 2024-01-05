import React from 'react';
import { ButtonNativeType } from '../../../models/types';
import { Icon } from '../../Icon/Icon';
import styles from './IconButton.module.scss';
import { ARBOLUS_COLORS } from '../../../theme/colors/colorConstants';

export interface IconButtonProps {
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
  id?: string;
  borderColor?: string;
  iconColor?: string;
  backgroundColor?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  nativeType = 'button',
  id,
  borderColor = ARBOLUS_COLORS.bColorBasePurple,
  iconColor = ARBOLUS_COLORS.bColorBasePurple,
  backgroundColor = ARBOLUS_COLORS.bColorBaseWhite
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={nativeType}
      className={styles.iconButton}
      id={id}
      data-testid={id}
      style={{ borderColor, backgroundColor }}
    >
      <Icon name={icon} fontSize='24px' disabled={disabled} cursor={true} color={iconColor} />
    </button>
  );
};
