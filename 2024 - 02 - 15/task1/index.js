const form = document.querySelector("form");
const input = document.querySelector("#username");
const btn = document.querySelector("button");
const outputDiv = document.createElement("div");
document.body.append(outputDiv);

const imgArr = [];

// 1. Write an async function fetchData()
// accepts a username as an argument (this will be submitted by user later in the form)

// fetches the user profile from githubAPI

// the actual API from the documentation: https://api.github.com/users/[USERNAME])

// Basic example from before

// function fetchData(username) {
//      fetch(`https://api.github.com/users/${username}`) // on this level we got Respond Object
//     .then(response => {
//         console.log(response);
//         if (!response.ok) {
//             throw new Error ("error")
//         }
//         return response
//     }).then(result => {
//         (console.log(result.text()))}).catch((error)=>console.log(error.message))
// }

async function fetchData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`); // respond object
  try {
    if (!response.ok) {
        throw new Error("error");
      }
      return response.json(); // response.json() returns promise object
       //console.log(response.json());
  } catch (error) {
    console.log(error.message);
  }
}

// fetchData("anfvc");

// 2. Write a function createHTML()
// accepts a fetched data from fetchData() as argument

// create img, src is found in the fetched data

// create h2, with name and location of the user (found in the fetched data)

// provide a fallback in case the value is null
// display the image & text in div

function createHTML(resultObj) { // we will use properties "avatar_url","name", "location" of resultObj
    const accDiv = document.createElement("div"); // create div for every GitHub account
    const img = document.createElement("img");
    img.src = resultObj.avatar_url; // set source of img to property "avatar_url" of resultObj
    const h2 = document.createElement("h2");
    h2.innerText = `${resultObj.name ? resultObj.name : "GitHub User"} from ${resultObj.location ? resultObj.location : "Nowhere"}`;// set text of h2 to property "name" and "location" of resultObj + providing the cases for situation if user doesn't have name or location
    accDiv.append(img, h2); // add img, h2 to accDiv
    outputDiv.append(accDiv); // add accDiv to outputDiv
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    accDiv.append(saveBtn);
    saveBtn.addEventListener("click", ()=> {//on click:
        const imgObj = {}; // create obj for every GitHub account
        imgObj[`${resultObj["name"]}`] = resultObj.avatar_url; // set key-value pair of it, where property - name of person, value - URL of avatar
        imgArr.push(imgObj); // push into imgArr
        localStorage.setItem("imgURL", JSON.stringify(imgArr)); // save imgArr of imgObj's converted into JSON format
        accDiv.replaceChildren(); // after delete saved account form page
    })
}



//? The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.LocalStorage data has no expiration time.

// The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

// The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.

// The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists.

// The key() method of the Storage interface, when passed a number n, returns the name of the nth key in a given Storage object.

// The length read-only property of the Storage interface returns the number of data items stored in a given Storage object.


// 3. Add an EventListener to form
// on submit, this form will handle...

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     const result = fetchData(input.value); //! Error : http://127.0.0.1:5500/task1/undefined 
//     createHTML(result); //! createHTML is not waiting for fetching data and resolving it into Promise Object
// })

form.addEventListener("submit", async (e)=> {
    e.preventDefault();
    const result = await fetchData(input.value); // until fetchData() will not finish executing 
    createHTML(result); // createHTML() will not start
    input.value = ""; // reset input field
})

// fetchData() with the input value as an argument
// createHTML() with the returned value from fetchData() as an argument
// once submitted, make sure the input field is cleared
// at this point, you'll see the fetched image and text in browser

// Final step: save the image
// add a save button in createHTML()

// by clicking save button, you will save the image url in localStorage

// write a function init(), which gets the saved data from the localStorage

// if there's saved data found, img is created (src will be the saved image url) and displayed in div
// make sure the function is invoked
// when refreshing the page, let the saved image appear in div.

// BONUS Challenge: try using an array and save multiple profiles

function init() {
    const getImg = localStorage.getItem("imgURL"); // json format - [{"Shinhee DCI":"https://avatars.githubusercontent.com/u/143431126?v=4"},{"Shinhee DCI":"https://avatars.githubusercontent.com/u/143431126?v=4"}]

    const newArr = JSON.parse(getImg); // JS format - [{"Shinhee DCI":"https://avatars.githubusercontent.com/u/143431126?v=4"},{"Shinhee DCI":"https://avatars.githubusercontent.com/u/143431126?v=4"}]
    if (newArr.length > 0) { // if array have elements
        newArr.forEach(element => { // iterate through every element (in our case object)
            outputDiv.innerHTML += `<img src=${Object.values(element)}>` // since object have only one key-value pair, get value of it and pass as source of img
        });
    }
}

init(); // call function, so after refreshing the tab saved images will appear on page without "name" and "location"