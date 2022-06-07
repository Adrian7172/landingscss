//styles
import "./_slider.scss";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import person1 from "../../assets/person_1.jpg";
import person2 from "../../assets/person_2.jpg";
import person3 from "../../assets/person_3.jpg";

const Slider = () => {
  const sliderData = [
    {
      img: person1,
      name: "Maria Jones",
    },
    {
      img: person2,
      name: "Varia Jones",
    },
    {
      img: person3,
      name: "Laria Jones",
    },
  ];

  const slideLength = sliderData.length;

  //Handle dot

  const HandleDot = (index: any) =>{
    setCurrentSlide(index)
  }

  //handle prev slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  //handle next slide

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    let slider = setInterval(
      () => [
        setCurrentSlide(
          currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        ),
      ],
      5000
    );
    return () => {
      clearInterval(slider);
    };
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <div className="slider">
        <IoIosArrowBack className="slider__arrow  prev" onClick={prevSlide} />
        <IoIosArrowForward className="slider__arrow next" onClick={nextSlide} />

        {sliderData.map((ele: any, index: any) => {
          return (
            <>
              <div
                className={
                  index === currentSlide ? " current slider__img" : "slider__img"
                }
                key={index}
              >
                {index === currentSlide && (
                  <>
                    <img src={ele.img} className="slider__img__photo"></img>
                    <h3 className="slider__img__heading">{ele.name}</h3>
                    <p className="slider__img__subheading">Customer</p>
                    <p className="slider__img__text">
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </>
                )}
              </div>
            </>
          );
        })}
        <div className="slider__checked">
          {Array.from({length: 3}).map((item: any, index: any) =>{
            return(
                <div className={currentSlide === index ? "dot active": "dot" } onClick={()=> {
                  HandleDot(index)
                }}>
                  
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
