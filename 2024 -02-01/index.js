//? DOM

// The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML-based markup language document. The DOM is a document model loaded in the browser and representing the document as a node tree, or DOM tree, where each node represents part of the document (e.g. an element, text string, or comment). (MDN)

//! the document as a node tree
//! each node represents part of the document (e.g. an element, text string, or comment)

//?The Window

// Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

//console.log(window);
console.log(window.document);
console.log(document);
console.log(document.body);
document.body.style.backgroundColor = "lightblue";

//? querySelector() returns 1 element

//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. (MDN)

// class, id, tag name, attribute

// const container1 = document.querySelector("div");
// console.log(container1);
// container1.style.backgroundColor = "purple";
document.querySelector("div").style.backgroundColor = "purple";

// Specificity :

//? TYPE column
// Includes type selectors, such as p, h1, and td, and pseudo-elements like ::before, ::placeholder, and all other selectors with double-colon notation. For each type or pseudo-element in a matching selector, add 0-0-1 to the weight value.

//? CLASS column
// Includes class selectors, such as .myClass, attribute selectors like [type="radio"] and [lang|="fr"], and pseudo-classes, such as :hover, :nth-of-type(3n), and :required. For each class, attribute selector, or pseudo-class in a matching selector, add 0-1-0 to the weight value.

//?ID column
// Includes only ID selectors, such as #example. For each ID in a matching selector, add 1-0-0 to the weight value.

const mainDiv = document.querySelector(".container");// it has power: 10
const mainDiv1 = document.querySelector("div.container.item.one"); // it has power: 1+10+10+10 = 31

const selectWithId = document.querySelector("#link")
const selectWithAtt = document.querySelector("[target]")
console.log(mainDiv);
console.log(mainDiv1);
console.log(selectWithId);
console.log(selectWithAtt);


//? querySelectorAll()

// The Document method querySelectorAll() returns a NodeList representing a list of the document's elements that match the specified group of selectors.

const allLi = document.querySelectorAll(".li");
console.log(allLi);

const allLi1 = allLi.forEach(item => item.style.color = "orange") // change the original NodeList "allLi"
console.log(allLi1); // undefined

// Note: Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from(). (MDN)

const liArr = Array.from(document.querySelectorAll(".li"));
console.log(liArr);

//? createElement()

// In an HTML document, the document.createElement() method creates the HTML element specified by tagName. 

const container2 = document.createElement("div");

console.log(container2);

//? className and classList

// The className property of the Element interface gets and sets the value of the class attribute of the specified element.

container2.className = "newClass";

console.log(container2.className);

// The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list. (MDN)

// Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.

container2.classList.add("container");

console.log(container2.classList);

//? append()

// The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes (MDN)

// syntax: parentElement.append(theElementToAdd)

document.body.append(container2);

//? innerText

//* add text using innerText
container2.innerText = `<section>Hello, I'm div</section>`;

//? innerHTML

//* add text using innerHTML: read HTML tags and render them correctly

container2.innerHTML = `<section> Hello, I'm div </section> `;

//? cssText

// The cssText property of the CSSStyleDeclaration interface returns or sets the text of the element's inline style declaration only. (MDN)

// allLi.forEach(li => li.style.cssText = "background-color: bisque; font-size: 3rem;")
allLi.forEach(li => {
    li.style.backgroundColor = "bisque";
    li.style.fontSize = "3rem"
})

//?   window methods

//   window.alert() - instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog. (MDN)
//! shows a popup message in browser
alert("hello")

//   window.prompt() - instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog. (MDN)
//! ask for an input

let infoFromUser = prompt("What is your age?")

//   window.confirm() - instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog. (MDN)

//! ask to confirm (y/n, boolean)

confirm("Are you sure?");