//? Fetch

// fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar).

//? basic GET request syntax:
// fetch(url,options) 

const btn = document.querySelector("button");
const outputDiv = document.querySelector("div");

outputDiv.className = "none"

btn.addEventListener("click", ()=>{
    //1) Get info from e08.txt file
    fetch("./txt/e08.txt")//return promise object
    //2) Convert info into string
    .then((respond)=> respond.text())//The text() method of the Response interface takes a Response stream and reads it to completion. It returns a promise that resolves with a String.
    //3) Insert it in outputDiv
    .then((result)=>{
        const arr = result.split("\n");
        arr.forEach(elem=> {
            outputDiv.innerHTML += `<p>${elem}</p>`
        })
        outputDiv.classList.toggle("none") // adds the class if it doesn't exist, removes the class if it exists
    })
})