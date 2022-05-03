import Home from "./components/home/Home";
import CoinPage from "./pages/CoinPage";
import "./styles/app.scss";
import Coin from "./components/coin/Coin";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/charts' element={<Coin />} />
        <Route path='/charts/:id' element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
