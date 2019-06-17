//Load when the document is ready
$(document).ready(function () {

    //Create the array of desingers
    var desingers = [
        "Saul Bass",
        "Stefan Sagmeister",
        "Zaha Hadid",
        "Paul Rand"
    ]


    //when press stat the game begins and the function of random selection starts running
    $("#start").click(function (event) {

        //Create a variable that selects a random number inside our array
        var arrNum = Math.floor(Math.random() * desingers.length)
        //Relate that number with a person inside our array
        var computerSelection = desingers[arrNum];



        //Create a function theat showcase the - for each letter of the name selected
        function lineDisplay(randomSelection) {

            for (var i = 0; i < randomSelection.length; i++) {
                //Search for the space between my two words (Name & Surname)
                if (randomSelection[i] === " ") {
                    // Add space into HTML (search the solution on google with meetup team)
                    $("#wordGuess").append("&nbsp;");
                }
                else {
                    $("#wordGuess").append(" _ ");
                }
            }

        }
        //I run the function on the selected index of the array
        lineDisplay(computerSelection);

        //Function that will change the - to letters 


        //Adding the score of wins



        var guessLeft=20
        $("#guessesRemain").text(guessLeft);


        //Checking the letters inside the string selected
        function checkingLetter(selection) {
            for (var i = 0; i < desingers[arrNum].length; i++) {
                // Found charAt in w3 school "The charAt() method returns the character at the specified index in a string.""
                //Ask? why do we need to add string if it was a string before.
                var letterArray = String(desingers[arrNum]).charAt(i);

                //creating an if that runs through all of the letters of the selected index and compares it with the letter selected
                if (selection === letterArray.toLowerCase()) {
                    alert("RIGHT!")
                    //If they have it right they dont loose guesses
                    guessLeft = guessLeft+1;
                    $("#guessesRemain").text(guessLeft);
                    console.log(guessLeft);
                }
                else {
                    //Create variable to show guesses you have left

                }
            }
        }


        //Showcase the letter the person has selected
        $(document).keyup(function (event) {
            //Showcase the letter you pressed in the key
            var letterSelected = event.key;
            //Adding the letter press to the bottom of the page
            $("#letterUsed").append(letterSelected + ", ");

            guessLeft = guessLeft-1;
            $("#guessesRemain").text(guessLeft);
            console.log(guessLeft);

            //Calling the function to check the letters
            checkingLetter(letterSelected);
        });



        // Stop adding letters if they have already been typed
        //if (letterSelected == ("#letterUsed")) {
        //   alert("You already selected this Letter")
        //};

        //Compare the letters from a sting to the letter selected




    });











});


