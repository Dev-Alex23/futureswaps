import React from "react";
import "./Hero.scss";
import blue from "../../assets/images/Graphic-Blue-Wave.png";
import teal from "../../assets/images/Graphic-Teal-Wave.png";
import purple from "../../assets/images/Graphic-Purple-Wave.png";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wave-container'>
        <div className='blue-container'>
          <img src={blue} alt='Graphic-Blue-Wave' />
        </div>
        <div className='teal-container'>
          <img src={teal} alt='Graphic-Teal-Wave' />
        </div>
        <div className='purple-container'>
          <img src={purple} alt='Graphic-Purple-Wave' />
        </div>
      </div>

      <div className='hero__content'>
        <div className='hero__content__info-container'>
          <p>Built on ETH. Powerd by you</p>
          <div className='hero__content__info-container__heading'>
            <h1>The Future Of Perpetuals Is Here</h1>
          </div>
          <div className='hero__content__info-container__sub-heading'>
            <p>
              Leverage up to 20x on a procols trusted with billions for its price
              execution, super low fees and flawless security record.
            </p>
          </div>
          <div className='hero__content__cta'>
            <button id='fill'>Start Trade</button>
            <button id='outline'>Add Funds</button>
          </div>
          <div className='hero__content__trade'>
            <div className='hero__content__trade__alltime'>
              <p>All time trade</p>
              <p>£1,000,000,000</p>
            </div>
            <div className='hero__content__trade__alltime'>
              <p>Total Trade</p>
              <p>100,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
