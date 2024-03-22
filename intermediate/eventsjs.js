let butt = document.querySelector("#but");
function alertfunction() {
  let res = document.querySelector("#res");
  res.textContent = "Yay baby u did it";
}
let re = document.querySelector("#reset");
function resset() {
  let ans = document.querySelector("#res");
  ans.textContent = "See here when u click above";
}

butt.addEventListener("click", alertfunction); // one method
re.onclick = resset; // another method
