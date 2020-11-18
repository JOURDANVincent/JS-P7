let para = document.getElementById("para");
let bBold = document.getElementById("bold");
let bColor = document.getElementById("color");
let bSize = document.getElementById("size");

bBold.onclick = function() {

    if (para.style.fontWeight == "bold") {
        para.style.fontWeight = "initial";
    } else {
        para.style.fontWeight = "bold";
    }

};

bColor.onclick = function() {

    if (para.style.color == "red") {
        para.style.color = "green";
    } else {
        para.style.color = "red";
    } 
    
};

bSize.onclick = function () {

    if (para.style.fontSize != "30px") {
        para.style.fontSize = "30px";
    } else {
        para.style.fontSize = 'initial';
    }
    
};


// function randomColor(r,g,b) {
//     let rdc = "rgb("
// }