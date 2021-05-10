var allQuestions = [
    {
      title: "Which of these is NOT used for variable declaration?:",
      choices: ["var", "for", "const", "let"],
      answer: "for"
    },
    {
      title: "____ is used to stop event bubbling:",
      choices: ["stopPropagation", "stopBubbling", "stopImmediate", "stopEvent"],
      answer: "stopPropagation"
    },
    {
      title: "DOM stands for Document Object ____:",
      choices: [
        "Method",
        "Moment",
        "Material",
        "Model"
      ],
      answer: "Model"
    },
    {
      title:
        "Which of these is NOT used in a conditional statement?:",
      choices: ["if", "else", "if else", "else if"],
      answer: "if else"
    },
    {
      title:
        "____ is used to cancel the default action of an event",
      choices: ["defaultPrevented()", "preventDefault()", "defaultCancelled()", "cancelDefault()"],
      answer: "preventDefault()"
    }
  ];

var timeLeft = 30;
var questionsIndex = 0;
var currentQuestion = allQuestions[questionsIndex];

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
    nextQuestion();
};

function timer() {
    var clockTick = setInterval (function() {
        timerEl.textContent = timeLeft;
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

function nextQuestion() {
    questionTitle.innerHTML = currentQuestion.title;
    questionChoices.innerHTML = [""];

    currentQuestion.choices.forEach(function(choice, i) {
        var options = document.createElement("button");
        options.setAttribute("class", "choice");
        options.setAttribute("value", choice);

        options.innerHTML = i + 1 + choice;
    });

    if (options.onclick) {
        questionClick();
    }
};

function questionClick() {
    if (this.value !== currentQuestion.answer) {
        timeLeft -= 6;
    }
    timerEl.innerHTML = timeLeft;
    currentQuestion++

    if (currentQuestion === allQuestions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }
};

function questionClick() {
    if (this.value !== currentQuestion.answer) {
        timeLeft -= 6;
    }
    timerEl.innerHTML = timeLeft;
    currentQuestion++

    if (currentQuestion === allQuestions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }
};