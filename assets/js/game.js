
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//var enemyName = "Roberto";
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

    //welcome users
    window.alert("Welcome to Robot Gladiators!");

    //ask if they want to skip or fight
    var promptFight=window.prompt("Would you like to fight or skip this round?");

    //if they want to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
      
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
      
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
          var confirmSkip = window.prompt("Are you sure you want to quit?");
            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight!");
                playerMoney -= 2;
            }
            else {
                fight(enemyName);
            }
      } else {
        window.alert("You need to pick a valid option. Try again!");
      }
}

//run function
//fight();
    for(var i=0; i<enemyNames.length; i++){
        fight(enemyNames[i]);
    }

