import styles from "./Case.module.css";

export const Case = ({ first_name, last_name, avatar, email }) => {
  // console.log('Case',props);

  const name = first_name + " " + last_name;
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={avatar} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <p className={styles.p}>Некий текст который тут будет</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="tel:+79778374262">Телефон: +7(977)837-42-62</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="@FilichevValeriy">Телеграм: @FilichevValeriy</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href={`mailto:${styles.mail}`}>Написать на Mail</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
