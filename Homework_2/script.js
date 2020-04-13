var inputData = document.querySelector('input[type="text"]');
var menuList = document.getElementById('list');
var userInfo = {
    name : 'Semen',
    surname : 'Kurochkin',
};

//addEventListener - обработка события с последующим выполнением функции

inputData.addEventListener('keypress', function(keyPressed){
    
    if(keyPressed.which === 13 && (this.value !== '') && (this.value !== null)){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Удалить' + ' ';

        var newTodo = this.value; //получение введенных данных
        this.value = '';

        menuList.appendChild(newLi).append(newSpan, newTodo);
    }   

});

//Информация об авторе
function showInfo(){
	alert('Автор:' + ' ' + userInfo.name + ' ' + userInfo.surname);
};


// Выполнение задачи
var task = document.querySelectorAll('.task');

task.addEventListener('click', function doneTask(onclick) {
	if (menuList.style(textDecoration == null) || menuList.style(textDecoration ==' ')) {
		menuList.style(textDecoration == 'underline');
	} else {
		menuList.style(textDecoration == 'none');
	};
});
