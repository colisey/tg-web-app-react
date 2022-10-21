import styles from './{{pascalCase}}.module.css';

export const {{pascalCase}} = (props) => {
  return <div className={styles.wrapper} {...props}>
    {{pascalCase}} is open
  </div>;
};
