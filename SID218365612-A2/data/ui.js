window.createParagraph = function(titleText){
	var tag = document.createElement("p");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

window.createHeading1 = function(titleText){
	var tag = document.createElement("H1");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
}

window.createHeading2 = function(titleText){
	var tag = document.createElement("H2");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
}


window.createHeading3 = function(titleText){
	var tag = document.createElement("H3");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
}


window.createDiv = function(elements){
	var tag = document.createElement("div");
	for (var i = 0; i < elements.length; i++){
		tag.appendChild(elements[i]);
	}
    document.body.appendChild(tag);
}


window.createSpan = function(titleText){
	var tag = document.createElement("span");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
}


window.createButton = function(titleText){
	var tag = document.createElement("BUTTON");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}


window.createTextInput = function(){
	var tag = document.createElement("input");
	tag.type = "text";
    document.body.appendChild(tag);
    return tag;
}


window.createImage = function(imageSource){
	var img = document.createElement("IMG");
    img.setAttribute("src", imageSource);
    img.setAttribute("width", "304");
    img.setAttribute("height", "228");
    document.body.appendChild(img);
}

window.createLabel = function(titleText){
	var tag = document.createElement("LABEL");
	var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

