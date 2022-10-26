import { useState, FC } from "react";
// import { itemType, ProductListProps, ProductsType } from "./ProductList.props";
import { UseTelegram } from "../../core/hooks/useTelegram";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import { products } from "../../api/api";




const getTotalPrice = (items) => { //(items: ProductsType): number
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export const ProductList = () => { //: FC<ProductListProps>
  
  const { tg } = UseTelegram();

  const [addedItems, setAddedItems] = useState([]); //<ProductsType>
  const [appState, setAppState] = useState();


  const onAdd = (product) => { //: itemType

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

    return (
      <div className={styles.list}>
        <button onClick={setAppState}>Загрузить</button>

        {products.map((item) => (
          <ProductItem product={item} onAdd={onAdd} className={"item"} />
        ))}
      </div>
    );
  }}}
