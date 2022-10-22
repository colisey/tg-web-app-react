import { useEffect, useState } from "react";
import { UseTelegram } from "../../hooks/useTelegram";
import { ProductItem } from "../ProductItem/ProductItem";
// import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";

import axios from "axios";
import { TOKEN } from "../../api/wb.js";

const products = [
  { id: 1, title: "Куртка", price: 750, description: "Рыжая красивая" },
  { id: 2, title: "Куртка 1", price: 1000, description: "Рыжая красивая" },
  { id: 3, title: "Куртка 2", price: 1805, description: "Рыжая красивая" },
  { id: 4, title: "Куртка 3", price: 3245, description: "Рыжая красивая" },
  { id: 5, title: "Куртка 4", price: 879, description: "Рыжая красивая" },
  { id: 6, title: "Куртка 5", price: 900, description: "Рыжая красивая" },
  { id: 7, title: "Куртка 6", price: 1200, description: "Рыжая красивая" },
  { id: 8, title: "Куртка 7", price: 1600, description: "Рыжая красивая" },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export const ProductList = () => {
  const { tg } = UseTelegram();

  const [addedItems, setAddedItems] = useState([]);
  const [appState, setAppState] = useState();

 

  // console.log('addedItems',addedItems)
  // tg.MainButton.show();

  // useEffect(() => {

  //     tg.MainButton.show();

  // }, addedItems);

  const onAdd = (product) => {
    // alert(product.price)

    const alreadyAdded = addedItems.find((i) => i.id === product.id);
    let newItems = [];
    // console.log('addedItems',addedItems);
    // console.log('alreadyAdded',alreadyAdded);
    // console.log(alreadyAdded)

    if (alreadyAdded) {
      newItems = addedItems.filter((i) => i.id !== product.id);
      // console.log('if newItems',newItems)
    } else {
      // alert('alreadyAdded else')
      newItems = [...addedItems, product];
      // console.log('else newItems',newItems)
    }
    setAddedItems(newItems);

    // console.log('newItems.',newItems.length)

    // console.log('newItems.length',newItems.length)

    // useEffect(() => {
    //   if (addedItems.length === 0) {
    //     // console.log('newItems.',newItems.length)
    //     tg.MainButton.hide();
    //   } else {
    //     tg.MainButton.show();
    //   }
    // }, [addedItems]);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      // console.log('newItems true')
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={styles.list}>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};
