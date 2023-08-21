import React from 'react'
import { Icon } from '../../Icon/Icon'
import styles from './Button.module.scss'

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'confirmation' | 'rejection'

export interface ButtonProps {
  text: string
  onClick: (e: unknown) => void
  disabled: boolean
  type: ButtonType
  nativeType: 'submit' | 'reset' | 'button'
  startIcon?: string
  endIcon?: string
  id?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type,
  nativeType = 'button',
  startIcon,
  endIcon,
  id
}) => (
  <button onClick={onClick} disabled={disabled} type={nativeType} className={styles[type]} id={id}>
    {startIcon && (
      <div className={styles.startIcon}>
        <Icon name={startIcon} fontSize='20px' />
      </div>
    )}
    <p className={styles.text}>{text}</p>
    {endIcon && (
      <div className={styles.endIcon}>
        <Icon name={endIcon} fontSize='20px' />
      </div>
    )}
  </button>
)
