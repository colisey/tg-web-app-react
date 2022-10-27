import { Link } from "react-router-dom";
import { UseTelegram } from "../../hooks/useTelegram";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export const Header = (props) => {
const {user, onClose} = UseTelegram();

 

  return (
    <div className={styles.wrapper} {...props}>
      <div>
      <Link to={`/`} className={styles.link} >Главная</Link>
      <Link to={`/form`} className={styles.link}>form</Link>
      <Link to={`/shop`} className={styles.link}>shop</Link>
      <Link to={`/basket`} className={styles.link}>basket</Link>
      <Link to={`/gallery`} className={styles.link}>gallery</Link>
      <Link to={`/cases`} className={styles.link}>cases</Link>
      <Link to={`/contacts`} className={styles.link}>contacts</Link>
      </div>
      <Button onClick={onClose}>Закрыть окно</Button>
      <div className={styles.username}>
        <div>{user?.username}</div>
        <div>{user?.photo_url}</div>
        <span>Версия 05</span>
        {/* <div>{JSON.stringify(tg.initDataUnsafe?.user)}</div> */}
      </div>
    </div>
  );
};