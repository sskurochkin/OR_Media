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