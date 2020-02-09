//Set up variables
//Step 1:
let plannerItems = JSON.parse(localStorage.getItem("plannerItems")) || [];
let lastID = parseInt(localStorage.getItem("lastID")) || 0;
const startOfHour = moment().startOf('hour').fromNow();
const endOfHour = moment().endOf('hour').fromNow();

now = moment().format('dddd, MMMM Do'); 
$("#currentDay").text(now);

$(document).ready(function () {
    //Step ??? set up the currenttime to the timeblocks accordingly..
    var formatted = 'hh:mm';
    let newPlan = {
        nineAM: $(".nineAM").val(),
        tenAM: $(".tenAM").val(),
        elevenAM: $(".elevenAM").val(),
        twelvePM: $(".twelvePM").val(),
        onePM: $(".onePM").val(),
        twoPM: $(".twoPM").val(),
        threePM: $(".threePM").val(),
        fourPM: $(".fourPM").val(),
        fivePM: $(".fivePM").val(),
    }

    currentNine = moment(),
    startNine = moment('9:00', formatted),
    endNine = moment('9:59', formatted);

    if (currentNine.isBetween(startNine, endNine)) {
        $("#time-blockone").attr("class", "present");
        console.log('is between')
    } else if (currentNine > endNine) {
        $("#time-blockone").attr("class", "past");
    } else {
        $("#time-blockone").attr("class", "future");
    }

    currentTen = moment(),
    startTen = moment('10:00', formatted),
    endTen = moment('10:59', formatted);

    if (currentTen.isBetween(startTen, endTen)) {
        $("#time-blocktwo").attr("class", "present");
        console.log('is between')
    } else if (currentTen > endTen) {
        $("#time-blocktwo").attr("class", "past");
    } else {
        $("#time-blocktwo").attr("class", "future");
    }

    currentEleven = moment(),
    startEleven = moment('11:00', formatted),
    endEleven = moment('11:59', formatted);

    if (currentEleven.isBetween(startEleven, endEleven)) {
        $("#time-blockthree").attr("class", "present");
        console.log('is between')
    } else if (currentEleven > endEleven) {
        $("#time-blockthree").attr("class", "past");
    } else {
        $("#time-blockthree").attr("class", "future");
    }

    currentTwelve = moment(),
    startTwelve = moment('12:00', formatted),
    endTwelve = moment('12:59', formatted);

    if (currentTwelve.isBetween(startTwelve, endTwelve)) {
        $("#time-blockfour").attr("class", "present");
        console.log('is between')
    } else if (currentTwelve > endTwelve) {
        $("#time-blockfour").attr("class", "past");
    } else {
        $("#time-blockfour").attr("class", "future");
    }
    currentOne = moment(),
    startOne = moment('13:00', formatted),
    endOne = moment('13:59', formatted);

    if (currentOne.isBetween(startOne, endOne)) {
        $("#time-blockfive").attr("class", "present");
        console.log('is between')
    } else if (currentOne > endOne) {
        $("#time-blockfive").attr("class", "past");
    } else {
        $("#time-blockfive").attr("class", "future");
    }
    currentTwo = moment(),
    startTwo = moment('14:00', formatted),
    endTwo = moment('14:59', formatted);

    if (currentTwo.isBetween(startTwo, endTwo)) {
        $("#time-blocksix").attr("class", "present");
        console.log('is between')
    } else if (currentTwo > endTwo) {
        $("#time-blocksix").attr("class", "past");
    } else {
        $("#time-blocksix").attr("class", "future");
    }

    currentThree = moment(),
    startThree = moment('15:00', formatted),
    endThree = moment('15:59', formatted);

    if (currentThree.isBetween(startThree, endThree)) {
        $("#time-blockseven").attr("class", "present");
        console.log('is between')
    } else if (currentThree > endThree) {
        $("#time-blockseven").attr("class", "past");
    } else {
        $("#time-blockseven").attr("class", "future");
    }

    currentFour = moment(),
    startFour = moment('16:00', formatted),
    endFour = moment('16:59', formatted);

    if (currentFour.isBetween(startFour, endFour)) {
        $("#time-blockeight").attr("class", "present");
        console.log('is between')
    } else if (currentFour > endFour) {
        $("#time-blockeight").attr("class", "past");
    } else {
        $("#time-blockeight").attr("class", "future");
    }

    currentFive = moment(),
    startFive = moment('17:00', formatted),
    endFive = moment('17:59', formatted);

    if (currentFive.isBetween(startFive, endFive)) {
        $("#time-blocknine").attr("class", "present");
        console.log('is between')
    } else if (currentFive > endFive) {
        $("#time-blocknine").attr("class", "past");
    } else {
        $("#time-blocknine").attr("class", "future");
    }

    //Step 3: function to update localStorage when clicking the saveBtn
    const updateStorage = () => {
        localStorage.setItem("plannerItems", JSON.stringify(plannerItems));
        localStorage.setItem("lastID", lastID);
    }
    
    //Step 2: set up click event
    $(".saveBtn").on("click", function () {
        event.preventDefault();
        plannerItems.push(newPlan);
        updateStorage();
        alert("Timestamp saved!");
        console.log(localStorage);
    });
    $(".clear-button").on('click', function() {
        alert("Cleared!");
        $(".time-block").val('');
        localStorage.clear();
        console.log(localStorage);
      });
});
