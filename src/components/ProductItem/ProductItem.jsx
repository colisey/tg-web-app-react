// import { FC } from "react";
// import { ProductItemProps } from "./ProductItem.props";
import { Button } from "../Button/Button";
import styles from "./ProductItem.module.css";

export const ProductItem= ({ //: FC<ProductItemProps> 
  product,
  className,
  onAdd,
}) => {
  // console.log('ProductItem');

  const onAddHandler = () => {
    onAdd(product);
  };
  // console.log('ProductItem');
  return (
    <div className={styles.wrapper}>
      <div className={styles.img} />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>
          Стоимость <b>{product.price}</b>руб.
        </span>
      </div>

      <Button className={styles.addBtn} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};
