
// variables
var startEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('countdown');

// event listener to start timer
document.querySelector('#start-quiz').addEventListener('click', function () {

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

//     // seeing if button can also present first question and replace intro page with it
//     // this should be grabbing the class "quiz-page" div
//     // so far so good the console.log does display the first array I put in questions.js file
         var firstQuestion = document.querySelector('.quiz-page')
         console.log(questions);

            // populate code w/ info from data file
            for (var i = 0; i < questions.length; i++) {
                var div = document.createElement ('div');
            }

//         // create elements
         var div = document.createElement ('div');
         var h2 = document.createElement ('h2');
         var p = document.createElement ('p');

//         // add content
         h2.textContent = questions[0].question;
         p.textContent = questions[0].options;

//         // take content and put it on the page
         div.appendChild(h2);
         div.appendChild(p);



}

// timer function call
countdown ();

});

 



