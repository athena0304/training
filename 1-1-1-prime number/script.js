function checkIsPrime(testNum){
	if(testNum == 1) return false;
	for(var i=2;i<parseInt(Math.sqrt(testNum));i++){
		if(testNum%i == 0){
			return false;
		}
	}
	return true;
}
console.log(checkIsPrime(43))

$("#checkBtn").click(function(){
	if(checkIsPrime($("#checkNum").val())){
		$("#answer").text("true");
	} else{
		$("#answer").text("false");
	}
})