var sentence;
var vowels = ["a", "e", "i", "o", "u"];




$(document).ready(function() {
  $("form#intake").submit(function(event){
    sentence = $("input#sentence").val();

    event.preventDefault();
    // newSentence = sentence;
    // vowels.forEach(function(vowel) {
    //   for (z=0; z<=sentence.length; z+=1) {
    //     if (sentence.charAt(z) === (vowel)) {
    //       // newSentence = sentence.replaceAt(z, "-")
    //       sentence = sentence.replace(sentence.charAt(z), "-");
    //     }
    //   };
    // });

  });

});



//
// console.log(sentence);
//
// console.log(newSentence);
//
// array = ["a", "e", "i"];
//
//
// for (z=0; z<=sentence.length; z+=1) {
//     sentence.replace( , "-")
// }
