import styles from './Button.module.scss';

const Button = ({ children, colorText, backgroundColorButton }) => {
  return (
    <div
      className={styles.button}
      style={{
        backgroundColor: `${backgroundColorButton}`,
        color: `${colorText}`
      }}
    >
      {children}
    </div>
  );
};

export default Button;
