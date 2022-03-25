/**
 * Global vars and functions
 */
function randomNumber(f) {
	return Math.floor(Math.random() * f);
}


var score = 0;
function winGame() {
	if (score == 50) {
		alert("you won!!!!!!!!!!!!!!!!");
		document.getElementById("won").innerHTML = "you won!"
	}
}
function addScore() {
	score++
	document.getElementById("score").innerHTML = "score: " + score;
	winGame()
}
var blockA = null;
var blockB = null;

function match(block) {
	if (blockA == null) {
		blockA = block;
	} else {
		blockB = block;
		if (blockA.icon == blockB.icon) {
			blockA.onDisappear();
			blockB.onDisappear();
			addScore();
		} else {
			blockA.onClosed();
			blockB.onClosed();
		}
		blockA = null;
		blockB = null;
	}
};

/**
 * The game board
 */
class Board {

	constructor() {
		this.width = 400;
		this.height = 400;
		this.element = document.createElement("div");
		this.element.style.width = this.width + "px";
		this.element.style.height = this.height + "px";
		this.element.style.border = "1px solid";
		this.element.style.lineHeight = 0;
	}

	addBlock(block) {
		this.element.appendChild(block.element);
	}
}

/**
 * The game block
 */
class Block {
	constructor(icon) {
		this.width = 40;
		this.height = 40;
		this.borderSize = 1;
		this.opened = false;
		this.icon = icon;

		this.element = document.createElement("div");
		this.element.style.display = "inline-block";
		this.element.style.width = (this.width - this.borderSize * 2) + "px";
		this.element.style.height = (this.height - this.borderSize * 2) + "px";
		this.element.style.border = this.borderSize + "px solid white";
		this.element.style.backgroundColor = "green";
		// this.element.style.fontSize = "30px";

		var that = this;

		this.element.onmouseover = function () {
			that.onMouseOver();
		}
		this.element.onmouseout = function () {
			that.onMouseOut();
		}
		this.element.onclick = function () {
			that.onOpen();
		}
	}

	onMouseOver() {
		if (!this.opened) {
			this.element.style.backgroundColor = "gray";
		}
	}

	onMouseOut() {
		if (!this.opened) {
			this.element.style.backgroundColor = "green";
		}
	}

	onOpen() {
		if (!this.opened) {
			this.opened = true;
			this.element.style.backgroundColor = "unset";
			this.element.style.backgroundImage = "url('img/" + this.icon + ".png')";
			this.element.style.backgroundSize = "contain";

			match(this);
		}
	}

	onDisappear() {
		var that = this;
		setTimeout(function () {
			that.element.style.opacity = "0";
		}, 1000);
	}


	onClosed() {
		var that = this;
		setTimeout( () => {
			that.opened = false;
			that.element.style.backgroundColor = "green";
			that.element.style.backgroundImage = "none";
		}, 1000);
	}

}


// start creating
var selectedIcons = [];
var icons = ["apple", "banana", "grape", "pear", "pineapple", "watermelon"];
var board = new Board();

var i = 0;
while (i < 50) {
	var icon = icons[randomNumber(5)];
	selectedIcons.push(icon);
	var block = new Block(icon);
	board.addBlock(block);
	i++;
};

var p = 0;
while (p < 50) {
	var iconIndex = randomNumber(49 - p);
	var icon = selectedIcons[iconIndex];
	selectedIcons.splice(iconIndex, 1);
	var block = new Block(icon);
	board.addBlock(block);
	p++;
};

var rootElement = document.getElementById("root");
rootElement.appendChild(board.element);