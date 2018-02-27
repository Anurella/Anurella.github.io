
 // time function



(function () {
  // Specify the deadline date
  var deadlineDate = new Date('April 30, 2018 23:59:59').getTime();

  // Cache all countdown boxes into consts 
  //the div classed number 
  var countdownDays = document.querySelector('.countdown__days .number');
  var countdownHours = document.querySelector('.countdown__hours .number');
  var countdownMinutes = document.querySelector('.countdown__minutes .number');
  var countdownSeconds = document.querySelector('.countdown__seconds .number');

  // Update the count down every 1 minute (1000 milliseconds)
  setInterval(function () {
    // Get current date and time
  var currentDate = new Date().getTime();

    // Calculate the distance between current date and time and the deadline date and time
    var distance = deadlineDate - currentDate;

    // Calculations the data for remaining days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    // Insert the result data into individual countdown boxes
    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours;
    countdownMinutes.innerHTML = minutes;
    countdownSeconds.innerHTML = seconds;

    //stop the clock if it ends 

    console.log("end");
  }, 1000);
})();