import styles from './Button.module.css';

export const Button = (props) => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return <div className={styles.wrapper} {...props} onClick={onClose}>
    Button is open
  </div>;
};
