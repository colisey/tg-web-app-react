import { getTTFB } from "web-vitals";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export const Header = (props) => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };

  return (
    <div className={styles.wrapper} {...props}>
      <Button onClick={onClose}>Закрыть окно</Button>
      <div className={styles.username}>
        <div>{tg.initDataUnsafe?.user?.username}</div>
        <div>{tg.initDataUnsafe?.user?.photo_url}</div>
      
        
      </div>
    </div>
  );
};
