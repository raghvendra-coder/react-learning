import React from "react";


const RightCardContanent = (props) =>{
  console.log(props.id+1)
    return(
        <div>
            <div className="absolute top-0 left-0 h-full w-full text-white flex flex-col justify-between p-6">
        {/* Top */}
        <h2 className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black text-xl font-bold">{props.id+1} </h2>
        {/* Bottom */}
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            fugit numquam, rerum architecto qui id.
          </p>

          <div className="flex items-center justify-between">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-full font-medium">
              {props.tag}
            </button>

            <button className="bg-blue-600 text-white h-10 w-10 rounded-full flex items-center justify-center">
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
            </div>
         </div>
    )
}
export default RightCardContanent