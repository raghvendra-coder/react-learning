import React from "react";
import RightCard from "./RightCard";

const Right = (props) =>{
    return(
        <div id="right" className="h-full w-2/3 p-4 overflow-x-auto flex flex-nowrap gap-4">
            {props.users.map(function(elem , idx){
                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
            })}
        </div>
    )
}

export default Right