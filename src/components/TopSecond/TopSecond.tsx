//styles
import "./_topSecond.scss"


import SmallComponents from "../SmallComponent/SmallComponents";
import { MdLayers } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { MdLocalMall } from "react-icons/md";

const Data = [
  {
    title: "Design",
    icon: MdLayers,
    img: null
  },
  {
    title: "Application",
    icon: MdOutlinePhonelink,
    img: null
  },
  {
    title: "eCommerce",
    icon: MdLocalMall,
    img: null
  },
]
const Second = () => {
  return <div className="second">
  {Data.map(({title, icon, img}: {title: string, icon:any, img: any}) =>{
    return(<>
     <SmallComponents
     key={title}
     title={title}
     icon = {icon}
     img = {img}
     classmain={"firstsmall"} 
     classone={"firstsmall__icon"}
     classtwo={""}
     classthree={"firstsmall__section"}
     classfour={"firstsmall__section__title"}
     classfive={"firstsmall__section__text"}
   />
   </>);
  })}
  
  </div>;
};

export default Second;
