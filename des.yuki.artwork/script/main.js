// we always start with a module to encapsulate our own code
// is is called an IIFE (immediately invoked function expression)

(() => {
	// collect all the element that we wan the user to interact with and also elemets that to change
	// JS holds these in memory so that it can accessthem later (these are elements in the html)

	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
	gameBoard = document.querySelector(".puzzle-board");
	pzlPieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone");

	// let student = document.querySelector("#students") just one thing

	//.gameBoard {
	//	background-image: URL("images/backGround0.jpg")
	//}

	/*
	theThumbnails = [
			<img src="images/buttonZero.jpg" data-bgref="0" alt="thumbnail"> 
			<img src="images/buttonOne.jpg" data-bgref="1" alt="thumbnail">
	    	<img src="images/buttonTwo.jpg" data-bgref="2" alt="thumbnail">
			<img src="images/buttonThree.jpg" data-bgref="3" alt="thumbnail">
	]
	*/ 

	const imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];


	// the "this" keyword refers to the element that triggers this function (the nav button we click with the custom data attribute of bgref)
	function changeImageSet() {
	
		
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)` // change the bg img on the blur retangle
	
		let theThumbnails = this; // this is the element (thumbnail) we clicked on

		//debugger; 
		// for checking , this will pause code exection on this line, like pushing pause on Netflix

		// update the draggable piece's src attribut one at a time
		pzlPieces.forEach((piece, index) => {
			piece.src = `images/${imageNames[index] + theThumbnails.dataset.bgref}.jpg`; // offset is bgref
	
		});

		//let element = gameBoard;
		//while (element.firstChild) {
		//	element.removeChild(element.firstChild);
		//} //really removed all children, need that dotted lines tho

	
		function allowReset() {
			let pzlPieces

		
		}

		
	}


	function allowDrag() {
		console.log("started dragging me");
		// create a reference to the elenent we're dragging so we can retrieve it later
		event.dataTransfer.setData("draggedEl", this.id);

		//debugger;
	}

	function allowDragOver(event) {
		// override default behavior on certain elements when an event happens
		event.preventDefault();
		console.log("started dragging over me");
	}

	

	function allowDrop(event) {
		event.preventDefault();
		console.log("dropped on me");

		let droppedElId = event.dataTransfer.getData("draggedEl");
		//if this.childElmentCount is greater than 0, don't excute anything else, just exit the function.

		if (this.childElementCount > 0) {return}

		//debugger;

		// retrieve the dragged ele by its ID, and then put it inside the current drop zone
		this.appendChild(document.querySelector(`#${
			droppedElId
		}`)); 
		// variable name to run, js code expression
		// # css
		// js what comes next is need to fingure out what it means
		// MDN javascript template string

		
	}
	// how to we want the user to interact with the elements that we collected earlier?
	// events are things like clicks, drags, double-clicks, keypresses... all the ways a user can interact with a mouse, a keyboard etc.

	

	// add event handling here
	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeImageSet);
	pzlPieces.forEach(piece => piece.addEventListener("dragstart", allowDrag));
	
	

	//set up the drop zone event handling
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
	
})();
