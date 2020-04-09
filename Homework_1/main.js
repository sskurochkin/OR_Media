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
	belarus: 22,
	spain: 18,
	germany: 12,
	poland: 11,
	russia: 12,
};

//Среднее значение температуры
// function summaryTerm() {
// 	var sum = 0;
// 	for (var temperature of Object.values(term)) {
// 	sum += temperature;
// 	}
// 	return midlleTerm = sum / Object.keys(term).length;
// }

// console.log(summaryTerm(term));

function maxTemp(){
   for (var prop in term) {
    console.log(term[prop]);
   }
}
console.log(maxTemp(term));