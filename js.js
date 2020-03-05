const SHOW_LIGHT_OFF = "LIGHT OFF";
const SHOW_LIGHT_ON = "LIGHT ON";
const OFF = false;
const ON = true;

function SwitchButton(status, lamp) {
    this.status = status;
    this.lamp = lamp;

    this.connectToLamp = function (lamp) {
        this.lamp = lamp;
    };
    this.switchOff = function () {
        this.lamp.turnOff();
    };
    this.switchOn = function () {
        this.lamp.turnOn();
    };
}

 function ElectricLamp(status) {

    this.status = status;

    this.turnOff = function () {
        this.status = OFF;
    };
    this.turnOn = function () {
        this.status = ON;
    };
}

let newLamp = new ElectricLamp(OFF);

let newSwitchButton = new SwitchButton(OFF, newLamp);


function isLampOff() {
    return newLamp.status === OFF;
}

function isLampOn() {
    return newLamp.status === ON;
}

function displayLamp() {
    if (isLampOff()) {
        document.getElementById("lampStatus").innerHTML = SHOW_LIGHT_OFF;
    }
    if (isLampOn()) {
        document.getElementById("lampStatus").innerHTML = SHOW_LIGHT_ON;
    }
}

displayLamp();
newSwitchButton.connectToLamp(newLamp);

function switchOn() {
    newSwitchButton.switchOn();
    displayLamp()
}

function switchOff() {
    newSwitchButton.switchOff();
    displayLamp()
}