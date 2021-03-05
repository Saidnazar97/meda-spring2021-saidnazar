// jQuery(); The .ready() function is deprecated, you can use $(function () {}); instead.

var myCreditCardNumber = 9273489782374987;

$(document).ready(function () {

    /*

        jQuery Common Functions
        .remove(); removes the selected DOM element.
        .css(); modifies the css of the selected HTML element. First argument is CSS Property, second argument is CSS value.
        .click(); runs a function when the selected HTML element is clicked on.
        .val(); Gets or sets the value of an HTML input element. if no arguments, then gets the value, if 1 argument, set the argument value inside of the box.
        .text(); Writes the text provided inside of the selected HTML element.

    */

    console.log("jQuery is Ready!");

    var myOnlyButton = $("#my-button");

    // myOnlyButton.remove();

    // Waits some time and then runs the code specified. This is a JavaScript function.
    setTimeout(function () {

        //Code to run when setTimeout "finishes"
        myOnlyButton.css("background-color", "#5C73F2");
        myOnlyButton.css("border-radius", "5px");
        //myOnlyButton.remove();

    }, 5000);

    var functionToRunForButton = function () {
        myOnlyButton.css("color", "white");
        $("body").css("background-color", "yellow");
    };

    myOnlyButton.click(functionToRunForButton);

    var formSubmit = $("#submit");

    // Any VALUE that comes from outside of JavaScript, is AUTOMATICALLY a string data type.


    formSubmit.click(function () {
        
        // Get value from input box.
        var submittedData = $("#user-information").val();

        console.log(submittedData);

        if (submittedData === "") {
            $("#resultsParagraph").text("You didn't type anything in!");
        } else {

            // Even though objects may look the same, they are ALWAYS unique.
            //console.log(({user: "eduardo"} == {user: "eduardo"}));
            // Unfortunately, NaN are objects and will always be unique.
            //console.log(NaN == NaN);

            //parseInt(); tries to convert the value provided into a Number data type.
            var convertedData = parseInt(submittedData);

            if (isNaN(convertedData)) {
                $("#resultsParagraph").text("Sorry but that input is invalid, please type numbers only and try again.");
            } else {
                // Multiply the value by 10;
                var mathStuff = convertedData * 10;

                // Write a sentence with the results into our paragraph element.
                $("#resultsParagraph").text("We multiplied your number by ten and got: " + mathStuff);
            }

        }

    });

    console.log("This script is finished!");



});





































