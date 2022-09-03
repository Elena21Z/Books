const books = [
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
       

let isOpen = false 
   function openAdd() {
     const addButton = document.getElementById("addButton")
     const saveButton = document.getElementById("saveButton")
     const container = document.getElementById("myContainer")
 
       if (isOpen) {
       addButton.style.display = "block"
       container.style.display = "none"
       saveButton.style.display = "none"
       isOpen = false
      } else {
         saveButton.style.display = "block"
         container.style.display = "flex"  
         addButton.style.display = "none"
         isOpen = true
       }
    }
  
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
}


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
  openAdd()

}
renderBooks()

const myButton = document.getElementById("addButton")
myButton.addEventListener("click", openSave)

const button = document.getElementById("saveButton")
button.addEventListener("click", openAdd)

