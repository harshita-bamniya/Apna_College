let para=document.createElement("p");
para.innerText="hello this is my first para";
let s=document.querySelector("body");
s.append(para);

para.classList.add("para");

let h1=document.createElement("h2");
h1.innerText="Spider Man";
document.querySelector("body").append(h1);
h1.classList.add("h2");

let div=document.createElement("div");
let p=document.createElement("p");
let h3=document.createElement("h3");

p.innerText="what is para";
h3.innerText="what is heading";

div.append(p);
div.append(h3);

document.querySelector("body").append(div);
div.classList.add("box");