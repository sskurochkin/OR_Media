import{forFirefox} from '/script/quiz';
forFirefox();

let browser;
function detected (){    
    if ('webkitSpeechRecognition' in window) {
        browser = 'chrome';
    } else {
        browser = 'firefox';
    }
    return browser;
}
detected();  

let lang;
function language(){
     
    if(document.querySelector('.check').children[0].checked){
        lang = 'ru';
    }else{
        lang = 'en';
    }
    return lang;
}
language();

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let firefox = document.querySelector('#btn-box');

if(browser == 'firefox'){
    firefox.style.display = 'flex';
    forFirefox();
}















