//Declare a targetNum array from 19 - 120
var targetNum = Math.floor(Math.random() * 102 + 19);
console.log(targetNum);

//Declare variables to track wins and losses
var wins = 0;
var losses = 0;

//Create variables that hold references to places in the HTML file to display the outcome.
var targetNumText = document.getElementById("targetNum-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalScore = document.getElementById("totalScore-text");




//Dispaly the game data on the HTML
targetNumText.textContent = targetNum;