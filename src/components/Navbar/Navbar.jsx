import { Link } from 'react-router';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <ul className={styles.list}>
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/contact'}>Contact Us</Link>
      </ul>
    </>
  );
};

export default Navbar;
