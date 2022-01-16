
// selecting all required elements
var startEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('countdown');
var quizPage = document.querySelector(".quiz-page");
var answerEl = document.getElementById('#answer-button');

// event listener to start timer
document.querySelector('#start-quiz').addEventListener('click', function () {

    // clears the intro page section
    var element = document.getElementById("intro");
    element.parentNode.removeChild(element);

   
    // seeing if button can also present first question and replace intro page with it
    // this should be grabbing the class "quiz-page" div
    // so far so good the console.log does display the first array I put in questions.js file
    console.log(questions);

    // populate code w/ info from data file
    for (var i = 0; i < questions.length; i++) {

    //create elements
    var div = document.createElement ('div');
    var h1 = document.createElement ('h1');
    var buttonOne = document.createElement ('button');
    var buttonTwo = document.createElement ('button');
    var buttonThree = document.createElement ('button');
    var buttonFour = document.createElement ('button');

    // add content
    h1.textContent = questions[i].question;
    buttonOne.textContent = questions[0].options[0];
    buttonTwo.textContent = questions[0].options[1];
    buttonThree.textContent = questions[0].options[2];
    buttonFour.textContent = questions[0].options[3];

    //set style to the buttons
    // buttonOne.setAttribute('style', 'background-color: violet',);
    // buttonTwo.setAttribute('style', 'background-color: violet',);
    // buttonThree.setAttribute('style', 'background-color: violet',);
    // buttonFour.setAttribute('style', 'background-color: violet',);

    // take content and put it on the page
    div.appendChild(h1);
    div.appendChild(buttonOne);
    div.appendChild(buttonTwo);
    div.appendChild(buttonThree);
    div.appendChild(buttonFour);

    quizPage.appendChild(div);
}

startEl.addEventListener("click", function (event) {
    console.log(event.target);
})



// function to count down from 75 to 0
function countdown () {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {

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

// timer function call
countdown ();

});

 



