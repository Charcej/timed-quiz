
// selecting all required elements
var startEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('countdown');
var quizPage = document.querySelector(".quiz-page");
var answerEl = document.getElementById('#answer-button');
var questionIndex = 0;
var timeInterval;
var timeLeft = 75;
var resultsPage = document.querySelector(".result-page");

// event listener to start timer
document.querySelector('#start-quiz').addEventListener('click', function () {
    // clears the intro page section
    var element = document.getElementById("intro");
    element.parentNode.removeChild(element);
    // timer function call
    countdown();
    getQuestion ();
});

function getQuestion() {
    //create elements
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var buttonOne = document.createElement('button');
    var buttonTwo = document.createElement('button');
    var buttonThree = document.createElement('button');
    var buttonFour = document.createElement('button');

    // add content
    h1.textContent = questions[questionIndex].question;
    buttonOne.textContent = questions[questionIndex].options[0];
    buttonTwo.textContent = questions[questionIndex].options[1];
    buttonThree.textContent = questions[questionIndex].options[2];
    buttonFour.textContent = questions[questionIndex].options[3];

    // event listeners for all four buttons
    buttonOne.addEventListener("click", checkAnswer);
    buttonTwo.addEventListener("click", checkAnswer);
    buttonThree.addEventListener("click", checkAnswer);
    buttonFour.addEventListener("click", checkAnswer);


    // take content and put it on the page
    div.appendChild(h1);
    div.appendChild(buttonOne);
    div.appendChild(buttonTwo);
    div.appendChild(buttonThree);
    div.appendChild(buttonFour);
    quizPage.innerHTML = "";
    quizPage.appendChild(div);
}

// checks if button clicked matches answer
function checkAnswer(event) {
    var userChoice = event.target.innerText
    if (userChoice === questions[questionIndex].answer) {
        alert("You are correct")
    } else {
        alert("You are incorrect")
        timeLeft -= 10;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        getQuestion ();
    } else {
        clearInterval (timeInterval);
        finalScore ();
    }
}

// function to remove final question and show results page
function finalScore () {
    //   // clears the question section
    //   var clearAllQuestions = document.getElementById("answer-button");
    //   quizPage.innerHTML = "";

      // create elements
      var div = document.createElement('div');
      var h1 = document.createElement('h1');
      var p = document.createElement('p');
      var p2 = document.createElement('p')
      var input = document.createElement('input');
      var button = document.createElement('button');

      // add content
      h1.textContent = "All done!";
      p.textContent = "Your final score is " + timeLeft;
      p2.textContent = "Enter initials: "
      input.textContent = "";
      button.textContent = "Submit";

      // put content on page
      div.appendChild(h1);
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(input);
      div.appendChild(button);
      quizPage.innerHTML = "";
      resultsPage.appendChild(div);
}

// function to count down from 75 to 0
function countdown() {
    
    timeInterval = setInterval(function () {

        if (timeLeft > -1) {

            timerEl.textContent = timeLeft;
            timeLeft--;

        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            alert("Your time is up!");
        }
    }, 1000);
}

