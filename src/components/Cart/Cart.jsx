import { IoBagOutline } from 'react-icons/io5';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <IoBagOutline color="#040404" size="20px" />
    </div>
  );
};

export default Cart;
