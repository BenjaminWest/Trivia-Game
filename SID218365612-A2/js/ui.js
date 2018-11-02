//Creates a paragraph of the text passed and returns that paragraph element
//Signature:    tag = createParagraph(titletext);
//              titleText - a string containing to text to be added to the element.
//              tag - the element being returned.
window.createParagraph = function(titleText){
	var tag = document.createElement("p");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

//Creates a heading 1 of the text passed and returns that element.
//Signature:    tag = createHeading1(titletext);
//              titleText - a string containing to text to be added to the element.
//              tag - the element being returned.
window.createHeading1 = function(titleText){
	var tag = document.createElement("H1");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

//Creates a heading 2 of the text passed and returns that paragraph element
//Signature:    tag = createHeading2(titletext);
//              titleText - a string containing to text to be added to the element.
//              tag - the element being returned.
window.createHeading2 = function(titleText){
	var tag = document.createElement("H2");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

//Creates a heading 3 of the text passed and returns that element.
//Signature:    tag = createHeading3(titletext);
//              titleText - a string containing to text to be added to the element.
//              tag - the element being returned.
window.createHeading3 = function(titleText){
	var tag = document.createElement("H3");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
}

//Creates a div and adds all elements in the array and sets it id as the id passed and returns that element.
//Signature:    tag = createDiv(elements, id);
//              elements - an array of all elements to be added to the div.
//              id - a string to be set as the id.
//              tag - the element being returned.
window.createDiv = function(elements, id){
	var tag = document.createElement("div");
    tag.setAttribute("id", id);
	for (var i = 0; i < elements.length; i++){
		tag.appendChild(elements[i]);
	}
    document.body.appendChild(tag);
    return tag;
}

//Creates a div and adds it ot the body
//Signature:    createDiv2();
window.createDiv2 = function(){
    var tag = document.createElement("div");
    tag.setAttribute("id", "div");
    document.body.appendChild(tag);
}

//Creates a div and adds all elements in the array and adds that to the body.
//Signature:    createDiv3(elements);
//              elements - an array of all elements to be added to the div.
window.createDiv3 = function(element){
    var tag = document.createElement("div");
    tag.setAttribute("id", "div");
    tag.appendChild(element);
    document.body.appendChild(tag);
}

//Finds a div from the id provides and adds the elements to the div.
//Signature:    addToDiv(elements);
//              elements - an array of all elements to be added to the div.
//              id - a string of the divs id.
window.addToDiv = function(elements, id){
    var tag = document.getElementById(id);
    for (var i = 0; i < elements.length; i++){
        tag.appendChild(elements[i]);
    }
}

//Creates an input of type button containing the text passed and returns that element.
//Signature:    tag = createButton(titletext);
//              titleText - a string containing to text to be added to the element.
//              tag - the element being returned.
window.createButton = function(titleText){
    var tag = document.createElement("INPUT");
    tag.setAttribute("type", "button");
    tag.setAttribute("value", titleText);
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

//Creates an input of type button containing the text passed, sets the id as the id passed and returns that element.
//Signature:    tag = createButton(titletext, id);
//              titleText - a string containing to text to be added to the element.
//              id - a string containing the id to be set.
//              tag - the element being returned.
window.createButton = function(titleText, id){
    var tag = document.createElement("INPUT");
    tag.setAttribute("type", "button");
    tag.setAttribute("value", titleText);
    tag.setAttribute("id", id);
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}

//Creates an button containing the text passed and returns that element.
//Signature:    tag = createMenuButton(titletext);
//              titleText - a string containing to text to be added to the element.
//              tag - the element being returned.
window.createMenuButton = function(titleText){
    var tag = document.createElement("BUTTON");
    tag.setAttribute("class", "menuButton");
    var node = document.createTextNode(titleText);
    tag.appendChild(node);
    document.body.appendChild(tag);
    return tag;
}


//Creates a n input element of type text and returns the element.
//Signature:    tag = createTextInput();
//              tag - the element being returned.
window.createTextInput = function(){
	var tag = document.createElement("input");
	tag.type = "text";
    tag.setAttribute("id", "textBox");
    tag.setAttribute("size", "15");
    document.body.appendChild(tag);
    return tag;
}


//Creates an image element using the source provided.
//Signature:    tag = createImage(imageSource);
//              imageSource - a string containing the location of the image.
//              tag - the element being returned.
window.createImage = function(imageSource){
	var img = document.createElement("IMG");
    img.setAttribute("src", imageSource);
    img.setAttribute("width", "228");
    img.setAttribute("height", "171");
    document.body.appendChild(img);
    return img;
}


//Creates a break and adds it to the document.
//Signature:    tag = createbreak();
//              tag - the element being returned.
window.createBreak = function(){
    var tag = document.createElement("br");
    document.body.appendChild(tag);
    return tag;
}

