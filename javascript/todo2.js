let h2=document.querySelector("h2");
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerHTML=inp.value;
    let btn=document.createElement("button");
    btn.innerText="delete";
    btn.classList.add("delete");
    item.appendChild(btn);
    list.appendChild(item);
    inp.value="";
});

