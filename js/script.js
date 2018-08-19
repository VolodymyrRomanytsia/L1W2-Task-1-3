
const button = document.querySelector('.button');
button.onclick = () => {
	const strnum = document.getElementById('arr').value.split(',');
	let number = [];
	for (let i = 0; i < strnum.length; i++) {
		number.push(parseInt(strnum[i]));	
	}
	let sumNum = 0;
	for (let i = 0; i < number.length; i++) {
		sumNum += number[i];
	}
	let averNum = sumNum/number.length;
	let result = '[' + averNum +']';
	document.getElementById("result").innerHTML = result;
}


