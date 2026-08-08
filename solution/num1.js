function add7(num){
    return num + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize (word){
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function lastLetter (word){
    return word.charAt(word.length - 1);
}

console.log(add7(10))
console.log(multiply(3,2))
console.log(capitalize("hello"))
console.log(lastLetter("hello"))