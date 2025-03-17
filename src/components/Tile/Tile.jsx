import styles from './Tile.module.scss';
import { itemsTile } from '../../data/data';
import Button from '../../ui/Button/Button';

const Tile = () => {
  return (
    <div className={styles.container}>
      {itemsTile.map(
        ({
          id,
          image,
          title,
          name,
          option,
          background,
          colorText,
          backgroundColorButton
        }) => {
          // const {
          //   id,
          //   image,
          //   title,
          //   name,
          //   option,
          //   background,
          //   colorText,
          //   backgroundColorButton
          // } = item;
          return (
            <div
              className={styles.item}
              key={id}
              style={{ background: `${background}` }}
            >
              <img className={styles.image} src={image} alt={option} />
              <div className={styles.title}>{title}</div>
              <div className={styles.name}>{name}</div>
              <div className={styles.option}>{option}</div>
              <Button
                colorText={colorText}
                backgroundColorButton={backgroundColorButton}
              >
                Browse
              </Button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Tile;
