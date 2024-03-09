// let tti = document.querySelector("#book-title");
// let aut = document.querySelector("book-author");
// let avail = document.querySelector("book-available");
// let row1 = document.querySelector("#ro1");
// let row2 = document.querySelector("#ro2");
// let available = document.querySelector("#ro3");
// let Addbutton = document.querySelector("#add");


// Addbutton.addEventListener("click", function () {
//     let tabdata = document.createElement("td");
//     tabdata.innerHTML = tti.value;
//     row1.appendChild(tabdata);
// })

let book1 = {
    title: 'biology',
    author: "louise",
    available: true,
    dateBorrowed: null,
    borrower: null
}
let book2 = {
    title: 'mathematics',
    author: "alpha",
    available: true,
    dateBorrowed: null,
    borrower: null
}
let book3 = {
    title: 'physics',
    author: "sando",
    available: true,
    dateBorrowed: null,
    borrower: null
}
let book4 = {
    title: 'computer-science',
    author: "bapt",
    available: true,
    dateBorrowed: null,
    borrower: null
}




let libraryBooks = [];

function addBook(book) {
    // code to add book to libraryBooks list
    libraryBooks.push(book);
};
// Add books to libraryBooks by calling addBook
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

console.log(libraryBooks);

for (let bo in libraryBooks) {
    console.log(bo.title);
}



function borrowBook(bookTitle, user) {
    let foundBook = libraryBooks.find(book => book.title === bookTitle);
    // Find/search the book in the libraryBooks and update the book object properties accordingly
    foundBook.available = false;
    foundBook.borrower = user;
    foundBook.dateBorrowed = new Date();

    console.log(libraryBooks);
};

const borrowingUser = {
    fullname: "Tom Hsu",
    borrowerNID: "12348595043775"
};

// Borrow book1
borrowBook("mathematics", borrowingUser);



function returnBook(bookTitle, borrow) {
    // Find/search the book in the libraryBooks 
    // Check if the borrowerNID matches the NID of the borrowingUser
    // Thrn update the book object properties accordingly if it matches
    let foundBook = libraryBooks.find(book => book.title === bookTitle && book.borrower.borrowerNID === borrow);

    if (foundBook) {
        foundBook.available = true;
        foundBook.dateBorrowed = null;
        foundBook.borrower = null;

        console.log(libraryBooks);
    }
    else{
        console.log("not allowed");
    }

};
// Return the book
returnBook("mathematics", "12348595043775");





















