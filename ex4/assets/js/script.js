let imgSizing = document.querySelector('img');

//console.log(this === imgSizing)

imgSizing.onclick = () => {
    let w = imgSizing.width;
    console.log(imgSizing.width);
    if (w > 1800) {
        imgSizing.style.width = "50%";
    } else {
        imgSizing.style.width = "100%";
    }
}
    
