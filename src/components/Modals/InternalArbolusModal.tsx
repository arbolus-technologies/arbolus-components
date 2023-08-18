import clsx from 'clsx'
import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import styles from './InternalArbolusModal.module.scss'
import { Button, ButtonType } from '../Buttons/Button/Button'

interface ModalButton {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
  type: ButtonType
  text: string
  disabled?: boolean
}

export interface InternalArbolusModalProps {
  title: string
  iconTitle?: string
  subtitle?: string
  toggle: () => void // setState to False to dismiss the modal when click outside
  isOpen: boolean
  leftButton: ModalButton
  rightButton: ModalButton
}

interface ForbiddenExportInternalArbolusModalProps {
  size?: 'sm' | 'lg'
  body?: React.ReactNode
}

type Props = InternalArbolusModalProps & ForbiddenExportInternalArbolusModalProps

// Never make it available outside of the library
export const InternalArbolusModal: React.FC<Props> = ({
  title,
  subtitle,
  body,
  isOpen,
  toggle,
  iconTitle,
  leftButton,
  rightButton,
  size = 'sm'
}) => (
  <Modal
    isOpen={isOpen}
    className={clsx('modal-alert', styles.container, styles[size])}
    toggle={toggle}
  >
    {title && (
      <ModalHeader className={styles.title}>
        {iconTitle && <img src={iconTitle} alt='iconTitle' className={styles.image} />}
        {title}
      </ModalHeader>
    )}
    {body || <ModalBody className={styles.subtitle}>{subtitle}</ModalBody>}
    <ModalFooter className={styles.footer}>
      <div className={styles.buttonsContainer}>
        {/* <Button {...leftButton} />
        <Button {...rightButton} /> */}
      </div>
    </ModalFooter>
  </Modal>
)
