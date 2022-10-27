import { Button } from "../Button/Button";
import styles from "./ProductItem.module.css";

export const ProductItem = ({product, className, onAdd}) => {
  // console.log('ProductItem');

  const onAddHandler = () => {
    onAdd(product)
  }
  const btnText = product.isActive? 'Удалить из корзины':'Добавить в корзину';

  // console.log('ProductItem',product);
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>Стоимость <b>{product.price}</b>руб.</span>
      </div>

      <Button className={styles.addBtn} onClick={onAddHandler}>
        {btnText}
      </Button>
    </div>
  );
};