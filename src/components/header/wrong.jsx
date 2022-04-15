import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// import classes from "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleToggle = () => {
    setMenuOpen((e) => {
      console.log(e);
      return !e;
    });
  };

  return (
    <header className='header'>
      <div className='header__content'>
        <h2 className='header__content__logo'>Futureswap</h2>
        <nav className='header__content__nav'>
          <ul>
            <li>
              <a href='/'>Trade</a>
            </li>
            <li>
              <a href='/'>Charts</a>
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
            <BiMenuAltRight onClick={handleToggle} />
          ) : (
            <AiOutlineClose onClick={handleToggle} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
