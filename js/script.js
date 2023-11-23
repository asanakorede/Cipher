$(document).ready(function () {

    let sentence = prompt("Type your sentence here");
    var text = sentence;


    //to get the first and last letter of my sentence and turn to a string

    function newString() {
        let value = text.charAt(0) + text.charAt(text.length - 1);
        value.toUpperCase();
        return value.toString();
    }



    //to get the first and last letter of my sentence and turn to a string, THEN reverse it

    function reverseNewString() {
        let reverse = text.charAt(text.length - 1) + text.charAt(0);
        reverse.toUpperCase();
        return reverse.toString();
    }

    //Third Function 

    function callFunctions() {
        newString();
        reverseNewString();
        return text + reverseNewString();
    }

    //Function to count characters in the string

    function countCharacters() {
        var characterCount = text.length;
        let indexLetter = parseInt(text.length / 2);
        return indexLetter;
    }

    //function to determine the character from the pre-called function

    function determineCharacter() {
        return countCharacters().charAt();
    }

    //function to reverse the content of the string

    function reverse() {
        text.split;
        return text.split('').revere().join('');
    }

    //function to make images clickable and display a brief alert text

    $("img").click(function () {
        alert("This is my image");
    })



































    1``````````````````````````````````









})


