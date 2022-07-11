var readlineSync = require('readline-sync')




var userName = readlineSync.question("may i have your name? ")

var score = 0

 var welcomeMessage = ("Welcome " +userName + " to DO YOU KNOW ALEFIYAH! ")


 console.log(welcomeMessage)


console.log("______________________")

var highScore=[
  { 
    name:"alefiyah",
    score: 7
  },{
    name:"ruquiyah",
    score:6
  }
]



function play(question,answer){

 var userAnswer=readlineSync.question(question)

if (userAnswer.toUpperCase() ===answer.toUpperCase()){
console.log("RIGHT!")
  score = score + 1

} else {
  console.log("WRONG!")
  
}

console.log("___________________") 
}
   var questions=[
    {
    question: "where do i live? ",
    answer: "surat"
  },{
    question : "who is my fav marvel superhero? ",
      answer: "spiderman"
  },{
    question:"what is my fav color? ",
      answer:"black"
  },{
      question:"what was my fav subject in primary : MATHS , SCIENCE OR GUJARATI ",
     answer:"science"
  },{
      question:"what do i prefer more coffe or tea? ",
      answer:"tea"
  },{
      question:"what do i prefer more good looks or good fragrance? ",
      answer:"good fragrance"
  },{
      question:"what do i prefer more high mounts or calming beach? ",
      answer:"high mounts"
  }
  
]


for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i]

play(currentQuestion.question,currentQuestion.answer)
}


console.log("YAY! YOUR FINAL SCORE IS " + score + " out of 7")
console.log("HIGHEST SCORER'S ARE")
for (var i=0; i<highScore.length; i++){
  var currentScore=highScore[i]
  console.log(currentScore.name)
  console.log(currentScore.score)
}




console.log("MAKE SURE TO SEND ME A SCREENSHOT OF YOUR SCORE!")