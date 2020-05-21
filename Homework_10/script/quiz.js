function forFirefox(){
    let questions = [
    '1. Вам есть 18 лет?',
    '2. 2 умножить на 2 - 4?',
    '3. Кто следующий президент Беларуси?',
    '4. Столица Италии - Милан. Верно?',
    '5. Колумб открыл Америку?',
    '6. Американцы были на луне?',
    '7. Легко ли изучать JavaScript?',
    '8. Любите ли вы покушать перед сном?',
    '9. Дональд Трамп - работа русских?',
    '10. Вы смотрели сериал "Игра престолов"?',    
];
// для Firefox


let quiz = document.querySelector('#quiz-field');
let start = document.querySelector('#start');
let i = 0;
let answerYes = [];
let answerNo = [];
let resultQuiz;
let answers = new Set(); 

document.getElementById('yes-btn').addEventListener('click', function(event){
    answerYes.push(1);
    event.preventDefault();
});
document.getElementById('no-btn').addEventListener('click', function(event){
    answerNo.push(1);
    event.preventDefault();
});


function quest(){
    let i = 0;
    var timer = setInterval(function() {        
        
        if (i >= questions.length) {
            start.textContent ='Квиз завершен';       
            clearTimeout(timer);

            setTimeout(function(){
                alert('Количество ответов "ДА"'+ ' - '+ answerYes.length + '. '+ 
                'Количество ответов "НЕТ"'+ ' - '+ answerNo.length);
            }, 500);

        } else {
            let thisQuest = document.createElement('p');    
            thisQuest.innerText = questions[i];
            quiz.appendChild(thisQuest);  
            i++;
        }
    }, 3000);
}

function startQuiz(){
    if (start.textContent == 'Начать квиз'){
        start.textContent = 'Отвечайте на вопросы';        
        console.log('start speech');
    }}
   
start.addEventListener('click', function(){
    startQuiz();
    if(start.textContent == 'Отвечайте на вопросы'){
        quest();
        setTimeout(function(){
        }, 500);
    }    
});
}

export {forFirefox, questions};