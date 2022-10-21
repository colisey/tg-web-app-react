import { getTTFB } from 'web-vitals';
import { Button } from '../Button/Button';
import styles from './Header.module.css';


export const Header = (props) => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };


  return <div className={styles.wrapper} {...props}>
    <Button onClick={onClose}>Закрыть</Button>
    <span className={styles.username}>{
      tg.initDataUnsafe?.user?.username
    }</span>
  </div>;
};
