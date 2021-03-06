


var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * max - min + 1) + min;
  return value;
};

var fight = function(enemy) {
  console.log(enemy);
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          //playerMoney = playerMoney - 10;
          playerInfo.money = Math.max(0, playerInfo.money -= 10);
          console.log("playerMoney", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      //enemyHealth = enemyHealth - playerAttack;
      var damage = randomNumber(playerInfo.attack -4, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        console.log(playerInfo.name + " was awarded 20 for winning!");
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      //playerHealth = playerHealth - enemyAttack;
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };


  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if(this.money >= 7){
        window.alert("Refilling player's health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
    },
    upgradeAttack: function() {
      if(this.money >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dolllars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
    }
  };
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
  
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
  
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  
  ];


var startGame = function() { 
  //reset player stats
  playerInfo.reset(); 
 
for(i=0; i < enemyInfo.length; i++){
  var enemyObj = enemyInfo[i];
  enemyObj.health = randomNumber(40, 60);
    if(playerInfo.health > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    } else {
        window.alert("You lost your robot in battle. Game over!");
        break;
    }

  fight(enemyObj);
    //if player is still alive, and if not the last enemy in the array, let them shop.
    if(playerInfo.health > 0 && i < enemyInfo.length-1){
      var storeConfirm = window.confirm("The fight is over. Do you want to visit the store?");
      if(storeConfirm){
        shop();
      }
    }
    console.log(enemyObj.name);
    //enemyHealth=50;
    //make it random
    enemyObj.health = randomNumber(40, 60);
    console.log("Enemy health started at " + enemyObj.health);
}
endGame();
};

var endGame = function(){
  //if player is still alive, player wins!
  if(playerInfo.health > 0) {
  window.alert("The game has ended. Let's see how you did!");
}
else {
  window.alert("You've lost your robot in battle.");
}

var playAgainConfirm = window.confirm("Would you like to play again?");
if(playAgainConfirm) {
  //restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing!");
}

};

var shop = function() {
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  switch(shopOptionPrompt){
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
       break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      break;
  }
}

startGame();