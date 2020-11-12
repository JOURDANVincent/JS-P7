// (name) => {
//     `Bonjour, ${name} ! Comment vas-tu ?`;
//   }

let iDiv = document.querySelector('div');
let urName = window.prompt("Quel est ton nom ??");

function getName (name) { return `Bonjour, ${name} ! Comment vas-tu ?`;}

let result = getName (urName);
iDiv.innerHTML = result;