// user experience
// =================================================
// xxx player starts game to display a random number .
// xxx player selects one four crystals displayed.
// xxx Each crystal has an assigned value not known to the player.
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


// win count variable
var winCounter = 0;

// loss count varable
var lossCounter = 0;

// random number for crystal to total to
var KeyValueCompare;

// total crystal value from click event score
var CrystalTotal = 0;

// Array to store random number for each of 4 crystals
var crystalValue = [];


// minimum number value for random number generator
var min = 0;

// minimum number value for random number generator
var max = 0;


//-------------------------------------------------------
//----------------  **Get Variables**  ------------------
//-------------------------------------------------------
//grabs crystal to set random valuesval
//	var crystalValueAdd = document.querySelector(".crystal-[i]");



//---------------------------------------------------
//-------------  ** Global Functionss ** -------------
//---------------------------------------------------


//  Create a random number from 19-120 (for the crystal click total comparison)

function generateRandomNumber(min, max) {
	var numberGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("min= " + min);
console.log("max= " + max);
console.log(numberGenerate);
	return numberGenerate;

	}

KeyValueCompare = generateRandomNumber(19,120);


// generate random number 4x one for each cystal values
function cystalValueAssign() {
// generate random number (randomize between 1 and 12) one for each cystal values
	var min = 1;
	var max = 12;
	for(i = 0; i < 4; i++) {
		var randomNum = generateRandomNumber(min, max);
		crystalValue.push(randomNum);
		valueAdd(randomNum, i);
	}
}
cystalValueAssign();

// function value add assigns the random numbers to each of the four crystal
function valueAdd(randomNum, i) {
	console.log("going around " + i + " " + randomNum);
	console.log(document.getElementsByClassName("crystalValue")[i]);
	var crystalValueAdd = document.getElementsByClassName("crystalValue")[i];
	crystalValueAdd.setAttribute("Data-crystal", randomNum);
}

	document.addEventListener("click", function(event) {
		console.log(event);	
		var crystalTotalValue = document.querySelector(".crystalValue");
		console.log(crystalTotalValue);	
		crystalTotalValue.getAttribute("data-crystal")
		console.log(crystalTotalValue.getAttribute("data-crystal"));
	});


	var theParent = document.querySelector("#theDude");
theParent.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}

