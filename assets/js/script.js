var displayPln =$('#display-planner');
var timerDisplay =$('#currentDay');
var timeSlots = ['9.00 am','10.00 am','11.00 am','12.00 pm','1.00 pm','2.00 pm','3.00 pm','4.00 pm','5.00 pm'];

var timeSlotCount=timeSlots.length;
var timeIDCounter= 9;

//############ This function is used to update and display current time ################
function displayCurrentTime()
{
    timerInterval = setInterval(function() 
    {
        var today = moment();
        timerDisplay.text(today.format("dddd, MMMM Do YYYY"));  
    }, 10);
}

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

        rowDiv.addClass("row justify-content-center time-block");
        rowP.addClass("col-3 col-md-2 hour");
        rowP.text(timeSlots[i]);
        rowTextArea.addClass("col-6 col-md-9 description");
        rowTextArea.attr("id",timeId);
        rowButton.text("💾");
        rowButton.attr("time",timeId);
        rowButton.addClass("btn-sm custom-btn col-3 col-md-1 saveBtn ");

        rowDiv.append(rowP);
        rowDiv.append(rowTextArea);
        rowDiv.append(rowButton);

        displayPln.append(rowDiv);
        timeId++;
    }   
}

//############ This function is used to update the background color of the text area ################
function colourTextArea()
{
    timerInterval = setInterval(function() 
    {
        for(t=0;t<timeSlotCount;t++)
        {
            var nowtime = moment();
            var nowtime2=nowtime.format("HH");
            var slotTime = moment(timeSlots[t],"HH mm a");
            var colouredTextA =$("#"+timeIDCounter);
    
            if(nowtime2==timeIDCounter)
            {
                colouredTextA.addClass("present");    
            }

            else
            {
                if(nowtime.isAfter(slotTime))
                {
                    colouredTextA.addClass("past");
                }
    
                else
                {
                    colouredTextA.addClass("future");
                }
            }

            timeIDCounter++;   
        }
    }, 100);
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
          var displayApptArea = $("#"+timeSlot);
          displayApptArea.text(appt);
      }
   }

   else
   { 
      return;
   }
}

//########## This function is used to save the appointments to the local storage 
function saveAppointments(timeId,targetTextArea)
{
    var appointmentList =[];
    var savedApptList =JSON.parse(localStorage.getItem('apptList'));
    
    if(targetTextArea === "")
    {
         window.alert("⚠️ Your appointment is blank.\n Please enter your appointment details before saving.");      
    }

    else
    {
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
}

//######### Initiallization function ################
function init()
{
    displayCurrentTime();
    createRows();
    renderSavedAppointments();
    colourTextArea();
}

//######### Binding the click event of save buttons to the <div> ###############
//Event delegation is used by using the display planner div
displayPln.on('click','button',function(event){
    event.preventDefault();
    var timeId = $(event.target).attr('time');
    var targetTextArea =$(event.target).siblings().eq(1).val().trim();
   
    saveAppointments(timeId,targetTextArea);   
});

init();