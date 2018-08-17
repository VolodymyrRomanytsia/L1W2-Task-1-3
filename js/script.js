
var button = document.querySelector('.button');
button.onclick = function() {
	var strnum = document.getElementById('arr').value.split(',');
	var number = [];
	for (var i = 0; i < strnum.length; i++) {
		number.push(parseInt(strnum[i]));
	}
	
	var averge = function(numbers) {
		var sumNum = 0;
		for (var i = 0; i < numbers.length; i++) {
			sumNum += numbers[i];
		}
		var averNum = sumNum/numbers.length;
		result = '[' + averNum +']';
	}
	var numbers = number;
	console.log (averge(numbers));
	document.getElementById("result").innerHTML = result;
}


