let iDiv = document.querySelector('div');

getStringLength = (string) => {
  let stringLength;
  if(string.length === 1){
      stringLength = `La chaîne contient ${string.length} seul caractère`;
    } else {
      stringLength = `La chaîne contient ${string.length} caractères`;
    }
    
    return stringLength;
};

let answer = window.prompt("Entre un mot ou une phrase ...")
let result = getStringLength(answer);
iDiv.innerHTML = result;
// console.log(result);