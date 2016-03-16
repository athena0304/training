var testArr = [12, 66, 5, 86, 5, 78, 0, 55, 78, 86];

function getSecond(arr) {
    var first = -Infinity, second = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        if (n > first) {
            second = first;
            first = n;
        } else if (n < first && n > second) {
            second = n;
        }
    }
    return second;
}

console.log(getSecond(testArr));

function getSecondMethod2(arr) {
    if (!Array.isArray(arr)) return;
    var sortArr = arr.sort(function (a, b) {
        return b - a
    });

    var resArr = [sortArr[0]];
    for (var i = 0; i < sortArr.length; i++) {
        if (sortArr[i] !== resArr[resArr.length - 1]) {
            resArr.push(sortArr[i]);
        }
    }
    return resArr[1];

}

console.log(getSecondMethod2(testArr));