// import { getTTFB } from "web-vitals";
import { FC } from "react";
import { UseTelegram } from "../../core/hooks/useTelegram";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

export const Header: FC<HeaderProps> = (props) => {
const {user, onClose} = UseTelegram();

  return (
    <div className={styles.wrapper} {...props}>
      
      {/* <Button onClick={onClose}>Закрыть окно</Button> */}
      <div className={styles.username}>
        <div>{user?.username}</div>
        {/* <div>{user?.photo_url}</div> */}
        <span>Версия 03</span>
        {/* <div>{JSON.stringify(tg.initDataUnsafe?.user)}</div> */}
      
        
      </div>
    </div>
  );
};
