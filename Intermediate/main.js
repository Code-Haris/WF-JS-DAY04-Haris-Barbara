const STORE = {
    employees: [
      {"userId":"Muha",
      "jobTitleName":"Developer",
      "firstName":"Muhammed",
      "lastName":"Farahman",
      "preferredFullName":"Muhammed Farahman",
      "phoneNumber":"01 123456",
      "emailAddress":"muhammed@gmail.com"},
      {"userId":"philly",
      "jobTitleName":"Developer",
      "firstName":"Philip",
      "lastName":"Something",
      "preferredFullName":"Philip Something",
      "phoneNumber":"01 123456",
      "emailAddress":"philip@gmail.com"},
      {"userId":"John",
      "jobTitleName":"Developer",
      "firstName":"John",
      "lastName":"Doe",
      "preferredFullName":"John Doe",
      "phoneNumber":"01 123456",
      "emailAddress":"john@gmail.com"
      },

    ]
}

function generateTable () {
    let tableHtml = [];

    for (let i = 0; i < STORE.employees.length; i++) {
        let htmlString = `
            <li class='employee-item'>
                <div class='employee-info'>
                    <h3>${STORE.employees[i].userId}</h3>
                    <p>${STORE.employees[i].jobTitleName}</p>
                    <p>${STORE.employees[i].firstName}</p>
                    <p>${STORE.employees[i].lastName}</p>
                    <p>${STORE.employees[i].preferredFullName}</p>
                    <p>${STORE.employees[i].phoneNumber}</p>
                    <p>${STORE.employees[i].emailAddress}</p>
                </div>
            </li>
        `
        tableHtml.push(htmlString);
    }
    tableHtml.unshift(`<ul class='employee-list'>`); //Places opening ul tag at beginning of the array
    tableHtml.push(`</ul>`);//Places closing ul tag at the end of the array
    return (tableHtml.join(''));//Turns seperate html elements into one html element.
}

$('body').html(generateTable);
