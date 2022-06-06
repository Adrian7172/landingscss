import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__first">
          <div className="one">
            <h3 className="footer__content__first__heading">About Impact</h3>
            <p className="footer__content__first__para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="footer__content__first__list">
              <li>
                <AiFillInstagram className="icon" />
              </li>
              <li>
                <AiFillTwitterCircle className="icon" />
              </li>
              <li>
                <FaFacebook className="icon" />
              </li>
              <li>
                <AiFillLinkedin className="icon" />
              </li>
              <li>
                <FaPinterest className="icon" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__content__first__heading">Links</h3>

            <ul className="footer__content__first__list2">
              <li>About Us</li>
              <li>Services</li>
              <li>News</li>
              <li>Carrier</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="footer__content__first__heading">Company</h3>

            <ul className="footer__content__first__list2">
              <li>About Us</li>
              <li>Services</li>
              <li>News</li>
              <li>Carrier</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="footer__content__first__heading">Contact us</h3>

            <ul className="footer__content__first__list2">
              <li>43 Raymouth Rd. Baltemoer, London 3910</li>
              <li>+1(123)-456-7890</li>
              <li>+1(123)-456-7890</li>
              <li>info@mydomain.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__content__second">
          <p>Copyright ©2022. All Rights Reserved. — Designed with love by <span>Untree.co</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;



