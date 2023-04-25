// clearInterval => serve para cancelar o intervalo da função
const interval = 1000;
const finished = () => console.log("Done!");

let intervalFunction = setInterval(finished, interval);
setTimeout(() => clearInterval(intervalFunction), 4000); // vai cancelar o intervalo após se passar 3 segundos
