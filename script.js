// массив книг
let  books = [
    {
      id: 1,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: 3,
      title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title:'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const myBooks = document.getElementById("containerBooks")
// функция добавления массива на страницу
    function renderBooks() {
      myBooks.innerHTML = ""
      books.forEach((book) => {
      myBooks.innerHTML +=
         `<div class="border">
              <div class="biblioteka-books">
                 <div class="fon-white">
                    <img class="img" src=${book.image}></imge>
                    <h1 class="title">${book.title}</h1>
                    <p class="year">${book.year}</p>
                        <div class="flex">
                          <p class="authors">${book.authors}</p>
                       </div>
                          <div class="flexButton">
                             <button class="button">Изменить</button>
                              <button class="button" onclick="deleteBooks(${book.id})">Удалить</button>
                           </div>
                  </div>
               </div>
        </div>`
      })
    }
       

// функция кнопки "удалить"  
function clearForm() {
  document.getElementById("nameBook").value = ""
   document.getElementById("authorBook").value = ""
   document.getElementById("yearpublishingBook").value = ""
   document.getElementById("linkimgBook").value = ""
}

function deleteBooks(id) {
// шаг 1, найти студента
const book = books.find((b) => {
return b.id === id
})
// шаг 2, узнать индекс книги в массиве
const bookIndex = books.indexOf(book)

// шаг 3, удалить элемет из массива
books.splice(bookIndex, 1)

// шаг 4, обновить список
renderBooks()

// шаг 5, сохранить в localStorage
const booksJson = JSON.stringify(books)
localStorage.setItem("books", booksJson)
}

// функция кнопки "сохранить"
function openSave () {
  const titleValue = document.getElementById("nameBook").value
  const authorValue = document.getElementById("authorBook").value
  const yearValue = document.getElementById("yearpublishingBook").value
  const imgValue = document.getElementById("linkimgBook").value

  const book = {
    title: titleValue,
    authors: authorValue,
    year: yearValue,
    image: imgValue
  }

  books.push(book)
  renderBooks()
  clearForm()
  closeButton()

  const booksJson = JSON.stringify(books)
  localStorage.setItem('books', booksJson)
}


renderBooks()
const booksJson = localStorage.getItem('books')
const savedBooks = JSON.parse(booksJson)
if (booksJson) {
  books = savedBooks
}
renderBooks()


const myButton = document.getElementById("save-modal-Button")
myButton.addEventListener("click", openSave)

const button = document.getElementById("open-modal-Button")
button.addEventListener("click", openModal)

const addModal = document.getElementById("add-modal")

const closeModalButton = document.getElementById("close-modal-Button")
closeModalButton.addEventListener("click", closeButton)


//функция кнопки "закрыть"
function closeButton() {
  addModal.style.display = "none"
}

// функция кнопки "добавить"
function openModal() {
  addModal.style.display = "flex"
}



 