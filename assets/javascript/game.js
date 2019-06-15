var drinkList = [
    "Coffee: $5",
    "Espresso: $7",
    "Cappuccino: $6",
    "Latte: $4",
    "Tea: $3",
    "Ice Coffee: $6",
    "Ice Espresso: $8",
    "Ice Latte: $6",
    "Ice Tea: $4"
  ];

  // Using JavaScript programmatically append each drinkList item to the "drink-options" div
  // HINT: you will need a for loop to go over each element in the list


  // By creating a div
  for (var i = 0; i < drinkList.length; i++) {
    //You call all the divs inside the text
    var newDiv = $("<div>");
    //You add the elements from drink.list as a text
    newDiv.text(drinkList[i]);
    //You add the text to the id on HTML
    $("#drink-options").append(newDiv);
  }

  // Adding elements with divs
  for (var i = 0; i < drinkList.length; i++) {
    //Call the id from the html
    var drinkOp = $("#drink-options")
    // You create an element with the divs included
    var newDiv = "<div>" + drinkList[i] + "</div>"
    // You append the new division to the ids created
    $("#drink-options").append(newDiv);
  }