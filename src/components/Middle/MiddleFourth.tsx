import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import hero from "../../assets/hero-min.jpg";
import right from "../../assets/icons8-done.svg";
import VideoPlayer from "./VideoPlayer";
import { GoX } from "react-icons/go";

const Fourth = () => {
  const Data = [
    {
      title: "Deserunt harum incidunt",
    },
    {
      title: "Ex nesciunt est temporibus ipsum",
    },
    {
      title: "Vel rem eveniet facere et velit sunt",
    },
    {
      title: "Aspernatur eaque quis",
    },
    {
      title: "Dolorem magnam quisquam? Facere",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="fourth">
      <div className="fourth__video--popup">
        <div>
          <img
            src={hero}
            className={"fourth__video--popup__img"}
            onClick={() => setOpen(true)}
          />
          <span
            className="fourth__video--popup__img__button "
            onClick={() => setOpen(true)}
          >
            <BiPlay
              className="fourth__video--popup__img__button__play"
              onClick={() => setOpen(true)}
            />
          </span>
        </div>
      </div>

      {open == true && (
        <div className="video">
          <VideoPlayer />
          <GoX
            className="icons"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      )}
      <div className="fourth__text">
        <h1 className="fourth__text__heading">Get Started with Impact</h1>

        <h3 className="fourth__text__subheading">
          Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
          iure recusandae.
        </h3>
        <ul className="fourth__text__subtext">
          {Data.map(({ title }: { title: string }) => {
            return (
              <li>
                <img src={right} className="fourth__text__tick" />
                {title}
              </li>
            );
          })}
        </ul>
        <button className="middlesecondbig__button">Learn more</button>
      </div>
    </div>
  );
};

export default Fourth;
