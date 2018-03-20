var triviaArray = [
    {
        question: "Who is Peter Parker?",
        answer: ["Spider-Man", "Iron Man", "Captain America", "Black Panther"],
        rightAnswer: "Spider-Man",
        image: "Images/spiderman.png",
    },
    {
        question: "Who is Tony Starks girlfriend?",
        answer: ["Jane Foster", "Pepper Pots", "Jessica Jones", "Natalia Romanova"],
        rightAnswer: "Pepper Pots",
        image: "Images/pepperpots.png",
    },
    {
        question: "When was Captain America first published?",
        answer: ["1956", "1967", "1941", "1904"],
        rightAnswer: "1941",
        image: "Images/captainamerica.png",
    },
    {
        question: "Who is not a Marvel Comics villan?",
        answer: ["Red Skull", "Dr. Doom", "Thanos", "Deathstroke"],
        rightAnswer: "Deathstroke",
        image: "Images/deathstroke.png",
    },
    {
        question: "Who is Thor's brother",
        answer: ["Loki", "Volstagg", "Ivan Vanko", "Drax"],
        rightAnswer: "Loki",
        image: "Images/loki.png",
    },
    {
        question: "Who is the other large weapons manufacturer in Iron Man?",
        answer: ["War Machine", "Hammer", "Hydra", "Shield"],
        rightAnswer: "Hammer",
        image: "Images/hammer.jpg",
    },
    {
        question: "Who is the Second Commander of S.H.I.E.L.D.?",
        answer: ["Tony Stark", "Steve Rogers", "Howard Stark", "Nick Fury"],
        rightAnswer: "Nick Fury",
        image: "Images/nickfury.png",
    },
    {
        question: "In what comic book was Black Widow introduced?",
        answer: ["Spider-Man", "Iron Man", "Captain America", "Black Panther"],
        rightAnswer: "Iron Man",
        image: "Images/blackwidow.png",
    },
    {
        question: "In what comic was Wolverine introduced?",
        answer: ["Incredible Hulk", "X-Men", "Captain America", "Black Panther"],
        rightAnswer: "Incredible Hulk",
        image: "Images/wolverine.jpg",
    },
    {
        question: "In what comic was Spider-man introduced?",
        answer: ["Spider-Man", "Amazing Fantasy", "Captain America", "Detective Comics"],
        rightAnswer: "Amazing Fantasy",
        image: "Images/spiderman.png",
    },
];

var questionNumber;
var answerNumber;
var correctAnswer;
var answerImage;
var randomQuestion;
var win = 0;
var loss = 0;

$('#start-button').click(gameStart)

function nextQuestion(){
    randomQuestion = triviaArray[Math.floor(Math.random() * triviaArray.length)];
    questionNumber = randomQuestion.question;
    answerNumber = randomQuestion.answer;
    correctAnswer = randomQuestion.rightAnswer;
    answerImage = randomQuestion.image;
    $('#wins').text(win);
    $('#loss').text(loss);

}

function gameStart(){
    if (triviaArray.length > 0){
        $('#answers').empty();
        $('#navigation').empty();
        nextQuestion();
        $('#question').text(questionNumber);
        answers();
    } else endGame();
}

function removeFromArray(){
    var randomQuestionArrayIndex = triviaArray.indexOf(randomQuestion);
    triviaArray.splice(randomQuestionArrayIndex, 1);
    $('#next').click(gameStart);
}

function answers(){
    for (var index = 0; index < answerNumber.length; index++) {
        var buttonCreate = $('<button class = "answer-button btn btn-default btn-lg btn-block block-center col-md-6"> ')
        buttonCreate.text(answerNumber[index]);
        buttonCreate.attr("data-name", answerNumber[index]);
        $('#answers').append(buttonCreate);
    }
    $('.answer-button').click(function guessEval(){
        var userGuess = $(this).attr("data-name");
        var imageCreate = $('<img>');
        imageCreate.attr('src', answerImage);
        var nextButton = $('<button id = "next" class = "btn btn-default btn-lg btn-block block-center col-md-3">');
        nextButton.text("Next Question");
        if (userGuess === correctAnswer){
            $('#answers').empty();
            $('#question').text("You're Right!");
            $('#answers').append(imageCreate);
            $('#navigation').append(nextButton);
            win++;
            removeFromArray();
        } else {
            $('#answers').empty();
            $('#question').text("Sorry the answer is " + correctAnswer);
            $('#answers').append(imageCreate); 
            $('#navigation').append(nextButton);
            loss++;
            removeFromArray();
                }         
             })}

function endGame(){
    $('#question').empty();
    $('#answers').empty();
    $('#navigation').empty();
    var endCredits = $('<h2 class = "col-md-6 col-md-offset-3 text-center">');
    endCredits.html("Congrats! you got " + win + "/" + (win + loss) + 'correct.');
    $('#navigation').append(endCredits);
    var replayButton = $('<button id = "replay" class = "btn btn-default col-md-offset-6 center-block">');
    replayButton.text('Play Again?');
    $(endCredits).append(replayButton)
    $('#replay').click(function() {
        location.reload();
        })
    }
