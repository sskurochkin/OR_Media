//Первое задание

var body = document.getElementsByTagName('body');

function changeColor(){
    body[0].style.backgroundColor = 'red';
}

function changeBody(){
    body[0].innerHTML = '<div class="flex-wrapper"><div class="flex-item"></div><div class="flex-item"></div><div class="flex-item"></div></div>';
}

//Второе задание
var term = {
	belarus: 15,
	spain: 13,
	germany: 13,
	poland: 11,
	russia: 12,
	sweden: 13,
};

//Среднее значение температуры
function summaryTerm() {
	var sum = 0;
	for (var temperature of Object.values(term)) {
	sum += temperature;
	}
	return midlleTerm = sum / Object.keys(term).length;
}
console.log(summaryTerm(term));

//Максимальное значение температуры
function maxTemp(){
	var allTemp = Object.values(term);
	return maxTemp = Math.max.apply(null, allTemp);
}
console.log(maxTemp(term));
