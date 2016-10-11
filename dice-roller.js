var diceAmount = process.argv[2];
var results = "";

function diceRoll(diceAmount){
  for(i = 0; i < diceAmount; i++){
    var value = Math.floor(Math.random() * 6 + 1);
    results += value + ", ";
  }
  return "Rolled " + diceAmount + " dice: " + results;

}

console.log(diceRoll(diceAmount));



