//Dependencies
var readlineSync = require("readline-sync");
const chalk = require("chalk");

//Theme using Chalk
const wrongAnswer = chalk.red.bold.underline.bgBlack;
const rightAnswer = chalk.green.bold.underline.bgBlack;
const questionColor = chalk.cyan.bold.bgBlack;
const otherInfoColor = chalk.black.bold.bgWhite.underline;
const infoColor = chalk.white.bold.bgBlack.underline.italic;
const scoreLowColor = chalk.black.bold.bgRed.underline;
const scoreHighColor = chalk.black.bold.bgGreen.underline;
const scoreMidColor = chalk.black.bold.bgYellow.underline;

//Intro
var userName = readlineSync.question(infoColor("Enter your name: "));
var score = 0;
console.log("-----------------------------");
console.log(".............................");
console.log(otherInfoColor("Welcome to the quiz " + userName.toUpperCase()));
console.log("-----------------------");
console.log(infoColor("Lets check how well you know GURMAN!.."));
console.log(".......................");

//function for asking question, checking answer and incrementing score
function quiz(question, answer) {
  var userAnswer = readlineSync.question(questionColor(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(rightAnswer("You're Correct!"));
    score == score++;
    console.log(infoColor("Your score is now", score));
  } else {
    console.log(wrongAnswer("You're Wrong!"));
  }
}

//List of questions(array of objects)
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
    question: "Which city/town did he study in till 10th class? ",
    answer: "nakodar",
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

//function looping through the quiz questions
function quizLoop() {
  for (var i = 0; i < questionsList.length; i++) {
    var questionCurrent = questionsList[i];
    quiz(questionCurrent.question, questionCurrent.answer);
    console.log("-..............-");
  }
}
//calling the above function
quizLoop();

//checking the final score and giving bgColor accordingly (green = full, 6-9 = yellow , <6 = red)
if (score === 10) {
  console.log(
    infoColor("Your final score is:"),
    scoreHighColor(score + "/10"),
    ":)"
  );
  console.log("-----------------------------");
  console.log(
    scoreHighColor("You scored full! , you and Gurman must be really close!..")
  );
} else if (score >= 6) {
  console.log(
    infoColor("Your final score is:"),
    scoreMidColor(score + "/10"),
    ":)"
  );
  console.log("-----------------------------");
  console.log(scoreMidColor("WOW! - you know Gurman well.."));
} else {
  console.log(
    infoColor("Your final score is:", scoreLowColor(score + "/10"), ":)")
  );
  console.log("-----------------------------");
  console.log(
    scoreLowColor("Your score is LOW :( , you should catch up with Gurman!..")
  );
}
console.log("-----------------------------");
console.log(".............................");

//list of highScorers with their highScores
var highScorerList = [
  {
    name: "Amanjit",
    score: 10,
  },
  {
    name: "Harsh",
    score: 9,
  },
];

//function to print all highScores
function highScores() {
  console.log(scoreHighColor("High Scores:"));
  for (var i = 0; i < highScorerList.length; i++) {
    console.log(
      infoColor(highScorerList[i].name, "-", highScorerList[i].score)
    );
  }
}
//calling the above function
highScores();

console.log("-----------------------------");
console.log(".............................");
console.log(
  otherInfoColor(
    "To get your score added to the High Scores List, send a screenshot of your score to me!.."
  )
);
console.log(".............................");

//The Outro
console.log(infoColor("Press RUN to take the Quiz again!"));
console.log(infoColor(".......THE END......."));
