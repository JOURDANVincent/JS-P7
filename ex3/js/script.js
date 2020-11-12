let para = document.getElementById("para");
let bBold = document.getElementById("bold");
let bColor = document.getElementById("color");
let bSize = document.getElementById("size");

bBold.onclick = () => para.style.fontWeight = "bold";

bColor.onclick = () => para.style.color = "red";

bSize.onclick = () => para.style.fontSize = "30px";
