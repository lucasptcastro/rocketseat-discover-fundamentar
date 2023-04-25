const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido?",
  "E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];
const answers = [];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " => "); // Escreve no terminal, basicamente igual ao console.log
};

ask();

// Coleta a entrada de tipo "data" e adiciona o valor a variável data através do console e depois adiciona a lista "answers"
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < 4) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// Coleta o "exit" da função acima e aciona o callback com o console.log
process.on("exit", () => {
  console.log(`
    Bacana, Lucas!
  
    Hoje você aprendeu:
    ${answers[0]}

    O que mais te deixou aborrecido foi:
    ${answers[1]}

    E o que você poderia fazer para melhorar é:
    ${answers[2]}

    O que mais te deixou feliz hoje foi:
    ${answers[3]}

    Este é o total de pessoas que você ajudou hoje:
    ${answers[4]}
  `);

  process.exit();
});
