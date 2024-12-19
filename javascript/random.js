let num=prompt("Enter the number");
let ran=Math.floor(Math.random()*4)+1;

console.log(ran);

while(true){
    if(num==ran){
        console.log("correct");
        break;
    }
    else if(num<ran){
        console.log("guess is small");
        num=prompt("wrong! enter again");
    }
    else if(num>ran){
        console.log("guess is large");
        num=prompt("wrong! enter again");
    }
    // else{
    //     num=prompt("wrong! enter again");
    //     console.log(ran);
    //    break;
    // }
}