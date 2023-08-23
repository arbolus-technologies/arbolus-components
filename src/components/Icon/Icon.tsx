import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.scss';

export interface IconProps {
  name: string;
  fontSize: string;
  color?: string;
  filled?: boolean;
  onClick?: () => void;
  tooltip?: string;
  id?: string;
}
export const Icon: React.FC<IconProps> = ({
  name,
  fontSize,
  color,
  filled = false,
  onClick,
  tooltip,
  id
}) => (
  <span
    id={id}
    onClick={onClick}
    style={{
      fontSize,
      color,
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none'
    }}
    className={clsx('material-symbols-sharp icon', {
      [styles.filled]: filled
    })}
    title={tooltip}
  >
    {name}
  </span>
);
