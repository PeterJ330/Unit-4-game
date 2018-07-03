


var skywalker = {
    health: 100 ,
    attack: 8 , 
    newAttack: 0,
    counter: 5 ,
    character: false,
    enemy: false,
    defender: false,
} ;

var fett = {
    health: 80 ,
    attack: 10 , 
    newAttack: 0,
    counter: 7 ,
    character: false,
    enemy: false,
    defender: false,
} ;

var vader = {
    health: 70 ,
    attack: 12, 
    newAttack: 0,
    counter: 9 ,
    character: false,
    enemy: false,
    defender: false,
} ;

var solo = {
    health: 90 ,
    attack: 16 , 
    newAttack: 0,
    counter: 12 ,
    character: false,
    enemy: false,
    defender: false,
} ;


var userCharacter = "" ;
// var enemy = "" ;
// var defender = "" ;


// function that increases user character attack points by base value


$(document).ready(function() {

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


// console.log(skywalker, fett, vader, solo);
console.log("Initial User Character: "+ userCharacter);
//=============================================================================
//
$(".button").on("click", function characterSelect() {
    userCharacter = $(this).attr("value");
    console.log("User Character: "+ userCharacter);

   // function enemy(){
        if (userCharacter === "skywalker"){
            skywalker.character = true;
            skywalker.enemy = false;
            fett.character = false;
            fett.enemy = true;
            vader.character = false;
            vader.enemy = true;
            solo.character = false;
            solo.enemy = true;
            //$("#skywalkerImage").hide();
            $("#fettImage").hide();
            $("#vaderImage").hide();
            $("#soloImage").hide(); 
               // $("#skywalkerImageEnemy").show();
                $("#fettImageEnemy").show();
                $("#vaderImageEnemy").show();
                $("#soloImageEnemy").show();

        } else if (userCharacter === "fett"){
            skywalker.character = false;
            skywalker.enemy = true;
            fett.character = true;
            fett.enemy = false;
            vader.character = false;
            vader.enemy = true;
            solo.character = false;
            solo.enemy = true; 
            $("#skywalkerImage").hide();
           // $("#fettImage").hide();
            $("#vaderImage").hide();
            $("#soloImage").hide(); 
                $("#skywalkerImageEnemy").show();
                //$("#fettImageEnemy").show();
                $("#vaderImageEnemy").show();
                $("#soloImageEnemy").show();  

        } else if (userCharacter === "vader"){
            skywalker.character = false;
            skywalker.enemy = true;
            fett.character = false;
            fett.enemy = true;
            vader.character = true;
            vader.enemy = false;
            solo.character = false;
            solo.enemy = true; 
            $("#skywalkerImage").hide();
            $("#fettImage").hide();
           // $("#vaderImage").hide();
            $("#soloImage").hide(); 
                $("#skywalkerImageEnemy").show();
                $("#fettImageEnemy").show();
                //$("#vaderImageEnemy").show();
                $("#soloImageEnemy").show();

        } else if (userCharacter === "solo"){
            skywalker.character = false;
            skywalker.enemy = true;
            fett.character = false;
            fett.enemy = true;
            vader.character = false;
            vader.enemy = true;
            solo.character = true;
            solo.enemy = false; 
            $("#skywalkerImage").hide();
            $("#fettImage").hide();
            $("#vaderImage").hide();
           // $("#soloImage").hide(); 
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
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//=============================================================================
//
$(".button2").on("click", function defender() {
    if (skywalker.character === true || fett.character === true || vader.character === true || solo.character === true){
        console.log("nothing should happen");
    } else if (skywalker.character === false && skywalker.enemy === true){
        skywalker.defender === true;
    } else if (fett.character === false && fett.enemy === true){
        fett.defender === true;
    } else if (vader.character === false && vader.enemy === true){
        vader.defender === true;
    } else if (solo.character === false && solo.enemy === true){
        solo.defender === true;
    }
    console.log(skywalker.defender, fett.defender, vader.defender, solo.defender);
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//=============================================================================
//
$(".attackBtn").on("click",function attack(){
    if (userCharacter === ""){
        console.log("No User Character Selected");
    } else if (userCharacter === "skywalker") {
        skywalker.newAttack += skywalker.attack;
    } else if (userCharacter === "fett") {
        fett.newAttack += fett.attack;
    } else if (userCharacter === "vader") {
        vader.newAttack += vader.attack;
    } else if (userCharacter === "solo") {
        solo.newAttack += solo.attack;
    }
    console.log("attack user character: "+ userCharacter);
    // console.log(skywalker, fett, vader, solo);
    
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~







    






//function reset()





})
