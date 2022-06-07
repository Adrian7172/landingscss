//styles
import "./_middle.scss"

import First from "../MiddleFirst/MiddleFirst";
import Fourth from "../MiddleFourth/MiddleFourth";
import Second from "../MiddleSecond/MiddleSecond";
import Third from "../MiddleThird/MiddleThird";
import Slider from "../Slider/Slider";
import Blogpost from "../BlogPost/Blogpost";
import Footer from "../Footer/Footer";

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
