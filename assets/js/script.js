
// get the current day and display it on the top of the calendar

var currentDay = document.querySelector("#currentDay");

currentTime = moment();

currentDay.textContent = currentTime.format("dddd, MMMM Do");

// select all time blocks, which will also give us acces to the children 

var timeBlocks = Array.from(document.querySelectorAll(".time-block"))

console.log(timeBlocks);

var currentHour = moment().hour();
console.log(currentHour);

var tasks = []


var hourUpdater = function(){
    
    // loop over each one timeBlock 

    for (var i = 0; i < timeBlocks.length; i++){


        // select the hour id and loop through 
        var timeBlockId =timeBlocks[i].firstElementChild.id;


        //  loop through the time block id and get the string value of hour (get rid of "hour-" by replacing with an empty string)

        var timeBlockHour = timeBlockId.replace("hour-", '')

        // convert to mility time by adding + 12  when needed and then turn timeBlockHours into integer values  
        if (timeBlockHour < 9) {

            timeBlockHour = parseInt(timeBlockHour) + 12 
        }
        else {
            timeBlockHour = parseInt(timeBlockHour)
        }

            console.log(timeBlockHour);

        if (timeBlockHour === parseInt(currentHour)){

            // addClass "present" to corresponding text area

            var presentTimeBlock = document.getElementById(JSON.stringify(timeBlockHour));
            
            $(presentTimeBlock).addClass("present");

        }

        else if (timeBlockHour > currentHour) {
        
            // addClass "future" to corresponding text area 

            console.log ("this is the future");

            var presentTimeBlock = document.getElementById(JSON.stringify(timeBlockHour));
            
            $(presentTimeBlock).addClass("future");

        }
    }
};


hourUpdater();

 //Declare a 'tasks' variable that holds the parsed task items retrieved from 'localStorage'
// If there is nothing in 'localStorage', set the 'tasks' to an empty array

var loadTasks = function() {

    var tasks = JSON.parse(localStorage.getItem('tasks'))
    
    if(!tasks) {
        tasks = []
    }

};

loadTasks();



//  when the user enters text and clicks the save icon tasks are saved to local storage  and persist when the user refreshes the page 
//var saveTasks = function() {



    $(".saveBtn").on("click", function() {

        var userInput = $(this).siblings(".textarea").val()

        tasks.push(userInput);

        localStorage.setItem('tasks', JSON.stringify(userInput))

    
        

    });




   

