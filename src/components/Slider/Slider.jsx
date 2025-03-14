import { useState } from 'react';
import { slideInfo } from './../../data/data';
import styles from './Slider.module.scss';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Button from '../../ui/Button/Button';

const Slider = () => {
  let [position, setPosition] = useState(0);

  const plusPosition = () => {
    setPosition(position + 1);
  };

  const minusPosition = () => {
    setPosition(position - 1);
  };

  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        {slideInfo.map((slide, slideIndex) => {
          const {
            id,
            image,
            name,
            title,
            option,
            description,
            background,
            backgroundColorButton,
            colorText
          } = slide;

          if (position === slideIndex) {
            return (
              <div
                className={styles.slide}
                key={id}
                style={{ background: `${background}` }}
              >
                <div>
                  <img src={image} alt={name} className={styles.image} />
                  <p className={styles.title}>{title}</p>
                  <h4 className={styles.name}>{name}</h4>
                  <p className={styles.option}>{option}</p>
                  <Button
                    backgroundColorButton={backgroundColorButton}
                    colorText={colorText}
                  >
                    Shop By Category
                  </Button>
                </div>

                <div className={styles.description}>
                  <div className={styles.description__wrapper}>
                    <p className={styles.description__title}>Description</p>
                    <p className={styles.description__desc}>{description}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div>
          <button
            className={styles.prev}
            onClick={minusPosition}
            disabled={position <= 0}
          >
            <FaArrowAltCircleLeft size={'20px'} />
          </button>

          <button
            className={styles.next}
            onClick={plusPosition}
            disabled={position === slideInfo.length - 1}
          >
            <FaArrowAltCircleRight size={'20px'} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
