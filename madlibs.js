function splitSentence(sentence, whatToSplitOn){
  whatToSplitOn = whatToSplitOn || "___";
  debugger;
  return sentence.split("___");
}

function putItTogether(splittedSentence, words){
  var finalSentence = ""
  for (var i = 0 ; i < words.length ; i++){
    finalSentence += splittedSentence[i];
    finalSentence += words[i];
  }
}

//function test(arg1, arg2){
//  console.log(arg1, arg2 || "No argument");
//}

var onlyWords = process.argv.slice(2);
var sentence = "It was the ___ of times, it was the ___ of times. Also, it was a ___ and ___ night. Call me ___."
var splitted = splitSentence(sentence);

if (onlyWords.length ===0) {
  console.log("Complete this sentence:", sentence);
}else if(onlyWords.length < 5){
  console.log(`You need to provide ${[splitSentence.length -1]} words:`, sentence);
}else{
  putItTogether(splitted, onlyWords)
}

/*
  To split a String into an Array… use “variable.split(“, “)← this splits the string by every instance of a comma and a space (, ) because that’s what was inside the quotations.
    So you can do sentence.split("___") and it will turn your string into an array of 6 parts (because you cut it 5 times)
*/




