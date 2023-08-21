import React from 'react'
import { Icon } from '../../Icon/Icon'
import styles from './Button.module.scss'
import { ButtonType } from '../../../models/types'

export interface ButtonProps {
  text: string
  type: ButtonType
  onClick: (e: unknown) => void
  disabled?: boolean
  nativeType?: 'submit' | 'reset' | 'button'
  startIcon?: string
  endIcon?: string
  id?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  onClick,
  disabled = false,
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
