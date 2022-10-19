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