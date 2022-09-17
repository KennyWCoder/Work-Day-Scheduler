//set clock
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//function to make clock ticking
function clock() {
    $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

setInterval(clock, 1000);

var buttonEl = $(".saveBtn");
var DescripEl = $(".description");

var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twevle = $("#12");
var one = $("#1");
var two = $("#2");
var three = $("#3");
var four = $("#4");
var five = $("#5");

//check the time to change the background color
function checkTime() {
    //get current time
    var currentTime = moment().hours();
    // var currentTime = 14; testing
    console.log(currentTime);

    $(".time-block").each(function () {
        //make id into integar
        var timeBlock = parseInt($(this).attr("id"));
        console.log(timeBlock);

        if (currentTime > timeBlock) {
            $(this).addClass("past");
        }else if (currentTime === timeBlock){
            $(this).addClass("present");
            $(this).children("textarea").text("Current Time");
        }else {
            $(this).addClass("future");
        }
    })
}

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        //getting sibling element which is descripton/textarea and turn it into value so we can store the valuable into localstorage.
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
    })
})
// function saveDescription() {
// for(i = 9; i < 17; i++){
//     var showDetail = $("#9 .description").val(localStorage.getItem("9"));
//     return showDetail;
// }
// }

// $(".description").each(function () {

checkTime();



