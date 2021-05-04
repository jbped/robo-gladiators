var playerName = window.prompt('What is your Robo-Gladiator\'s name?');
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 100;

var fight = function() {
    window.alert('Welcome to the Robo-Gladiator Brawl!');

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log('Wow! ' + playerName + ' just attacked ' + enemyName + ' for a whopping ' + playerAttack +' hit points! ' + enemyName + ' has ' + enemyHealth + ' hit points remaining.');

// Check Enemy Health
if (enemyHealth <= 0) {
window.alert ('Ooooooh! ' + enemyName + ' was just annihilated by ' + playerName + '! ' + playerName + ' is victorious!');
}
else {
    window.alert('Wow! ' + playerName + ' just attacked ' + enemyName + ' for a whopping ' + playerAttack +' hit points! ' + enemyName + ' has ' + enemyHealth + ' hit points remaining.')
}

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(enemyName + ' just slammed ' + playerName + ' with an impressive ' + enemyAttack + ' hp hit! ' + playerName + ' is down to ' + playerHealth + ' hit points!');

// Check Player Health
if (playerHealth <= 0) {
    window.alert ('Thats a huge hit by ' + enemyName + '! ' + playerName + ' is down for the count! Better luck next time. ' + enemyName + ' wins!')
}
else {
    window.alert(enemyName + ' just slammed ' + playerName + ' with an impressive ' + enemyAttack + ' hp hit! ' + playerName + ' is down to ' + playerHealth + ' hit points!');
}
};

fight();