let todo=[];
let req=prompt("Please enter your choice");

while(true){
    if(req=="quit"){
        console.log("quiting");
        break;
    }

    if(req=="list"){
         console.log("-----------");
         for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
         }
         console.log("---------");
        // for(i of todo){
        //     console.log(i);
        // }
    }
        else if(req=="add"){
        let task=prompt("enter the task");
        todo.push(task);
        console.log("task added");
    }

    else if(req=="delete"){
        let idx=prompt("enter the index");
        todo.splice(idx,1);
        console.log("Item deleted")
    }

    req=prompt("Please enter your choice");

}