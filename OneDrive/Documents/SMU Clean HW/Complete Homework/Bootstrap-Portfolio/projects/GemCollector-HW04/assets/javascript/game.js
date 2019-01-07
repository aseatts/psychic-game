$(document).ready(function() {
 
    // Win-Loss Variables
    var wins = 0;
    var loses = 0;
    
    //Player's Score Variable 
    var userGemTotal = 0; // sum of all gem values
    $("#playerScore").text(userGemTotal);
    
    // Gem Value Variables
    var greenGem = Math.floor(Math.random() * 12) + 1;
    var pinkGem = Math.floor(Math.random() * 12) + 1;
    var blueGem = Math.floor(Math.random() * 12) + 1;
    var orangeGem = Math.floor(Math.random() * 12) + 1;
    
    //Random Number gets generated
    var numToBeMatched = 19 + Math.floor(Math.random()*101)+19;
    $("#random-number").text(numToBeMatched);
    
    
    function win(){
    //WIN actions: If user Gem clicks match the Randomly Generated Number 
        alert("Congratulations! YOU WIN!!"); // informs user of win
        wins += 1; // wins increase by 1.
        $("#wins").text("WINS: " + wins);
        gameReset();
    }
    
    function loss(){
     //LOSS actions: If user Gem clicks are more than Randomly Generated Number
            alert("You lose!"); // informs user of loss
            loses += 1; // losses increase by 1.
            console.log()
            $("#losses").text("LOSSES: " +  loses);
            gameReset();
        }
    
    //Game Reset 
    function gameReset(){
        //New Random Number
        numToBeMatched = 19 + Math.floor(Math.random()*120);
        $("#random-number").text(numToBeMatched);
    
         //New Gem Totals
        greenGem = Math.floor(Math.random() * 12) + 1;
        pinkGem = Math.floor(Math.random() * 12) + 1;
        blueGem = Math.floor(Math.random() * 12) + 1;
        orangeGem = Math.floor(Math.random() * 12) + 1;
    
        //Player Score Cleared
        userGemTotal = 0;
        $("#playerScore").text("PLAY AGAIN!");
    }
    
    
    // gems generate a random number
    
    //Gem Clicks
    $(".gem").on("click", function(){
       var currentGem = $(this).attr("id");
       var userPoints = 0;
       switch(currentGem) {
           case "greenGem":
            userPoints=greenGem;
            break;
    
           case "pinkGem":
            userPoints=pinkGem;
            break;
    
           case "blueGem":
            userPoints=blueGem;
            break;
    
           case "orangeGem": 
            userPoints=orangeGem;
            break;
       }
    
        userGemTotal += userPoints; // additon of clicks
        
        $("#playerScore").text(userGemTotal); //Displays in HTML user's total points
    
       // win-loss conditions
        if (userGemTotal == numToBeMatched){
            win();
          }
        if (userGemTotal > numToBeMatched){
            loss();
          } 
      });
    
    });
    