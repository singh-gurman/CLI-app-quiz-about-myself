//Dependencies
var readlineSync = require("readline-sync");

//Quiz
var userName = readlineSync.question("Enter your name: ");
var score = 0;
console.log("************************");
console.log("Welcome to the quiz " + userName.toUpperCase());
console.log("-----------------------");
console.log("Lets check how well you know GURMAN!..");
console.log("Provide your answers in 1 word!..");
console.log(".......................");

var highScores = ["10/10 - Gurman himself!", "Next best HIGHSCORE goes here! "];

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're Correct!");
    score == score++;
    console.log("Your score is now", score);
  } else {
    console.log("You're Wrong!");
  }
}

var questionsList = [
  {
    question: "How old is Gurman? ",
    answer: "20",
  },
  {
    question: "What is the year of his birth? ",
    answer: "2003",
  },
  {
    question: "What is Gurman's birthday month? ",
    answer: "february",
  },
  {
    question: "What is his favorite sport? ",
    answer: "football",
  },
  {
    question: "Who is his favorite player of his favourite sport? ",
    answer: "messi",
  },
  {
    question: "What field of subjects did he take in 12th? ",
    answer: "commerce",
  },
  {
    question: "Who is his bestfriend in college? ",
    answer: "harsh",
  },
  {
    question: "What movie/tv series universe does he love most? ",
    answer: "star wars",
  },
  {
    question: "Which one of DC or Marvel does he prefer? ",
    answer: "dc",
  },
  {
    question: "Who is his favourite superhero? ",
    answer: "batman",
  },
];

for (var i = 0; i < questionsList.length; i++) {
  var questionCurrent = questionsList[i];
  quiz(questionCurrent.question, questionCurrent.answer);
  console.log("-..............-");
}

console.log("Your final score is:", score, ":)");
console.log("-----------------------------");

if (score === 10) {
  console.log("You scored full! , you and Gurman must be really close!");
  console.log(
    "Send a screenshot of your score to Gurman to see it in the high-scores list below!"
  );
} else if (score >= 6) {
  console.log("WOW! - you know Gurman well...");
} else {
  console.log("Your score is LOW :( , you should catch up with Gurman! ");
}
console.log("-----------------------------");
console.log(".............................");
console.log(highScores);
