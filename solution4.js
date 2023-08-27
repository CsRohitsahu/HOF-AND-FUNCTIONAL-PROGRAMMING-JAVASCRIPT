// . Filtering and Capitalizing: Books Published After 2010 with Author Names
function filterBooks(books) {
    let filteredBooks = books.filter(book => book.year >= 2010);
    filteredBooks.forEach(book => book.author = book.author.toUpperCase());
    return filteredBooks;
}


let books = [{'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925},
             {'title': 'To Kill a Mockingbird', 'author': 'Harper Lee', 'year': 1960},
             {'title': 'The Hunger Games', 'author': 'Suzanne Collins', 'year': 2008},
             {'title': 'The Fault in Our Stars', 'author': 'John Green', 'year': 2012}];

let filteredBooks = filterBooks(books);
console.log(filteredBooks);

