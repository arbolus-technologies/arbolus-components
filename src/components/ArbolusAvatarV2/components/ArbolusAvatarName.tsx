import { useArbolusAvatarV2Context } from '../ArbolusAvatarV2Context';
import styles from './ArbolusAvatarName.module.scss';

const ArbolusAvatarName: React.FC = () => {
  const { user } = useArbolusAvatarV2Context();
  const { name, lastName } = user;
  return (
    <span className={styles.name} title={`${name} ${lastName}`}>
      {`${name} ${lastName}`}
    </span>
  );
};

export default ArbolusAvatarName;
