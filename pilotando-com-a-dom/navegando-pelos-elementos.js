// Navegando pelos elementos

// parentNode ou parentElement => coleta o elemento pai
const elementParentElement = document.querySelector("h1");
console.log(elementParentElement.parentElement);

// childNodes => mostra os filhos. leva em consideração os espaços (definidos como "text")
const elementChildNodes = document.querySelector("body");
console.log(elementChildNodes.childNodes);

// children => mostra os filhos. mostrando apenas as tags
const elementChildren = document.querySelector("body");
console.log(elementChildren.children);

// firstChild => mostra o primeiro filho, levando em consideração os espaços (definidos como "text")
const elementFirstChild = document.querySelector("body");
console.log(elementFirstChild.firstChild);

// firstElementChild => mostra o primeiro elemento filho. mostrando apenas as tags
const elementFirstElementChild = document.querySelector("body");
console.log(elementFirstElementChild.firstElementChild);

// lastChild => mostra o último filho, levando em consideração os espaços (definidos como "text")
const elementLastChild = document.querySelector("body");
console.log(elementLastChild.lastChild);

// lastElementChild => mostra o último elemento filho. mostrando apenas as tags
const elementlastElementChild = document.querySelector("body");
console.log(elementlastElementChild.lastElementChild);

// nextSibling => mostra o próximo irmão. levando em consideração os espaços (definidos como "text")
const elementNextSibling = document.querySelector("header");
console.log(elementNextSibling.nextSibling);

// nextElementSibling => mostra o próximo elemento irmão. mostrando apenas as tags
const elementNextElementSibling = document.querySelector("header");
console.log(elementNextSibling.nextElementSibling);

// previousSibling => mostra o último irmão. levando em consideração os espaços (definidos como "text")
const elementPreviousSibling = document.querySelector("header");
console.log(elementPreviousSibling.previousSibling);

// nextElementSibling => mostra o último elemento irmão. mostrando apenas as tags
const elementPreviousElementSibling = document.querySelector("body script");
console.log(
  `Último elemento irmão: ${elementPreviousElementSibling.previousElementSibling}`
);
