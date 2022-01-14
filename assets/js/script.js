var quizEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('countdown');

quizEl.addEventListener('click', function() {


    function countdown () {
    var timeLeft = 75;
    
        var timeInterval = setInterval(function() {

        if (timeLeft > 0) {

            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage ();
        }

        }, 1000);
    }

});
