$(document).ready(function () {

    $("#login").click(function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if (username === "student") {
            
            if (password === "123456") {
                console.log("Congratz, you are now logged in!");
                window.location.replace("http://www.yahoo.com/");
            // } else if (password === "one23456") {
            //     console.log("The password is kinda right. But no dice.");
            } else
                console.log("wrong password!");
            }

        } else {
            console.log("username is wrong!");
        }

    });

});