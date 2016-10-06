var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b", "c", "d", "f", "g", "h", 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s','t','v','w','x',"z"];
var sentence;
var firstLetter;
var vowelAt;

$(document).ready(function() {
  $("form#intake").submit(function(event) {
    vowels.forEach(function(vowel) {
      for (index=0; index<=sentence.length; index++) {
        if (sentence.charAt(index) === (vowel)) {
          event.preventDefault();
          vowelAt = index;
          console.log(vowelAt);
          index = sentence.length;
          event.preventDefault();
        };
      };
    });

  sentence = $("input#sentence").val();
  firstLetter = sentence.charAt(0);
  sentence = sentence.slice(1).concat(firstLetter).concat("ay");
  console.log(sentence);







    // $(sentence).forEach(consonants) {
    //   $()
    // }
  })

})
