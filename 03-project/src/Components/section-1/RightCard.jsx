
import React from "react";
import RightCardContanent from "./RightCardContanent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 relative rounded-4xl overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} alt="Card" />      
      <RightCardContanent id={props.id} tag={props.tag}/>
    </div>
  );
};

export default RightCard;


