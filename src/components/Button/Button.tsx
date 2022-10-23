import { FC } from "react";
import { ButtonProps } from "../../core/types/types";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = (props) => {
  return <button className={styles.wrapper} {...props} />;
};