

/*
project scope
- start timer when keypress is detected inside of the textArea element
- compare the text entered with the original text (know length and we need to match the string)
- on the timer, we need to be tracking how long the user takes
- be constantly updating the timer based on the time it takes
- stop timer when entries match
- at any time we want the user to be able to start over (reset button)
- change textarea box styling (color) to indicate feedback

*/
const TEST_WRAPPER = document.querySelector('.testWrapper');
const TEST_AREA = document.querySelector('#testArea');
const ORIG_TEXT = document.querySelector('#origText p').innerHTML;
const RESET_BTN = document.querySelector('#reset');
const THE_TIMER = document.querySelector('.timer');

var timer = [0,0,0,0];

// timer function
function runTimer(){
    let currentTime = timer[0] + ':' + timer[1] + ':' + timer[2];
    
    THE_TIMER.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100/60)); // give us min
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    //sec
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}

// match the text entered with original text
function spellCheck(){
    let textEntered = TEST_AREA.value;
    console.log(textEntered);
}

// start the timer
function start() {
    let textEnteredLength = TEST_AREA.value.length;
    if(textEnteredLength === 0) {
        setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);
}

// reset all
function reset(){
    console.log('Reset button has been pressed');
}


TEST_AREA.addEventListener('keypress', start, false);
TEST_AREA.addEventListener('keyup', spellCheck, false);
RESET_BTN.addEventListener('click', reset, false);



