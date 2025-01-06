function onClick(){
    console.log("hello");
}

function hey(){
 console.log("hey");
}

export default function Button(){
    return(
        <div>
        <button onClick={onClick}>click me</button>
        <p onMouseEnter={hey}>how are you</p>
        </div>
    )
}

