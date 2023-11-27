import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.scss';

export interface IconProps {
  name: string;
  fontSize: string;
  color?: string;
  filled?: boolean;
  cursor?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  disabled?: boolean;
  tooltip?: string;
  id?: string;
}
export const Icon: React.FC<IconProps> = ({
  name,
  fontSize,
  color,
  filled = false,
  cursor = false,
  onClick,
  disabled = false,
  tooltip,
  id
}) => (
  <span
    onClick={onClick}
    onKeyDown={onClick}
    style={{
      fontSize,
      color
    }}
    className={clsx('material-symbols-sharp icon', styles.icon, {
      [styles.cursor]: !!onClick || cursor,
      [styles.filled]: filled,
      [styles.disabled]: disabled
    })}
    title={tooltip}
    id={id}
    data-testid={id}
  >
    {name}
  </span>
);
