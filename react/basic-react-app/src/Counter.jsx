import { useState } from "react"

export default function Counter(){

    let [count,setcount]=useState(0);

    let incount=()=>{
        setcount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h2>Check the counter</h2>
            <h2>count:{count}</h2>
            <button onClick={incount}>click me</button>
        </div>
    )
}