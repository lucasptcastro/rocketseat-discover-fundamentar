// Alterando estilos

// Alterando atributo css pelo style
const elementStyle = document.querySelector("#blog-title1");
elementStyle.style.backgroundColor = "#f9f3D2";

// Alterando atributo css pelo classList
const elementClassList = document.querySelector("#blog-title2");
elementClassList.classList.add("active"); // adiciona a class active
elementClassList.classList.remove("active"); // remove a class active
elementClassList.classList.toggle("active"); // se não tiver a classe active, ele adiciona. se tiver, ele remove

console.log(elementClassList.classList);
