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

        //Learned from meetup
        // Keeps track of current guesses
        const currentGuesses = new Set([]);




        function checkingLetter(selection) {
            for (var i = 0; i < desingers[arrNum].length; i++) {

                //Ask? why do we need to add string if it was a string before.
                var letterArray = String(desingers[arrNum]).charAt(i);

                //creating an if that runs through all of the letters of the selected index and compares it with the ltter selected
                if (selection === letterArray.toLowerCase()) {
                    // Adding the lettere selected to currentGuesses
                    currentGuesses.add(selection);
                    $ ("#wordGuessAdd").append(selection);
                

                }
                else {
                    
                    console.log("wrong");
                }
            }
        }





        //Showcase the letter the person has selected
        //Create a varible that has the value of the key pressed
        // Adding the text on the screen
        $(document).keyup(function (event) {
            var letterSelected = event.key;
            console.log(event.key);
            $("#letterUsed").append(letterSelected + ", ");

            checkingLetter(letterSelected);

            //Checking the return
            if (checkingLetter()) {
                //alert("letter is correct");
            }
            else {
                //alert("letter NO correct")
            };


        });



        // Stop adding letters if they have already been typed
        //if (letterSelected == ("#letterUsed")) {
        //   alert("You already selected this Letter")
        //};

        //Compare the letters from a sting to the letter selected




    });








});


