var inputData = document.querySelector('input[type="text"]');
var menuList = document.getElementById('list');
var userInfo = {
    name : 'Semen',
    surname : 'Kurochkin',
};
// var task = document.querySelectorAll('li');
var data = new Date(),
    year = data.getFullYear(),
    month = data.getMonth(),
    day = data.getDate();
var currentData = day + '.' + month + '.' + year;

//addEventListener - обработка события с последующим выполнением функции

inputData.addEventListener('keypress', function(keyPressed){
    
    if(keyPressed.which === 13 && (this.value !== '') && (this.value !== null)){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Удалить' + ' ';

        var newTodo = this.value; //получение введенных данных
        this.value = '';

        menuList.appendChild(newLi).append(newSpan, currentData, ' - ', newTodo);
    }   

});

//Информация об авторе
function showInfo(){
	alert('Автор:' + ' ' + userInfo.name + ' ' + userInfo.surname);
}

console.log(currentData);
// Выполнение задачи