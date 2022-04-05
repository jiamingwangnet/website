let money = 0;
let diamonds = 0;
let gold = 0;
let tools = 0;
let toolsHealth = 10;
let jewelryMade = 0;
let points = 0;
class jewelry {
    constructor(color) {
        this.part = document.createElement("div");
        this.part.style.width = "30px";
        this.part.style.height = "30px";
        this.part.style.borderRadius = "50%";
        this.part.style.backgroundColor = color;
        this.part.style.display = "inline-block";
    }
}
function addMoney() {
    money += 1599;
    document.getElementById("money").innerHTML = "Money: " + "$" + money;
}

function buyDiamond() {
    if (money >= 99900) {
        diamonds++;
        document.getElementById("diamonds").innerHTML = "Diamonds: " + diamonds;
        money -= 99900;
        document.getElementById("money").innerHTML = "Money: " + "$" + money;
    } else {
        alert("Not enough money!")
    }
}

function buyGold() {
    if (money >= 10000) {
        gold++;
        document.getElementById("gold").innerHTML = "Gold: " + gold;
        money -= 10000;
        document.getElementById("money").innerHTML = "Money: " + "$" + money;
    } else {
        alert("Not enough money!")
    }
}

function buyTools() {
    if (money >= 998) {
        tools++;
        document.getElementById("tools").innerHTML = "Tools: " + tools;
        document.getElementById("toolHealth").innerHTML = "HP: " + toolsHealth;
        money -= 998;
        document.getElementById("money").innerHTML = "Money: " + "$" + money;
    } else {
        alert("Not enough money!")
    }
}

function makeJewelry() {
    if (diamonds > 0 && gold > 0 && (tools > 0 || toolsHealth > 0)) {
        if (toolsHealth == 0) {
            tools--;
            document.getElementById("tools").innerHTML = "Tools: " + tools;
            toolsHealth = 10;
            document.getElementById("toolHealth").innerHTML = "HP: " + toolsHealth;
        }
        diamonds--;
        document.getElementById("diamonds").innerHTML = "Diamonds: " + diamonds;
        gold--;
        document.getElementById("gold").innerHTML = "Gold: " + gold;
        toolsHealth--;
        document.getElementById("toolHealth").innerHTML = "HP: " + toolsHealth;
        jewelryMade++;
        let color = "darkturquoise";
        for (let i = 0; i < 10; i++) {
            let part = new jewelry(color);
            document.getElementById("jewelry").appendChild(part.part);
            color = color == "darkturquoise" ? "gold" : "darkturquoise";
        }
        let br = document.createElement("br");
        document.getElementById("jewelry").appendChild(br);
        document.getElementById("jewelry").appendChild(br);
    } else {
        alert("not enough materials")
    }
}

function sellJewelry() {
    if (money >= 2000) {
        if (jewelryMade > 0) {
            jewelryMade--;
            points++;
            document.getElementById("points").innerHTML = "Points: " + points;
            money -= 2000;
            document.getElementById("money").innerHTML = "Money: " + "$" + money;
            for (let i = 0; i < 11; i++) {
                let jewelry = document.getElementById("jewelry");
                jewelry.removeChild(jewelry.childNodes[0]);
            }
        } else {
            alert("No jewelry available");
        }
    } else {
        alert("not enough money");
    }
}

function points2Money() {
    if (points > 0) {
        points --;
        document.getElementById("points").innerHTML = "Points: " + points;
        money += 112000;
        document.getElementById("money").innerHTML = "Money: " + "$" + money;
    } else {
        alert("no points");
    }
}