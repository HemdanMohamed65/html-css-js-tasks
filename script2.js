// Task (1) 1- Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers.
function LowestAndGreatest(arr) {
    var Arr = [...new Set(arr)].sort((a, b) => a - b);
    var secondLowest = Arr[1];
    var secondGreatest = Arr[Arr.length - 2];
    return {
        secondLowest: secondLowest,
        secondGreatest: secondGreatest
    };
}
LowestAndGreatest();
console.log(LowestAndGreatest([1, 2, 3, 4, 5]));


// ___________________________________________________
// Task (2) Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function FirstCapitalLetter(Str) 
{ return Str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}
console.log(FirstCapitalLetter("the quiCk bRown fox"));



