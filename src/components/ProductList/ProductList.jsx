import { useState } from "react";
import { UseTelegram } from "../../hooks/useTelegram";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";

const products = [
  { id: 1, title: "Куртка", price: 1000, description: "Рыжая красивая" },
  { id: 2, title: "Куртка 1", price: 1000, description: "Рыжая красивая" },
  { id: 3, title: "Куртка 2", price: 1000, description: "Рыжая красивая" },
  { id: 4, title: "Куртка 3", price: 1000, description: "Рыжая красивая" },
  { id: 5, title: "Куртка 4", price: 1000, description: "Рыжая красивая" },
  { id: 6, title: "Куртка 5", price: 1000, description: "Рыжая красивая" },
  { id: 7, title: "Куртка 6", price: 1000, description: "Рыжая красивая" },
  { id: 8, title: "Куртка 7", price: 1000, description: "Рыжая красивая" },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    acc += item.price;
  }, 0);
};

export const ProductList = (props) => {
  const tg = UseTelegram();
  const [addedItems, setAddedItems] = useState([]);
  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((i) => i.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((i) => i.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={styles.list} {...props}>
      {products.map((item) => {
        <ProductItem product={item} onAdd={onAdd} className={"item"} />;
      })}
    </div>
  );
};
