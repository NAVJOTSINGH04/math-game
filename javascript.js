var playing = false;
var score;
var action;
var timeremaining;
//if we click on the start/reset
document.getElementById("startreset").onclick = function () {
    //if we are playing
    if (playing == true) {
        location.reload(); //reload page
    }
    else // if we are not palying 
    {
        
        // change mode to playing
        playing = true;
        
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        
        //show countdown box
    show("time");
        timeremaining = 60;
        document.getElementById("timevalue").innerHTML = timeremaining;
        // to hide game over
        hide("gameOver");
        
        //change button  to reset
        document.getElementById("startreset").innerHTML="reset game";
        
        
        
        startcountdown();
        
    }
}



//function

//start count down
function startcountdown(){
    action = setInterval(function(){
       timeremaining -= 1; 
         document.getElementById("timevalue").innerHTML = timeremaining;
        if( timeremaining == 0){
            stopcountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML= "<p>game over</p><p>your score is" + score +"</p>";
            
            hide("time");
            hide("correct");
             hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
            //hide("gameOver");
        }
    }, 1000);
}
// stop count down
function stopcountdown(){
    clearInterval(action);
}
//hide certain elements
function hide (Id){
    document.getElementById(Id).style.display = "none";
}
//show certain element 
function show (Id){
    document.getElementById(Id).style.display = "block";
}
