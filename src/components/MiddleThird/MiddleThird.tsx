//styles
import "./_middlethird.scss";

import hoursImg from "../../assets/24-hours.svg";
import Goodreview from "../../assets/good-review.svg";
import Quotation from "../../assets/quotation.svg";
import SmallComponents from "../SmallComponent/SmallComponents";

const Data = [
  {
    title: "Professional",
    icon: null,
    img: hoursImg,
  },
  {
    title: "Good Review",
    icon: null,
    img: Goodreview,
  },
  {
    title: "24/7 Support",
    icon: null,
    img: Quotation,
  },
];
const Third = () => {
  return (
    <div className="middlethird">
      {Data.map(
        ({ title, img, icon }: { title: string; img: any; icon: any }) => {
          return (
            <SmallComponents
              key={title}
              title={title}
              icon={icon}
              img={img}
              classmain={"middlethirdsmall"}
              classone={""}
              classtwo={"middlefirstsmall__img"}
              classthree={"middlefirstsmall__section"}
              classfour={"middlefirstsmall__section__title"}
              classfive={"middlefirstsmall__section__text"}
            />
          );
        }
      )}
    </div>
  );
};

export default Third;
