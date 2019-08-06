
//Declare a targetNum array from 19 - 120
var targetNum = Math.floor(Math.random() * 102 + 19);
console.log(targetNum);

//Declare variables to track wins, losses and totalScore
var wins = 0;
var losses = 0;
var totalScore = 0;
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



$(".buttons").on("click", function() {

    buttons = $(this).val();
    console.log(buttons);

    totalScore += buttons
    
    $("#totalScore-text").html(totalScore);

    

});




//Dispaly the game data on the HTML
targetNumText.textContent = targetNum;
winsText.textContent = ("Wins: " + wins);
lossesText.textContent = ("Losses: " + losses);
totalScoreText.textContent = totalScore;

