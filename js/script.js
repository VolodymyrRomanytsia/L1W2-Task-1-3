const start = () => {
	const number = [];
	const strnum = document.getElementById('arr').value.split(',');
	for (let i = 0; i < strnum.length; i++) {
		number.push(parseInt(strnum[i]));
	}
	
	const average = number => {
		let sumNum = 0;
		for (let i = 0; i < number.length; i++) {
			sumNum += number[i];	
		}
		let averNum = sumNum/number.length;
		return averNum;
	}
	
	let averNum = average(number);
	const result = `[ ${averNum} ]`;
	document.getElementById("result").innerText = result;
}
const button = document.querySelector('.button');
button.addEventListener('click', start); 


