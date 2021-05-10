// Random Number Generator
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


// Set Name Function
var getPlayerName = function () {
    var name = '';

    while (name === null || name === '') {
        name = prompt('What is your Robo-Gladiator\'s name?')
    }

    console.log('Your robots name is ' + name);
    return name;
}

//character creation
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert('Healing ' + playerInfo.name + ' by 20 hit points for 7 dollars.'); 
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert('Uh oh! It appears that you are ' + (7 - playerInfo.money) + ' dollars short.');
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7) {
            window.alert('One moment as we supe up ' + playerInfo.name + '\'s damage! Alrighty! That is a 6 damage increase for 7 dollars.');
            this.attack +=6;
            this.money -=7;
        }
        else {
            window.alert('Uh oh! It appears that you are ' + (7 - playerInfo.money) + ' dollars short.');
        }
    }
};

// Display Player Stats
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// Enemey Statistics & Name
var enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(8, 12),
    },

    {
        name: 'Amy Android',
        attack: randomNumber(9, 13),
    },

    {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14),
    }

];

var fightOrSkip = function () {
// Ask player if they would prefer to skip the fight or to continue with the fight
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.');
        promptFight = promptFight.toLowerCase();
    
    // Enter the conditional recursive function call here!
    if (promptFight === '' || promptFight === null) {
        window.alert('It appears that you offered an invalid entry: "' + promptFight + '" Please try again and choose a valid option: \'FIGHT\' or \'SKIP\'');
         return fightOrSkip();
    }
    
    // IF player chooses to skip the battle.
    if (promptFight === 'skip') {
        //confirm that the player wants to skip
        var confirmSkip = window.confirm('Are you sure that you\'d like to skip this fight?');
        
        //if yes (true), skip fight
        if (confirmSkip) {
            window.alert('It appears that ' + playerInfo.name + ' has decided to skip the fight!');
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log('playerInfo.money', playerInfo.money);
            return true;
        }
    }
}

var fight = function (enemy) {
    // repeat and execute until enemy robot is defeated
    while (enemy.health > 0 && playerInfo.health > 0) {
        console.log('enemy.health', enemy.health, 'enemy.attack', enemy.attack);
        console.log('playerInfo.health', playerInfo.health, 'playerInfo.attack', playerInfo.attack, 'playerInfo.money', playerInfo.money);
        if (fightOrSkip()) {
            break;
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        //Determine enemy.health by selecting max of zero or enemy.health-playerInfo.attack which ever is greater
        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + ' attacked ' + enemy.name + ' for ' + damage + ' hit points. ' + enemy.name + ' has ' + enemy.health + ' hit points.');

        // Check Enemy Health
        if (enemy.health <= 0) {
            window.alert('Ooooooh! ' + enemy.name + ' was just annihilated by ' + playerInfo.name + '! ' + playerInfo.name + ' is victorious!');
            break;
        }
        else {
            window.alert(playerInfo.name + ' just attacked ' + enemy.name + ' for a whopping ' + damage + ' hit points! ' + enemy.name + ' has ' + enemy.health + ' hit points remaining.');
        }
        // Enemy ATK DMG randomizer 
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // Subtract the random value of called `damage` expression from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + ' attacked ' + playerInfo.name + ' for ' + damage + ' hit points. ' + playerInfo.name + ' has ' + playerInfo.health + ' hit points.');

        // Check Player Health
        if (playerInfo.health <= 0) {
            window.alert('Thats a huge hit by ' + enemy.name + '! ' + playerInfo.name + ' is down for the count! Better luck next time. ' + enemy.name + ' wins!');
            playerInfo.money = playerInfo.money + 10;
            break;
        }
        else {
            window.alert(enemy.name + ' just slammed ' + playerInfo.name + ' with an impressive ' + damage + ' hp hit! ' + playerInfo.name + ' is down to ' + playerInfo.health + ' hit points!');
        }
    }
};

// Function to begin playing the game
var startGame = function () {
    // Reset Character Values at the Beginning of each new game
    playerInfo.reset();

    // Round Counter and Enemy Changer Loop
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert('Welcome to the Robo-Gladiator Brawl! Round ' + (i + 1) + ' - FIGHT!');
            var pickedEnemyObj = enemyInfo[i];
            // Assign New Enemy Health random whole number between 40 and 60 at the beginning of each new round.
            pickedEnemyObj.health = randomNumber(40, 60);
            // Rotates enemy.name to newly picked name
            fight(pickedEnemyObj);
            // Verify enemy is not last in array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert('Boom baby! Well done! ' + playerInfo.name + ' annihilated the competition! You have a score of ' + playerInfo.money + '.');
    }
    else {
        window.alert('Bummer! ' + playerInfo.name + ' was defeated. Better luck next time!');
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
        'Would you like to \'REFILL\' your health by 20 hit points, \'UPGRADE\' your attack, or \'LEAVE\' the store? Please enter one: \'REFILL\', \'UPGRADE\', or \'LEAVE\' to make a choice.'
    );
    switch (shopOptionPrompt) {
        // action for choosing refill option in shopOptionPrompt
        case 'REFILL':
        case 'refill':
            playerInfo.refillHealth();
            break;

        // action for choosing damage upgrade
        case 'UPGRADE':
        case 'upgrade':
            playerInfo.upgradeAttack();
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


