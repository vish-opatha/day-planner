var displayPln =$('#display-planner');
var timerDisplay =$('#currentDay')
var timeSlots = ['9.00 am','10.00 am','11.00 am','12.00 am','1.00 pm','2.00 pm','3.00 pm','4.00 pm','5.00 pm'];
var timeSlotCount=timeSlots.length;



// function saveItems()
// {
//     var timeClicked = button.time;


// }

displayPln.on('click','button',function(event){
    event.preventDefault();
    var cbutton = event.target;
   
   var timeId = $(event.target).attr('time');
   var timerParent=$(event.target).parent();
//    $( event.target ).closest( "li" ).toggleClass( "highlight" );
   var targetTextArea =$(event.target).siblings().eq(1);

   console.log(cbutton);
   console.log(timeId);

//    var appointmentTxt=$('#10.00 am');
   
   console.log(targetTextArea.val());
})
















//This is a working code and can be used to save items
//******************************************************* */

//######## This function creates rows of the daily planner ##########
function createRows()
{
    for(i=0;i<timeSlotCount;i++)
    {
        var rowDiv=$('<div>');
        var rowP=$('<p>');
        var rowTextArea=$('<textarea>');
        var rowButton=$('<button>');

        rowDiv.addClass("row justify-content-center");
        rowP.addClass("col-md-2");
        rowP.text(timeSlots[i]);
        rowTextArea.addClass("col-md-9");
        // rowTextArea.attr("class","comment-input");
        rowTextArea.attr("id",timeSlots[i]);
        rowButton.text("💾");
        rowButton.attr("time",timeSlots[i]);
        rowButton.addClass("btn-sm custom-btn savebuttton col-md-1");

        rowDiv.append(rowP);
        rowDiv.append(rowTextArea);
        rowDiv.append(rowButton);

        displayPln.append(rowDiv);
    }   
}
   
//############ This function is used to update and display current time ################
function displayCurrentTime()
{
    timerInterval = setInterval(function() 
    {
        var today = moment();
        timerDisplay.text(today.format("dddd, MMMM Do YYYY"));  
    }, 10);
}

function init()
{
    displayCurrentTime();
    createRows();
}

init();