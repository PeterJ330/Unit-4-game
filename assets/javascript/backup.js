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


    console.log(skywalker, fett, vader, solo);
    console.log("Initial User Character: " + userCharacter);

    function victory(){
        if (skywalker.character === true && fett.defeated === true && vader.defeated === true && solo.defeated === true){
            alert("Congratulations! You Are The Galactic Champion");
        } // Closes skywalker final victory if condition
        console.log("Defeated");
        console.log(skywalker.defeated, fett.defeated, vader.defeated, solo.defeated);







    };

    //=============================================================================
    //
    $(".button").on("click", function characterSelect() {
        userCharacter = $(this).attr("value");
        console.log("User Character: " + userCharacter);
        $(".images").hide();

        // function enemy(){
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
            // $("#skywalkerImageEnemy").show();
            $("#fettImageEnemy").show();
            $("#vaderImageEnemy").show();
            $("#soloImageEnemy").show();

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
            $("#skywalkerImageEnemy").show();
            //$("#fettImageEnemy").show();
            $("#vaderImageEnemy").show();
            $("#soloImageEnemy").show();

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
            $("#skywalkerImageEnemy").show();
            $("#fettImageEnemy").show();
            //$("#vaderImageEnemy").show();
            $("#soloImageEnemy").show();

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
            $("#skywalkerImageEnemy").show();
            $("#fettImageEnemy").show();
            $("#vaderImageEnemy").show();
            // $("#soloImageEnemy").show();
        }
        //}
//console.log(skywalker, fett, vader, solo);
console.log("Character");
console.log(skywalker.character, fett.character, vader.character, solo.character);
console.log("Enemy");
console.log(skywalker.enemy, fett.enemy, vader.enemy, solo.enemy);

//console.log("User Character: "+ userCharacter);
    }) //closes characterSelect

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //=============================================================================
    //

    $(".button2").on("click", function defender() {
        defenderCharacter = $(this).attr("value");
        console.log("Defenders: " + defenderCharacter);

        if (defenderCharacter === "skywalker") {
            skywalker.defender = true;
            $("#skywalkerImageEnemy").hide();
            $("#skywalkerImageDefender").show();
        } // Closes skywalker Defenders if
        else if (defenderCharacter === "fett") {
            fett.defender = true;
            $("#fettImageEnemy").hide();
            $("#fettImageDefender").show();
        } // Closes fett Defenders else if 
        else if (defenderCharacter === "vader") {
            vader.defender = true;
            $("#vaderImageEnemy").hide();
            $("#vaderImageDefender").show();
        } // Closes vader Defenders else if 
        else if (defenderCharacter === "solo") {
            solo.defender = true;
            $("#soloImageEnemy").hide();
            $("#soloImageDefender").show();
        } // Closes solo Defenders else if

console.log("Defender");
console.log(skywalker.defender, fett.defender, vader.defender, solo.defender);
    }) // Closese defender function

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //=============================================================================
    // function that increases user character attack points by base value
    $(".attackBtn").on("click", function attack() {
        if (userCharacter === "") {
            alert("No User Character Selected");
        }
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
console.log("New Attack user character: " + userCharacter);
console.log(skywalker.newAttack, fett.newAttack, vader.newAttack, solo.newAttack);
console.log("Character Health");
console.log(skywalker.health, fett.health, vader.health, solo.health);

        //function youlose(){
        if (skywalker.character === true && skywalker.health <= 0) {
            console.log("YOU LOSE!");
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        else if (fett.character === true && fett.health <= 0) {
            console.log("YOU LOSE!");
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        else if (vader.character === true && vader.health <= 0) {
            console.log("YOU LOSE!");
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
        else if (solo.character === true && solo.health <= 0) {
            console.log("YOU LOSE!");
            alert("YOU LOSE!");
            $(".attackBtn").hide();
            $(".resetBtn").show();
        }
// ================ Conditionals that determine defender has been defeated =================
        //function beatdefender(){
        if (skywalker.defender === true && skywalker.health <= 0) {
            //alert("You Won this Battle! Select Another Enemy to Continue");
            $("#skywalkerImageDefender").hide();
            skywalker.defender = false;
            skywalker.defeated = true;
                if (victory()){
                    victory();
                } else {alert("You Won this Battle! Select Another Enemy to Continue");
                }
        }
        else if (fett.defender === true && fett.health <= 0) {
            //alert("You Won this Battle! Select Another Enemy to Continue");
            $("#fettImageDefender").hide();
            fett.defender = false;
            fett.defeated = true;
                if (victory()){
                    victory();
                } else {alert("You Won this Battle! Select Another Enemy to Continue");
                }
        }
        else if (vader.defender === true && vader.health <= 0) {
            alert("You Won this Battle! Select Another Enemy to Continue");
            $("#vaderImageDefender").hide();
            vader.defender = false;
            vader.defeated = true;
        }
        else if (solo.defender === true && solo.health <= 0) {
            alert("You Won this Battle! Select Another Enemy to Continue");
            $("#soloImageDefender").hide();
            solo.defender = false;
            solo.defeated = true;
        }
// ====================================================================================
        // function victory(){
        //     if (skywalker.character === true && fett.defeated === true && vader.defeated === true && solo.defeated === true){
        //         alert("Congratulations! You Are The Galactic Champion");
        //     } // Closes skywalker final victory if condition
        //     console.log("Defeated");
        //     console.log(skywalker.defeated, fett.defeated, vader.defeated, solo.defeated);
        // };

        // if (victory()){
        //     victory();
        // }

    }) // Closes attack function
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function victory(){
//     if (skywalker.character === true && fett.defeated === true && vader.defeated === true && solo.defeated === true){
//         alert("Congratulations! You Are The Galactic Champion");
//     } // Closes skywalker final victory if condition
//     console.log("Defeated");
//     console.log(skywalker.defeated, fett.defeated, vader.defeated, solo.defeated);
// };
// if (victory()){
//     reset();
// }


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


    })


})


