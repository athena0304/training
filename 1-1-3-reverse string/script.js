var testStr = "asd234#$%sdfs55teg";

function reverse(testStr) {
    return testStr.split("").reverse().join("");
}

console.log(reverse(testStr));