var readlineSync = require('readline-sync');

var userName = readlineSync.question("Hello, What is your name? ");

console.log("Welcome" + " to 'Do You Know Me Better Than Others?' quizgame !!!, Mr. "+ userName, '\n');

var score = 0;
var userWithHighScore = {
  name: "Shubham",
  highScore: 4, 
}
var questionList = [
  {
    ques: "Where do i live? ",
    answer: "Noida",
  },
  {
    ques: "What is my favourite dessert? ",
    answer: "Rasmalai",
  },
  {
    ques: "Who is my favourite hero from bollywood? ",
    answer: "Manoj Bajpayee",
  },
  {
    ques: "Do i know how to drive a car? ",
    answer: "No",
  },
  {
    ques: "What do i like more- Tea or Coffee? ",
    answer: "Tea",
  }
]

function quizGame(ques, ans){
  var userAnswer = readlineSync.question(ques);
  if (userAnswer.toLowerCase() === ans.toLowerCase()){
    console.log("Bravo! You answered it right.");
    score += 1;
    console.log("Current score is:", score, '\n');
  }
  else {
    console.log("Sorry! Wrong answer buddy.", '\n');
    score -= 1;
    console.log("Current score is:", score, '\n');
  }
}
for (var i = 0; i < questionList.length; i++){
  quizGame(questionList[i].ques, questionList[i].answer);
}

console.log("Your final score is:", score, '\n');

if (score > userWithHighScore.highScore){
  userWithHighScore.highScore = score;
  userWithHighScore.name = userName;
}

console.log(`-->Current high score is of ${userWithHighScore.name} with a score of ${userWithHighScore.highScore} points.`, '\n');

console.log("!!!Send me a screenshot if you beat the high score of the game!!!")