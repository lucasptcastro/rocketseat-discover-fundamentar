// Eventos

const input = document.querySelector("input");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

// Sempre que o print for chamado, irá mostrar "print" no console
function print() {
  console.log("print");
}

// Ativa sempre que liberar uma tecla no input
input.onkeyup = function () {
  console.log("onKeyUp ativado");
};

// Ativa sempre que o usuário pressiona uma tecla
input.onkeydown = function () {
  console.log("onKeyDown ativado");
};

// Ativa sempre que o usuário pressiona uma tecla alfanumérica
input.onkeypress = function () {
  console.log("onKeyPress ativado");
};

// Adiciona um "ouvidor de eventos". Quando clicar no h1, vai disparar a função print
h1.addEventListener("click", print);

// Forma de adicionar várias funções a um mesmo elemento. Se tivesse dois h1.onclick() ele só ia considerar o último
h1.addEventListener("click", print);
h1.addEventListener("click", function () {
  console.log("outro click");
});

// Coletando eventos
input.onkeydown = function (event) {
  console.log(event.currentTarget.value);
};
