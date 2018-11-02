window.onload = showMenu;
window.currentLevel = null;


//Displays the home screen
//Signature: 	showMenu();
function showMenu(){
	var titleHeading = createHeading1("Geography Trivia!");
	titleHeading.setAttribute("id", "titleHeading");
	var startButton = window.createMenuButton("Start Game");
	startButton.onclick = function(){
		levelSelectMenu();
	}
	createBreak();
	var img = createImage("Images/World.png");
	img.setAttribute("id", "title");
}

/*Displays the avaible levels to play, displays the levels in locked state if previous level has not been completed.
Allows the user to also access the level Unlock menu if selected, passing the locked levels as an array.
Signature:  	levelSelectMenu(); */
function levelSelectMenu(){
	clearBody();
	setStyle(null);
	document.body.setAttribute("id", "body");
	window.createHeading1("Select the level you would like to play");
	var unlockableLevels = new Array();
	var levels = new Array();
	levels = [1, 2, 3];
	levels.forEach(function(level){
		var last = scoreTable[level-1].length -1;
		if (window.scoreTable[level-1][last] == true){
			var button = window.createMenuButton("Play Level " + level);
			button.setAttribute("id", "levelButton" + level);
			button.onclick = function(){
				currentLevel = level;
				challengeSelectMenu(level);
			}
		}
		else{
			unlockableLevels.push(level);
			var button = window.createMenuButton("Play Level " + level);
			button.disabled = true;
		}
	})
	var btn = createMenuButton("Unlock More Levels");
	btn.onclick = function(){
		unlockLevels(unlockableLevels);
	}
}

/*Sets up the UI to allow users to enter the keys to unlock other levels.
Takes the levels taht are locked in an array and only allows those levels to be unlocked.
Updates the scoretable file when the user succesfully unlocks a level.
Signature:	unlockLevel(levels);
			levels - an array that contains numbers of the unlockble levels */
function unlockLevels(levels){
	clearBody();
	createHeading1("Level Unlock Menu");
	createHeading2("Enter the keys to unlock levels");
	levels.forEach(function(level){
		var previousLevel = level-1;
		var key = window.keys[level-1];
		var elements = new Array();
		var result = createParagraph("Level " + level + " Locked!");
		var input = createTextInput();
		var btn = createButton("Unlock");
		elements.push(result);
		elements.push(input);
		elements.push(createBreak());
		elements.push(btn);
		var div = createDiv(elements, "unlockDiv");
		console.log("hey");
		//div.setAttribute("id", "unlockDiv");
		btn.onclick = function(){
			if (input.value == key){
				updateScoreTable(level);
				result.innerHTML = "Level " + level + " unlocked!";
			}
			else {
				result.innerHTML = "Incorrect key!";
			}
		}
	})
	var button = createMenuButton("Back to Level Select Menu");
	button.onclick = function(){
		levelSelectMenu();
	}
}

/*Displays the available challenges to play by retriving the level object from the data files. 
Shows the levels in completed state if passed, If all levels are passed then it calls the levelComplete function passing the level number.
This function can be recalled if the user wants to replay the level and takes the level number as a parameter.
Signature: 	challengeSelectMenu(levelNumber);
			levelNumber - A number representing the level being passed*/
window.challengeSelectMenu = function(levelNumber){
	clearBody();
	setStyle(levelNumber);
	window.createHeading1("You are now playing ");
	window.createHeading2("Level " + levelNumber + "!");
	window.challengesCompleted = 0;
	var level = getLevel(levelNumber); 
	var challenges = new Array();
	var i = 1;

	level.forEach(function(challenge){
		challenges.push(i);
		i++;
	})

	//checks is a challenge is completed so it knows how to display the button.
	challenges.forEach(function(challengeNumber){
		if (checkIfCompleted(challengeNumber)){
			var button = window.createMenuButton("Challenge " + challengeNumber + " Completed!");
			button.disabled = true;
			challengesCompleted++;
		}
		else {
			var button = window.createMenuButton("Challenge " + challengeNumber);
			button.onclick = function(){
				callChallenge(levelNumber, challengeNumber);
			}
		}
	})
	if (challengesCompleted == 3){
		levelComplete(levelNumber);
	}
	var button = createMenuButton("Level Select Menu");
	createDiv3(button);
	button.onclick = function(){
		levelSelectMenu();
	}
}

