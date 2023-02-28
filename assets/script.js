// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // Save button local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];

    console.log(text, time);

    localStorage.setItem(time, text);
  });

  //Show current date in header
  var showDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(showDate);
  console.log(showDate);

  // Past, present, future
  var currentTime = dayjs().format('h');
  console.log(currentTime);

  $(".row").each(function () {
    var everyHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(everyHour, currentTime);

    if (everyHour < currentTime) {
      $(this).addClass('past')

    } else if (everyHour === currentTime) {
      $(this).addClass('present')
    }
    else {
      $(this).addClass('future')
    }
  });

  // User input from local storage
  $("#hour-9").val(localStorage.getItem("9"));
  $("#hour-10").val(localStorage.getItem("10"));
  $("#hour-11").val(localStorage.getItem("11"));
  $("#hour-12").val(localStorage.getItem("12"));
  $("#hour-1").val(localStorage.getItem("1"));
  $("#hour-2").val(localStorage.getItem("2"));
  $("#hour-3").val(localStorage.getItem("3"));
  $("#hour-4").val(localStorage.getItem("4"));
  $("#hour-5").val(localStorage.getItem("5"));
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.})
