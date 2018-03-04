var words = ["duck","fish","cat","dog","horse","donkey","pig","cow","goat","chicken", "lamb", "calf", "sheep"
]


var selectedWord = words[Math.floor(Math.random() * words.length)];
var dashes = [];
var alreadyGuessed = [];
var splitWord = selectedWord.split('');
var currentResultEl = document.getElementById('current-result');
var guessesEl = document.getElementById('guessed');
var guessesRemainEl = document.getElementById('guess-remain');
var okLetters = 'abcdefghijklmnopqrstuvwxyz'
var maxGuess = splitWord.length*2

function classFor(letter) {
      return 'letter_' + letter;
    }

for (var i = 0; i < splitWord.length; i++) {
    var blanks = document.createElement('span');
    blanks.classList.add(classFor(splitWord[i]));
    blanks.innerText = ' _ ';
    dashes.push(blanks);
}

for (var i = 0; i < dashes.length; i++){
    currentResultEl.appendChild(dashes[i]);
}

guessesRemainEl.innerText = maxGuess +" Guesses"

document.onkeyup = function(event) {
    var key = event.key.toLowerCase();

    if (okLetters.indexOf(key) === -1) {
        return;
    }

    if (alreadyGuessed.indexOf(key) > -1){
        return;
    }

    if (alreadyGuessed.length === (maxGuess - 1)){
        alert("You Lost! The word was: " + selectedWord + ", Try Again")
    }



    alreadyGuessed.push(key);
    guessesEl.innerText = alreadyGuessed.join(' ');
    
    var keyClass = classFor(key);
    var blanks = document.getElementsByClassName(keyClass)
    for (var i = 0; i < blanks.length; i++) {
        blanks[i].innerHTML = key;
        blanks[i].classList.add('correct')
    }

    if (document.getElementsByClassName('correct').length === dashes.length) {
        alert("You Won! The word was: " + selectedWord); 
    }
    

}




