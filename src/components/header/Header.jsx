import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.scss";

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMobileMenu = () => {
    setMenuOpen((e) => !e);
    console.log(menuOpen);
  };

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__content__logo'>
          <h2>Futureswaps</h2>
        </div>
        <nav className='header__content__nav'>
          <ul className={menuOpen ? `mobileMenu` : ""}>
            <li>
              {/* <a href='/'>Trade</a> */}
              <Link to='/home' className='link'>
                Home
              </Link>
            </li>
            <li>
              {/* <a href='/'>Charts</a> */}
              <Link to='/charts' className='link'>
                Charts
              </Link>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='header__content__toggle'>
          {menuOpen ? (
            <BiMenuAltRight onClick={handleMobileMenu} />
          ) : (
            <AiOutlineClose onClick={handleMobileMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Head;
