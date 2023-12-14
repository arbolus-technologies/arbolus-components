import { useArbolusAvatarV2Context } from '../ArbolusAvatarV2Context';
import styles from './ArbolusAvatarTitle.module.scss';

const ArbolusAvatarTitle: React.FC = () => {
  const { user } = useArbolusAvatarV2Context();
  const { title } = user;
  return (
    <span className={styles.title} title={title}>
      {title}
    </span>
  );
};

export default ArbolusAvatarTitle;
