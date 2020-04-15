var inputData = document.querySelector('input[type="text"]'),
    spans = document.getElementsByTagName('span'),
    saveBtn = document.getElementById('save'),
    clearBtn = document.getElementById('clear'),
    tasks = document.getElementsByTagName('li'),
    menuList = document.getElementById('list'),
    userInfo = {
        name : 'Semen',
        surname : 'Kurochkin',
};
var data = new Date(),
    year = data.getFullYear(),
    month = data.getMonth() + 1,
    day = data.getDate();
var currentData = day + '.' + month + '.' + year;

// Выполнение задачи
function doneTask(){
    for(let task of tasks){
        task.addEventListener('click', function(){
            task.classList.toggle('done');
            event.preventDefault();
        });
    }
}

//Удаление задачи
function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        });
    }
}

//Информация об авторе
function showInfo(){
	alert('Автор:' + ' ' + userInfo.name + ' ' + userInfo.surname);
}

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        menuList.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
}
// addEventListener - обработка события с последующим выполнением функции

inputData.addEventListener('keypress', function(keyPressed){
    
    if(keyPressed.which === 13 && (this.value !== '') && (this.value !== null)){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Удалить' + ' ';

        var newTodo = this.value; //получение введенных данных
        this.value = '';

        menuList.appendChild(newLi).append(newSpan, currentData, ' - ', newTodo);
    }   
    doneTask();
    deleteTodo();
  

});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', menuList.innerHTML);
});

clearBtn.addEventListener('click', function(){
    menuList.innerHTML = '';
    localStorage.setItem('todoApplication', menuList.innerHTML);
});

doneTask();

deleteTodo();

loadTodo();