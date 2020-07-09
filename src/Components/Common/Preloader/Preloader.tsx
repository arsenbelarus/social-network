import React from "react";
import loader from "../../../Assets/Images/loader.gif";

const Preloader = () => {
    return (
        <div style={{width: "100px", margin: "0 auto"}}>
            <img src={loader} style={{width: "100px", height: "60px"}}/>
        </div>
    )
}

export default Preloader