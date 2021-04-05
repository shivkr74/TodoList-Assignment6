function getAndUpdate() {
    tit = document.getElementById(`title`).value;
    desc = document.getElementById(`description`).value;

    console.log("updating List...");
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];

        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    } else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];


        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    } else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);


    }
    //populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {


        str +=

            `<tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
           
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary"onclick="newUpdate(${index})">Edit</button>
                <button type="button" class="btn btn-secondary"onclick="deleted(${index})">Remove</button>
            </div>
        </td>
        </tr>`;


    });

    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //Delete   itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    update();
}

function clearStroage() {

    if (confirm("Do You Really Want to Clear the List?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update();
    }
}