
//styles 
import "./_top.scss"

import First from "../TopFirst/TopFirst"
import Second from "../TopSecond/TopSecond";

const Top = () => {
  return <div className="topmain">
    <First />
    <Second />
  </div>;
};

export default Top;
