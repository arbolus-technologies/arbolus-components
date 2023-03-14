/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button, ButtonType } from '../Buttons/Button';
import styles from './ArbolusModal.module.scss';

export interface ArbolusModalProps {
  title: string;
  iconTitle?: string;
  subtitle?: string;
  toggle: () => void; // setState to False to dismiss the modal when click outside
  isOpen: boolean;
  buttons: {
    leftButton: {
      onClick: (e: any) => void;
      buttonType: ButtonType;
      text: string;
      disabled?: boolean;
    };
    rightButton: {
      onClick: (e: any) => void;
      buttonType: ButtonType;
      text: string;
      disabled?: boolean;
    };
  };
}
export const ArbolusModal: React.FC<ArbolusModalProps> = ({
  title,
  subtitle,
  isOpen,
  toggle,
  iconTitle,
  buttons
}) => {
  const { leftButton, rightButton } = buttons;
  return (
    <Modal
      isOpen={isOpen}
      className={classnames('modal-alert', styles.container)}
      toggle={toggle}
    >
      {title && (
        <ModalHeader className={styles.title}>
          {iconTitle && (
            <img src={iconTitle} alt="iconTitle" className={styles.image} />
          )}
          {title}
        </ModalHeader>
      )}
      <ModalBody className={styles.subtitle}>{subtitle}</ModalBody>
      <ModalFooter className={styles.footer}>
        <div className={styles.buttonsContainer}>
          <Button
            text={leftButton.text}
            type={leftButton.buttonType}
            onClick={leftButton.onClick}
            disabled={leftButton.disabled}
          />
          <Button
            text={rightButton.text}
            type={rightButton.buttonType}
            onClick={rightButton.onClick}
            disabled={rightButton.disabled}
          />
        </div>
      </ModalFooter>
    </Modal>
  );
};
