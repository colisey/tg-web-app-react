import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { UseTelegram } from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import { ProductList } from "./components/ProductList/ProductList";
import { Form } from "./components/Form/Form";
import { Contacts } from "./components/Contacts/Contacts";
import { Basket } from "./components/Basket/Basket";
import { Gallery } from "./components/Gallery/Gallery";
import { Cases } from "./components/Cases/Cases";
import { Hellow } from "./components/Hellow/Hellow";



function App() {
  const {tg, onToggleButton} = UseTelegram()

  useEffect(() => {
    tg.ready();

    // return () => {
    //   second;
    // };
  }, []);

  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Hellow />} />
        <Route path={'/form'} element={<Form />} />
        <Route path={'/shop'} element={<ProductList />} />
        <Route path={'/basket'} element={<Basket />} />
        <Route path={'/gallery'} element={<Gallery />} />
        <Route path={'/cases'} element={<Cases />} />
        <Route path={'/contacts'} element={<Contacts />} />
      </Routes>
      {/* <button onClick={onToggleButton} >toggle</button> */}
    </div>
  );
}

export default App;