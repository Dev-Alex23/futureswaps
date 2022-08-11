import React from "react";
import { SparklinesLine } from "react-sparklines";
import { Sparklines } from "react-sparklines";
import "./coinItem.scss";

const CoinItem = ({
  id,
  image,
  current_price,
  price_change_percentage_24h,
  total_volume,
  market_cap,
  sparkline_in_7d,
}) => {
  return (
    <div className='coin-row'>
      <div className='coin-row__content'>
        <div className='name'>
          <p>{id}</p>
        </div>
        <div className='img'>
          <img src={image} alt={id} />
        </div>
        <div className='price'>
          <p>${current_price.toLocaleString()}</p>
        </div>
        {price_change_percentage_24h < 0 ? (
          <div className='24hr red'>
            <p>{price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        ) : (
          <div className='24hr green'>
            <p>{price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        )}

        <div className='volume'>
          <p>{total_volume.toLocaleString()}</p>
        </div>
        <div className='market-cap'>
          <p>${market_cap.toLocaleString()}</p>
        </div>
        <div className='market-cap'>
          <Sparklines data={sparkline_in_7d?.price}>
            {price_change_percentage_24h.toFixed(2) < 0 ? (
              <SparklinesLine color='red' />
            ) : (
              <SparklinesLine color='teal' />
            )}
          </Sparklines>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
