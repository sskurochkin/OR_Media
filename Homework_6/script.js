let clear = document.getElementById('clear');
let history = document.getElementById('history');
let display = document.form.monitor;
let oper = document.getElementsByClassName('oper'); //клафиши операций
let number = document.getElementsByClassName('number');//клавиши цифр
let equal = document.getElementById('equal');// =
let sinus = document.getElementById('sinus');
let cosinus = document.getElementById('cosinus');
let tg = document.getElementById('tg');
let ctg = document.getElementById('ctg');
let remains = document.getElementById('remains');//деление с остатком

let data = ['','',]; //массив 

//функции операций
let add = (a, b) => a + b;
let differ = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let modul = (a, b) => a % b;
let sqrt = (a, b) => a ** b;


/*Ввод данных на экран*/
function input(num){
    display.value += num;   
}
/*Очистка поля ввода*/
function clearDisp(){
    display.value = "";
}
clear.addEventListener('click', clearDisp);

//добавление значений в массив
for (let i = 0; i < oper.length; i++){
    oper[i].addEventListener('click', function(){
    data.push(display.value);
    data.push(oper[i].value);
    data.shift();
    display.value = '';
    
});
}

//функции операций
equal.addEventListener('click', function(){
    data.shift();
    data.push(display.value);

    if(data[1] === '+'){
        let sum = add(parseFloat(data[0]), parseFloat(data[2]));
        display.value = parseFloat(sum.toFixed(9));
    }else if(data[1] === '-'){
        let diff = differ(parseFloat(data[0]), parseFloat(data[2]));
        display.value = parseFloat(diff);
    }else if(data[1] === '*'){
        let multi = multiply(parseFloat(data[0]), parseFloat(data[2]));
        display.value = parseFloat(multi);
    }else if(data[1] === '/'){
        if(data[2] != 0){
            let div = divide(parseFloat(data[0]), parseFloat(data[2]));
            display.value = parseFloat(div.toFixed(9));
        }else{
            display.value = 'Error';
        }    
    }else if(data[1] === '%'){
        let mod = modul(parseFloat(data[0]), parseFloat(data[2]));
        display.value = mod;
    }else if(data[1] === '**'){
        let sqr = sqrt(parseFloat(data[0]), parseFloat(data[2]));
        display.value = sqr;
    }        
    cleardata();
    writeHistory();
    console.log(data);
    setTimeout(clearDisp, 1500);//очистка поля после выполнения операции
});


//очистка массива для выполнения новой операции
function cleardata(){
    data = ['','',];
}

//запись в историю
function writeHistory(){
    let newLine = document.createElement('li');
    newLine.innerHTML = display.value;
    history.append(newLine);
}
//очистка истории
function clearHist(){
    history.innerHTML = '';
}

/*Из радианов в градусы*/
function radToDeg(){
    display.value = parseFloat((display.value * 180) / Math.PI);
}





/*Синус угла введенного в градусах*/
sinus.addEventListener('click', function(){
    let sin = Math.sin(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(sin.toFixed(9));
    writeHistory();
    setTimeout(clearDisp, 1500);

});
/*Косинус угла введенного в градусах*/
cosinus.addEventListener('click', function(){
    let cos = Math.cos(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(cos.toFixed(9));
    writeHistory();
    setTimeout(clearDisp, 1500);
});
/*Тангенс угла введенного в градусах*/
tg.addEventListener('click', function(){
    let tg = Math.tan(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(tg.toFixed(9));
    writeHistory();
    setTimeout(clearDisp, 1500);
});
/*Котангенс угла введенного в градусах*/
ctg.addEventListener('click', function(){
    let ctg = 1 / (Math.tan(parseFloat((display.value * Math.PI) / 180)));
    display.value = parseFloat(ctg.toFixed(9));
    writeHistory();
    setTimeout(clearDisp, 1500);
});