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



let questions = [
    'Вам есть 18 лет?',
    '2 умножить на 2 - 4?',
    'Столица Италии - Рим. Верно?',
    'Колумб открыл Америку?',
    // 'Кто следующий президент Беларуси?',
];

let quiz = document.querySelector('#quiz-field');
let start = document.querySelector('#start');
let gotest = document.querySelector('#go');
let i = 0;
let resultQuiz;
let answers = [];
let newSpeech = new SpeechRecognition();
newSpeech.continuous = true;
// newSpeech.interimResults = true;


gotest.addEventListener('click', function(){
    

    if (i >= questions.length) {
        newSpeech.stop();
        console.log('stop speech');
        start.textContent ='Квиз завершен';       
        // clearTimeout(timer);
        setTimeout(yesAnswer, 500);

    } else {
        newSpeech.start();
        console.log('start');
        let thisQuest = document.createElement('p');
        thisQuest.innerText = questions[i];
        quiz.appendChild(thisQuest);  
        i++;
        setTimeout(function(){
            newSpeech.stop();
            console.log('stop speech');
        }, 2000);
    }
});


// function quest(){
//     let i = 0;
//     var timer = setInterval(function() {
        
        
//         if (i >= questions.length) {
//             newSpeech.stop();
//             console.log('stop speech');
//             start.textContent ='Квиз завершен';       
//             clearTimeout(timer);
//             setTimeout(yesAnswer, 500);

//         } else {
//             let thisQuest = document.createElement('p');
//             thisQuest.innerText = questions[i];
//             quiz.appendChild(thisQuest);  
//             i++;
//         }
//     }, 3000);
// }


function startQuiz(){
    if (start.textContent == 'Начать квиз'){
        start.textContent = 'Отвечайте на вопросы';        
        // newSpeech.start();
        // console.log('start speech');
    }}

function yesAnswer(){
    // answerYes = Object.values(resultQuiz).map(v => Object.values(v));
    // console.log(answerYes);
    // answerYes = answerYes.every(function(elem){
    //     return elem == 'да';
    // });
    alert('Количество ответов "ДА"'+ ' - '+ answerYes.length);
}
   
start.addEventListener('click', function(){
    startQuiz();
    // if(start.textContent == 'Отвечайте на вопросы'){
    //     quest();
    // }
    
});

    newSpeech.addEventListener('result', (event) => {
    
    resultQuiz = event.results[0][0].transcript;
    // console.log(typeof(resultQuiz));
    // console.log(resultQuiz);
    // answers = answers.push(resultQuiz);
    // // // console.log(event.results[0][0].transcript);
    // // // console.log(typeof(event.results));
    // // answers = answers.push(resultQuiz);
    // //     return elem == 'да';
    // // });
    // console.log(answers);

    // answerYes = resultQuiz.filter(function(elem){
    //     return elem == 'да';
    // });
    // console.log(answerYes.lenth);
    return resultQuiz;
});  



