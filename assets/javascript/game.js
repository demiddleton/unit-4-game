
//Declare a targetNum array from 19 - 120
var targetNum = Math.floor(Math.random() * 102 + 19);
console.log(targetNum);

//Declare variables to track wins, losses and totalScore
var wins = 0;
var losses = 0;
var totalScore = 0;
//var intScore = parseInt(totalScore);
var buttons = "";

//Create variables that hold references to places in the HTML file to display the outcome.
var targetNumText = document.getElementById("targetNum-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalScoreText = document.getElementById("totalScore-text");

//Create a function to give each button a random value when clicked
var btnValue1 = Math.floor(Math.random() * 12 + 1);
console.log(btnValue1);

$("#button-1").val(btnValue1);


var btnValue2 = Math.floor(Math.random() * 12 + 1);
console.log(btnValue2);

$("#button-2").val(btnValue2);


var btnValue3 = Math.floor(Math.random() * 12 + 1);
console.log(btnValue3);

$("#button-3").val(btnValue3);


var btnValue4 = Math.floor(Math.random() * 12 + 1);
console.log(btnValue4);

$("#button-4").val(btnValue4);

//Create a function to display the value of the button clicked

$(".buttons").on("click", function () {

    buttons = $(this).val();
    console.log(buttons);

    totalScore += parseInt(buttons);

    $("#totalScore-text").html(totalScore);


    if (totalScore === targetNum) {
        wins++;

        $("#wins-text").html("Wins: " + wins);
        targetNum = Math.floor(Math.random() * 102 + 19);
        targetNumText.textContent = targetNum;
        totalScore = 0;
        
        btnValue1 = Math.floor(Math.random() * 12 + 1);
        $("#button-1").val(btnValue1);

        btnValue2 = Math.floor(Math.random() * 12 + 1);
        $("#button-2").val(btnValue2);

        btnValue3 = Math.floor(Math.random() * 12 + 1);
        $("#button-3").val(btnValue3);

        btnValue4 = Math.floor(Math.random() * 12 + 1);
        $("#button-4").val(btnValue4);
    }

    if (totalScore > targetNum) {
        losses++;

        $("#losses-text").html("Losses: " + losses);
        targetNum = Math.floor(Math.random() * 102 + 19);
        targetNumText.textContent = targetNum;
        totalScore = 0;

        btnValue1 = Math.floor(Math.random() * 12 + 1);
        $("#button-1").val(btnValue1);

        btnValue2 = Math.floor(Math.random() * 12 + 1);
        $("#button-2").val(btnValue2);

        btnValue3 = Math.floor(Math.random() * 12 + 1);
        $("#button-3").val(btnValue3);

        btnValue4 = Math.floor(Math.random() * 12 + 1);
        $("#button-4").val(btnValue4);
    }

  
});




//Dispaly the game data on the HTML
targetNumText.textContent = targetNum;
winsText.textContent = ("Wins: " + wins);
lossesText.textContent = ("Losses: " + losses);
totalScoreText.textContent = totalScore;

