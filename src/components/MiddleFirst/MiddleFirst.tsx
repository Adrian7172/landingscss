//styles
import "./_middlefirst.scss"

import FirstImg from "../../assets/about-us-min.png";
import hoursImg from "../../assets/24-hours.svg";
import Goodreview from "../../assets/good-review.svg";
import SmallComponents from "../SmallComponent/SmallComponents";

const Data = [
    {
      title: "Professional",
      icon: null,
      img: hoursImg
    },
    {
      title: "Good Review",
      icon: null,
      img: Goodreview
    },
  ]

const First = () => {
  return (
    <div className="middlefirst">
      <div className="middlefirst__left">
          <h1 className="middlefirst__left__heading">Why You Should Choose Us</h1>

          {
              Data.map(({title, img, icon}: {title: string, img: any, icon: any}) =>{
                  return(
                      <SmallComponents 
                      key={title}
                      title={title}
                      icon = {icon}
                      img = {img}
                      classmain={"middlefirstsmall"}
                      classone={""}
                      classtwo={"middlefirstsmall__img"}
                      classthree={"middlefirstsmall__section"}
                      classfour={"middlefirstsmall__section__title"}
                      classfive={"middlefirstsmall__section__text"}
                      />

                  );
              })
          }
      </div>
      <img src={FirstImg} className="middlefirst__img" />
    </div>
  );
};

export default First;
