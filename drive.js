// Randy Fountain 3/2016 v0.1

// Drive Related Functions

  
function DistanceSliderEnable(){

  
}

function EnableDrive(){



}

function transmitcommand(command){

}

function forward(){
document.getElementById("Command2Send").value = "F";
}
function left(){
document.getElementById("Command2Send").value = "L";
}
function right(){
document.getElementById("Command2Send").value = "R"
;}
function reverse(){
document.getElementById("Command2Send").value = "B";
}
function drive(commandstring){
}
function updaterangevalue(){

document.getElementById("tbx_distance").value  = document.getElementById("rng_distance").value;
var dir = document.getElementById("Command2Send").value;
var rng = document.getElementById("tbx_distance").value;
document.getElementById("Command2Send").value = dir + rng;
}
// Drive Related Functions
