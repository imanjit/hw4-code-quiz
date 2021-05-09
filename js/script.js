var timeLeft = 30;
var questionsIndex = 0;

var questionsEl = document.querySelector("#questions");
var startScreen = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var timerEl = document.querySelector("#timer");
var endScreen = document.querySelector("#end");


submitBtn.onclick = function () {
    startScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    
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
    questionsEl.setAttribute("class", "hide")
};