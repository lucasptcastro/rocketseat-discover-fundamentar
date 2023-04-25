// setInterval => vai rodar a função a cada intervalo de tempo passado. No exemplo, vai rodar a função finished a cada 1s sem parar
const interval = 1000;
const finished = () => console.log("Done!");

setInterval(finished, interval);
