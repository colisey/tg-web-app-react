import { useEffect, useState } from "react";
import { UseTelegram } from "../../hooks/useTelegram";
import { ProductItem } from "../ProductItem/ProductItem";
// import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";

import axios from "axios";
import { TOKEN } from "../../api/wb.js";
import { products } from "../../api/api";
// const products = [
//   { id: 1, title: "Куртка", price: 750, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100'},
//   { id: 2, title: "Куртка 1", price: 1000, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
//   { id: 3, title: "Куртка 2", price: 1805, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
//   { id: 4, title: "Куртка 3", price: 3245, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
//   { id: 5, title: "Куртка 4", price: 879, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
//   { id: 6, title: "Куртка 5", price: 900, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
//   { id: 7, title: "Куртка 6", price: 1200, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
//   { id: 8, title: "Куртка 7", price: 1600, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
// ];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export const ProductList = () => {
  const { tg } = UseTelegram();

  const [addedItems, setAddedItems] = useState([]);
  // const [totalPrise, setTotalPrise] = useState(0);

  // console.log('addedItems',addedItems)
  // tg.MainButton.show();

  // useEffect(() => {

  //     console.log('products',products);

  // }, [products.length]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((i) => i.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((i) => i.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

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
      {/* <span>Всего купили на сумму {getTotalPrice(addedItems)}</span> */}
      {products.map((item) => {
        {
          item.isActive = !!addedItems.find((i) => i.id === item.id);
        }
        return <ProductItem product={item} onAdd={onAdd} className={"item"} />;
      })}
    </div>
  );
};
