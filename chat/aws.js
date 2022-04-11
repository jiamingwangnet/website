let messages = [];


function update() {
    let dataObj = {
        operation: "update",
        data: {
            id: "1",
            messages: messages,
        }
    };

    $.ajax({
        type: "POST",
        url: "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(dataObj),
        success: function (result) {
            console.log(result);

            load();
        }
    });
}


let isFirstLoad = true;

function load() {

    var dataObj = {
        operation: "query",
        data: {
            id: "1"
        }
    };
    $.ajax({
        type: "POST",
        url: "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(dataObj),
        success: function (result) {
            console.log(result)
            let messagesContainer = document.querySelector("#result");
            messagesContainer.innerHTML = '';
            let text = result.data.Item.messages;
            messages = text;

            for (let index in text) {
                let messageText = JSON.parse(text[index]);

                if (isFirstLoad) {
                    let messageObject = new Message(messageText.message, messageText.date, messageText.month, messageText.year, messageText.hour, messageText.min, messageText.name)
    
                    messagesContainer.appendChild(messageObject.message);
                    
                    myDiv.scrollTo(0, myDiv.scrollHeight);
                } else {
                    

                    let messageObject = new Message(messageText.message, messageText.date, messageText.month, messageText.year, messageText.hour, messageText.min, messageText.name)
    
                    messagesContainer.appendChild(messageObject.message);
    
                }  
            }
            isFirstLoad = false;



        }
    });
}


function clearMessages() {

}


//----------------message----------
// time stuff
let timeDate = new Date()
let hour = timeDate.getHours();
let min = timeDate.getMinutes();
function displayZero(time) {
    if (time < 10) {
        time = "0" + time;
    };
    return time;
}
min = displayZero(min)
hour = displayZero(hour)

/*
declaration of Message
*/
let dateTime = new Date()
class Message {
    constructor(message, date, month, year, hour, min, name) {
        this.message = document.createElement("div");
        this.message.innerHTML = `<h2 style="padding: 3px; overflow-wrap: break-word; z-index: 1;"><span style="color: #2585c9; overflow-wrap: break-word;z-index: 1;">${name}</span> at ${hour}:${min} ${date}/${(month + 1)}/${year}</h3><p style="padding:5px; overflow-wrap: break-word; z-index: -1;">${message}</p>`
        this.message.className = "message";
    }
}

function sendMessage() {
    let message = document.querySelector("#text").value;
    let name = document.querySelector("#name").value == "" ? document.querySelector("#name").placeholder : document.querySelector("#name").value;
    document.querySelector("#name").disabled = true;

    const nameElement = document.querySelector("#name");
    if(localStorage.getItem("name") == null) 
    {
        if(nameElement.value != nameElement.placeholder && nameElement.value != "")
        {
            localStorage.setItem("name", nameElement.value);
        }
    }

    if(message != "" && message != "" && name != "" && name != " ") {
        messages.push(JSON.stringify({ message: message, date: dateTime.getDate(), month: dateTime.getMonth(), year: dateTime.getFullYear(), hour: hour, min: min, name: name }))
        update();
        load();
        document.querySelector("#text").value = '';
    }

    $("#result").stop().animate({ scrollTop: $("#result")[0].scrollHeight}, 500);
   
}

function clearAll() {

}

window.addEventListener("load", () => {
    if(localStorage.getItem("name") != null) {
        document.querySelector("#name").value = localStorage.getItem("name");
        document.querySelector("#name").disabled = true;
    }
});


setInterval(() => {
    load();
}, 5000);