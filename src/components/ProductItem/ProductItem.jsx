import { Button } from "../Button/Button";
import styles from "./ProductItem.module.css";

export const ProductItem = ({product, className, onAdd}) => {

  const onAddHandler = () => {
    onAdd(product)
  }
  return (
    <div className={'product' + className} {...props}>
      <div className={styles.img} />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>Стоимость {product.title}</span>
      </div>

      <Button className={styles.addBtn} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};