import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import "./coinPage.scss";

const CoinPage = () => {
  const [coinInfo, setCoinInfo] = useState({});

  let params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoinInfo(response.data);
      })
      .catch((e) => console.error(e));
  }, [url]);
  return (
    <>
      <div className='coinInfo'>
        <div className='coinInfo__content'>
          <div className='coin-name'>
            <h1>{coinInfo.name}</h1>
          </div>
          <div className='coinInfo__content__coin-info-container'>
            <div className='coin-image'>
              <img src={coinInfo?.image?.large} alt={coinInfo.name} />
              <div className='coin-symbol'>
                <p>{coinInfo.name}</p>
                <p>({coinInfo.symbol}/USD)</p>
              </div>
            </div>
            <div className='coin-amount'>
              <h2>${coinInfo?.market_data?.current_price?.usd.toLocaleString()}</h2>
            </div>
          </div>
          <div className='coinInfo__content__coin-price'>
            <div className='market-info'>
              <p>24 Hour Low</p>
              <p id='red'>${coinInfo?.market_data?.low_24h["usd"].toLocaleString()}</p>
            </div>
            <div className='market-info'>
              <p>24 Hour High</p>
              <p id='green'>${coinInfo?.market_data?.high_24h["usd"].toLocaleString()}</p>
            </div>
            <div className='market-info'>
              <p>Market Cap</p>
              <p>${coinInfo?.market_data?.market_cap["usd"].toLocaleString()}</p>
            </div>
            <div className='market-info'>
              <p>Volume</p>
              <p>${coinInfo?.market_data?.total_volume["usd"].toLocaleString()}</p>
            </div>
          </div>
          <div className='coinInfo__content__about'>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coinInfo.description ? coinInfo.description["en"] : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
      {/* <div>{coinInfo.id}</div> */}
    </>
  );
};

export default CoinPage;
