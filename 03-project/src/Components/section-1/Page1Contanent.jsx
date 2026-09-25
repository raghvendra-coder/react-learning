import React from "react";
import Left from "./Left";
import Right from "./Right"

const Page1Contanent = (props) =>{
    return(
        <div className=" px-18 py-10 h-[90vh] flex justify-between gap-20">
            <Left />
            <Right users ={props.users}/>          
        </div>

    )
}
export default Page1Contanent