// user experience
// =================================================
// player starts game to display a random number .
// player selects one four crystals displayed.
// Each crystal has an assigned value not known to the player.
// player trys to select the right amount of crystal to match the random number total displayed
// games shows and tracks total score after each cystal is clicked
// game displays number of wins and losses
// game displays player out come: "wiiner" / "game over"
// game resets with new cystal values and random guess number

// code requirements
// =================================================
// generate a random guess number between the value 19 and 120
// generate random number, 4x, one for each cystal values: randomize between 1 and 12
// create an event that captures crystal value
// store and total all crystal values selected during game
// compare total crystal value to random guess number.
// if === display 'winner' --> game over and reset the games cystal values and random guess number
// if crystal value > guess number --> game over and reset the games cystal values and random guess number
// capture and display number or wins and displays

// code bonus
// =================================================
// color change background on mouse over event
// bounce crystals on click event


//---------------------------------------------------
//-------------  ** Global Variables ** -------------
//---------------------------------------------------

// Array to store random number for each of 4 crystals
var crystalValue = [];

// win count variable
var winCounter = 0;

// loss count varable
var lossCounter = 0;

// random number for crystal to total to
var numberGenerate = 0;

// total crystal value from click event score
var CrystalTotal = 0;

var crystalValue = [];

// minimum number value for random number generator
var min = 0;

// minimum number value for random number generator
var max = 0;


//-------------------------------------------------------
//----------------  **Get Variables**  ------------------
//-------------------------------------------------------
//grabs crystal to set random valuesval
	var crystalValue = document.querySelector(".crystalValue");



//---------------------------------------------------
//-------------  ** Global Functionss ** -------------
//---------------------------------------------------


//  Create a random number from 19-120 (for the crystal click total comparison)

function generateRandomNumber(min, max) {
	var numberGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(min);
console.log(max);
console.log(numberGenerate);

	}

generateRandomNumber(19,120);


// generate random numbera 4x one for each cystal values: randomize between 1 and 12
function cystalValueAssign(min, max) {
// generate random number (1 to 12) one for each cystal values
	var min = 1;
	var max = 12
	generateRandomNumber(min, max);
	console.log(generateRandomNumber);
	for(i = 0; i < crystalValue.length; i++) {
		crystalValue[i].addEventListener("click", function(event) {
	console.log(event);	
});

	}

}
cystalValueAssign();

