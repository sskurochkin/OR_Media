function Viewbook(){

}

Viewbook.prototype.addBook = function(book){
    var listHome = document.querySelector('#list-books');
    var ulList = document.createElement('ul');
    ulList.innerHTML = '<li>' + book.title + '</li>' + 
    '<li>' + book.author + '</li>'+
    '<li>' + book.editYear + '</li>'+
    '<li><button class="delete">Удалить книгу</button></button></li>';

    listHome.appendChild(ulList);
};

Viewbook.prototype.getMessage = function(message, name){
    var block = document.createElement('div');
    block.className = name;
    block.innerHTML = message;
    var form = document.querySelector('#box');
    var container = document.querySelector('.container');
    
    container.insertBefore(block, form); 
};

Viewbook.prototype.clear = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#editYear').value = '';
};

function ViewTravel(){

}
ViewTravel.prototype.addBook = function(travelbook){
    var listHome = document.querySelector('#list-books');
    var ulList = document.createElement('ul');
    ulList.innerHTML = '<li>' + travelbook.title + '</li>' + 
    '<li>' + travelbook.edition + '</li>'+
    '<li>' + travelbook.editYear + '</li>'+
    '<li><button class="delete">Удалить книгу</button></button></li>';

    listHome.appendChild(ulList);
};

ViewTravel.prototype.getMessage = function(message, name){
    var block = document.createElement('div');
    block.className = name;
    block.innerHTML = message;
    var form = document.querySelector('#box');
    var container = document.querySelector('.container');
    
    container.insertBefore(block, form); 
};

ViewTravel.prototype.clear = function(){
    document.querySelector('#travel-title').value = '';
    document.querySelector('#travel-edition').value = '';
    document.querySelector('#travel-editYear').value = '';
};



// function ViewTravel(){
//     Viewbook.call(this);
// }
// ViewTravel.prototype = Object.create(Viewbook.prototype);

//удаление книги
Viewbook.prototype.deleteBook = function(){
    var delBook = document.getElementsByClassName('delete');
    for(let item of delBook){
        item.addEventListener('click', function(){
            item.parentElement.remove();
            event.preventDefault();
        });
    }
    console.log(delBook);
};


//  document.querySelector('ul').onclick = function(e){
// //         var btn = e.target.closest('.delete');
// //         if (!btn) {
// //             return;
// //         }
// //         btn.parentElement.remove();
// //     };      
// // };
