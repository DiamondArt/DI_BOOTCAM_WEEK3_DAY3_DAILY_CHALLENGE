/***********************************************************************************
 * Exercise Daily challenge : 
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : 
 * Create an input type text that takes/shows only letters,
 * numbers and special characters won’t be accepted
 * @typeof {string}
 * @typeof {function}
 * **********************************************************************************/ 

let input = document.getElementById('letter');

/******************************************************************************
 * @function onlyLetters
 * @description: verify if sentence is only letter
 * @param {string} str
 * @returns {boolean}
 ******************************************************************************/
function onlyLetters(str) {
    return Boolean(str?.match(/^[A-Za-z\s]*$/));
  }

/******************************************************************************
 * @function removeNumberAndSpecialCharacter
 * @description: remove number and special character if sentence contain's
 * @param {string} attributeValue
 * @returns {string}
 ******************************************************************************/
function removeNumberAndSpecialCharacter(str) {
    return str.replace(/[^A-Za-z]+/g, '')
}

/******************************************************************************
 * @function verifySentence
 * @description: verify value of input if it's only letter or not
 ******************************************************************************/
 function verifySentence() {
    if (onlyLetters(input.value)) {
        document.getElementById('inputValue').innerHTML = input.value
      } else {
        console.log("older value",input.value);
        input.value =  removeNumberAndSpecialCharacter(input.value)
        document.getElementById('inputValue').innerHTML = input.value
        console.log("new value",input.value);
      }
 }

// add keyup and input event to input tag
input.addEventListener('keyup',verifySentence)
input.addEventListener('input'  ,verifySentence)


