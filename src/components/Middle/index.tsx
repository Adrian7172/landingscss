import React from "react";
import First from "./MiddleFirst";
import Fourth from "./MiddleFourth";
import Second from "./MiddleSecond";
import Third from "./MiddleThird";
import Slider from "./slider/Slider";
import Blogpost from "./Blog/Blogpost";
import Footer from "./Footer/Footer";

const Middle = () => {
  return (
    <div className="middle">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Slider />
      <Blogpost />
      <Footer />
    </div>
  );
};

export default Middle;
