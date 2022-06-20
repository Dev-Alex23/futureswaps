import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./coin.scss";
import CoinItem from "../coinItem/CoinItem";
import CoinPage from "../../pages/CoinPage";

const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
    console.log(target.value);
  };

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setCoins(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <>
      <div className='form'>
        <h1>Search Crypto</h1>
        <input
          type='text'
          placeholder='Bitcoin'
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className='coin-head-row'>
        <div className='coin-head-row__content'>
          <div className='coin-name'>
            <h4>Name</h4>
          </div>
          <div className='coin-symbol'>
            <h4>Symbol</h4>
          </div>
          <div className='coin-price'>
            <h4>Price</h4>
          </div>
          <div className='change'>
            <h4>24Hr</h4>
          </div>
          <div className='coin-volume'>
            <h4>Volume</h4>
          </div>
          <div className='coin-cap'>
            <h4>Market Cap</h4>
          </div>
          <div className='coin-cap'>
            <h4>SparkLine</h4>
          </div>
        </div>

        {filterCoins.map((coin) => {
          return (
            <Link to={`/charts/${coin.id}`} element={<CoinPage />} key={coin.id}>
              <CoinItem key={coin.id} {...coin} />
            </Link>
          );
        })}

        {/* {coins.map((coin) => {
          return (
            <CoinItem
              key={coin.id}
              id={coin.id}
              image={coin.image}
              current_price={coin.current_price}
              price_change_24h={coin.price_change_24h}
              total_volume={coin.total_volume}
              market_cap={coin.market_cap}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default Coin;
