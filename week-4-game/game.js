var randomNumber = Math.floor((Math.random() * 100) + 1);
var userGuess = 0;
var win = 0;
var loss = 0;
var diamond = Math.floor((Math.random() * 5) + 1);
var circle = Math.floor((Math.random() * 10) + 1);
var square = Math.floor((Math.random() * 15) + 1);
var green = Math.floor((Math.random() * 10) + 1);

$("#mainNumber").text(randomNumber);
$('#currentGuess').text(userGuess);
$('#wins').text(win);
$('#loss').text(loss);

$("#diamond").on('click', function(){  
    userGuess = userGuess + diamond;
    $('#currentGuess').text(userGuess);
    if (userGuess === randomNumber){
        alert('You Won')
        win++
        reset()
    } else if (userGuess > randomNumber){
        alert('You Lost!')
        loss++
        reset()
    } else {return};
})

$("#circle").on('click', function(){
    userGuess = userGuess + circle;
    $('#currentGuess').text(userGuess);
    if (userGuess === randomNumber){
        alert('You Won')
        win++
        reset()
    } else if (userGuess > randomNumber){
        alert('You Lost!')
        loss++
        reset()
    } else {return};
})

$('#square').on('click', function(){
    userGuess = userGuess + square;
    $('#currentGuess').text(userGuess);
    if (userGuess === randomNumber){
        alert('You Won')
        win++
        reset()
    } else if (userGuess > randomNumber){
        alert('You Lost!')
        loss++
        reset()
    } else {return};
})

$('#green').on('click', function (){
    userGuess = userGuess + green;
    $('#currentGuess').text(userGuess);
    if (userGuess === randomNumber){
        alert('You Won')
        win++
        reset()
    } else if (userGuess > randomNumber){
        alert('You Lost!')
        loss++
        reset()
    } else {return};
})

function reset(){
    randomNumber = Math.floor((Math.random() * 100) + 1);
    userGuess = 0;
    diamond = Math.floor((Math.random() * 5) + 1);
    circle = Math.floor((Math.random() * 10) + 1);
    square = Math.floor((Math.random() * 15) + 1);
    green = Math.floor((Math.random() * 10) + 1);
    $("#mainNumber").text(randomNumber);
    $('#currentGuess').text(userGuess);
    $('#wins').text(win);
    $('#loss').text(loss);
}
