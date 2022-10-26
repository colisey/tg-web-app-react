import { useState, FC } from "react";
// import { itemType, ProductListProps, ProductsType } from "./ProductList.props";
import { UseTelegram } from "../../core/hooks/useTelegram";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import { products } from "../../api/api";


<<<<<<< HEAD
=======
const products = [
  { id: 1, title: "Куртка", price: 750, description: "Рыжая красивая" },
  // { id: 2, title: "Куртка 1", price: 1000, description: "Рыжая красивая" },
  // { id: 3, title: "Куртка 2", price: 1805, description: "Рыжая красивая" },
  // { id: 4, title: "Куртка 3", price: 3245, description: "Рыжая красивая" },
  // { id: 5, title: "Куртка 4", price: 879, description: "Рыжая красивая" },
  // { id: 6, title: "Куртка 5", price: 900, description: "Рыжая красивая" },
  // { id: 7, title: "Куртка 6", price: 1200, description: "Рыжая красивая" },
  // { id: 8, title: "Куртка 7", price: 1600, description: "Рыжая красивая" },
];
>>>>>>> parent of d4f4174... i


const getTotalPrice = (items) => { //(items: ProductsType): number
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export const ProductList = () => { //: FC<ProductListProps>
  
  const { tg } = UseTelegram();

  const [addedItems, setAddedItems] = useState([]); //<ProductsType>
  const [appState, setAppState] = useState();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const onAdd = (product) => { //: itemType
=======
=======
>>>>>>> parent of d4f4174... i
=======
>>>>>>> parent of d4f4174... i
=======
>>>>>>> parent of d4f4174... i
  useEffect(() => {
    axios
      .post("https://suppliers-api.wildberries.ru/content/v1/cards/filter", {
        id: TOKEN,
        jsonrpc: "2.0",
        params: {
          filter: {
            order: {
              column: "updatedAt",
              order: "desc",
            },
          },
          query: {
            limit: 1,
            offset: 0,
          },
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // console.log('addedItems',addedItems)
  // tg.MainButton.show();

  // useEffect(() => {

  //     tg.MainButton.show();

  // }, addedItems);

  const onAdd = (product) => {
    // alert(product.price)
>>>>>>> parent of d4f4174... i

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
    <div className={styles.list}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      ProductList
=======
      <button onClick={setAppState}>Загрузить</button>
>>>>>>> parent of d4f4174... i
=======
      <button onClick={setAppState}>Загрузить</button>
>>>>>>> parent of d4f4174... i
=======
      <button onClick={setAppState}>Загрузить</button>
>>>>>>> parent of d4f4174... i
=======
      <button onClick={setAppState}>Загрузить</button>
>>>>>>> parent of d4f4174... i
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};
