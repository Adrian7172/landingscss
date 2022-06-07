import React from "react";
import "./_smallComponent.scss"

const SmallComponents = ({
  title,
  icon = null,
  img = null,
  classone,
  classtwo,
  classthree,
  classfour,
  classfive,
  classmain,
}: {
  title: string;
  icon: any;
  classone: string;
  img: any;
  classtwo: string;
  classthree: string;
  classfour: string;
  classfive: string;
  classmain: string;
}) => {
  return (
    <div className={`${classmain}`}>
      {icon && React.createElement(icon, { className: `${classone}` })}
      {img && <img src={img} className={`${classtwo}`} />}
      <section className={`${classthree}`}>
        <h2 className={`${classfour}`}> {title}</h2>
        <p className={`${classfive}`}>
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
          iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
          minima quo, consequuntur. 
         </p>
      </section>
    </div>
  );
};

export default SmallComponents;
