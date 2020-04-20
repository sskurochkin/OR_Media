function Book(title, author, edition, editYear, examples, id, pages) {
    this.title = title; //название
    this.author = author; //автор
    this.edition = edition; //издательство
    this.editYear = editYear; //год издания
    this.examples = examples; // количество экземпляров
    this.id = id; 
    this.pages = pages; //количество страниц
    this.getPages = function () {
        return this.pages;
    };
}