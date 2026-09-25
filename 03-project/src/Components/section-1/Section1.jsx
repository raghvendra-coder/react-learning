import React from "react";
import Navbar from "./Navbar";
import Page1Contanent from "./Page1Contanent";


const Section1 = (props) => {
    // console.log(props)

    return (
        <div className="h-screen w-fill ">
            <Navbar />
            <Page1Contanent users = {props.users} />
            
        </div>   
    )
}

export default Section1