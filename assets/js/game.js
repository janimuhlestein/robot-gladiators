
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//log info
console.log(playerName, playerHealth, playerAttack);
// create a function

//log enemy info
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {

    //welcome users
    window.alert("Welcome to Robot Gladiators!");

    //ask if they want to skip or fight
    var promptFight=window.prompt("Would you like to fight or skip this round?");

    //if they want to fight, then fight
    if(promptFight=="fight" || promptFight=="FIGHT"){
        window.alert(playerName + " has chosen to fight this round.");

    playerHealth -= enemyAttack
    enemyHealth -= playerAttack;

    //log a message
    console.log(`${playerName} attacked ${enemyName}, and ${enemyName} now has ${enemyHealth}`);
    console.log(`${enemyName} attacked ${playerName}, and ${playerName} now has ${playerHealth}`);
    
    //make it actually play
    while(playerHealth > 0 && enemyHealth >0){
        enemyHealth -= playerAttack;
        playerHealth -= enemyAttack;
    
    if(playerHealth > 0) {
        window.alert(enemyName + " has attacked, but You are still alive! You have " + playerHealth);
    }
    else {
        console.log("Sorry, you died!");
    }

    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died! You have won!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " left.");
    }
    }
}

    //if they want to skip, then skip, but it costs them
    else if(promptFight=="skip" || promptFight=="SKIP") {
        var skipAns = window.confirm("Are you sure you want to skip this round?");
            window.alert(playerName + " has chosen to skip this round!");
            console.log(skipAns);
            if(skipAns){
                playerMoney -=2;
                console.log(playerMoney);
                console.log(skipAns);
            }
            else {
                fight();
            }

    }

    //they need to enter a viable option!
    else {
        window.alert("You'll need to enter a viable option!")
    }
}

//run function
fight();
