const questions = [
  {
    category: 'Formula 1',
    question:
      'Quale pilota detiene il record per il maggior numero di titoli mondiali (7), a pari merito con Lewis Hamilton?',
    choices: ['Max Verstappen', 'Michael Schumacher', 'Ayrton Senna'],
    answer: 'Michael Schumacher',
  },
  {
    category: 'Formula 1',
    question: "In quale circuito si corre il Gran Premio d'Italia?",
    choices: ['Monaco', 'Monza', 'Imola'],
    answer: 'Monza',
  },
  {
    category: 'CoD Mobile',
    question:
      "Quale di queste è una famosa mappa multiplayer 'close quarters' su CoDM?",
    choices: ['Shipment', 'Crossfire', 'Isolated'],
    answer: 'Shipment',
  },
  {
    category: 'CoD Mobile',
    question:
      'Qual è il grado più alto raggiungibile nelle partite classificate (Ranked)?',
    choices: ['Master', 'Grandmaster', 'Legendary'],
    answer: 'Legendary',
  },
  {
    category: 'Sviluppo Web',
    question: 'Quale tag HTML viene usato per definire il set di caratteri?',
    choices: ["<meta charset='UTF-8'>", '<script>', '<header>'],
    answer: "<meta charset='UTF-8'>",
  },
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(getResults(randomQuestion, computerChoice));
