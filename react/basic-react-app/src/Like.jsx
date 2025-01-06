import { useState } from "react";

export default function Like(){

    let stle={color:'red'};

    let [isLiked,setIsLiked]=useState(false);
    let clicked=()=>{
        setIsLiked(!isLiked);
        console.log("clicked");
    }
    return(
        <div>
            <h2>Like button</h2>
            <p onClick={clicked}>
            {isLiked ? <i className="fa-solid fa-heart" style={stle}></i>:<i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}