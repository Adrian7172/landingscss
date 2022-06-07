//styles
import "./_navbar.scss";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  //handle toggle

  const HandleHamburger = () => {
    setToggle(!toggle);
    if (openSub === true && toggle === false) {
      setOpenSub(false);
    }
    if (open === true && toggle === false) {
      setOpen(false);
    }
  };

  //handle menu

  const Handlemenu = () => {
    setOpen(!open);

    if (openSub === true && open === false) {
      setOpenSub(false);
    }
  };

  //sub menu handle
  const HandleSubmenu = () => {
    setOpenSub(!openSub);
  };

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
          <li id="open-one" onClick={Handlemenu}>
            Dropdown <FiChevronDown className="header__nav__list__icon" />
          </li>
          <ul
            id="subopen-one"
            className={open ? "submenu display-block" : "submenu"}
          >
            <li>Menu one</li>
            <li id="open-two" onClick={HandleSubmenu}>
              Menu two <FiChevronRight className="icon" />
            </li>
            <ul className={openSub ? "subSubmenu display-block" : "subSubmenu"}>
              <li>Sub Menu One</li>
              <li>Sub Menu two</li>
              <li>Sub Menu two</li>
            </ul>
            <li>Menu three</li>
          </ul>
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
