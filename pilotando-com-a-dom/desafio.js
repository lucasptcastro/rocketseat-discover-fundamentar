const modal = document.querySelector(".modal-wrapper"); // Seleciona a div de classe "modal-wrapper"
const button = document.querySelector("#openModal"); // Seleciona o botão

// Função para remover o atributo "invisible" da classe do modal
button.onclick = function () {
  modal.classList.remove("invisible");
};

// Se não tiver o atributo "invisible" na classe do modal, vai capturar a entrada do teclado. Se a entrada
// do teclado for "ESCape", adiciona a classe "invisible"
if (!("invisible" in modal.classList)) {
  document.onkeydown = function (event) {
    if (event.key === "Escape") {
      modal.classList.add("invisible");
    }
  };
}
