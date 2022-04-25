import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Coin from "./components/coin/Coin";
import Home from "./components/home/Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='charts' element={<Coin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
