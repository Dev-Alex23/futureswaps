import React from "react";
import "./image-info-right.scss";

import meme from "../../assets/images/meme.png";

const ImageInfoRight = () => {
  return (
    <div className='image-info-container'>
      <div className='image-info-container__image-container'>
        <img src={meme} alt='Meme' />
      </div>
      <div className='image-info-container__info-container'>
        <div className='heading'>
          <h1>Come for the memes, stay for the protocol.</h1>
        </div>
        <div className='sub-text'>
          <p>
            While leverage trading on exotic pairs is great, having a Discord server full
            of memes and alpha is even better. ‍
          </p>
          <p>
            Join our community of meme-loving masterminds and get the inside scoop on
            what’s coming down the pipeline.
          </p>
        </div>
        <div className='image-info-container__btn-CTA'>
          <button id='fill'>Join Server</button>
        </div>
      </div>
    </div>
  );
};

export default ImageInfoRight;
