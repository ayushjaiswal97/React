import React from "react";

const Navbar = (props) => {
  console.log(props)
  return (
    <div style={{background: props.color}} className="bg-pink-500 mb-1 text-white px-3 py-3 flex justify-between items-center">
      <h1>{props.title}</h1>
      <div className="flex gap-10">
         {props.links.map((ele,id)=>{
            return <h4 key={id}>{ele}</h4>
         })}
      </div>
    </div>
  );
};

export default Navbar;
