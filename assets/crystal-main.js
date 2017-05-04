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


// player win count variable
var winCounter = 0;

// player loss count varable
var lossCounter = 0;

// random number for crystal to total to
var keyValueCompare;

// total crystal value from click event score
var crystalTotal = 0;

// array to store random number for each of 4 crystals
var crystalValue = [];


// minimum number value for random number generator
var min = 0;

// minimum number value for random number generator
var max = 0;

var crystalTotal = 0;


//-------------------------------------------------------
//----------------  **Get Variables**  ------------------
//-------------------------------------------------------
//grabs crystal to set random valuesval
//	var crystalValueAdd = document.querySelector(".crystal-[i]");



//---------------------------------------------------
//-------------  ** Global Functionss ** -------------
//---------------------------------------------------





// user clicks button to start game
keyValueCompare = generateRandomNumber(19,120);
cystalValueAssign();
numGenerate.innerHTML = keyValueCompare;
currectCrystalTotal.innerHTML = crystalTotal;
loss.innerHTML = lossCounter;
win.innerHTML = winCounter;


//  Create a random number from 19-120 (for the crystal click total comparison)
function generateRandomNumber(min, max) {
	var numberGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("min= " + min);
console.log("max= " + max);
console.log(numberGenerate);
	return numberGenerate;

	}

// generate random number 4x one for each cystal values
function cystalValueAssign() {
// generate random number (randomize between 1 and 12) one for each cystal values
	var min = 1;
	var max = 12;
	for(i = 0; i < 4; i++) {
		var randomNum = generateRandomNumber(min, max);
		var crystalValueAdd = document.getElementsByClassName("crystalValue")[i];
		crystalValueAdd.setAttribute("Data-crystal", randomNum);
	}
}

// function value add assigns the random numbers to each of the four crystal
function valueAdd(randomNum, i) {
console.log("going around " + i + " " + randomNum);
console.log(document.getElementsByClassName("crystalValue")[i]);

}

// event listener for clicks on gems
for(i = 0; i < 4; i++) {
console.log(" i " + i);
  	document.getElementsByClassName("crystalValue")[i].addEventListener("click", function() {
	var crystalclickvalue = this.getAttribute("data-crystal");
console.log("i'm a crystal data " + this.getAttribute("data-crystal") + " i " + i);
	clickTotal(crystalclickvalue);
	});
}

// clickTotal function calcuates plaer click totals and compairs to random generated number
function clickTotal(clickValue) {
	clickValue = parseInt(clickValue);
	crystalTotal = crystalTotal + clickValue;
	currectCrystalTotal.innerHTML = crystalTotal;
console.log("inside crystalTotal CT " + crystalTotal);
console.log("inside crystalTotal KVC " + keyValueCompare);
console.log("inside crystalTotal lc " + lossCounter);
	if ( crystalTotal === keyValueCompare ) {
		win.innerHTML = winCounter++;
		gReset(lossCounter, winCounter);
	}
	if (crystalTotal >= keyValueCompare ) {
		loss.innerHTML = lossCounter++;
		gReset(lossCounter, winCounter);
	}
}

// game reset generates new random values and hold current win/loss status
function gReset(lossCounter, winCounter) {
	keyValueCompare = generateRandomNumber(19,120);
	cystalValueAssign();
	numGenerate.innerHTML = keyValueCompare;
	currectCrystalTotal.innerHTML = 0;
}

// 	var theParent = document.querySelector("#theDude");
// theParent.addEventListener("click", doSomething, false);
 
// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         alert("Hello " + clickedItem);
//     }
//     e.stopPropagation();
// }

