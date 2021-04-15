// this function finds the first occurrence of a character in a string
function findStartIndexOfPattern(str,char) {
  let currentIndex = 99999999
  let minIndex = 99999999
    for(let k = 0; k < str.length; k++) {
      if(char === str[k]) {
        currentIndex = k;
	      if(currentIndex < minIndex){ 
	       minIndex = currentIndex;
          }
	  }
	}
	return minIndex;
}



// this function finds the last occurrence of a character in a string
function findEndIndexOfPattern(str,char) {
  let currentIndex = 99999999
  let maxIndex = -1;
    for(let j = 0; j < str.length; j++) {
	  if(char === str[j]) {
		currentIndex = j;
		  if(currentIndex > maxIndex) 
			maxIndex = currentIndex;
	  }
	}
	return maxIndex;
}



// If we provide the match function with an input string, which will be our candidate code, and an input pattern, which will be a distracting word, this function will check to see if the pattern is present even in a non-consecutive manner in our candidate code. This function checks to see if the characters in the input string are in the same order as the characters in the pattern, using the above two helper functions.

function match(str,ptn) {
  let lastCharMaxIndex = -1
  let currentCharMaxIndex = -1
  let currentCharMinIndex = -1
  let isMatched = true;
  lastCharMaxIndex = findEndIndexOfPattern(str,ptn[0]);
	for (let i = 1; i < ptn.length; i++) {
		currentCharMaxIndex = findEndIndexOfPattern(str,ptn[i]);
		currentCharMinIndex = findStartIndexOfPattern(str,ptn[i]);
		if (lastCharMaxIndex < currentCharMaxIndex && lastCharMaxIndex < currentCharMinIndex) {
			isMatched = true;
		}
		else {
			isMatched = false;
		}
		lastCharMaxIndex = currentCharMinIndex;
		if(isMatched === false)
			break;
	}
	return isMatched;
}

// This validateCode function is the function that ties in the above helper functions to check for the presence of a distracting word in our candidate code in a non-consecutive way, as well as checking if a distracting word is present in a consecutive manner in our candidate code, and whether the candidate code has already been used given an array of existing codes

function validateCode(code, distractingWords, existingCodes) {
 let regex = /[^a-zA-Z]/g;
 let justLetters = code.replace(regex, "");
 
 if (existingCodes.includes(code)){
    return false
 } else {
    for (let i = 0; i < distractingWords.length; i++){
      if (distractingWords[i] === justLetters.toLowerCase() || match(code.toLowerCase(), distractingWords[i])){
       return false
      }
    } 
 }
  return true
}

 module.exports = validateCode