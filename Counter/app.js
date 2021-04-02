var seconds = 0;
var el = document.getElementById('seconds-counter');
var button = document.getElementById('play');
var initElement = document.querySelector(".randomValue");
var playing = false;
var finish = false;

var randomValue;

function generateRandom() {
    randomValue = Math.floor(Math.random() * 10) + 1;
    initElement.innerText = randomValue;
}

function incrementSeconds() {
    seconds += 0.1;
}

function play() {
    if (playing == false) {
        setInterval(incrementSeconds, 100); 
        playing = true;
        button.textContent = "Stop!";
    }
    else if (finish) {
        location.reload(true);
        
    }
    else {
        finish = true;
        if (seconds.toFixed(1) == randomValue) el.innerText = "You won! You did " + seconds.toFixed(1) + " seconds.";
        else if (seconds.toFixed(1) < randomValue) el.innerText = "The value is higher! You did " + seconds.toFixed(1) + " seconds.";
        else if (seconds.toFixed(1) > randomValue) el.innerText = "The value was smaller! You did " + seconds.toFixed(1) + " seconds.";
        button.textContent = "Refresh!"
    }
    
}

