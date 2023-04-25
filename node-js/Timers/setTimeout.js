// setTimeout => funciona como um sleep, a função só vai ser rodada depois do tempo especificado no timeout
const timeOut = 3000; // 3 seconds
const finished = () => console.log("Done");

// tem que colocar a função como referência, sem os (). Senão, a função vai ser rodada imediatamente, desconsiderando o timeout
setTimeout(finished, timeOut);
console.log("Isso será mostrado primeiro"); // a função timeout é assíncrona, daí o console.log roda primeiro para que a aplicação não precise ser paralisada pelos 3 segundo
