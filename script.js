// book class

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
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
    const title = document.querySelector("#title").value.trim();
    const titleError = document.querySelector(".title-error-message");
    const author = document.querySelector("#author").value.trim();
    const authorError = document.querySelector(".author-error-message");
    const pages = document.querySelector("#pages").value.trim();
    const pagesError = document.querySelector(".pages-error-message");
    const read = document.querySelector("#read").checked;

    if (title === "") {
        title.classList.add("error");
        titleError.classList.add("error");
        emptyCheck++;
    }
    if (author === "") {
        author.classList.add("error");
        authorError.classList.add("error");
        emptyCheck++
    }
    if (pages === "") {
        pages.classList.add("error");
        pagesError.classList.add("error");
        emptyCheck++;
    }

    if (emptyCheck > 0) {
        return;
    }
    else {
        const thisBook = new Book(title, author, pages, read);
        console.log(thisBook.pages);
    }
}