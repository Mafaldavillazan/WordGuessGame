//Load when the document is ready
$(document).ready(function () {

    //Create the array of desingers
    var desingers = [
        "saul bass",
        "stefan sagmeister",
        "zaha hadid",
        "paul rand"
    ]

    //Creating a variable with the amount of guesses the user has
    var guessLeft = 20;
    $("#guessesRemain").text(guessLeft);


    //Creating a variable with the amount of wins
    var wins = 0

    //Create a function for the score
    function scoreCal() {
        //I compare the lenght of the word selected with the numer of points the aquire whrn they win
        if (computerSelectionArrLines === computerSelectionArr) {
            alert("YOU WON!")
            wins++

        }
        else if (guessLeft = 0) {
            alert("YOU LOOSE!")
            wins++
        };
    }



    //Create an empty array that we will fill with ---
    var answerArr = [];



    //Create a function that will add points if the word is completed ( maybe )




    //when press stat the game begins and the function of random selection starts running
    $("#start").click(function (event) {

        //Change the start button to re-start
        $(this).text("Play Again").addClass("grey")

        //transform the bottom from start to refresh
        $(this).click(function () {
            location.reload();
        })

        //Create a variable that selects a random number inside our array
        var arrNum = Math.floor(Math.random() * desingers.length)
        //Relate that number with a person inside our array
        var computerSelection = desingers[arrNum];



        //Array with ---
        var computerSelectionArrLines = [];
        //Array with the index of the number
        var computerSelectionArrIndex = [];

        //create a for loop that will go through all the letters and change them to - and the space to ""
        for (var i = 0; i < computerSelection.length; i++) {

            if (computerSelection[i] === " ") {
                // Add space into HTML (search the solution on google with meetup team)
                answerArr[i] = "&nbsp;";
            }
            else {
                answerArr[i] = "-";
                //I am pushing the  index of the letter of the array and the position of it
                computerSelectionArrLines.push(answerArr[i]);
                computerSelectionArrIndex.push(i);
            }

        }



        console.log("computerSelectionArrIndex " + computerSelectionArrIndex)
        console.log("computerSelection" + computerSelection)

        //Append the answer in the code so iI can change its positions
        $("#wordGuess").append(computerSelectionArrLines);

        //Create an array that will print the number of index of of those elements


        //Create a function that will change those


        computerSelectionArr = []
        computerSelectionArr.push(computerSelection[arrNum]);










        //Checking the letters inside the string selected
        function checkingLetter(selection) {
            for (var i = 0; i < computerSelection.length; i++) {
                // Found charAt in w3 school "The charAt() method returns the character at the specified index in a string.""
                //Ask? why do we need to add string if it was a string before.


                //creating an if that runs through all of the letters of the selected index and compares it with the letter selected
                if (selection === computerSelection[i].toLowerCase()) {
                    alert("RIGHT!")


                    changeLinesToLetters(selection);
                    $("#wordGuess").text(computerSelectionArrLines);

                    //If they have it right they dont loose guesses
                    guessLeft = guessLeft;

                }
                else {
                    //Create variable to show guesses you have left

                }
            }
        }


        function changeLinesToLetters(selection) {
            //create a for loop that will go through all the letters and change them to - and the space to ""
            for (var i = 0; i < computerSelection.length; i++) {
                if (computerSelection[i] === selection) {
                    // Add space into HTML (search the solution on google with meetup team)
                    computerSelectionArrLines[i] = selection;
                }

            }



        }


        //Showcase the letter the person has selected
        $(document).keyup(function (event) {
            //Showcase the letter you pressed in the key
            var letterSelected = event.key;
            //Adding the letter press to the bottom of the page
            $("#letterUsed").append(letterSelected.toUpperCase() + ", ");

            guessLeft = guessLeft - 1;
            $("#guessesRemain").text(guessLeft);
            console.log(guessLeft);

            //Calling the function to check the letters
            checkingLetter(letterSelected);



            // Stop adding letters if they have already been typed
            //if (letterSelected == ("#letterUsed")) {
            // alert("You already selected this Letter")
            //};



        });



    });











});


