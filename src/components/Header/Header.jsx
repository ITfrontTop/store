import styles from './Header.module.scss';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Auth from '../Auth/Auth';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftPartHeader}>
        <Logo />
        <Navbar />
      </div>

      <div className={styles.rightPartHeader}>
        <Auth />
        <Search />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
