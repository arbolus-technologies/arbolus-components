import clsx from 'clsx'
import React from 'react'
import styles from './Icon.module.scss'

interface IconProps {
  iconName: string
  fontSize: string
  color?: string
  filled?: boolean
  onClick?: () => void
  customClasses?: string
  style?: React.CSSProperties
  id?: string
  tooltip?: string
}
export const Icon: React.FC<IconProps> = ({
  iconName,
  color,
  fontSize,
  filled = false,
  onClick,
  customClasses,
  style,
  id,
  tooltip
}) => (
  <span
    data-testid='icon'
    onClick={onClick}
    style={{
      ...style,
      fontSize,
      color,
      cursor: onClick ? 'pointer' : 'default'
    }}
    className={clsx('material-symbols-sharp icon', customClasses, {
      [styles.filled]: filled
    })}
    id={id ?? 'icon'}
    title={tooltip}
  >
    {iconName}
  </span>
)
