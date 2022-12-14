//set clock
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//set clear button
$(document).ready(function() {
    $("#clear-btn").append('<button class="btn btn-primary btn-lg" type="button">Clear Schedule</button>');
});

$("#clear-btn").on("click", function(){
    localStorage.clear();
    location.reload();
})

//function to make clock ticking
function clock() {
    $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

setInterval(clock, 1000);

var buttonEl = $(".saveBtn");
var DescripEl = $(".description");

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
        } else if (currentTime === timeBlock) {
            $(this).addClass("present");
            $(this).children("textarea").text("Current Time");
        } else {
            $(this).addClass("future");
        }
    })
}

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        //getting sibling element which is descripton/textarea and turn it into value so we can store the valuable into localstorage.
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
    })
})

//save description using a loop
function saveDescription() {
    for (var i = 9; i <= 17; i++) {
        $(`#${i} .description`).val(localStorage.getItem(`${i}`));
    }
}

checkTime();
saveDescription();



