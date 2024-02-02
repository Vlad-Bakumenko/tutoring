// Task 2

document.body.style.fontFamily = "Arial";

const h1 = document.querySelector("h1");

h1.style.textAlign = "center";

const category = document.querySelectorAll(".category");

category.forEach(label => {
    label.style.color = "green"
    label.style.fontStyle = "italic"
})

function colorGenerator() {
    // rgba (0-255, 0-255, 0-255, 0-1)
    let randomRed = Math.floor(Math.random()*(255 - 0 + 1) + 0);
    let randomGreen = Math.floor(Math.random()*(255 - 0 + 1) + 0);
    let randomBlue = Math.floor(Math.random()*(255 - 0 + 1) + 0);
    let randomTransparency = Math.random().toFixed(2);
    // console.log(`rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${randomTransparency})`); 
    return `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${randomTransparency})`;
}

const foodCategory = document.querySelectorAll(".food-category");

foodCategory.forEach(list => list.style.cssText = `background-color : ${colorGenerator()};`)

const main = document.querySelector("main");
main.style.cssText = "display : flex; justify-content: space-around; flex-flow : row wrap; box-sizing : border-box";
// colorGenerator()

let warning = document.getElementById("warning");
warning.style.cssText = "font-family: Helvetica, sans-serif;  font-size: 3em;"

const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach((item,index) => {
    if (index % 2 === 1) { // targeting every even element of NodeList since it starts from index 0, all even elements will have odd indexes (that why index % 2 === 1)
        item.style.cssText = "background-color : blue"
    }
})

const allergyWarning = document.querySelector(".allergy-warning");

allergyWarning.style.cssText = "display : flex; flex-flow : column; justify-content : center; align-items : center"

const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(item => {
  item.style.cssText = "border : 5px solid orange; width : 20rem; height : 20rem; border-radius : 50%; display : flex; justify-content : center; align-items : center"
});