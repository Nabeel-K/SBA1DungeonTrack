/*Name: dice.js
 *Desc: This is a script file that holds the functions to roll dice
 *Author: Nabeel Khan
 *Date Created: 12-10-19
 *Date Last Updated: 12-10-19
 * */
function validateDieInput(e){
	
	var numberChecker = /^[1-9]*$/;

	console.log(e.target[1].value);
	
	if(!numberChecker.test(e.target[1].value)){
		var screenToPostError = document.getElementById('resultScreen');
		screenToPostError.innerHTML += "ERROR: Amount or Modifier Invalid";
	}
	else{
		checkDie(e)
	}
	
}

function checkDie(e){
	e.preventDefault();
	
	var die = e.target[0].value;
	var count = e.target[1].value;
	var modifier = (e.target[2].value * 1);	
	
	var resultOfRoll = 0;
	
	switch(die){
	case "d4":
		resultOfRoll = (rollDice(4, count) + modifier);
		break;
		
	case "d6":
		resultOfRoll = (rollDice(6, count) + modifier);
		break;
		
	case "d8":
		resultOfRoll = (rollDice(8, count) + modifier);
		break;
		
	case "d10":
		resultOfRoll = (rollDice(10, count) + modifier);
		break;
		
	case "d12":
		resultOfRoll = (rollDice(12, count) + modifier);
		break;
		
	case "d20":
		resultOfRoll = (rollDice(20, count) + modifier);
		break;
	}
	
	console.log(resultOfRoll);
	
	var screenToPostResult = document.getElementById("resultScreen");
	
	screenToPostResult.innerHTML += ("Rolled" + count + die + "s. Result: " + resultOfRoll + "\n");
	
	//Returns false so page does not refresh
	return false;
}


function rollDice(dieType, dieCount){
	
	var diceSum = 0;
	
	for(i=0; i<dieCount; i++){
		diceSum += (Math.floor(Math.random() * dieType )+ 1);
	}
		
	return diceSum;;
}
