
let quiz = document.querySelector('#quiz-field');
let start = document.querySelector('#start');
let gotest = document.querySelector('#go');
let i = 0;
let answerYes = [];
let resultQuiz;
let answers = new Set(); // Записываются ответы
let newSpeech = new SpeechRecognition();
newSpeech.continuous = true;

function quest(){
    let i = 0;
    var timer = setInterval(function() {        
        
        if (i >= questions.length) {
            newSpeech.stop();
            console.log('stop speech');
            start.textContent ='Квиз завершен';       
            clearTimeout(timer);
            console.log(answers);
            answerYes = Array.from(answers);
            var arrYes = answerYes.filter(function(elem){
                return elem == ' да' || elem == ' нет да' || elem == ' да да' || elem == 'нет да'
                || elem == 'да' || elem == 'да да';
            });
            console.log(arrYes);
            setTimeout(function(){
                alert('Количество ответов "ДА"'+ ' - '+ arrYes.length);
            }, 500);

        } else {
            let thisQuest = document.createElement('p');    
            thisQuest.innerText = questions[i];
            quiz.appendChild(thisQuest);  
            i++;
        }
    }, 5000);
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
            newSpeech.start();
        }, 4500);
    }    
});

newSpeech.addEventListener('result', (event) => {
    
    resultQuiz = event.results;
    for( let elem of resultQuiz){
        console.log(elem[0].transcript);
        answers.add(elem[0].transcript);
    }
});



