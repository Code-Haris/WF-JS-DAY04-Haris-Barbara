const STORE = {
    employees: [
      {
      "userId":"Fred",
      "jobTitleName":"Developer",
      "firstName":"Laslo",
      "lastName":"Dont know",
      "preferredFullName":"Laslo Fred",
      "phoneNumber":"01 123456",
      "emailAddress":"laslo@gmail.com",
      "imgUrl" : "https://avatars3.githubusercontent.com/u/39630073?s=460&v=4"
      },
      {"userId":"Muha",
      "jobTitleName":"Developer",
      "firstName":"Muhammed",
      "lastName":"Farahman",
      "preferredFullName":"Muhammed Farahman",
      "phoneNumber":"01 123456",
      "emailAddress":"muhammed@gmail.com",
    "imgUrl" : "https://avatars1.githubusercontent.com/u/54868850?s=460&v=4"},
      {"userId":"philly",
      "jobTitleName":"Developer",
      "firstName":"Philip",
      "lastName":"Something",
      "preferredFullName":"Philip Something",
      "phoneNumber":"01 123456",
      "emailAddress":"philip@gmail.com",
    "imgUrl" : "https://avatars3.githubusercontent.com/u/55690092?s=460&v=4"},
      {"userId":"John",
      "jobTitleName":"Developer",
      "firstName":"John",
      "lastName":"Doe",
      "preferredFullName":"John Doe",
      "phoneNumber":"01 123456",
      "emailAddress":"john@gmail.com",
      "imgUrl" : "https://pbs.twimg.com/profile_images/2200274915/john-doe-sil_400x400.jpg"
      },
      {
      "userId":"Barba",
      "jobTitleName":"Developer",
      "firstName":"Barbara",
      "lastName":"Dont know",
      "preferredFullName":"Barba Barbara",
      "phoneNumber":"01 123456",
      "emailAddress":"barba@gmail.com",
      "imgUrl" : "https://avatars3.githubusercontent.com/u/55688111?s=460&v=4"
      },

    ]
}

function generateTable () {
    let tableHtml = [];

    for (let i = 0; i < STORE.employees.length; i++) {
        let htmlString = `
            <li class='employee-item'>
                <div class='employee-info'>
                    <img src="${STORE.employees[i].imgUrl}">
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
