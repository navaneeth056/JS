const p = document.createElement("p");
const parentNode = document.querySelector("#container");
parentNode.appendChild(p);
p.textContent = "Hey, I'm Red";
p.style.color = "red";

let h3 = document.createElement("h3");
parentNode.appendChild(h3);
h3.textContent = "Hey , I'm blue h3";
h3.style.color = "blue";

let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "thick solid black";

let divParent = document.querySelector("div");
let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

let p1 = document.createElement("p");
div.appendChild(p1);
p1.textContent = "Me too!";
divParent.insertBefore(div, null);
