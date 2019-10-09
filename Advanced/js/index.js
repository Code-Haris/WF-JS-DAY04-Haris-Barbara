<<<<<<< HEAD
// const BOOK = {
//     books: [
//       {"title": "Javascript for Dummies","author": "Dummy Dumb Dumb", "read": "false", "cover": "./img/Download.jpg"},
//       {"title": "Javascript for Kids","author": "Nick Morgan", "read": "false", "cover": "https://wsvincent.com/assets/images/bestjavascriptbooks/js_for_kids.jpg"},
//       {"title": "Up and Going Javascript","author": "Kyle Simpson", "read": "true", "cover": "https://images-eu.ssl-images-amazon.com/images/I/41L18FvA5rL.jpg"},
//     ]
// }
//
// function generateTable () {
//
//     let tableHtml = [];
//     for (let i = 0; i < BOOK.books.length; i++) {
//         let htmlString = `
//             <li class='book-item'>
//                 <div class='book-info'>
//                 	<p><img src=${BOOK.books[i].cover}></p>
//                 	<p><b>Title: ${BOOK.books[i].title}</b></p>
//                 	<p>Author: ${BOOK.books[i].author}</p>
//                 	<p class="read">${BOOK.books[i].read}</p>
//                 </div>
//             </li>
//         `
//         tableHtml.push(htmlString);
//
//     }
//
//     tableHtml.unshift(`<ul class='book-list'>`); //Places opening ul tag at beginning of the array
//     tableHtml.push(`</ul>`);//Places closing ul tag at the end of the array
//     return (tableHtml.join(''));//Turns seperate html elements into one html element.
//
//
// }
//
// $('body').html(generateTable);
=======
const BOOK = {
    books: [
        { "title": "Javascript for Dummies", "author": "Dummy Dumb Dumb", "read": "false", "cover": "./img/Download.jpg" },
        { "title": "Javascript for Kids", "author": "Nick Morgan", "read": "false", "cover": "https://wsvincent.com/assets/images/bestjavascriptbooks/js_for_kids.jpg" },
        { "title": "Up and Going Javascript", "author": "Kyle Simpson", "read": "true", "cover": "https://images-eu.ssl-images-amazon.com/images/I/41L18FvA5rL.jpg" },
    ]
}

function generateTable() {

    let tableHtml = [];
    for (let i = 0; i < BOOK.books.length; i++) {
        let htmlString = `
            <li class='book-item'>
                <div class='book-info'>
                	<p><img src=${BOOK.books[i].cover}></p>
                	<p><b>Title: ${BOOK.books[i].title}</b></p>
                	<p>Author: ${BOOK.books[i].author}</p>
                	<p id="read${i}">${BOOK.books[i].read}</p>
                </div>
            </li>
        `
        tableHtml.push(htmlString);

    }

    tableHtml.unshift(`<ul class='book-list'>`); //Places opening ul tag at beginning of the array
    tableHtml.push(`</ul>`); //Places closing ul tag at the end of the array
    return (tableHtml.join('')); //Turns seperate html elements into one html element.


}

$('body').html(generateTable);

function changeCol() {
    
    for (var i = 0; i < 4; i++) {
    	var lesen = BOOK.books[i].read
        if (lesen == "true") {
        	document.getElementById("read"+i).style.backgroundColor = "yellowgreen";
        } else {
            document.getElementById("read"+i).style.backgroundColor = "hotpink";
        }
    }
}
changeCol();
>>>>>>> ccbc7a8624dbbcf65853366471e3ee67f35bc872
