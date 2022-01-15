
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

}

// timer function call
countdown ();

});



