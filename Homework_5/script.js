var start = document.getElementById('start');
var reset = document.getElementById('reset');
var box = document.getElementsByClassName('container');
var lap = document.getElementById('lap');
var minutes = 0;
var seconds = 0;
var milisec = 0;
var isGoing = true;
document.timer.display.value = '0.0.0';


//Старт/Стоп
start.addEventListener('click', function(event){
    if (start.textContent == 'Start'){
        start.textContent = 'Stop';        
        isGoing = true;
        event.preventDefault();
    } else {
        start.textContent = 'Start';
    }
});
//Функция секундомера
function goTime(){     
    if (isGoing == true){
            if (milisec > 8) {
                milisec = 0;
                seconds += 1;           
         } else if(seconds >= 59) {
             seconds = 0;
             minutes += 1;
         } else {
             milisec += 1;}
        }else{
            
        }       
        document.timer.display.value = minutes + "." + seconds + "." + milisec;
}
//Запуск секундомера
start.addEventListener('click', function(event){
    if (start.textContent == 'Stop'){
        IDint = setInterval(goTime, 100);
        event.preventDefault();
    }
    if (start.textContent == 'Start') {
        isGoing = false;
        clearInterval(IDint);
        event.preventDefault();
    }
});

//Запись времени в историю и удаление строки из истории
function writeTime(){
    var timeNow = document.createElement('p');
    timeNow.innerHTML = document.timer.display.value + ' '
    + '<button class="delete">Удалить запись</button>';
    box[0].append(timeNow);

    //удаление записей
    var del = document.getElementsByClassName('delete'); 
    
    for( let i = 0; i < del.length; i++){
    del[i].addEventListener('click', function(){
        this.parentElement.remove();
        
    });
    }
}
//Круг
lap.addEventListener('click', function(){
    writeTime();
});

//Сброс секундомера
reset.addEventListener('click', function(){
    minutes = 0;
    seconds = 0;
    milisec = 0;
    isGoing = false;
    document.timer.display.value = '0.0.0';
    start.textContent = 'Start';
});