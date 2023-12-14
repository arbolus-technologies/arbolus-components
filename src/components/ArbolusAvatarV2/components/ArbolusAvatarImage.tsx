import { convertToLetter } from '../../../utils/hooks/utils';
import { useArbolusAvatarV2Context } from '../ArbolusAvatarV2Context';
import styles from './ArbolusAvatar.module.scss';

const ArbolusAvatarImage: React.FC = () => {
  const { user } = useArbolusAvatarV2Context();
  const { profileImage, name, lastName } = user;
  return (
    <div className={styles.imageContainer}>
      {user.profileImage ? (
        <img src={profileImage} alt='profile-img' className={styles.profileImage} />
      ) : (
        <div className={styles.roundedLetters}>{convertToLetter(name, lastName)}</div>
      )}
    </div>
  );
};

export default ArbolusAvatarImage;
