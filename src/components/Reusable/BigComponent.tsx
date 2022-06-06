import React from "react";

const BigComponent = ({
  heading,
  subtext,
  buttonName,
  classone,
  classtwo,
  classthree,
  classfour,
}: {
  heading: any;
  subtext: string;
  buttonName: string;
  classone: string;
  classtwo: string;
  classthree: string;
  classfour: string;
}) => {
  return (
    <div className={` ${classone}`}>
      <h1 className={` ${classtwo} `}>{heading}</h1>

      <p className={` ${classthree}`}>{subtext}</p>

      <button className={` ${classfour}`}>{buttonName}</button>
    </div>
  );
};

export default BigComponent;
