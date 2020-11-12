
// ideas for how to display time for each hour 

//time = [9,10,11,12,1,2,3,4,5]

//for (var i = 0; i< time.length; i++){

//console.log(moment().hour(time[i]));

//somehow get time[i] to print/ show as text for the timeblock  

//}

//console.log(moment().hour(time[0]));

// we will be comparing times with .diff from the .timeblock .hour selectors 

//var currentDay = $("#currentDay");

//currentTime = moment();

//currentDay.text() = currentTime.format("dddd, MMMM Do");

var currentDay = document.querySelector("#currentDay");
currentTime = moment();

currentDay.textContent = currentTime.format("dddd, MMMM Do");

//currentDay.textContent = currentTime.format("hh");