// // Define the Library class with attributes like name and books.
// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     return `${book.title} by ${book.author} added to the library.`;
//   }

//   listAvailableBooks() {
//     return this.books.filter((book) => book.available);
//   }

//   findBookByTitle(title) {
//     return this.books.find((book) => book.title === title);
//   }
// }

// // Create a separate Book class with attributes like title, author, genre, and available (to track borrowing).
// class Book {
//   constructor(title, author, genre, available = true) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.available = available;
//   }

//   borrow() {
//     if (this.available) {
//       this.available = false;
//       return `${this.title} has been borrowed.`;
//     } else {
//       return `${this.title} is currently not available.`;
//     }
//   }

//   returnBook() {
//     this.available = true;
//     return `${this.title} has been returned.`;
//   }
// }

// // Create an instance of the Library class and add some books.
// // Create books
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
// const book2 = new Book("1984", "George Orwell", "Dystopian");
// const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic");

// // Create a library
// const myLibrary = new Library("City Library");

// // Add books to the library
// console.log(myLibrary.addBook(book1));
// console.log(myLibrary.addBook(book2));
// console.log(myLibrary.addBook(book3));

// // List available books
// console.log("Available books:", myLibrary.listAvailableBooks());

// // Borrow a book
// console.log(book1.borrow());

// // Try to borrow the same book again
// console.log(book1.borrow());

// // List available books after borrowing
// console.log("Available books:", myLibrary.listAvailableBooks());

// // Return the borrowed book
// console.log(book1.returnBook());

// // List available books after returning
// console.log("Available books:", myLibrary.listAvailableBooks());

// // Find a book by title
// console.log("Found book:", myLibrary.findBookByTitle("1984"));
