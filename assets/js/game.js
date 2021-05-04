// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//character creation
var playerName = window.prompt('What is your Robo-Gladiator\'s name?');
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Display Player Stats
console.log(playerName, playerAttack, playerHealth);

// Enemey Statistics & Name
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute until enemy robot is defeated
    while(enemyHealth > 0 && playerHealth > 0) {

        // Intro Alert
        // window.alert('Welcome to the Robo-Gladiator Brawl!');

        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.');
        
        // IF player chooses to fight
        if (promptFight === 'fight' || promptFight === 'FIGHT') {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            
            // Log a resulting message to the console so we know that it worked.
            console.log('Wow! ' + playerName + ' just attacked ' + enemyName + ' for a whopping ' + playerAttack +' hit points! ' + enemyName + ' has ' + enemyHealth + ' hit points remaining.');
            
            // Check Enemy Health
            if (enemyHealth <= 0) {
                window.alert ('Ooooooh! ' + enemyName + ' was just annihilated by ' + playerName + '! ' + playerName + ' is victorious!');
                break;
            }
            else {
                window.alert('Wow! ' + playerName + ' just attacked ' + enemyName + ' for a whopping ' + playerAttack +' hit points! ' + enemyName + ' has ' + enemyHealth + ' hit points remaining.');
            }
            
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + ' just slammed ' + playerName + ' with an impressive ' + enemyAttack + ' hp hit! ' + playerName + ' is down to ' + playerHealth + ' hit points!');
            
            // Check Player Health
            if (playerHealth <= 0) {
                window.alert ('Thats a huge hit by ' + enemyName + '! ' + playerName + ' is down for the count! Better luck next time. ' + enemyName + ' wins!')
                break;
            }
            else {
                window.alert(enemyName + ' just slammed ' + playerName + ' with an impressive ' + enemyAttack + ' hp hit! ' + playerName + ' is down to ' + playerHealth + ' hit points!');
            }
        }
        
        // IF player chooses to skip the battle.
        else if (promptFight ==='skip' || promptFight === 'SKIP') {
            //confirm that the player wants to skip
            var confirmSkip = window.confirm('Are you sure that you\'d like to quit?')
            
            //if yes (true), skip fight
            if (confirmSkip) {
                window.alert('Oh, what do we have here? It appears that ' + playerName + ' has decided to skip the fight!');
                playerMoney = playerMoney - 10;
                console.log('playerMoney', playerMoney);
                break;
            }
            else {
                fight();
            }
        }
        else {
            window.alert ('It appears that you offered an invalid entry: "' + promptFight + '" Please try again and choose a valid option: \'FIGHT\' or \'SKIP\'');
        }
    }
};
    
// Initiate Fight Call
// fight();
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

