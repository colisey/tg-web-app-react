import styles from "./Case.module.css";

export const Case = ({ first_name, last_name, avatar, email }) => {
  // console.log('Case',props);

  const name = first_name + " " + last_name;
  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.img} src={avatar} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          faucibus turpis in eu. <strong>Nunc sed blandit libero</strong> volutpat sed cras
          ornare arcu. Lectus magna fringilla urna porttitor rhoncus dolor.
          Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="tel:+79778374262">
              Телефон: <span>+7(977)837-42-62</span>
            </a>
          </li>
          <li className={styles.li}>
            <span className={styles.a}>
              Телеграм: <span>@FilichevValeriy</span>
            </span>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href={`mailto:${styles.mail}`}>
              Написать на Mail
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
