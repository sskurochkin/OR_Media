var start = document.getElementById('start');
var reset = document.getElementById('reset');
var box = document.getElementsByClassName('container');
var minutes = 0;
var seconds = 0;
var milisec = 0;
console.log(start);
document.timer.display.value = 'Press start';



start.addEventListener('click', function(event){
    if (start.textContent == 'Start'){
        start.textContent = 'Stop';
        event.preventDefault();
    } else {
        start.textContent = 'Start';
    }
});

function goTime(){
    var minutes = 0;
    var seconds = 0;
    var milisec = 0;
    setTimeout(function go(){
        if (milisec >= 9) {
            milisec = 0;
            seconds += 1;
         } else if(seconds >= 59) {
             seconds = 0;
             minutes += 1;
         } else {
             milisec += 1;}
     
         document.timer.display.value =minutes + "." + seconds + "." + milisec;
         setTimeout(go, 100);
    }, 100);
}

start.addEventListener('click', function(event){
    if (start.textContent == 'Stop'){
        goTime();
    event.preventDefault();
    }
});

// function writeTime(){
//     var timeNow = document.timer.value;
//     box[0].innerHTML = timeNow;

// }

// reset.addEventListener('click', writeTime());


// start.addEventListener('click', changeButt());
// function outputNumbers(one, two){
//     var current = one;
//     setTimeout( function go(){
//         console.log(current)
//         if(current !== two)
//             setTimeout(go, 1000);
//             current++;
//         }, 1000);
        
// }
