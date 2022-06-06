import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  //handle toggle

  const HandleHamburger = () => {
    setToggle(!toggle);
  };
  console.log(toggle);

  return (
    <header className="header">
      <nav className="header__nav">
        <h3 className="header__nav__logo">Impact</h3>
        <ul
          className={`header__nav__list ${
            toggle ? "header__nav__ismenu" : null
          }`}
        >
          <div className="header__nav__list__close">
            <GrClose
              className="header__nav__list__close__icon"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
          <GrClose className="header__nav__list__close" />
          <li>Home</li>
          <li id="open-one">
            Dropdown <FiChevronDown className="header__nav__list__icon" />
            <ul className="submenu">
              <li>Menu one</li>
              <li id="open-two">
                Menu two <FiChevronRight className="icon" />
                <ul className="subSubmenu">
                  <li>Sub Menu One</li>
                  <li>Sub Menu two</li>
                  <li>Sub Menu two</li>
                </ul>
              </li>
              <li>Menu three</li>
            </ul>
          </li>
          <li>Services</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <GiHamburgerMenu
          className="header__nav__hamburger"
          onClick={HandleHamburger}
        ></GiHamburgerMenu>
      </nav>
    </header>
  );
};

export default Navbar;
