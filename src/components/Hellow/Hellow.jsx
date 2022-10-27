import styles from './Hellow.module.css';

export const Hellow = (props) => {
  return <div className={styles.wrapper} {...props}>
    Hellow Успешно создан
  </div>;
};
