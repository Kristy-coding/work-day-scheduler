
// get the current day and display it on the top of the calendar
// have the current day refresh every 30 min (if the user leaves their monitor open)

var currentDay = document.querySelector("#currentDay");

currentTime = moment();

currentDay.textContent = currentTime.format("dddd, MMMM Do");

// select all time blocks, which will also give us acces to the children 

var timeBlocks = Array.from(document.querySelectorAll(".time-block"))

console.log(timeBlocks);

var currentHour = moment().hour()
console.log(currentHour);



var hourUpdater = function(){
    
    // loop over each one timeBlock 

    for (var i = 0; i < timeBlocks.length; i++){


        // select the hour id 
        var timeBlockId =timeBlocks[i].firstElementChild.id;


        //  loop through the time block id and get the string value of hour (get rid of "hour-" by replacing with an empty string)
        var timeBlockHour = timeBlockId.replace("hour-", '')

        // convert to mility time by adding + 12  when needed and then turn timeBlockHours into integers values  
        if (timeBlockHour < 9) {
            timeBlockHour = parseInt(timeBlockHour) + 12 
        }
        else {
            timeBlockHour = parseInt(timeBlockHour)
        }

            console.log(timeBlockHour);

        if (timeBlockHour === parseInt(currentHour)){

            // addClass "present" to closest text area
            console.log("this is the current hour"); 
        }

        if (timeBlockHour > currentHour) {
        
            // addClass "future" to closest text area 
            console.log ("this is the future");
        }
        else{
            //leave as is??
        }
    }
};

hourUpdater();

   

 //Declare a 'tasklist' variable that holds the parsed taskList items retrieved from 'localStorage'
// If there is nothing in 'localStorage', set the 'taskList' to an empty array


var taskList = JSON.parse(localStorage.getItem('taskList')) || []; 




//  when the user enters text and clicks the save icon tasks are saved to local storage  and persist when the user refreshes the page 

$('.saveBtn').on('click', function(event) {
     event.preventDefault(); 

     // Get the task "value" from the textbox and store it as a variable using `.val()` and `.trim()`
     var task = $("textarea")
     .val()
     .trim()
     

    // add the task to taskList array 
        taskList.push(task);

    // save the tasks to local storage 
    // We need to use JSON.stringify to turn the list from an array into a string
     localStorage.setItem('taskList', JSON.stringify(taskList));

 });