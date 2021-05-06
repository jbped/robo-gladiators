
// Random Number Generator
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

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

var fight = function (enemyName) {
    // repeat and execute until enemy robot is defeated
    while (enemyHealth > 0 && playerHealth > 0) {
        console.log('enemyHealth',enemyHealth, 'enemyAttack', enemyAttack);
        console.log('playerHealth',playerHealth, 'playerAttack',playerAttack,'playerMoney',playerMoney);

        // Intro Alert
        // window.alert('Welcome to the Robo-Gladiator Brawl!');

        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.');

        // IF player chooses to fight
        if (promptFight === 'fight' || promptFight === 'FIGHT') {
            //Player Atk Dmg Randomizer
            var damage = randomNumber(playerAttack - 3, playerAttack);
            //Determine enemyHealth by selecting max of zero or enemyHealth-playerAttack which ever is greater
            enemyHealth = Math.max(0,enemyHealth-damage);

            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + ' attacked ' + enemyName + ' for ' + damage + ' hit points. ' + enemyName + ' has ' + enemyHealth + ' hit points.');

            // Check Enemy Health
            if (enemyHealth <= 0) {
                window.alert('Ooooooh! ' + enemyName + ' was just annihilated by ' + playerName + '! ' + playerName + ' is victorious!');
                break;
            }
            else {
                window.alert(playerName + ' just attacked ' + enemyName + ' for a whopping ' + damage + ' hit points! ' + enemyName + ' has ' + enemyHealth + ' hit points remaining.');
            }
            // Enemy ATK DMG randomizer 
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            // Subtract the random value of called `damage` expression from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = Math.max(0,playerHealth - damage);

            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + ' attacked ' + playerName + ' for ' + damage + ' hit points. ' + playerName + ' has ' + playerHealth + ' hit points.');

            // Check Player Health
            if (playerHealth <= 0) {
                window.alert('Thats a huge hit by ' + enemyName + '! ' + playerName + ' is down for the count! Better luck next time. ' + enemyName + ' wins!');
                break;
            }
            else {
                window.alert(enemyName + ' just slammed ' + playerName + ' with an impressive ' + damage + ' hp hit! ' + playerName + ' is down to ' + playerHealth + ' hit points!');
            }
        }

        // IF player chooses to skip the battle.
        else if (promptFight === 'skip' || promptFight === 'SKIP') {
            //confirm that the player wants to skip
            var confirmSkip = window.confirm('Are you sure that you\'d like to skip this fight with ' + enemyName + '?');

            //if yes (true), skip fight
            if (confirmSkip) {
                window.alert('It appears that ' + playerName + ' has decided to skip the fight against ' + enemyName + '!');
                playerMoney = Math.max(0, playerMoney-10)
                console.log('playerMoney', playerMoney);
                break;
            }
            else {
                fight();
            }
        }

        // If Player enters prompt QUIT or quit endGame function will be called. Added this for debugging purposes.
        // else if (promptFight === 'quit' || promptFight === 'QUIT') {
        //     endGame();
        //     break;
        // }

        else {
            window.alert('It appears that you offered an invalid entry: "' + promptFight + '" Please try again and choose a valid option: \'FIGHT\' or \'SKIP\'');
        }
    }
};

// Function to begin playing the game
var startGame = function () {
    // Reset Character Values at the Beginning of each new game
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // Round Counter and Enemy Changer Loop
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert('Welcome to the Robo-Gladiator Brawl! Round ' + (i + 1) + ' - FIGHT!');
            var pickedEnemyName = enemyNames[i];
            // Assign New Enemy Health random whole number between 40 and 60 at the beginning of each new round.
            enemyHealth = randomNumber(40,60);
            // Rotates enemyName to newly picked name
            fight(pickedEnemyName);
            // Verify enemy is not last in array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm('The fight is over, would you like to visit the store before your next brawl?');
                // If Confirm = True --- Enter shop();
                if (storeConfirm) {
                    shop();
                }
            }
        }
        // Game Over Terminate Game Loop
        else {
            window.alert('Your Robot has been pummelled! GAME OVER!');
            break;
        }
    }

    // At end of loop, player is either out of health or enemies to fight
    endGame();
};

// End Game Function
var endGame = function () {
    // Verify player health to give end of game results
    if (playerHealth > 0) {
        window.alert('Boom baby! Well done! ' + playerName + ' annihilated the competition! You have a score of ' + playerMoney + '.');
    }
    else {
        window.alert('Bummer! ' + playerName + ' was defeated. Better luck next time!');
    }

    // Ask player if they want to play the game again
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        // Restart the Game
        startGame();
    }
    else {
        window.alert('Thank you for playing Robo-Gladiator Brawl! Come back anytime!');
    }
};

// Beginning of Shop function
var shop = function () {
    // window.prompt('You have entered the shop');
    var shopOptionPrompt = window.prompt(
        'Would you like to \'REFILL\' your health by 20 hit points, \'UPGRADE\' your attack, or \'LEAVE\' the store? Please enter one: \'REFILL\', \'UPGRADE\', or \'LEAVE\' to make a choice."'
    );
    switch (shopOptionPrompt) {
        // action for choosing refill option in shopOptionPrompt
        case 'REFILL':
        case 'refill':
            // check playersMoney if they can afford the service
            if (playerMoney >= 7) {
                // Player alert for refill health action
                window.alert('Healing ' + playerName + ' by 20 hit points for 7 dollars.');

                // Heal player
                playerHealth = playerHealth + 20;
                // Charge player for service
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert('Uh oh! It appears that you are ' + (7 - playerMoney) + ' dollars short.');
            }
            break;

        // action for choosing damage upgrade
        case 'UPGRADE':
        case 'upgrade':
            // check playersMoney if they can afford the service
            if (playerMoney >= 7) {
                // Player alert for choosing attack upgrade
                window.alert('One moment as we supe up ' + playerName + '\'s damage! Alrighty! That is a 6 damage increase for 7 dollars.');

                // Upgrade player
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert('Uh oh! It appears that you are ' + (7 - playerMoney) + ' dollars short.');
            }
            break;
        
       // action for leaving shop
       case 'LEAVE': 
       case 'leave':
            window.alert('Thank you for visiting the shop! Good luck on your next battle!');
            break;

        // case 'QUIT':
        // case 'quit':
        //     endGame();

        default:
            window.alert('It appears that you offered an invalid entry: "' + shopOptionPrompt + '" Please try again and choose a valid option: \'REFILL\', \'UPGRADE\', or \'LEAVE\'');
            shop();
            break;
    }
};

// Call Start of Game function
startGame();


