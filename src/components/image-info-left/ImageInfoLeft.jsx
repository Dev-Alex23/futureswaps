import React from "react";
import "./image-info-left.scss";

import block from "../../assets/images/block.png";

const ImageInfoLeft = () => {
  return (
    <div className='image-info-container left'>
      <div className='image-info-container__image-container'>
        <img src={block} alt='Meme' />
      </div>
      <div className='image-info-container__info-container left__info-container'>
        <div className='heading'>
          <h1>Built on web3. Owned by you.</h1>
        </div>
        <div className='sub-text'>
          <p>
            Unlike Palpatine, we love democracy. That’s why our platform is designed to be
            governed by you.
          </p>
          <p>
            Want leveraged exposure on your favorite crypto assets? Get enough people from
            the Futureswap community to back you and the protocol will automatically add
            it as an exchange.
          </p>
          <p>
            Want to passively earn high yields from trade fees and FST rewards? Simply
            provide liquidity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageInfoLeft;
