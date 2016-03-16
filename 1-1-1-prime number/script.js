function IsPrime(testNum) {
    if (testNum < 2) return false;
    var len = Math.sqrt(testNum);
    for (var i = 2; i <= len; i++) {
        if (testNum % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(IsPrime(4))






$("#checkBtn").click(function () {
    if (IsPrime($("#checkNum").val())) {
        $("#answer").text("true");
    } else {
        $("#answer").text("false");
    }
})