// Criando e adicionando elementos

// createElement
const div = document.createElement("div");
div.innerText = "Olá devs";

// append => adiciona o conteúdo depois do último filho
const body = document.querySelector("body");
body.append(div);

// prepend => adiciona o conteúdo antes do primeiro filho
body.prepend(div);

// insertBefore => insere o conteúdo antes do elemento passado como parâmetro
const script = body.querySelector("script");
body.insertBefore(div, script);

const header = body.querySelector("header");
body.insertBefore(div, header.nextElementSibling); // insere antes do elemento depois do header (insere no meio)