//Initiates a challenge based on the given parameters of challenge number and level number
//Signature: 	callChallenge(levelNumber, challengeNum);
//				levelNumber - A number representing the level.
//				challengeNum - A number representing the number challenge being called.
window.callChallenge = function(levelNumber, challengeNum){
	var level = getLevel(levelNumber); 
	var challenge = level[challengeNum-1];
	startChallenge(challengeNum, challenge);
}

/*Called when all challenges of a level have been completed, provides the secret key.
Adds buttons allowing the user to replay the level or play another. Calls the relevant function depending on the button selected.
Signature:  	levelComplete(levelNumber);
				levelNumber - A number reprsenting the level being completed.*/	
function levelComplete(levelNumber){
	updateScoreTable(levelNumber+1);
	clearBody();
	var key = window.keys[levelNumber];
	createHeading1("Congratulations, you have completed Level " + levelNumber + "!");
	createHeading2("You have earn't the key to unlock the next Level, Good luck!");
	var keyHeading = createHeading1("'" + key + "'");
	keyHeading.setAttribute("id", "key");
	var btn = window.createMenuButton("Play Level " + levelNumber + " again");
	btn.onclick = function(){
		resetLevel(levelNumber);
		challengeSelectMenu(levelNumber);
	}
}

/*Is called when a level is completed, takes the level number as a paramater and then updates the scoretable file accordinly.
Signature: 		updateScoreTable(levelNumber);
				levelNumber - A number representing the level to update on the scoretable.*/

function updateScoreTable(levelNumber){
	var levelIndex = levelNumber-1
	if (scoreTable[levelIndex] == undefined)
		console.log("Game finished");
	else {
		var last = scoreTable[levelNumber-1].length -1;
		window.scoreTable[levelIndex][last] = true;
	}
}

/*Is called when a user wants to replay a level.
Takes the level number as a parameter and then sets all challenge completed to false.
Signature: 		resetLevel();
				levelNumber - A number representing the level to be reset.*/
function resetLevel(levelNumber){
	var levelIndex = levelNumber-1
	var a = window.scoreTable[levelIndex].length;
	for (var i = 0; i < a-1; i++){
		window.scoreTable[levelIndex][i] = false;
	}
}

//Takes the level number as a parameter and then retrives the level object of that number and returns the object.
//Signature: 		level = getLevel(levelNumber);
//					level - an object of the level.
//					levelNumber - A number prepresenting the level object to be returned.
function getLevel(levelNumber){
	var level = null; 
	if (levelNumber == 1){
		level = window.levelOne; 
	}
	else if (levelNumber == 2){
		level = window.levelTwo;
	}
	else if (levelNumber == 3){
		level = window.levelThree;
	}
	return level;
}

/*Is called to check is the challenge s completed or not. Returns true if challenge has been completed.
Retrives the data from the scoretable file.
Signature: 		checkIfCompleted(challengeNumber);
				challengeNumber - a number representing the challenge being passed.*/
function checkIfCompleted(challengeNumber){
	var levelIndex = window.currentLevel-1
	var challengeIndex = challengeNumber-1
	var passed = null;
	if (window.scoreTable[levelIndex][challengeIndex])
		return true;
	else return false;
}

//Is used to change the ID of the body depending on what level is being played so the CSS styling is relevant to that level.
// Signature: 		setStyle(levelNumber);
//					levelNumber - a number representing the level that the style is to be set to.
function setStyle(levelNumber){
	if (levelNumber == 0)
		document.body.setAttribute("id", "general");
	else {
		var id = "level" + levelNumber;
		document.body.setAttribute("id", id);
	}
}

//clears the html page so new elements can be added to emulate a new page.
//Signature: 	clearBody();
function clearBody(){
	document.body.innerHTML = "";
}

