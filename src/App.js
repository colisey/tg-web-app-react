import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header/Header";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();

    // return () => {
    //   second;
    // };
  }, []);

  
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
