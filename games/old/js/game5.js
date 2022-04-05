//change this to cheat
let myValue = 2;
//change this to cheat
let addedValue = 2;

var myAudio1 = document.getElementById("myAudio");
let diamonds = 0;
let chest = 0;
let randValue = Math.floor(Math.random() * 1000000000000) - 59999999999;
let savedValue = localStorage.getItem("myValue");
function setValueOfThing() {
	localStorage.setItem("myValue", myValue)
}
function readValue() {
	document.getElementById("highScore").innerHTML = "last score: " + savedValue;
}
function checkIfGreen() {
	if (myValue >= 200) {
		document.getElementById("a").style.color = "green";
	};
	if (myValue < 200) {
		document.getElementById("a").style.color = "black";
	};
	if (myValue >= 300) {
		document.getElementById("b").style.color = "green";
	};
	if (myValue < 300) {
		document.getElementById("b").style.color = "black";
	}
	if (myValue >= 400000) {
		document.getElementById("c").style.color = "green";
	};
	if (myValue < 400000) {
		document.getElementById("c").style.color = "black";
	};
	if (myValue >= 5000000) {
		document.getElementById("d").style.color = "green";
	};
	if (myValue < 5000000) {
		document.getElementById("d").style.color = "black";
	};
	if (myValue >= 10000000) {
		document.getElementById("e").style.color = "green";
		document.getElementById("myDiamonds").innerHTML =  "diamonds: " + diamonds;
	};
	if (myValue < 10000000) {
		document.getElementById("e").style.color = "black";
	};
	if (myValue >= 120000000) {
		document.getElementById("f").style.color = "green";
	};
	if (myValue < 120000000) {
		document.getElementById("f").style.color = "black";
	};
	if (myValue < 990000000) {
		document.getElementById("g").style.color = "green";
	};

	if (myValue < 990000000) {
		document.getElementById("g").style.color = "black";
	};
	if (myValue >= 10000000000000) {
		document.getElementById("h").style.color = "green";
	};

	if (myValue < 10000000000000) {
		document.getElementById("h").style.color = "black";
	};
	setTimeout(checkIfGreen, 0);
};

function addToValue() {
	myValue += addedValue;
	myAudio1.play();
	document.getElementById("number").innerHTML = myValue;
	if (myValue >= 200) {
		document.getElementById("a").style.color = "green";
	};
	if (myValue < 200) {
		document.getElementById("a").style.color = "black";
	};
	if (myValue >= 300) {
		document.getElementById("b").style.color = "green";
	};
	if (myValue < 300) {
		document.getElementById("b").style.color = "black";
	};
	if (myValue >= 400000) {
		document.getElementById("c").style.color = "green";
	};
	if (myValue < 400000) {
		document.getElementById("c").style.color = "black";
	};
	if (myValue >= 5000000) {
		document.getElementById("d").style.color = "green";
	};
	if (myValue < 5000000) {
		document.getElementById("d").style.color = "black";
	};
	if (myValue >= 10000000) {
		document.getElementById("e").style.color = "green";
		document.getElementById("myDiamonds").innerHTML = "diamonds: " + diamonds;
	};
	if (myValue < 10000000) {
		document.getElementById("e").style.color = "black";
	};
	if (myValue >= 120000000) {
		document.getElementById("f").style.color = "green";
	};
	if (myValue < 120000000) {
		document.getElementById("f").style.color = "black";
	};
	if (myValue < 990000000) {
		document.getElementById("g").style.color = "green";
	};

	if (myValue < 990000000) {
		document.getElementById("g").style.color = "black";
	};
	if (myValue >= 10000000000000) {
		document.getElementById("h").style.color = "green";
	};

	if (myValue < 10000000000000) {
		document.getElementById("h").style.color = "black";
	};
};

function showValue() {
	document.getElementById("showValue").innerHTML = addedValue + "<br/>" + "added Value";
}

function add20ToValue() {
	if (myValue >= 200) {
		addedValue += 20;
		myValue -= 200;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 200) {
		document.getElementById("a").style.color = "black";
	};
};

function add100ToValue() {
	if (myValue >= 300) {
		addedValue += 100;
		myValue -= 300;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 300) {
		document.getElementById("b").style.color = "black";
	};
};

function add130ToValue() {
	if (myValue >= 400000) {
		addedValue += 130;
		myValue -= 400000;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 400000) {
		document.getElementById("c").style.color = "black";
	};
};

function add200ToValue() {
	if (myValue >= 5000000) {
		addedValue += 200;
		myValue -= 5000000;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 5000000) {
		document.getElementById("d").style.color = "black";
	};
};

function add900ToValue() {
	if (myValue >= 10000000) {
		diamonds++
		addedValue += 900;
		myValue -= 10000000;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
		checkChest()
	} else {
		return;
	};
	if (myValue < 10000000) {
		document.getElementById("e").style.color = "black";
	};
};

function add1000ToValue() {
	if (myValue >= 120000000) {
		addedValue += 1000;
		myValue -= 120000000;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 120000000) {
		document.getElementById("f").style.color = "black";
	};
};

function add90000ToValue() {
	if (myValue >= 990000000) {
		addedValue += 90000;
		myValue -= 990000000;
		document.getElementById("number").innerHTML = myValue;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 990000000) {
		document.getElementById("g").style.color = "black";
	};
};

function add999000ToValue() {
	if (myValue >= 10000000000000) {
		addedValue += 999000;
		myValue -= 10000000000000;
		document.getElementById("number").innerHTML = myValue;
		document.getElementById("myDiamonds").innerHTML = diamonds;
		checkIfGreen();
		showValue();
	} else {
		return;
	};
	if (myValue < 10000000000000) {
		document.getElementById("h").style.color = "black";
	};
};

let canAddChest = false;

function checkChest() {
	if (diamonds >= 3) {
		chestColour();
		$("#chestButton").on("click", function() {
			if(canAddChest == true) {
				chest++;
				diamonds -= 3;
				$("#myChests").html("chests: " + chest);
				$("#myDiamonds").html("diamonds: " + diamonds);
				if(diamonds < 3) {
					canAddChest = false;
					$("#chestButton").off();
				}
			}
			if(diamonds < 3) {
				canAddChest = false;
				$("#chestButton").off();
			}
		})
	}
}

function chestColour() {
	$("#chestButton").toggleClass("btn is-Success")
	canAddChest = true;
}