let btn = document.getElementById('btn');
let res = document.getElementById('res');

btn.onclick = function () {
    let iNum1 = document.getElementById('num1').value;
    let iNum2 = document.getElementById('num2').value;
    let resultat = multiply(iNum1,iNum2);
    res.innerHTML = resultat;
}

function multiply(n1, n2) {
    return n1 * n2;
}


