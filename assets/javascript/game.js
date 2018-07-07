var skywalker = {
    health: 100,
    attack: 8,
    newAttack: 0,
    counter: 10,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var fett = {
    health: 100,
    attack: 10,
    newAttack: 0,
    counter: 10,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var vader = {
    health: 100,
    attack: 12,
    newAttack: 0,
    counter: 10,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var solo = {
    health: 100,
    attack: 16,
    newAttack: 0,
    counter: 10,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var userCharacter = "";
var defenderCharacter = "";

//==========================================================================================================================================================
//==========================================================================================================================================================
$(document).ready(function () {

    $(".resetBtn").hide();

    $("#skywalkerImageCharacter").hide();
    $("#fettImageCharacter").hide();
    $("#vaderImageCharacter").hide();
    $("#soloImageCharacter").hide();

    $("#skywalkerImageEnemy").hide();
    $("#fettImageEnemy").hide();
    $("#vaderImageEnemy").hide();
    $("#soloImageEnemy").hide();

    $("#skywalkerImageDefender").hide();
    $("#fettImageDefender").hide();
    $("#vaderImageDefender").hide();
    $("#soloImageDefender").hide();

    // Character Text
    $("#skywalkerHP1").hide();
    $("#fettHP1").hide();
    $("#vaderHP1").hide();
    $("#soloHP1").hide();

    // Enemy Text
    $("#skywalkerHP2").hide();
    $("#fettHP2").hide();
    $("#vaderHP2").hide();
    $("#soloHP2").hide();

    // Defender Text
    $("#skywalkerHP3").hide();
    $("#fettHP3").hide();
    $("#vaderHP3").hide();
    $("#soloHP3").hide();



    // victory() determines when all enemies have been defeated and game has been won    
    function victory() {
        if (skywalker.character && fett.defeated && vader.defeated && solo.defeated) {
            alert("Congratulations! You Are The Galactic Champion");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        } // Closes skywalker final victory if condition
        else if (fett.character && skywalker.defeated && vader.defeated && solo.defeated) {
            alert("Congratulations! You Are The Galactic Champion");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        } // Closes fett final victory else if condition
        else if (vader.character && skywalker.defeated && fett.defeated && solo.defeated) {
            alert("Congratulations! You Are The Galactic Champion");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        } // Closes vader final victory else if condition
        else if (solo.character && skywalker.defeated && fett.defeated && vader.defeated) {
            alert("Congratulations! You Are The Galactic Champion");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        } // Closes solo final victory else if condition
        else {
            alert("You Won this Battle! Select Another Enemy to Continue")
        }

console.log("Defeated");
console.log(skywalker.defeated, fett.defeated, vader.defeated, solo.defeated);

    };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//=============================================================================
    // characterSelect() allows the user to choose a player character, sets the remaining images to "enemy", hides the bank of selectable characters, displays
    // user's character beneath the "Your Character" html, unhides the images beneath "Enemies Available to Attach" html...
    $(".button").on("click", function characterSelect() {
        userCharacter = $(this).attr("value");
        console.log("User Character: " + userCharacter);
        $(".images").hide();
        $(".imagesText").hide();

        if (userCharacter === "skywalker") {
            skywalker.character = true;
            skywalker.enemy = false;
            fett.character = false;
            fett.enemy = true;
            vader.character = false;
            vader.enemy = true;
            solo.character = false;
            solo.enemy = true;
            $("#skywalkerImageCharacter").show();
            $("#skywalkerHP1").show();

        } else if (userCharacter === "fett") {
            skywalker.character = false;
            skywalker.enemy = true;
            fett.character = true;
            fett.enemy = false;
            vader.character = false;
            vader.enemy = true;
            solo.character = false;
            solo.enemy = true;
            $("#fettImageCharacter").show();
            $("#fettHP1").show();

        } else if (userCharacter === "vader") {
            skywalker.character = false;
            skywalker.enemy = true;
            fett.character = false;
            fett.enemy = true;
            vader.character = true;
            vader.enemy = false;
            solo.character = false;
            solo.enemy = true;
            $("#vaderImageCharacter").show();
            $("#vaderHP1").show();
            
        } else if (userCharacter === "solo") {
            skywalker.character = false;
            skywalker.enemy = true;
            fett.character = false;
            fett.enemy = true;
            vader.character = false;
            vader.enemy = true;
            solo.character = true;
            solo.enemy = false;
            $("#soloImageCharacter").show();
            $("#soloHP1").show();
        }

        if (skywalker.enemy) {
            $("#skywalkerImageEnemy").show();
            $("#skywalkerHP2").show();
        }
        if (fett.enemy) {
            $("#fettImageEnemy").show();
            $("#fettHP2").show();
        }
        if (vader.enemy) {
            $("#vaderImageEnemy").show();
            $("#vaderHP2").show();
        }
        if (solo.enemy) {
            $("#soloImageEnemy").show();
            $("#soloHP2").show();
        }
    }) //closes characterSelect function

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//=============================================================================

    // defender() sets the available enemy characters to a "defender character" based on which character the user 'clicks'
    $(".button2").on("click", function defender() {
        defenderCharacter = $(this).attr("value");
        console.log("Defender: " + defenderCharacter);

        if (defenderCharacter === "skywalker") {
            skywalker.defender = true;
            skywalker.enemy = false;
        } // Closes skywalker Defenders if
        else if (defenderCharacter === "fett") {
            fett.defender = true;
            fett.enemy = false;
        } // Closes fett Defenders else if 
        else if (defenderCharacter === "vader") {
            vader.defender = true;
            vader.enemy = false;
        } // Closes vader Defenders else if 
        else if (defenderCharacter === "solo") {
            solo.defender = true;
            solo.enemy = false;
        } // Closes solo Defenders else if

        if (skywalker.defender) {
            $("#skywalkerImageDefender").show();
            $("#skywalkerHP3").show();
        }
        if (fett.defender) {
            $("#fettImageDefender").show();
            $("#fettHP3").show();
        }
        if (vader.defender) {
            $("#vaderImageDefender").show();
            $("#vaderHP3").show();
        }
        if (solo.defender) {
            $("#soloImageDefender").show();
            $("#soloHP3").show();
        }
        if (skywalker.enemy === false) {
            $("#skywalkerImageEnemy").hide();
            $("#skywalkerHP2").hide();                        
        }
        if (fett.enemy === false) {
            $("#fettImageEnemy").hide();
            $("#fettHP2").hide();
        }
        if (vader.enemy === false) {
            $("#vaderImageEnemy").hide();
            $("#vaderHP2").hide();
        }
        if (solo.enemy === false) {
            $("#soloImageEnemy").hide();
            $("#soloHP2").hide();
        }

console.log("Defender Status");
console.log(skywalker.defender, fett.defender, vader.defender, solo.defender);
console.log("Character Status");
console.log(skywalker.character, fett.character, vader.character, solo.character);
console.log("Enemy Status");
console.log(skywalker.enemy, fett.enemy, vader.enemy, solo.enemy);
    }) // Closese defender function

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//=============================================================================
    // function that increases user character attack points by base value
    $(".attackBtn").on("click", function attack() {
        if (userCharacter === "" ) {
            alert("No User Character Selected");
        }
       // else if ()
        else if (userCharacter === "skywalker") {
            skywalker.newAttack += skywalker.attack;
            if (skywalker.defender === true) {
                skywalker.health -= skywalker.newAttack;
            } else if (fett.defender === true) {
                fett.health -= skywalker.newAttack;
                skywalker.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= skywalker.newAttack;
                skywalker.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= skywalker.newAttack;
                skywalker.health -= solo.counter;
            }
        } // Closes userCharacter === skywalker else if
        else if (userCharacter === "fett") {
            fett.newAttack += fett.attack;
            if (skywalker.defender === true) {
                skywalker.health -= fett.newAttack;
                fett.health -= skywalker.counter;
            } else if (fett.defender === true) {
                fett.health -= fett.newAttack;
                fett.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= fett.newAttack;
                fett.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= fett.newAttack;
                fett.health -= solo.counter;
            }
        } // Closes userCharacter === fett else if
        else if (userCharacter === "vader") {
            vader.newAttack += vader.attack;
            if (skywalker.defender === true) {
                skywalker.health -= vader.newAttack;
                vader.health -= skywalker.counter;
            } else if (fett.defender === true) {
                fett.health -= vader.newAttack;
                vader.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= vader.newAttack;
                vader.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= vader.newAttack;
                vader.health -= solo.counter;
            }
        } // Closes userCharacter === vader else if
        else if (userCharacter === "solo") {
            solo.newAttack += solo.attack;
            if (skywalker.defender === true) {
                skywalker.health -= solo.newAttack;
                solo.health -= skywalker.counter;
            } else if (fett.defender === true) {
                fett.health -= solo.newAttack;
                solo.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= solo.newAttack;
                solo.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= solo.newAttack;
                solo.health -= solo.counter;
            }
        } // Closes userCharacter === solo else if

console.log("User Character's New Attack: " + userCharacter);
console.log(skywalker.newAttack, fett.newAttack, vader.newAttack, solo.newAttack);
console.log("Character Health");
console.log(skywalker.health, fett.health, vader.health, solo.health);

        //function youlose(){
        if (skywalker.character === true && skywalker.health <= 0) {
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        else if (fett.character === true && fett.health <= 0) {
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        else if (vader.character === true && vader.health <= 0) {
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        else if (solo.character === true && solo.health <= 0) {
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        // ================ Conditionals that determine defender has been defeated =================
        if (skywalker.defender === true && skywalker.health <= 0) {
            $("#skywalkerImageDefender").hide();
            $("#skywalkerHP3").hide();
            skywalker.defender = false;
            skywalker.defeated = true;
            victory();
        }
        else if (fett.defender === true && fett.health <= 0) {
            $("#fettImageDefender").hide();
            $("#fettHP3").hide();
            fett.defender = false;
            fett.defeated = true;
            victory();
        }
        else if (vader.defender === true && vader.health <= 0) {
            $("#vaderImageDefender").hide();
            $("#vaderHP3").hide();
            vader.defender = false;
            vader.defeated = true;
            victory();
        }
        else if (solo.defender === true && solo.health <= 0) {
            $("#soloImageDefender").hide();
            $("#soloHP3").hide();
            solo.defender = false;
            solo.defeated = true;
            victory();
        }

    }) // Closes attack function

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    $(".resetBtn").on("click", function reset() {
        skywalker.health = 100,
            skywalker.attack = 8,
            skywalker.newAttack = 0,
            skywalker.counter = 10,
            skywalker.character = false,
            skywalker.enemy = false,
            skywalker.defender = false,

            fett.health = 100,
            fett.attack = 10,
            fett.newAttack = 0,
            fett.counter = 10,
            fett.character = false,
            fett.enemy = false,
            fett.defender = false,

            vader.health = 100,
            vader.attack = 12,
            vader.newAttack = 0,
            vader.counter = 10,
            vader.character = false,
            vader.enemy = false,
            vader.defender = false,

            solo.health = 100,
            solo.attack = 16,
            solo.newAttack = 0,
            solo.counter = 10,
            solo.character = false,
            solo.enemy = false,
            solo.defender = false

        $(".resetBtn").hide();
        $(".attackBtn").show();
        $(".images").show();
        $(".imagesText").show();

        $("#skywalkerImageCharacter").hide();
        $("#fettImageCharacter").hide();
        $("#vaderImageCharacter").hide();
        $("#soloImageCharacter").hide();
        $("#skywalkerImageEnemy").hide();
        $("#fettImageEnemy").hide();
        $("#vaderImageEnemy").hide();
        $("#soloImageEnemy").hide();
        $("#skywalkerImageDefender").hide();
        $("#fettImageDefender").hide();
        $("#vaderImageDefender").hide();
        $("#soloImageDefender").hide();
        $("#skywalkerHP1").hide();
        $("#fettHP1").hide();
        $("#vaderHP1").hide();
        $("#soloHP1").hide();
        $("#skywalkerHP2").hide();
        $("#fettHP2").hide();
        $("#vaderHP2").hide();
        $("#soloHP2").hide();
        $("#skywalkerHP3").hide();
        $("#fettHP3").hide();
        $("#vaderHP3").hide();
        $("#soloHP3").hide();

    })
})


