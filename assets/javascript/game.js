//Load when the document is ready

$(document).ready(function () {

    //Create the array of desingers

    var desingers = [
        "Saul Bass",
        "Stefan Sagmeister",
        "Zaha Hadid",
        "Paul Rand"
    ]

    //Create a function event for on when the key is up or after pressing
    $("#start").click(function (event) {

        //Create a variable that selects a random number inside our array
        var arrNum = Math.floor(Math.random() * desingers.length)
        //Relate that number with a person inside our array
        var computerSelection = desingers[arrNum];
        //Write what computer selected on the screen
        $("#wordGuess").append(computerSelection);
        //Add _ multiply by the number of letters


        //Visualizing the letters inside the string selected
        // Found charAt in w3 school "The charAt() method returns the character at the specified index in a string.""
        for (var i = 0; i < desingers[arrNum].length; i++) {
            var letterArray = desingers[arrNum].charAt(i);
        }

    });



    //Showcase the letter the person has selected
    // Adding the text on the screen

    //Create a varible that has the value of the key pressed

    $(document).keyup (function (event) {
        $("#letterUsed").append(" " + event.keyCode);
    });



    //Function that compares your letter with the letters of the array selected
    //if (letterPerson === letterArray) {}





});


