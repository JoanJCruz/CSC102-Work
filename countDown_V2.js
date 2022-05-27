    //Joan J. Cruz
    function initiateCountdown() //This function will begin the countdown until blastoff
    {
      var secondsLeft = 10; //Seconds until launch
      for(var i = 1; i <= 11; i++) //Loops the code below 10 times   
      if (i == 11) //Checks for when the countdown is over
      {
        setTimeout(function () 
        { 
          document.getElementById("count").innerHTML = "Blastoff!"; 
          //Prints "Blastoff!" When the countdown is over
        }, 1000 * i); //Timeout. Allows for 1 second between outputs 
      }
      else if(i > 6) //Checks for when the countdown is halfway done
      {
        setTimeout(function ()
        {
          document.getElementById("count").innerHTML = 
          "Warning: launch inminent. Seconds until launch: " + secondsLeft;
          //Changes the message once the countdown is halfway done
          secondsLeft = secondsLeft - 1;
          //Reduces the time remaining by 1 second
        }, 1000 * i); //Same as previous timeout
      }
      else //The "default" option for the loop to do
      {
        setTimeout(function ()
        { 
          document.getElementById("count").innerHTML = "Seconds until launch: " + secondsLeft;
          //Displays the count as it decreases
          secondsLeft = secondsLeft - 1; 
          //Decreases the count by 1
        }, 1000 * i); //Same as previous timeouts  
      }   
    }