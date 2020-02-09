//classes to use 
//body, textarea, .jumbotron,
//.description, .time-block,
//.row, .hour, .past, .present,
//.future, .saveBtn, .saveBtn i:hover
//ID || Classes for targeting
//.jumbotron, #currentDay also with a class of .lead,
//.container (this is where the time-block goes)
$(document).ready(function () {

    var startOfHour = moment().startOf('hour').fromNow();
    var endOfHour = moment().endOf('hour').fromNow();
    console.log(startOfHour);
    console.log(endOfHour);

    now = moment().format('dddd, MMMM Do');
    $("#currentDay").text(now);

    var timeBlockNine = document.getElementById("nineAmPlan")
    var timeBlockTen = document.getElementById("tenAmPlan")
    var timeBlockEleven = document.getElementById("elevenAmPlan")
    var timeBlockTwelve = document.getElementById("twelvePmPlan")
    var timeBlockOne = document.getElementById("onePmPlan")
    var timeBlockTwo = document.getElementById("twoPmPlan")
    var timeBlockThree = document.getElementById("threePmPlan")
    var timeBlockFour = document.getElementById("fourPmPlan")
    var timeBlockFive = document.getElementById("fivePmPlan")

    var prevNine = JSON.parse(localStorage.getItem("9am"));
    var prevTen = JSON.parse(localStorage.getItem("10am"));
    var prevEleven = JSON.parse(localStorage.getItem("11am"));
    var prevTwelve = JSON.parse(localStorage.getItem("12pm"));
    var prevOne = JSON.parse(localStorage.getItem("1pm"));
    var prevTwo = JSON.parse(localStorage.getItem("2pm"));
    var prevThree = JSON.parse(localStorage.getItem("3pm"));
    var prevFour = JSON.parse(localStorage.getItem("4pm"));
    var prevFive = JSON.parse(localStorage.getItem("5pm"));

    timeBlockNine.value = prevNine;
    timeBlockTen.value = prevTen;
    timeBlockEleven.value = prevEleven;
    timeBlockTwelve.value = prevTwelve;
    timeBlockOne.value = prevOne;
    timeBlockTwo.value = prevTwo;
    timeBlockThree.value = prevThree;
    timeBlockFour.value = prevFour;
    timeBlockFive.value = prevFive;

    var formatted = 'hh:mm';

    currentNine = moment(),
        startNine = moment('9:00', formatted),
        endNine = moment('9:59', formatted);

    if (currentNine.isBetween(startNine, endNine)) {
        $("#nineAmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentNine > endNine) {
        $("#nineAmPlan").attr("class", "past");
    } else {
        $("#nineAmPlan").attr("class", "future");
    }

    currentTen = moment(),
        startTen = moment('10:00', formatted),
        endTen = moment('10:59', formatted);

    if (currentTen.isBetween(startTen, endTen)) {
        $("#tenAmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentTen > endTen) {
        $("#tenAmPlan").attr("class", "past");
    } else {
        $("#tenAmPlan").attr("class", "future");
    }

    currentEleven = moment(),
        startEleven = moment('11:00', formatted),
        endEleven = moment('11:59', formatted);

    if (currentEleven.isBetween(startEleven, endEleven)) {
        $("#elevenAmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentEleven > endEleven) {
        $("#elevenAmPlan").attr("class", "past");
    } else {
        $("#elevenAmPlan").attr("class", "future");
    }

    currentTwelve = moment(),
        startTwelve = moment('12:00', formatted),
        endTwelve = moment('12:59', formatted);

    if (currentTwelve.isBetween(startTwelve, endTwelve)) {
        $("#twelvePmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentTwelve > endTwelve) {
        $("#twelvePmPlan").attr("class", "past");
    } else {
        $("#twelvePmPlan").attr("class", "future");
    }
    currentOne = moment(),
        startOne = moment('13:00', formatted),
        endOne = moment('13:59', formatted);

    if (currentOne.isBetween(startOne, endOne)) {
        $("#onePmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentOne > endOne) {
        $("#onePmPlan").attr("class", "past");
    } else {
        $("#onePmPlan").attr("class", "future");
    }
    currentTwo = moment(),
        startTwo = moment('14:00', formatted),
        endTwo = moment('14:59', formatted);

    if (currentTwo.isBetween(startTwo, endTwo)) {
        $("#twoPmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentTwo > endTwo) {
        $("#twoPmPlan").attr("class", "past");
    } else {
        $("#twoPmPlan").attr("class", "future");
    }

    currentThree = moment(),
        startThree = moment('15:00', formatted),
        endThree = moment('15:59', formatted);

    if (currentThree.isBetween(startThree, endThree)) {
        $("#threePmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentThree > endThree) {
        $("#threePmPlan").attr("class", "past");
    } else {
        $("#threePmPlan").attr("class", "future");
    }

    currentFour = moment(),
        startFour = moment('16:00', formatted),
        endFour = moment('16:59', formatted);

    if (currentFour.isBetween(startFour, endFour)) {
        $("#fourPmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentFour > endFour) {
        $("#fourPmPlan").attr("class", "past");
    } else {
        $("#fourPmPlan").attr("class", "future");
    }

    currentFive = moment(),
        startFive = moment('17:00', formatted),
        endFive = moment('17:59', formatted);

    if (currentFive.isBetween(startFive, endFive)) {
        $("#fivePmPlan").attr("class", "present");
        console.log('is between')
    } else if (currentFive > endFive) {
        $("#fivePmPlan").attr("class", "past");
    } else {
        $("#fivePmPlan").attr("class", "future");
    }

    $(".saveBtn").on('click', function () {
        event.preventDefault();
        alert("Saved!");

        var plans = {
            nineAmPlan: timeBlockNine.value.trim(),
            tenAmPlan: timeBlockTen.value.trim(),
            elevenAmPlan: timeBlockEleven.value.trim(),
            twelvePmPlan: timeBlockTwelve.value.trim(),
            onePmPlan: timeBlockOne.value.trim(),
            twoPmPlan: timeBlockTwo.value.trim(),
            threePmPlan: timeBlockThree.value.trim(),
            fourPmPlan: timeBlockFour.value.trim(),
            fivePmPlan: timeBlockFive.value.trim()
        }
        localStorage.setItem("9am", JSON.stringify(plans.nineAmPlan));
        localStorage.setItem("10am", JSON.stringify(plans.tenAmPlan));
        localStorage.setItem("11am", JSON.stringify(plans.elevenAmPlan));
        localStorage.setItem("12pm", JSON.stringify(plans.twelvePmPlan));
        localStorage.setItem("1pm", JSON.stringify(plans.onePmPlan));
        localStorage.setItem("2pm", JSON.stringify(plans.twoPmPlan));
        localStorage.setItem("3pm", JSON.stringify(plans.threePmPlan));
        localStorage.setItem("4pm", JSON.stringify(plans.fourPmPlan));
        localStorage.setItem("5pm", JSON.stringify(plans.fivePmPlan));
    });

    $(".clear-button").on('click', function () {
        alert("Cleared!");
        $("#time-block").val('');
        localStorage.clear();
        console.log(localStorage);
    });
});
