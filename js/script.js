$(document).ready(function () {

    let sentence = prompt("Type your sentence here");
    var text = sentence;

    //to get the first and last letter of my sentence and turn to a string

    function newString() {
        let value = text.charAt(0) + text.charAt(text.length - 1);
        value.toUpperCase();
        return value.toSring();
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

    function countCharacters(){
        text.length;
         (text.length)/2;
        return ind
    }












































})


