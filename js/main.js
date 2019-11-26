
let myLibrary = [];

function Book(author, tittle, pages, readed){
    this.tittle = tittle,
    this.author = author,
    this.pages = pages,
    this.readed = readed,
    this.info = () => `${this.tittle} by ${this.author}, ${this.pages} pages, ${this.readed}`
}

function addBookToLibrary(){
    
}

let book1 = new Book('edlingao','Etterium', 65, "not read yet");
console.log(book1.info());

