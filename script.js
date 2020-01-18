//classes to use 
//body, textarea, .jumbotron,
//.description, .time-block,
//.row, .hour, .past, .present,
//.future, .saveBtn, .saveBtn i:hover

//ID || Classes for targeting
//.jumbotron, #currentDay also with a class of .lead,
//.container (this is where the Timeblock goes)

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

$("#currentDay").text(days[d.getDay()]).append(", " + months[d.getMonth()]).append(" " + d.getDate() + "th");

