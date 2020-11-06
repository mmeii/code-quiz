/** 
 * Criteria 
 */

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

/**
 * Psedocoding
 */

// define a set of questions
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Who invented JavaScript?",
        choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
];

/** 
 * DEFINE VARIABLES 
 */

// grab references to elements
var time = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var enterInitialsSubmit = document.getElementById("submit-initials");
var highScoresSection = document.getElementById("scores");
var viewHighScores = document.getElementById("view-high-score");
var everything = document.getElementById("everything");

var highScoreDiv = document.getElementById("highScore");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var highScore = [];
var questionStart = 0;


/**
 * FUNCTIONS
 */

// WHEN I click the start button, timer starts
var totalTime = 121;
function startCountDown() {
    // var incorrectPenalty = 10;
    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime == 0) {
            gameOver();
            timer.textContent = "Time's Up!";
            clearInterval(startTimer);
        }
    },1000);

    // if (interval === 0) {
    //     holdInterval = interval(function() {
    //         totalTime--;
    //         timeLeft.textContent = totalTime;

    //         // when hits 0, game ends
    //         if (timeLeft <= 0) {
    //             clearInterval(holdInterval);
    //             gameOver();
    //             timeLeft.textContent = "Time Over!";
    //         }
    //     }, 1000);
    // }
    showQuiz(); 
};

// var timerId = setTimeout(function() {
//     console.log("ex[ire")
// }, 1000);

console.log(questions[questionStart].question);
console.log(questions[questionStart].choices);

// then presented with questions and choices, function to render questions and choices

function showQuiz() {
    function quiz(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    quizQuestion.innerHTML = quiz.getQuestionIndex().text;

    
}

// function render(questionStart) {
//     quizQuestion.innerHTML = "";
//     start.innerHTML = "";
//     choices.innerHTML = "";
//     var createChoices = document.createElement("ul");
//     createChoices.innerHTML = "";
//     for (var i = 0; i < questions.length; i++) {
//         var quizQues = questions[questionStart].question;
//         var choicesOption = questions[questionStart].choices;
//         quizQuestion.textContent = quizQues;
//         choices.textContent = choicesOption;
//     }
//     choicesOption.forEach(function (eachChoice) {
//         var listChoice = document.createElement("li");
//         listChoice.textContent = eachChoice;
//         start.appendChild(choices);
//         choices.appendChild(listChoice);
//         listChoice.addEventListener("click", checkAnswer);
//     })
// }

// after question is answered, show if correct or wrong
function checkAnswer() {

    // if wrong, time is subtracted from the clock

}

// repeat with the rest of questions

// when all questions are answered or timer reaches 0, game over
function gameOver () {

}

// when game over, show all done, and show final score

// add input box to enter initial

// store highscore in local storage
function storeHighScore () {

}

// interval = setInterval(function()) {
//     counter++;
//     document.querySelector("#timer").textContent = counter;
// }, 1000)

/**
 * ADD EVENT LISTENERS
 */

startQuizBtn.addEventListener("click", startCountDown);
