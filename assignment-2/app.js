//asssignment 2

// Thhee Booookk Liisstt
// Iterate through the array of books. For each book, create a p
// element with the book title and author and append it to the page.
// Bonuses:
// Use a ul and li to display the books.
// Add an img to each book that links to a URL of the book cover.
// Change the style of the book depending on whether you have
// read it or not.

var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

function listBooks() {
  let bookList = books.map((book) => {
    document.getElementById("bookList1").innerHTML += `
         <p>
           <span>${book.title}</span> 
           <span>${book.author}</span>  
         </p>
         `;
  });
  return bookList;
}

listBooks();


//2


function listBooksWithUl() {
  let bookList = books.map((book) => {
      console.log(book.alreadyRead)
    document.getElementById("bookList2").innerHTML += `
        <li>
        <a style = "text-decoration: none" href ="https://www.historic-newspapers.co.uk/app/uploads/2018/03/Your-Life-in-Pictures-Cover.jpg">
        <img style= "width:40px; height: 40px;" src="https://www.historic-newspapers.co.uk/app/uploads/2018/03/Your-Life-in-Pictures-Cover.jpg" />
        </a>
        <span class = "${book.alreadyRead}">${book.title}</span> 
        <span class = "${book.alreadyRead}">${book.author}</span> 
        </li>
        `;
  }).join();

  return `<ul>${bookList}</ul>`;
}

listBooksWithUl();
