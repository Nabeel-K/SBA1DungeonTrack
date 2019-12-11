/*Name: validateContact.js
 *Desc: A small js file that ensures name and email used to send a comment follow valid syntax
 *Author: Nabeel Khan
 *Date Created: 12-10-19
 *Date Last Modified: 12-10-19
 * */

function validateContact(e) {
	e.preventDefault();

	var inputName = e.target[0].value;
	var userEmail = e.target[1].value;
	var userComment = e.target[2].value;

	// Message to display after successful or unsuccessful submit
	var message = document.getElementById("hiddenMessage");

	/*
	 * Name must have at least a sequence of 2 or more characters to start, then
	 * an optional space followed by an optional last name
	 */
	var nameCheck = /^[A-Za-z]{2,}\s?[A-Za-z]*$/;

	// Simple regex to check basic email syntax
	var emailCheck = /^\w{1,64}@\w+[.][A-Za-z]{2,}/;

	if (!nameCheck.test(inputName)) {
		message.innerHTML = "Error, Name is Invalid. Name should be at least a first name of at least two characters. Including no more than one last name is optional";
	} else {
		if (!emailCheck.test(userEmail)) {
			message.innerHTML = "Error, invalid email address";
		} else {
			if(userComment.length > 0){
				message.innerHTML = "Comment Sent! Refreshing...";
				// Simulate loading with timeout function.
				setTimeout(() => { document.getElementById("commentBox").submit() }, 1500);
			}
		}
	}

}