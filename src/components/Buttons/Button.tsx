import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'tab'
  | 'iconButton'

export interface ButtonProps {
  text?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void
  type?: ButtonType
  disabled?: boolean
  startIcon?: string
  endIcon?: string
  activeTab?: boolean
  nativeType?: 'submit' | 'reset' | 'button'
  centerIcon?: string
  testId?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  startIcon,
  endIcon,
  type = 'primary',
  disabled = false,
  activeTab,
  nativeType = 'button',
  centerIcon,
  testId,
}) => (
  <button
    className={classNames(
      styles[type],
      activeTab && styles.activeTab,
      startIcon && styles.startIconPadding,
      endIcon && styles.endIconPadding,
    )}
    onClick={onClick}
    disabled={disabled}
    type={nativeType}
    data-testid={testId}
  >
    {startIcon && (
      <span className={classNames('material-symbols-sharp', styles.icon, styles.startIconMargin)}>
        {startIcon}
      </span>
    )}
    {text ? (
      text
    ) : (
      <span className={classNames('material-symbols-sharp', styles.icon, styles.centerIcon)}>
        {centerIcon}
      </span>
    )}
    {endIcon && (
      <span className={classNames('material-symbols-sharp', styles.icon, styles.endIconMargin)}>
        {endIcon}
      </span>
    )}
  </button>
)
