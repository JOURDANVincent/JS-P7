let imgSizing = document.querySelector('img');

imgSizing.onclick = () => {
    
    let w = imgSizing.style.width;

    if (w === '50%') {
        imgSizing.style.width = "100%";
    } else {
        imgSizing.style.width = "50%";
    }
    console.log(imgSizing.style.width);
}
    
