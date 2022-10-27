import styles from './Contacts.module.css';

export const Contacts = (props) => {
  return <div className={styles.wrapper} {...props}>
    <h3>Контакты</h3>

    <strong>Для связи:</strong>
    <ul>
      <li><a href="tel:+79778374262">Телефон: +7(977)837-42-62</a></li>
      <li><a href="@FilichevValeriy">Телеграм: @FilichevValeriy</a></li>
    </ul>
  </div>;
};
