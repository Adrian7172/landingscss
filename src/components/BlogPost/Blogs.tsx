//styles

import "./_blog.scss"


import {BsDot} from "react-icons/bs"
import { BiChevronRight} from "react-icons/bi"
const Blogs = ({img} : {img : any}) => {
  return <div className="blog">
      <img src={img} className="blog__img"/>
      <p className="blog__time">May 27, 2021<BsDot />12 comment</p>
      <h3 className="blog__heading">Important of getting a notifications</h3>
      <p className="blog__subheading">Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
      <p className="blog__readmore">Read more <BiChevronRight /></p>
  </div>;
};

export default Blogs;
