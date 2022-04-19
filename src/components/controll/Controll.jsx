import React from "react";
import "./Controll.scss";

import leverage from "../../assets/images/leverage.png";
import liquidity from "../../assets/images/liquidity.png";
import transaction from "../../assets/images/transaction.png";
import correct from "../../assets/images/correct.png";
import permissionless from "../../assets/images/permissionless.png";
import compose from "../../assets/images/compose.png";

const Control = () => {
  return (
    <div className='controll'>
      <div className='controll__content'>
        <div className='controll__content__heading'>
          <h1>Take full control of your crypto</h1>
          <div className='sub-heading'>
            <p>
              Built on Ethereum. Our non-custodial perpetuals exchange focuses on one
              thing: being the best execution platform form trades.
            </p>
          </div>
        </div>
        <div className='controll__content__wrapper'>
          <div className='container'>
            <div className='container__image'>
              <img src={leverage} alt='' />
            </div>
            <div className='container__text'>Leverage up to 20x</div>
          </div>
          <div className='container'>
            <div className='container__image'>
              <img src={liquidity} alt='' />
            </div>
            <div className='container__text'>Low-risk liquidity pools</div>
          </div>
          <div className='container'>
            <div className='container__image'>
              <img src={transaction} alt='' />
            </div>
            <div className='container__text'>Super cheap transactions</div>
          </div>
          <div className='container'>
            <div className='container__image'>
              <img src={correct} alt='' />
            </div>
            <div className='container__text'>Utilizes the most liquid AMMs</div>
          </div>
          <div className='container'>
            <div className='container__image'>
              <img src={permissionless} alt='' />
            </div>
            <div className='container__text'>Permissionless trading</div>
          </div>
          <div className='container'>
            <div className='container__image'>
              <img src={compose} alt='' />
            </div>
            <div className='container__text'>Fully composable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
