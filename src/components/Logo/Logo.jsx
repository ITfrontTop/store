import { Link } from 'react-router';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <Link to={'/'} className={styles}>
        P H O L X
      </Link>
    </>
  );
};

export default Logo;
