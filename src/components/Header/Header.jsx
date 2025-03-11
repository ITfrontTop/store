import styles from './Header.module.scss';

import Logo from '../Logo/Logo';
import Menu from '../Menu/menu';
import Auth from '../Auth/Auth';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftPartHeader}>
        <Logo />
        <Menu />
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
