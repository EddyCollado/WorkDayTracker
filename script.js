//classes to use 
//body, textarea, .jumbotron,
//.description, .time-block,
//.row, .hour, .past, .present,
//.future, .saveBtn, .saveBtn i:hover

//ID || Classes for targeting
//.jumbotron, #currentDay also with a class of .lead,
//.container (this is where the Timeblock goes)





var nineAMInput = document.querySelector("body > div > div > form > textarea:nth-child(1)");
var tenAMInput = document.querySelector("body > div > div > form > textarea:nth-child(4)");
var elevenAMInput = document.querySelector("body > div > div > form > textarea:nth-child(7)");
var twelvePMInput = document.querySelector("body > div > div > form > textarea:nth-child(10)");
var onePMInput = document.querySelector("body > div > div > form > textarea:nth-child(13)");
var twoPMInput = document.querySelector("body > div > div > form > textarea:nth-child(16)");
var threePMInput = document.querySelector("body > div > div > form > textarea:nth-child(19)");
var fourPMInput = document.querySelector("body > div > div > form > textarea:nth-child(22)");
var fivePMInput = document.querySelector("body > div > div > form > textarea:nth-child(25)");

var currentTime = moment().format('LT');

var startOfHour = moment().startOf('hour').fromNow(); 
console.log(startOfHour);

now = moment().format('dddd, MMMM Do'); 
$("#currentDay").text(now);



//needs update for present attr
    
    if (nineAMInput.name < startOfHour) 
    nineAMInput.setAttribute("class", "future");
    if (nineAMInput.name > startOfHour) 
    nineAMInput.setAttribute("class", "past");
    
    
    if (tenAMInput.name < startOfHour) 
    tenAMInput.setAttribute("class", "future");
    if (tenAMInput.name > startOfHour) 
    tenAMInput.setAttribute("class", "past");

    if (elevenAMInput.name < startOfHour) 
    elevenAMInput.setAttribute("class", "future");
    if (elevenAMInput.name > startOfHour) 
    elevenAMInput.setAttribute("class", "past");

    if (twelvePMInput.name < startOfHour) 
    twelvePMInput.setAttribute("class", "future");
    if (twelvePMInput.name > startOfHour) 
    twelvePMInput.setAttribute("class", "past");

    if (onePMInput.name < startOfHour) 
    onePMInput.setAttribute("class", "future");
    if (onePMInput.name > startOfHour) 
    onePMInput.setAttribute("class", "past");

    if (twoPMInput.name < startOfHour) 
    twoPMInput.setAttribute("class", "future");
    if (twoPMInput.name > startOfHour) 
    twoPMInput.setAttribute("class", "past");

    if (threePMInput.name < startOfHour) 
    threePMInput.setAttribute("class", "future");
    if (threePMInput.name > startOfHour) 
    threePMInput.setAttribute("class", "past");

    if (fourPMInput.name < startOfHour) 
    fourPMInput.setAttribute("class", "future");
    if (fourPMInput.name > startOfHour) 
    fourPMInput.setAttribute("class", "past");

    if (fivePMInput.name < startOfHour) 
    fivePMInput.setAttribute("class", "future");
    if (fivePMInput.name > startOfHour) 
    fivePMInput.setAttribute("class", "past");


//These lines depict where the time is currentTime
//then the beginning of the day with todays date
//finally ending the day with todays date
//use this as referene to manipualte the range between 9am - 5pm


$(document).ready(function () {

    
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        alert("Timestamp saved!");

        var textInput = {
           nineAM: nineAMInput.value.trim(),
           tenAM: tenAMInput.value.trim(),
           elevenAM: elevenAMInput.value.trim(),
           twelvePM: twelvePMInput.value.trim(),
           onePM: onePMInput.value.trim(),
           twoPM: twoPMInput.value.trim(),
           threePM: threePMInput.value.trim(),
           fourPM: fourPMInput.value.trim(),
           fivePM: fivePMInput.value.trim(),
        };

        console.log(textInput);

        localStorage.setItem("textInput", JSON.stringify(textInput));

        var savedPlan = JSON.parse(localStorage.getItem("textInput"));
        nineAMInput.textContent = savedPlan.nineAM;
        tenAMInput.textContent = savedPlan.tenAM;
        elevenAMInput.textContent = savedPlan.elevenAM;
        twelveAMInput.textContent = savedPlan.twelveAM;
        oneAMInput.textContent = savedPlan.oneAM;
        twoAMInput.textContent = savedPlan.twoAM;
        threeAMInput.textContent = savedPlan.threeAM;
        fourAMInput.textContent = savedPlan.fourAM;
        fiveAMInput.textContent = savedPlan.fiveAM;
    });

});

$(".clear-button").on('click', function() {
    localStorage.clear()

  })

  // reload() to refresh the page
//append the textarea to the list

//var rowDiv = $(".row");

//function setList() {
//    $("<li>").append(rowDiv);
//};

//setList();

