// let name = document.getElementById('name').value;
// let vid = document.getElementById('vid').value;
// let years = document.getElementById('years').value;
// let list = document.getElementById('list').value;
// let opener = document.getElementById('opener').value;
// let where = document.getElementById('where').value;
// let sphere = document.getElementById('sphere').value;
// let save = document.getElementById('save');


class Plant{
    constructor(name, vid, years, list, opener, where, sphere,){
        this.name = name;
        this.vid = vid;
        this.years = years;
        this.list = list;
        this.opener = opener;
        this.where = where;
        this.sphere = sphere;

    }
}

function deleteLine(){

}

save.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let vid = document.getElementById('vid').value;
    let years = document.getElementById('years').value;
    let list = document.getElementById('list').value;
    let opener = document.getElementById('opener').value;
    let where = document.getElementById('where').value;
    let sphere = document.getElementById('sphere').value;

    if (name == '' || vid == '' || years == '' || opener == '' || where == '' ||
    sphere == ''){
        alert('Заполните все поля')
    }else{
    
    let newPlant = new Plant(name, vid, years, list, opener, where, sphere);

    if(newPlant.list === 'on'){
        newPlant.list = 'Да'
    }else{
        newPlant.list = 'Нет'
    }
    console.log(newPlant);
    let plantlist = document.getElementById('plant-list');
    let newList = document.createElement('tr');
    newList.innerHTML =`<td>${newPlant.name}</td><td>${newPlant.vid}</td><td>${newPlant.years}</td><td>${newPlant.list}</td><td>${newPlant.opener}</td><td>${newPlant.where}</td><td>${newPlant.sphere}</td><td><button id="delete" onclick ="parentElement.parentElement.remove()">Удалить</button></td>`


    plantlist.append(newList);
    }

    event.preventDefault();

    
});