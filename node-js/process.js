// Coleta os argumentos passados no terminal. Ex.: node process.js Lucas Peixoto

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Meu nome é ${firstName} ${lastName}`);
