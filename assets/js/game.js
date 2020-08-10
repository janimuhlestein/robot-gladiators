
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

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

    //enemy health -= playerAttack
    //enemyHealth = enemyHealth - playerAttack;
    enemyHealth -= playerAttack;
    playerHealth -= enemyAttack;

    //log a message
    console.log(`${playerName} attacked ${enemyName}, and ${enemyName} now has ${enemyHealth}`);
    console.log(`${enemyName} attacked ${playerName}, and ${playerName} now has ${playerHealth}`);
    if(playerHealth >= 0) {
        window.alert(enemyName + " has attacked, but You are still alive! You have " + playerHealth);
    }
    else {
        console.log("Sorry, you died!");
    }

    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " left.");
    }
}

//run function
fight();
