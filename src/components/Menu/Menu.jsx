import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </>
  );
};

export default Menu;
