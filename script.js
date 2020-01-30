//classes to use 
//body, textarea, .jumbotron,
//.description, .time-block,
//.row, .hour, .past, .present,
//.future, .saveBtn, .saveBtn i:hover

//ID || Classes for targeting
//.jumbotron, #currentDay also with a class of .lead,
//.container (this is where the time-block goes)


//This var only seems to select the first textarea, new var selects all textarea on the page
//var textArea = $("<textarea>");
//var nineAMInput = document.querySelector("body > div > div > form > textarea:nth-child(1)");
//var tenAMInput = document.querySelector("body > div > div > form > textarea:nth-child(4)");
//var elevenAMInput = document.querySelector("body > div > div > form > textarea:nth-child(7)");
//var twelvePMInput = document.querySelector("body > div > div > form > textarea:nth-child(10)");
//var onePMInput = document.querySelector("body > div > div > form > textarea:nth-child(13)");
//var twoPMInput = document.querySelector("body > div > div > form > textarea:nth-child(16)");
//var threePMInput = document.querySelector("body > div > div > form > textarea:nth-child(19)");
//var fourPMInput = document.querySelector("body > div > div > form > textarea:nth-child(22)");
//var fivePMInput = document.querySelector("body > div > div > form > textarea:nth-child(25)");

var textarea = document.querySelectorAll("textarea");

var currentTime = moment().format('LT');

var startOfHour = moment().startOf('hour').fromNow(); 
var endOfHour = moment().endOf('hour').fromNow();
console.log(startOfHour);
console.log(endOfHour);

now = moment().format('dddd, MMMM Do'); 
$("#currentDay").text(now);

//Need to combine this with the initial localStorage.getItem || [];
var todos = [];



//These lines depict where the time is currentTime
//then the beginning of the day with todays date
//finally ending the day with todays date
//use this as reference to manipualte the range between 9am - 5pm


$(document).ready(function () {

    var timeBlock = $("#time-block")

    init();
    


    //needs update for present attr
    // i switched these around, fix for end result
//          v               v
    if (currentTime < nineAMInput.name) {
        nineAMInput.setAttribute("class", "future");
    } else if (currentTime > nineAMInput.name) {
        nineAMInput.setAttribute("class", "past");
    } else {
        nineAMInput.setAttribute("class", "present");
    }
    
    if (tenAMInput.name < currentTime) 
    tenAMInput.setAttribute("class", "future");
    if (tenAMInput.name > currentTime) 
    tenAMInput.setAttribute("class", "past");
    
    if (elevenAMInput.name < currentTime) 
    elevenAMInput.setAttribute("class", "future");
    if (elevenAMInput.name > currentTime) 
    elevenAMInput.setAttribute("class", "past");

    if (twelvePMInput.name < currentTime) 
    twelvePMInput.setAttribute("class", "future");
    if (twelvePMInput.name > currentTime) 
    twelvePMInput.setAttribute("class", "past");

    if (onePMInput.name < currentTime) 
    onePMInput.setAttribute("class", "future");
    if (onePMInput.name > currentTime) 
    onePMInput.setAttribute("class", "past");

    if (twoPMInput.name < currentTime) 
    twoPMInput.setAttribute("class", "future");
    if (twoPMInput.name > currentTime) 
    twoPMInput.setAttribute("class", "past");

    if (threePMInput.name < currentTime) 
    threePMInput.setAttribute("class", "future");
    if (threePMInput.name > currentTime) 
    threePMInput.setAttribute("class", "past");

    if (fourPMInput.name < currentTime) 
    fourPMInput.setAttribute("class", "future");
    if (fourPMInput.name > currentTime) 
    fourPMInput.setAttribute("class", "past");

    if (fivePMInput.name < currentTime) 
    fivePMInput.setAttribute("class", "future");
    if (fivePMInput.name > currentTime) 
    fivePMInput.setAttribute("class", "past");


 
    function init () {
        var storedTodos = JSON.parse(localStorage.getItem("todos"));
        

        if (storedTodos !== null) {
            $(this).todos = storedTodos;
        }
    }
    
    $(".saveBtn").on("click", function () {
        event.preventDefault();

        function storeTodos() {
            localStorage.setItem("todos", JSON.stringify(todos));
            if (textarea == "") {
                return;
            }



        }

        
        
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

        if (timeBlock === "") {
            return;
        }

        todos.push(textInput);
        $('input[type=text], textarea').val = "";

        
        storeTodos();
        alert("Timestamp saved!");
        console.log(localStorage);
    
    });

    

    $(".clear-button").on('click', function() {
        alert("Cleared!");
        $("#time-block").val('');
        localStorage.clear();
        console.log(localStorage);
        
      });

});



  // reload() to refresh the page
//append the textarea to the list

//var rowDiv = $(".row");

//function setList() {
//    $("<li>").append(rowDiv);
//};

//setList();

