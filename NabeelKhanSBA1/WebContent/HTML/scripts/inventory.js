/*Name: inventory.js
 *Desc: This is a js file that holds functions that update user inventory when called
 *Author: Nabeel Khan
 *Date Created: 12-11-19
 *Date Created: 12-11-19
 */

//Gets current inventory from local storage
function getInventory() {
	// Check if values of inventory are in storage. If not, assign 0 to each
	// amount of items in the inventory
	if (localStorage.getItem("inventory") === null) {

		var newInventory = {
			potions : 0,
			arrows : 0
		};

		document.getElementById("potionCount").innerHTML = newInventory.potions;
		document.getElementById("arrowCount").innerHTML = newInventory.potions;

		// stringify before storage because localStorage supports strings only
		localStorage.setItem("inventory", JSON.stringify(newInventory));
	} else {
		var inventory = JSON.parse(localStorage.getItem("inventory"))

		document.getElementById("potionCount").innerHTML = inventory.potions;
		document.getElementById("arrowCount").innerHTML = inventory.arrows;
	}

}

// Function that takes event and uses values to update inventory
function updateInventory(e) {

	e.preventDefault();
	// Get potions to add and subtract from it potions to subtract
	var potionQuantityUpdateValue = (e.target[0].value - e.target[1].value);

	// Get arrows to add and subtract from it arrows to subtract
	var arrowQuantityUpdateValue = (e.target[2].value - e.target[3].value);

	// Get current values of inventory
	var currentInventory = JSON.parse(localStorage.getItem("inventory"))

	if (currentInventory.potions + potionQuantityUpdateValue < 0) {
		currentInventory.potions = 0;
	} else {
		currentInventory.potions += potionQuantityUpdateValue;
	}

	if (currentInventory.arrows + arrowQuantityUpdateValue < 0) {
		currentInventory.arrows = 0;
	} else {
		currentInventory.arrows += arrowQuantityUpdateValue;
	}

	// Store new values in storage and submit
	localStorage.setItem("inventory", JSON.stringify(currentInventory));
	document.getElementById("inventoryForm").submit();
}