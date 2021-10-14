const prompt = require('prompt-sync')();
const questions = require('./data.json');

var name = prompt("What is your name? ")
var score = 0;

var instructions = `${name}, are you a real Friends fan? Answer 10 questions to know. +5 for each correct and -2 for wrong answer.`

console.log(instructions)



for(let i=0;i<questions.length;i++){
  console.log(`Q${i+1}. ${questions[i].question}`)
  questions[i].options.map((opt,index)=>{
  console.log(`${index+1}. ${opt}`)
  })
  var ans = prompt("Your answer: ")
  if((Number(ans)-1)==questions[i].answer){
    score +=5
    console.log("Correct.")
  }else{
    score -=2
    console.log(`Incorrect. Right answer is ${questions[i].options[questions[i].answer]}.`)
  }
}

console.log(`Thankyou for playing ${name}. Your final score is ${score}.`)





