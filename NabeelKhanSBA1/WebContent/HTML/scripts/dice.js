/*Name: dice.js
 *Desc: This is a script file that holds the functions to roll dice
 *Author: Nabeel Khan
 *Date Created: 12-10-19
 *Date Last Updated: 12-10-19
 * */

//Validates if a number was input
function validateDieInput(e){
	e.preventDefault();
	
	var screenToPost = document.getElementById('resultScreen');
	var amountNumberChecker = /^[0-9]+$/;
	var modNumberChecker = /^-?[0-9]*$/;

	
	if(!amountNumberChecker.test(e.target[1].value) || !modNumberChecker.test(e.target[2].value)){
		//If number is invalid, post an error to the text area
		screenToPost.innerHTML += "ERROR: Amount or Modifier Invalid\n";
		//Auto scroll box if too much text in box
		screenToPost.scrollTop = screenToPost.scrollHeight;
	}
	else{
		//If the number IS valid, calculate the roll
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
		
		screenToPost.innerHTML += ("Rolled " + 
				count + " "+ die + "s and added " + 
				modifier + ". Result: " + resultOfRoll + "\n");
		
		//Adjust screen if text takes up too much room
		screenToPost.scrollTop = screenToPost.scrollHeight;

	}
	
}

//Function that will roll dice, based on type and amount, when called.
function rollDice(dieType, dieCount){
	
	var diceSum = 0;
	
	for(i=0; i<dieCount; i++){
		diceSum += (Math.floor(Math.random() * dieType )+ 1);
	}
		
	return diceSum;;
}
