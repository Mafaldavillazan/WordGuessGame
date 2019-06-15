//Create the array of desingers

var desingers = [
    "Saul Bass",
    "Stefan Sagmeister",
    "Zaha Hadid",
    "Paul Rand"
]

// Create a function event for on when the key is up or after pressing
document.onkeyup = function () {

    //Create a a variable that selects a random designer
    var computerSelection = desingers[Math.floor(Math.random() * desingers.length)];
    //Write what computer selected on the screen
    $("#wordGuess").append(computerSelection);

};

