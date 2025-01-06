import { useState } from "react"
export default function Ludo(){
    let [moves,setmoves]=useState({blue:0,red:0,yellow:0,green:0})
    function updateblue(){
        moves.blue+=1;
        console.log(moves.blue);
        // setmoves({...moves,blue:moves.blue+1});
        setmoves((prevmoves)=>{
           return {...prevmoves,blue:prevmoves.blue+1}
        })

    }
    function updateyellow(){
        moves.yellow+=1;
        console.log(moves.blue);
        // setmoves({...moves,blue:moves.blue+1});
        setmoves((prevmoves)=>{
           return {...prevmoves,yellow:prevmoves.yellow+1}
        })

    }
    return(
        <div>
            <p>LudoBoard</p>
            <div>
                <p>Blue moves:{moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
                <p>Red moves:{moves.red}</p>
                <button style={{backgroundColor:"red"}} >+1</button>
                <p>Yellow moves:{moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
                <p>Green moves:{moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
            </div>
        </div>
    )
}