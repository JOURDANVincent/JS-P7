let para = document.getElementById("para");
let bBold = document.getElementById("bold");
let bColor = document.getElementById("color");
let bSize = document.getElementById("size");

bBold.onclick = function() {
    para.style.fontWeight = "bold";
    //alert("bold");
};

bColor.onclick = function() {
    para.style.color = "red";
    
};

bSize.onclick = function () {
    para.style.fontSize = "30px";
};