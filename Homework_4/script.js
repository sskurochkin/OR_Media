document.querySelector('#box').addEventListener('submit', function (event) {
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var editYear = document.querySelector('#editYear').value;

    var book = new Book(title, author, editYear);
    var viewbook = new Viewbook();

    if (title === '' || author === '' || editYear === '') {
        viewbook.getMessage('Введите правильную информацию', 'error');
    } else {
        viewbook.addBook(book);
        viewbook.getMessage('Книга добавлена', 'ok');
        viewbook.clear();
        viewbook.deleteBook();
    }

    event.preventDefault();
});




// Viewbook.prototype.deleteBook();

document.querySelector('#box').addEventListener('submit', function(event){
    var title = document.querySelector('#travel-title').value;
    var edition = document.querySelector('#travel-edition').value;
    var editYear = document.querySelector('#travel-editYear').value;

    var travelbook = new TravelBook(title, edition, editYear);
    var viewbook = new ViewTravel();

    if(title === '' || edition === '' || editYear === ''){
        viewbook.getMessage('Введите правильную информацию', 'error');
    } else{
        viewbook.addBook(travelbook);
        viewbook.getMessage('Книга добавлена', 'ok');
        viewbook.clear();
    }

    event.preventDefault();
});

document.querySelector('ul').onclick = function (e) {
    var btn = e.target.closest('.delete');
    if (!btn) {
        return;
    }
    btn.parentElement.remove();
};




















// function Book(title, author, edition, editYear, examples, id, pages) {
//     this.title = title; //название
//     this.author = author; //автор
//     this.edition = edition; //издательство
//     this.editYear = editYear; //год издания
//     this.examples = examples; // количество экземпляров
//     this.id = id; 
//     this.pages = pages; //количество страниц
//     this.getPages = function () {
//         return this.pages;
//     };
// }

// // //через наследование

// // function Journal(editNumber) {
// //     Book.call(this);
// //     this.editNumber = editNumber;
// //     if (pages <= 32) {
// //         this.pages = pages;
// //     }
// //     this.getPages = function () {
// //         return this.pages;
// //     };
// //     this.getYear = function () {
// //         return this.editYear;
// //     };
// // }

// //через объявление нового класса


//     function Journal(edition, editYear, editNumber, id, pages){
//         this.edition = edition;
//         this.editYear = editYear;
//         this.editNumber = editNumber;
//         this.id = id;
//         if(pages <= 32){
//             this.pages = pages;
//         }
//         this.getPages = function(){
//             return this.pages;
//         };
//         this.getYear = function(){
//             return this.editYear;
//         };
//     }

// // var jour = new Journal(345);
// // console.log(jour.pages);