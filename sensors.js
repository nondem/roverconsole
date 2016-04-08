// Randy Fountain 3/2016 v0.1

//update console
function update(){
tbx_longitude();
tbx_latitude();
tbx_accuracy();
tbx_heading();
tbx_xaxis();
tbx_yaxis();
tbx_zaxis();
tbx_lux();
tbx_pressure();
tbx_batvoltage();
tbx_current();
img_heading();
img_xaxis();
img_yaxis();
img_zaxis();
}
//update console


//

function nosig(objID){
//tbx message for no signal
document.getElementById(objID).value = "err";
}


//

// Sensor data textbox updates
function tbx_longitude(){
}
function tbx_latitude(){
}
function tbx_accuracy(){
}
function tbx_heading(){
   $.get('cgi-bin/bearing.sh', function(data) {
   $('#heading').val(data);
});
}
function tbx_xaxis(){
$.get('cgi-bin/x.sh', function(data) {
   $('#xaxis').val(data);
});
}
function tbx_yaxis(){
$.get('cgi-bin/y.sh', function(data) {
   $('#yaxis').val(data);
});
}
function tbx_zaxis(){
$.get('cgi-bin/z.sh', function(data) {
   $('#zaxis').val(data);
});
}
function tbx_lux(){
$.get('cgi-bin/lux.sh', function(data) {
   $('#lumens').val(data);
});
}
function tbx_pressure(){
$.get('cgi-bin/pres.sh', function(data) {
   $('#mb').val(data);
});
}
function tbx_batvoltage(){
$.get('cgi-bin/volts.sh', function(data) {
   $('#volts').val(data);
});
}
function tbx_current(){
$.get('cgi-bin/current.sh', function(data) {
   $('#mA').val(data);
});
}
// Sensor data textbox updates

// sensor data image rotators
function img_heading(){
$("#heading").rotate(deg);
}
function img_xaxis(){
$("#ximage").rotate(deg);
}
function img_yaxis(){
$("#yimage").rotate(deg);
}
function img_zaxis(){
}
// sensor data image rotators

