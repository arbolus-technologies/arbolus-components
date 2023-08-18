import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'confirmation' | 'rejection'

export interface ButtonProps {
  text: string
  onClick: (e: unknown) => void
  disabled: boolean
  type: ButtonType
  nativeType: 'submit' | 'reset' | 'button'
  startIcon?: string
  endIcon?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type,
  nativeType = 'button',
  startIcon,
  endIcon
}) => (
  <button onClick={onClick} disabled={disabled} type={nativeType} className={styles[type]}>
    {startIcon && (
      <span className={clsx('material-symbols-sharp', styles.icon, styles.startIcon)}>
        {startIcon}
      </span>
    )}
    <p className={styles.text}>{text}</p>
    {endIcon && (
      <span className={clsx('material-symbols-sharp', styles.icon, styles.endIcon)}>{endIcon}</span>
    )}
  </button>
)
