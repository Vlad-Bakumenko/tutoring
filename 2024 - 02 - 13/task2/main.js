const ul = document.querySelector("ul");
const fetchBtn = document.querySelector("button");

ul.className = "none"; // set class declared in CSS-file

function processData() {
    fetch("./data.txt")// fetch data from txt file
    .then(respond => respond.text())// The text() method of the Response interface takes a Response stream and reads it to completion. It returns a promise that resolves with a String.
    .then(result => {
        const arr = result.split("\n").sort();// split our string into array and sort it
        arr.forEach(element => {// iterating through array
            ul.innerHTML += `<li>${element}</li>`;// and add every element as <li> into <ul>  
        });
        ul.classList.toggle("none"); // remove class none if it exist in element and add it - if not exist
    })
    
}

fetchBtn.addEventListener("click", processData);