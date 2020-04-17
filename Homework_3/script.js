    function Book(name, author, edition, editYear, examples, id, pages){
        this.name = name;
        this.author = author;
        this.edition = edition;
        this.editYear = editYear;
        this.examples = examples;
        this.id = id;
        this.pages = pages;
        this.getPages = function(){
            return this.pages;
        };
    }

    function Journal(edition, editYear, editNumber, id, pages){
        this.edition = edition;
        this.editYear = editYear;
        this.editNumber = editNumber;
        this.id = id;
        if(pages <= 32){
            this.pages = pages;
        }
        this.getPages = function(){
            return this.pages;
        };
        this.getYear = function(){
            return this.editYear;
        };
    }
