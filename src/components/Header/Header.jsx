<<<<<<< HEAD
// import { getTTFB } from "web-vitals";
// import { FC } from "react";
import { UseTelegram } from "../../core/hooks/useTelegram";
// import { Button } from "../Button/Button";
import styles from "./Header.module.css";
// import { HeaderProps } from "./Header.props";

export const Header = (props) => { // : FC<HeaderProps>
const {user, onClose} = UseTelegram();

  return (
    <div className={styles.wrapper} {...props}>
      
      {/* <Button onClick={onClose}>Закрыть окно</Button> */}
      <div className={styles.username}>
        <div>{user?.username}</div>
        {/* <div>{user?.photo_url}</div> */}
        <span>Версия 04</span>
=======
import { getTTFB } from "web-vitals";
import { UseTelegram } from "../../hooks/useTelegram";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export const Header = (props) => {
const {user, onClose} = UseTelegram();

 

  return (
    <div className={styles.wrapper} {...props}>
      <Button onClick={onClose}>Закрыть окно</Button>
      <div className={styles.username}>
        <div>{user?.username}</div>
        <div>{user?.photo_url}</div>
        <span>Версия 03</span>
>>>>>>> parent of c66035d... trtrt
        {/* <div>{JSON.stringify(tg.initDataUnsafe?.user)}</div> */}
      
        
      </div>
    </div>
  );
};
