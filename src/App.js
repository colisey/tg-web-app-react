import { useEffect } from "react";
import "./App.css";
// import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { UseTelegram } from "./hooks/useTelegram";



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
      <button onClick={onToggleButton} >toggle</button>
    </div>
  );
}

export default App;
