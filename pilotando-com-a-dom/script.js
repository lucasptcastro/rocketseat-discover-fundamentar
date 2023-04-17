// getElementById (element)
const elementById = document.getElementById("blog-title");
console.log(elementById);

// getElementsByClassName (HTMLCollection)
const elementByClassname = document.getElementsByClassName("my-blog");
console.log(elementByClassname);

// getElementsByTagName (HTMLCollection)
const elementByTag = document.getElementsByTagName("meta");
console.log(elementByTag);

// querySelector (element) => seleciona o primeiro elemento através da classe, atributo, id
const elementByQuery = document.querySelector(".my-blog"); // coleta o primeiro item da classe "my-blog"
console.log(elementByQuery);

// querySelectorAll (Nodelist = dá pra usar um foreach, já o HTMLCollection não) => seleciona todos os elementos através da classe, atributo, id
const elementByQueryAll = document.querySelectorAll("[href]"); // coleta todos os itens que possuem o atributo href
elementByQueryAll.forEach((el) => console.log(`O elemento queryAll: ${el}`));
