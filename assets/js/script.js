var timerDisplay =$('#currentDay')















var timeSlots = ['9.00 am','10.00 am','11.00 am','12.00 am','1.00 pm','2.00 pm','3.00 pm','4.00 pm','5.00 pm'];



function displayPlanner()
{

}


//This is a working code and can be used to save items
//******************************************************* */
var displayPln =$('#display-planner');

    displayPln.on('click','button',function(event){
        event.preventDefault();
        window.alert('This is a button');
    })


    
//############ This function is used to update and display current time ################
function displayCurrentTime()
{
    // event.preventDefault(); 
    timerInterval = setInterval(function() 
    {
        var today = moment();
        timerDisplay.text(today.format("dddd, MMMM Do YYYY"));  
    }, 10);
}

function init()
{
    displayCurrentTime();
}


    init();