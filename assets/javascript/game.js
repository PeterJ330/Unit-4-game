var skywalker = {
    health: 100,
    attack: 20,
    newAttack: 0,
    counter: 40,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var fett = {
    health: 130,
    attack: 15,
    newAttack: 0,
    counter: 15,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var vader = {
    health: 140,
    attack: 12,
    newAttack: 0,
    counter: 12,
    character: false,
    enemy: false,
    defender: false,
    defeated: false
};

var solo = {
    health: 160,
    attack: 10,
    newAttack: 0,
    counter: 14,
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
    // Character Names
    $("#lukeSkywalker1").hide()
    $("#bobaFett1").hide()
    $("#darthVader1").hide()
    $("#hanSolo1").hide()

    // Enemy Text
    $("#skywalkerHP2").hide();
    $("#fettHP2").hide();
    $("#vaderHP2").hide();
    $("#soloHP2").hide();
    // Enemy Names
    $("#lukeSkywalker2").hide()
    $("#bobaFett2").hide()
    $("#darthVader2").hide()
    $("#hanSolo2").hide()

    // Defender Text
    $("#skywalkerHP3").hide();
    $("#fettHP3").hide();
    $("#vaderHP3").hide();
    $("#soloHP3").hide();
    // Defender Names
    $("#lukeSkywalker3").hide()
    $("#bobaFett3").hide()
    $("#darthVader3").hide()
    $("#hanSolo3").hide()



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
        $(".imagesNames").hide()

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
            $("#lukeSkywalker1").show()

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
            $("#bobaFett1").show()

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
            $("#darthVader1").show()
            
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
            $("#hanSolo1").show()
        }

        if (skywalker.enemy) {
            $("#skywalkerImageEnemy").show();
            $("#skywalkerHP2").show();
            $("#lukeSkywalker2").show()
        }
        if (fett.enemy) {
            $("#fettImageEnemy").show();
            $("#fettHP2").show();
            $("#bobaFett2").show()
        }
        if (vader.enemy) {
            $("#vaderImageEnemy").show();
            $("#vaderHP2").show();
            $("#darthVader2").show()
        }
        if (solo.enemy) {
            $("#soloImageEnemy").show();
            $("#soloHP2").show();
            $("#hanSolo2").show()
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
            $("#lukeSkywalker3").show()
        }
        if (fett.defender) {
            $("#fettImageDefender").show();
            $("#fettHP3").show();
            $("#bobaFett3").show()
        }
        if (vader.defender) {
            $("#vaderImageDefender").show();
            $("#vaderHP3").show();
            $("#darthVader3").show()
        }
        if (solo.defender) {
            $("#soloImageDefender").show();
            $("#soloHP3").show();
            $("#hanSolo3").show()
        }
        if (skywalker.enemy === false) {
            $("#skywalkerImageEnemy").hide();
            $("#skywalkerHP2").hide();  
            $("#lukeSkywalker2").hide()                      
        }
        if (fett.enemy === false) {
            $("#fettImageEnemy").hide();
            $("#fettHP2").hide();
            $("#bobaFett2").hide()
        }
        if (vader.enemy === false) {
            $("#vaderImageEnemy").hide();
            $("#vaderHP2").hide();
            $("#darthVader2").hide()
        }
        if (solo.enemy === false) {
            $("#soloImageEnemy").hide();
            $("#soloHP2").hide();
            $("#hanSolo2").hide()
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
        else if (userCharacter === "skywalker") {
            skywalker.newAttack += skywalker.attack;
            if (skywalker.defender === true) {
                skywalker.health -= skywalker.newAttack;
            } else if (fett.defender === true) {
                fett.health -= skywalker.newAttack;
                $("#fettHP3").text("HP: "+ fett.health);
                skywalker.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= skywalker.newAttack;
                $("#vaderHP3").text("HP: "+ vader.health);
                skywalker.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= skywalker.newAttack;
                $("#soloHP3").text("HP: "+ solo.health);
                skywalker.health -= solo.counter;
            }
            $("#skywalkerHP1").text("HP: "+ skywalker.health);
        } // Closes userCharacter === skywalker else if
        else if (userCharacter === "fett") {
            fett.newAttack += fett.attack;
            if (skywalker.defender === true) {
                skywalker.health -= fett.newAttack;
                $("#skywalkerHP3").text("HP: "+ skywalker.health);
                fett.health -= skywalker.counter;
            } else if (fett.defender === true) {
                fett.health -= fett.newAttack;
                fett.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= fett.newAttack;
                $("#vaderHP3").text("HP: "+ vader.health);
                fett.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= fett.newAttack;
                $("#soloHP3").text("HP: "+ solo.health);
                fett.health -= solo.counter;
            }
            $("#fettHP1").text("HP: "+ fett.health);
        } // Closes userCharacter === fett else if
        else if (userCharacter === "vader") {
            vader.newAttack += vader.attack;
            if (skywalker.defender === true) {
                skywalker.health -= vader.newAttack;
                $("#skywalkerHP3").text("HP: "+ skywalker.health);
                vader.health -= skywalker.counter;
            } else if (fett.defender === true) {
                fett.health -= vader.newAttack;
                $("#fettHP3").text("HP: "+ fett.health);
                vader.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= vader.newAttack;
                vader.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= vader.newAttack;
                $("#soloHP3").text("HP: "+ solo.health);
                vader.health -= solo.counter;
            }
            $("#vaderHP1").text("HP: "+ vader.health);
        } // Closes userCharacter === vader else if
        else if (userCharacter === "solo") {
            solo.newAttack += solo.attack;
            if (skywalker.defender === true) {
                skywalker.health -= solo.newAttack;
                $("#skywalkerHP3").text("HP: "+ skywalker.health);
                solo.health -= skywalker.counter;
            } else if (fett.defender === true) {
                fett.health -= solo.newAttack;
                $("#fettHP3").text("HP: "+ fett.health);
                solo.health -= fett.counter;
            } else if (vader.defender === true) {
                vader.health -= solo.newAttack;
                $("#vaderHP3").text("HP: "+ vader.health);
                solo.health -= vader.counter;
            } else if (solo.defender === true) {
                solo.health -= solo.newAttack;
                solo.health -= solo.counter;
            }
            $("#soloHP1").text("HP: "+ solo.health);
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
            $("#lukeSkywalker3").hide()
            skywalker.defender = false;
            skywalker.defeated = true;
            victory();
        }
        else if (fett.defender === true && fett.health <= 0) {
            $("#fettImageDefender").hide();
            $("#fettHP3").hide();
            $("#bobaFett3").hide()
            fett.defender = false;
            fett.defeated = true;
            victory();
        }
        else if (vader.defender === true && vader.health <= 0) {
            $("#vaderImageDefender").hide();
            $("#vaderHP3").hide();
            $("#darthVader3").hide()
            vader.defender = false;
            vader.defeated = true;
            victory();
        }
        else if (solo.defender === true && solo.health <= 0) {
            $("#soloImageDefender").hide();
            $("#soloHP3").hide();
            $("#hanSolo3").hide()
            solo.defender = false;
            solo.defeated = true;
            victory();
        }

    }) // Closes attack function

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    $(".resetBtn").on("click", function reset() {
        skywalker.health = 100,
            skywalker.attack = 20,
            skywalker.newAttack = 0,
            skywalker.counter = 40,
            skywalker.character = false,
            skywalker.enemy = false,
            skywalker.defender = false,
            skywalker.defeated = false,

            fett.health = 130,
            fett.attack = 15,
            fett.newAttack = 0,
            fett.counter = 15,
            fett.character = false,
            fett.enemy = false,
            fett.defender = false,
            fett.defeated = false,

            vader.health = 140,
            vader.attack = 12,
            vader.newAttack = 0,
            vader.counter = 12,
            vader.character = false,
            vader.enemy = false,
            vader.defender = false,
            vader.defeated = false,

            solo.health = 160,
            solo.attack = 10,
            solo.newAttack = 0,
            solo.counter = 14,
            solo.character = false,
            solo.enemy = false,
            solo.defender = false
            solo.defeated = false,

            userCharacter = "";
            defenderCharacter = "";

        $(".resetBtn").hide();
        $(".attackBtn").show();
        $(".images").show();
        $(".imagesText").show();
        $(".imagesNames").show()

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
        $("#lukeSkywalker1").hide()
        $("#bobaFett1").hide()
        $("#darthVader1").hide()
        $("#hanSolo1").hide()
        $("#skywalkerHP2").hide();
        $("#fettHP2").hide();
        $("#vaderHP2").hide();
        $("#soloHP2").hide();
        $("#lukeSkywalker2").hide()
        $("#bobaFett2").hide()
        $("#darthVader2").hide()
        $("#hanSolo2").hide()
        $("#skywalkerHP3").hide();
        $("#fettHP3").hide();
        $("#vaderHP3").hide();
        $("#soloHP3").hide();
        $("#lukeSkywalker3").hide()
        $("#bobaFett3").hide()
        $("#darthVader3").hide()
        $("#hanSolo3").hide()

        $("#skywalkerHP1").text("HP: 100");
        $("#fettHP1").text("HP: 120");
        $("#vaderHP1").text("HP: 140");
        $("#soloHP1").text("HP: 160");
    
        $("#skywalkerHP3").text("HP: 100");
        $("#fettHP3").text("HP: 120");
        $("#vaderHP3").text("HP: 140");
        $("#soloHP3").text("HP: 160");

    })
})


