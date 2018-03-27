var search = "";
var pastSearch = [];
var imageURL;
var queryURL;


$("#search-button").on("click", function(event) {  
    event.preventDefault();
    search = $('#search-input').val().trim();
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=dc6zaTOxFJmzC&limit=16";
    runQuery();
    
    
 }) 
 function runQuery(){
    $.ajax({ url: queryURL,method: "GET"
        }).then(function (searchResult){
        imageURL = searchResult.data;
        displayResults();
        addSideButton();
        $('#search-input').val('');
})
 }

 function displayResults () {
    $('#search-results').empty();
    for (var i = 0; i < imageURL.length; i++) {
        var stillImg = imageURL[i].images.fixed_height_small_still.url;
        var animatedImg = imageURL[i].images.fixed_height_small.url;
        var img =  $("<img>");
        img.addClass('gif block-center');
        img.attr('gif-state', 'still');
        img.attr('still-img', stillImg);
        img.attr('animated-img', animatedImg);
        img.attr('src', stillImg);
        $('#search-results').append(img);
        
    }
    $(".gif").on("click", function() {
        var imgState = $(this).attr("gif-state");
        if (imgState === "still") {
            $(this).attr("src", $(this).attr("animated-img"));
            $(this).attr("gif-state", "animated");
        } else {
            $(this).attr("src", $(this).attr("still-img"));
            $(this).attr("gif-state", "still");
    }});
 }

 function addSideButton () {
    checkArrayLength();
    if (pastSearch.indexOf(search) === -1){
        pastSearch.push(search);
    } else return;
    var newSearchButton = $('<button class = "btn btn-primary col-md-12 text-center">')
    var divSpace = $('<br><br>');
    for (var i = 0; i < pastSearch.length; i++) {
        newSearchButton.attr("data-name", pastSearch[i]);
        newSearchButton.text(pastSearch[i]);
        newSearchButton.addClass('previous-result');
        $('#past-results').append(newSearchButton);
        $('#past-results').append(divSpace);
        
    }
    $('.previous-result').click(function displayOld(){
        search = $(this).attr('data-name')
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=dc6zaTOxFJmzC&limit=4";
        runQuery();
    })
 }

 function checkArrayLength (){
     if (pastSearch.length > 10){
         pastSearch.splice(pastSearch[0], 1)
     } else return;
 }

