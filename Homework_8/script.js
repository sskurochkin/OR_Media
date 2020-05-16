// function startRecognizer(){
//     if ('webkitSpeechRecognition' in window) {
//       var recognition = new webkitSpeechRecognition();
//       recognition.lang = 'ru';

//       recognition.onresult = function (event) {
//         var result = event.results[event.resultIndex];
//           console.clear();
//           console.log(result[0].transcript);
//       };

//       recognition.onend = function() {
//         console.log('Распознавание завершилось.');
//       };

//       recognition.start();
//     } else alert('webkitSpeechRecognition не поддерживается :(')
//   }
//   startRecognizer();




let searchForm = document.querySelector('#search-form');
let searchFormInput = document.querySelector('input');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;




if(SpeechRecognition){
  
    searchForm.insertAdjacentHTML('beforeend', '<button type="button"><i class="fas fa-microphone"></i></button>');

    const microBtn = document.querySelector('button');
    const microIcon = document.querySelector('i');

    console.log('Hi, Chrome')

    let recognition = new SpeechRecognition();

//    recognition.continuous = true; 

    microBtn.addEventListener('click', () =>{
        if(microIcon.classList.contains('fa-microphone')){
            recognition.start();  
        } else{
            recognition.stop();
        }
    });

    recognition.addEventListener('start', () =>{   // start Speech
        microIcon.classList.remove('fa-microphone');
        microIcon.classList.add('fa-microphone-alt-slash');
        console.log('Active record');
    });

    recognition.addEventListener('end', () =>{  // stop Speech
        microIcon.classList.remove('fa-microphone-alt-slash');
        microIcon.classList.add('fa-microphone');   
        console.log('End record');
    });

    recognition.addEventListener('result', (event) =>{
        console.log(event);
        let resultSpeech = event.results[0][0].transcript;  //получение данных в виде текста
        
        searchFormInput.value = resultSpeech.replace('найти', ''); //удаление из строки поиска слова "найти"
        
        let findStr = resultSpeech.split(' '); //преобразование строки в массив
        let lastWord = findStr[findStr.length - 1];      
        
        //активация поиска, если последнее слово "найти"
        if(lastWord == 'найти'){
           setTimeout(() => {
            searchForm.submit();
        }, 500); 
        }else{
            alert('Для активации поиска, в конце фразы используйте ключевое слово - "НАЙТИ"');
            searchFormInput.value = '';
        }        
    });    
} else{
    console.log('no')
}

// Квиз из 10 вопросов

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



