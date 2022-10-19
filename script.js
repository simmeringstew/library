// book class and bookshelf array

let bookshelf = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        if (read === true) {
            this.read = "Yes";
        }
        else {
            this.read = "No";
        }
    }
}

// makes the add book button open up the popup

const popup = document.querySelector(".popup");
const addBook = document.querySelector(".add");
addBook.addEventListener("click", () => {
    popup.classList.add("show");
});

// makes the x button on the popup close the popup

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", () => {
    popup.classList.remove("show");
});

// allows the form to be submited either through the button or pressing enter

const submit = document.querySelector(".submit");
const form = document.querySelector(".form");

submit.addEventListener("click", createBook);

form.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        validateForm();
    }
    else {
        return;
    }
});

// function to validate whether the user has entered information into the form

function createBook() {
    let emptyCheck = 0;
    const title = document.querySelector("#title");
    const titleError = document.querySelector(".title-error-message");
    const author = document.querySelector("#author");
    const authorError = document.querySelector(".author-error-message");
    const pages = document.querySelector("#pages");
    const pagesError = document.querySelector(".pages-error-message");
    const read = document.querySelector("#read");

    if (title.value.trim() === "") {
        title.classList.add("error");
        titleError.classList.add("error");
        emptyCheck++;
    }
    if (author.value.trim() === "") {
        author.classList.add("error");
        authorError.classList.add("error");
        emptyCheck++
    }
    if (pages.value.trim() === "") {
        pages.classList.add("error");
        pagesError.classList.add("error");
        emptyCheck++;
    }

    if (emptyCheck > 0) {
        return;
    }
    else {
        const thisBook = new Book(title.value.trim(), author.value.trim(), pages.value.trim(), read.checked);
        title.classList.remove("error");
        titleError.classList.remove("error");
        title.value = "";
        author.classList.remove("error");
        authorError.classList.remove("error");
        author.value = ""
        pages.classList.remove("error");
        pagesError.classList.remove("error");
        pages.value = "";
        read.checked = false;
        popup.classList.remove("show");
        addToBookshelf(thisBook);
    }
}

// function to add the book to the bookshelf array

function addToBookshelf(thisBook) {
    if (bookshelf.length >= 6) {
        alert("Bookshelf Full");
        return;
    }
    else {
        bookshelf.push(thisBook);
        console.log(bookshelf);
    }
}