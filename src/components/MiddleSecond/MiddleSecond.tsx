import React from "react";
//styles
import "./_middlesecond.scss"

import Illusion from "../../assets/illustration-1 (1).jpg"
import BigComponent from "../BigComponent/BigComponent";

const Second = () => {
  return (
    <div className="middlesecond">
      <BigComponent
        heading={"Why Growing Your Business is Important"}
        subtext={
          "Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?"
        }
        buttonName={"Learn More"}
        classone={"middlesecondbig"}
        classtwo={"middlesecondbig__heading"}
        classthree={"middlesecondbig__text"}
        classfour={"middlesecondbig__button"}
      />
      <img src={Illusion} className={"middlesecond__img"} />
    </div>
  );
};

export default Second;
