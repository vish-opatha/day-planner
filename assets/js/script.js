var displayPln =$('#display-planner');
var timerDisplay =$('#currentDay')
var timeSlots = ['9.00 am','10.00 am','11.00 am','12.00 pm','1.00 pm','2.00 pm','3.00 pm','4.00 pm','5.00 pm'];
var timeSlotCount=timeSlots.length;

















//This is a working code and can be used to save items
//******************************************************* */

//######## This function creates rows of the daily planner ##########
function createRows()
{
    var timeId=9;

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
        rowTextArea.attr("id",timeId);
        rowButton.text("💾");
        rowButton.attr("time",timeId);
        rowButton.addClass("btn-sm custom-btn savebuttton col-md-1");

        rowDiv.append(rowP);
        rowDiv.append(rowTextArea);
        rowDiv.append(rowButton);

        displayPln.append(rowDiv);
        timeId++;
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

//########## This function is used to save the appointments to the local storage 
function saveAppointments(timeId,targetTextArea)
{
    var appointmentList =[];
    var savedApptList =JSON.parse(localStorage.getItem('apptList'));

    if (savedApptList === null)
    {
        appointmentList.push(timeId+"-"+targetTextArea);
        localStorage.setItem('apptList',JSON.stringify(appointmentList));
    }

    else
    {
        appointmentList=JSON.parse(localStorage.getItem('apptList'));
        appointmentList.push(timeId+"-"+targetTextArea)
        localStorage.setItem('apptList',JSON.stringify(appointmentList));
    }
}

//######### This function render saved appointments when page loads ############
function renderSavedAppointments()
{
   var savedApptList= [];
   savedApptList=JSON.parse(localStorage.getItem('apptList'));
   if(savedApptList!==null)
   {
      var i=savedApptList.length;
      for(j=0;j<i;j++)
      {
          var apptText=savedApptList[j].split("-");
          var timeSlot =apptText[0];
          var appt=apptText[1];
          console.log(timeSlot+ " "+appt);

          var displayApptArea = $("#"+timeSlot);
          displayApptArea.text(appt);
      }
   }

   else
   { 
      return;
   }
}



//######### Binding the click event of save buttons to the <div>
displayPln.on('click','button',function(event){
    event.preventDefault();
    var cbutton = event.target;
   
   var timeId = $(event.target).attr('time');
//    $( event.target ).closest( "li" ).toggleClass( "highlight" );
   var targetTextArea =$(event.target).siblings().eq(1).val().trim();
   
   saveAppointments(timeId,targetTextArea);
   console.log(cbutton);
   console.log(timeId);

  
})


function init()
{
    displayCurrentTime();
    createRows();
    renderSavedAppointments();
}

init();