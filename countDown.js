    //Joan J. Cruz
    function initiateCountdown() //This function will begin the countdown until blastoff
    {
      
      var secondsLeft = 10; //Seconds until launch
      for(var i = 1; i <= 11; i++)      
      if (i == 11)
      {
        setTimeout(function () 
        { 
          document.getElementById("count").innerHTML = "Blastoff!";
        }, 1000 * i);
      }
      else
      {
        setTimeout(function ()
        { 
          document.getElementById("count").innerHTML = "Seconds until launch: " + secondsLeft;
          //Displays the count as it decreases
          secondsLeft = secondsLeft - 1; 
          //Decreases the count by 1
        }, 1000 * i);   
      }   
      }

      //var currTime = 10;
          /*  for (initial condition, ending condition - stop when not true, what to 
      after each loop) i++ same as  i = i+1*/
          /*for (var i = 1; i < 12; i++) {
              setTimeout(function () {
                  document.getElementById("count").innerHTML = "the time left is " + currTime;
                  currTime = currTime - 1;
              }, 1000 * i);
          }*/