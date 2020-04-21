function Book(title, author, edition, editYear, examples, id, pages) {
    this.title = title; //название
    this.author = author; //автор
    this.edition = edition; //издательство
    this.editYear = editYear; //год издания
    this.examples = examples; // количество экземпляров
    this.id = id; 
    this.pages = pages; //количество страниц
    this.getChapter = function () {
        return Math.ceil(this.pages / 25);
    };
}


function TravelBook(title, edition, examples, pages) {
    this.title = title; //название
    this.edition = edition; //издательство
    this.examples = examples; // количество экземпляров
    this.pages = pages; //количество страниц
    this.getChapter = function () {
        return Math.ceil(this.pages / 5);
    };
}




// var b = new Book(34, 34, 34, 2002, 20, 20, 26);
// var t = new TravelBook(34, 45, 566, 12);

// console.log(t.getChapter());

// console.log(t);