
// constructor that makes dice objects
function Dice1 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();	
};

function Dice2 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();	
};

function Dice3 (sides) {
	this.diceSides = parseInt(sides);
	this.roll = function () {
		return result = (Math.floor(Math.random() * sides) + 1)
		console.log(result)
	};
	this.score = this.roll();	
};

//defines function to compare dice
function rollCompare () {
	if (player.score > computer.score) {
		outcome = "VICTORY!";
	}
	else if (player.score < computer.score) {
		outcome = "FAILURE!";
	}
	else if (player.score == computer.score) {
		outcome = "ITS A TIE!";
	}
};


//creates dice
$('.submit').click(function(){
	var sides = $('.dice-sides').val();
//makes new player and computer dice and scores
	player = new Dice1(sides);
	
	computer = new Dice1(sides);
	
	player = new Dice2(sides);
	
	computer = new Dice2(sides);

	player = new Dice3(sides);
	
	computer = new Dice3(sides);
	


//calls dice comparison function
	rollCompare();
//displays scores
$('.answer').html('player score: ' + player.score +'<br>computer score: ' + computer.score + '<br> ' + outcome);
//tells you who won
rollCompare();
})

