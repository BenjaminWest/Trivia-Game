var currentChallenge = null;
var timeCall = null;
var score = 0;
var i = 0;

/*Sets up the challenge and calls the first question. Takes the levelNumber and challenge number as a paramter so it knows what challenge to call.
Calls the question function which initiates the question cycle.
Signature: 		startChallenge(num, challenge);
				num - A number representing the current level.
				challenge - an array containing the questions in that challenge.*/
window.startChallenge = function(num, challenge){
	clearBody();
	var heading = createHeading1("You are now playing challenge " + num + "!");
	heading.setAttribute("id", "questionHeading");
	i = 0;
	score = 0;
	currentChallenge = challenge;
	window.challengeNum = num;

	window.nextQuestionBtn = window.createButton("Next Question");
	nextQuestionBtn.setAttribute("id", "next");
	disableNextQuestion();
	nextQuestionBtn.onclick = function(){
		if (i == 10)
			challengeComplete();
		else 
			callQuestion();
	}
	createDiv2();
	callQuestion();
}



//calls the next question with a time delay, is called after every question.
//Signature: 	nextQuestion();
nextQuestion = function(){
		timeCall = setTimeout(function(){callQuestion()}, 12000);
	}

/*Displays the question and the answer buttons, buttons will then call the relevant functions to check the answer and add to teh score.
If all answers have been answered then the challengeComplete function is called
Signature: 	callQuestion();*/
function callQuestion(){
		var container = document.getElementById("div");
		container.innerHTML = "";
		var elements = new Array();
		var buttons = new Array();
		elements.push(createHeading2("Question " + currentChallenge[i].number));
		elements.push(createImage(currentChallenge[i].image));
		elements.push(createParagraph(currentChallenge[i].question));
		currentChallenge[i].incorrect.forEach(function(answer){
			var button = window.createButton(answer, "questionButton");
			buttons.push(button);
			button.onclick = function(){
				checkIfCorrect(answer, currentChallenge[i-1], buttons);
				clearTimeout(timeCall);
				enableNextQuestion();
			}
		})
		buttons.forEach(function(button){
			elements.push(button);
		})
		window.addToDiv(elements, "div");
		document.body.appendChild(nextQuestionBtn);
		disableNextQuestion();
		i++;

		if (i < currentChallenge.length)
			nextQuestion();
		else 
			timeCall = setTimeout(function(){challengeComplete()}, 12000);
	}

/*Is called when all questions have been asnwered, output differes depending on score.
will add buttons to ask the user to play again or go back to the menu.
Signature: 		challengeComplete();*/
function challengeComplete(){
	clearBody();
	var topic = getTopic();
	createHeading1("You have completed Challenge " + challengeNum + "!");
	createParagraph("You answered " + score + " questions correctly out of 10");
	if (score < 8){
		createParagraph("You may need to brush up on your " + topic + " history and geography, Would you like to try again?");
		var btn = window.createMenuButton("Play again");
		btn.onclick = function(){
			startChallenge(challengeNum, currentChallenge);
		}
		createBreak();
		var btn = window.createMenuButton("Play another challenge");
		btn.onclick = function(){
			challengeSelectMenu(currentLevel);
		}
	}
	else {
		updateScore();
		createParagraph("Great job! You have passed the challenge on " + topic + " history and geography, Would you like to play another challenge?");
		var btn = window.createMenuButton("Play another challenge");
		btn.onclick = function(){
			challengeSelectMenu(currentLevel);
		}
	}
}

//Updates the scoring table in scoring.js
//Signature: 		updateScore();
function updateScore(){
	var levelIndex = window.currentLevel-1
	var challengeIndex = challengeNum-1
	window.scoreTable[levelIndex][challengeIndex] = true;
}

//Gets the topic from topics.js
//Signature: 		topic = getTopic();
//					topic - A string containing the topic of that level.
function getTopic(){
	var level = window.currentLevel-1
	var topic = window.topics[level];
	return topic;
}

//Checks whether a question is correct or not and colours the buttons accordinly by setting the ID so CSS styles the buttons, increases score if correct.
//Signature: 		result = checkIfCorrect(answer, questionObject, buttons);
//					answer - The value of the button the user selected to be their answer.
//					questionObject - an object of that question.
//					buttons - an array of the answer buttons created.
//					result = a boolean representation of if the question was correct or not.
function checkIfCorrect(answer, questionObject, buttons){
	var correctAns = questionObject.correct;
	buttons.forEach(function(button){
		button.disabled = true;
		if (button.value == correctAns)
			button.setAttribute("class", "correct");
		else if (button.value == answer)
			button.setAttribute("class", "wrong");
		else button.setAttribute("class", "incorrect");
	})
	if (correctAns == answer){
		score++;
		return true;
	}
	else {
		return false;
	}	
}

//Enables next question button
//Signature: 		enableNextQuestion();
function enableNextQuestion(){
	document.getElementById("next").disabled = false;
}

//Disables next question button
//Signature: 		disableNextQuestion();
function disableNextQuestion(){
	document.getElementById("next").disabled = true;
}


