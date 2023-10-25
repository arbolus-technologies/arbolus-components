import React, { ReactNode } from 'react';
import styles from './ArbolusAvatar.module.scss';
import { convertToLetter } from '../../utils/hooks/utils';

export interface ArbolusAvatarProps {
  profileImage?: string;
  name: string;
  lastName?: string;
  children?: ReactNode;
  title: string;
}

export const ArbolusAvatar: React.FC<ArbolusAvatarProps> = ({
  profileImage,
  name,
  lastName,
  children,
  title
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {profileImage ? (
          <img src={profileImage} alt='profile-img' className={styles.profileImage} />
        ) : (
          <div className={styles.roundedLetters}>{convertToLetter(name, lastName)}</div>
        )}
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.name} title={`${name} ${lastName}`}>
          {`${name} ${lastName}`}
          {children && children}
        </span>
        <span className={styles.title} title={title}>
          {title}
        </span>
      </div>
    </div>
  );
};
