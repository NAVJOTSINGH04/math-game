var playing = false;
var score;
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
     document.getElementById("time").style.display = "block"; 
        
        //change button  to reset
        document.getElementById("startreset").innerHTML="reset game"
    }
    
}