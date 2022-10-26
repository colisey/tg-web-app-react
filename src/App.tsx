import React from 'react';
import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { UseTelegram } from "./core/hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import { ProductList } from "./components/ProductList/ProductList";
import { Form } from "./components/Form/Form";


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
    // <Header />
    <Routes>
      <Route index element={<ProductList />} />
      <Route path={'/form'} element={<Form />} />
    </Routes>
    {/* <button onClick={onToggleButton} >toggle</button> */}
  </div>
  );
}

export default App;
