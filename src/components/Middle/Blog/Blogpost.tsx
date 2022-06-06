
import post1 from "../../../assets/post1.jpg"
import post2 from "../../../assets/post2.jpg"
import post3 from "../../../assets/post3.jpg"

import Blogs from "./Blogs";

const Blogpost = () => {
  return (
    <div className="bpost">
      <h1 className="bpost__heading">Blog Posts</h1>
      <p className="bpost__subheading">
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit consequuntur.
      </p>
      <div className="bpost__blogs">
        <Blogs img={post1}/>
        <Blogs img={post2}/>
        <Blogs img={post3}/>
        
      </div>
    </div>
  );
};

export default Blogpost;
