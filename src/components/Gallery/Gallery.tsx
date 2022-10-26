import { FC } from "react";
import { GalleryProps } from ".";
import styles from "./Gallery.module.css";

export const Gallery: FC<GalleryProps> = (props) => {
  return (
    <div className={styles.wrapper} {...props}>Gallery</div>
  );
};
