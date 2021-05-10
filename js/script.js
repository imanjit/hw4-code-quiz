var timeLeft = 30;
var questionsIndex = 0;
var currentQuestion = questions[questionsIndex];

var beginBtn = document.querySelector("#begin");
var endScreen = document.querySelector("#end");
var finalScore = document.querySelector("#score");
var questionsScreen = document.querySelector("#questions");
var questionChoices = document.querySelector("choices");
var questionTitle = document.querySelector("#title");
var startScreen = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var timerEl = document.querySelector("#timer");


beginBtn.onclick = function () {
    startScreen.setAttribute("class", "hide");
    questionsScreen.removeAttribute("class");
    
    timer();
};

function timer() {
    var clockTick = setInterval (function() {
        document.querySelector("#timer").textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(clockTick);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    endScreen.removeAttribute("class");
    questionsScreen.setAttribute("class", "hide")
};