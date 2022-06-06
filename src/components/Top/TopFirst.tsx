import LeftImg from "../../assets/leftImg.png";
import RightImg from "../../assets/rightImg.png";
import BigComponent from "../Reusable/BigComponent";


const First = () => {
  return <div
  className="topfirst">
        <img src={LeftImg} alt="" className="topfirst__left" />
        <BigComponent
          heading={"Let's growth your business with us"}
          subtext={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
          buttonName={"Get In touch"}
          classone={"firstbig"}
          classtwo={"firstbig__heading "}
          classthree={"firstbig__text "}
          classfour={"firstbig__button"}
        />
        <img src={RightImg} alt="" className="topfirst__right" />
  </div>;
};

export default First;
