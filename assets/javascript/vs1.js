


var skywalker = {
    health: 100 ,
    attack: 8 , 
    newAttack: 0,
    counter: 5 ,
    status: ["character", "enemy", "defender"],
} ;

var fett = {
    health: 80 ,
    attack: 10 , 
    newAttack: 0,
    counter: 7 ,
    status: ["character", "enemy", "defender"],
} ;

var vader = {
    health: 70 ,
    attack: 12, 
    newAttack: 0,
    counter: 9 ,
    status: ["character", "enemy", "defender"],
} ;

var solo = {
    health: 90 ,
    attack: 16 , 
    newAttack: 0,
    counter: 12 ,
    status: ["character", "enemy", "defender"],
} ;


var userCharacter = "" ;
var enemy = "" ;
var defender = "" ;


// function that increases user character attack points by base value


$(document).ready(function() {

//==================================================
// changes userCharacter based on image selected
// $("#skywalkerImage").on("click", function() {
//     userCharacter = $(this).attr("value");
//     console.log("User Character: "+ userCharacter);
//     console.log("Skywalker Attack: "+ skywalker.attack);
//     console.log("Skywalker New Attack: "+ skywalker.newAttack);
    
// })
// $("#fettImage").on("click", function() {
//     userCharacter = $(this).attr("value");
//     console.log("User Character: "+ userCharacter);
//     console.log("Fett Attack: "+ fett.attack);
// })

// $("#vaderImage").on("click", function() {
//     userCharacter = $(this).attr("value");
//     console.log("User Character: "+ userCharacter);
//     console.log("Vader Attack: "+ vader.attack);
// })
// $("#soloImage").on("click", function() {
//     userCharacter = $(this).attr("value");
//     console.log("User Character: "+ userCharacter);
//     console.log("Solo Attack: "+ solo.attack);
// })

//console.log(skywalker, fett, vader, solo);
console.log("Initial User Character: "+ userCharacter);

$(".button").on("click", function() {
    var userCharacter = $(this).attr("value");
    console.log("User Character: "+ userCharacter);

//==================================================

$(".attackBtn").on("click",function (){
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

})




    






//function reset()





})
