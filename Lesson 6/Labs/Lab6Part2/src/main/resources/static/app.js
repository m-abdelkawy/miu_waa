var ws;

function connect() {

    if(ws !== undefined && ws.readyState !== WebSocket.CLOSED){
        showData("Connection is already opened.");
        return;
    }

    console.log("Connect method called");
    ws = new WebSocket("ws://localhost:8080/calculate");

    console.log(ws);

    // ws.onconnect = function () {
    //     showData("Connected!")
    // }

    ws.onmessage = function (event) {
        showData(event.data)
    }

    ws.onclose = function (event) {
        showData("Connection closed!");
    }

    document.getElementById("connectionStatusBody").innerHTML = "";
}

function disconnect() {
    if (ws != null) {
        ws.close();
    }
}

function sendData() {
    var calcString = document.getElementById("calcTxtBox").value;
    console.log(calcString);
    ws.send(calcString);
}

function showData(message) {
    document.getElementById("connectionStatusBody").innerHTML += "<br/>" + message;
}

function showCalcResult(result) {

}