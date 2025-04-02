// Layout это общая оболочка вокруг которого будет строиться приложения
// в компоненте <Outlet />

import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
