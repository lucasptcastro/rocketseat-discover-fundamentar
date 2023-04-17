// MANIPULANDO CONTEÚDOS

// textContent (acrescenta no conteúdo)
const elementTextContent = document.querySelector("#blog-title1");
elementTextContent.textContent += ", Lucas!";

// innerText (troca todo o texto)
const elementInnerText = document.querySelector("#blog-title2");
elementInnerText.innerText = "Seja bem-vindo, Lucas!";

// innerHTML (troca todo o texto por um html)
const elementInnerHtml = document.querySelector("#blog-title3");
elementInnerHtml.innerHTML = "Seja bem-vindo, Lucas! <small> !!! </small>";

// value (troca o value da tag)
const elementValue = document.querySelector("input");

console.log(elementValue.value); // era este value
elementValue.value = "novo-valor"; // e foi alterado para este
console.log(elementValue.value);

// setAttribute | removeAttribute (adiciona atributos | remove atributos)
const header = document.querySelector("header");

header.setAttribute("id", "header");
header.removeAttribute("class");
header.setAttribute("class", "bg red");

console.log(`id do header: ${header.getAttribute("id")}`);
console.log(`class do header: ${header.getAttribute("class")}`);
