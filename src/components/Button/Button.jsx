// import { FC } from "react";
// import { ButtonProps } from "../../core/types/types";
import styles from "./Button.module.css";

export const Button= (props) => { //: FC<ButtonProps> 
  return <button className={styles.wrapper} {...props} />;
};