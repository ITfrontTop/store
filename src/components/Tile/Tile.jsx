import styles from './Tile.module.scss';
import { itemsTile } from '../../data/data';

const Tile = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.first}></div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
      <div className={styles.fourth}></div>
      <div className={styles.fifth}></div>
      <div className={styles.sixth}></div> */}
      {itemsTile.map((item, itemIndex) => {
        const { id, background } = item;
        return <div key={id} style={{ background: `${background}` }}></div>;
      })}
    </div>
  );
};

export default Tile;
