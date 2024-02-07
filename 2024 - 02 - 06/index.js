//? Event

// The Event interface represents an event which takes place in the DOM.

//? 2 ways of defining an event

//? 2.1 by using event handler property

//? 2.1.1
// from HTML, syntaxL on[event] - in our case, onclick (go to HTML and define as an attribute)

function clickMe() {
  alert("button is clicked!");
}

//? 2.1.2
// from DOM

const domBtn1 = document.querySelector("#dom-btn1");

// Syntax: EventTarget.on[event] = function without parentheses
domBtn1.onclick = clickMe;

// Many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them. Event-handlers are usually connected (or "attached") to various HTML elements (such as <button>, <div>, <span>, etc.) using EventTarget.addEventListener(),
//!and this generally replaces using the old HTML event handler attributes.

//The event handler attributes: onchange, onclick, onclose, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onsubmit,  ontoggle, etc.

//? 2.2 by using EventTarget method

// addEventListener() - sets up a function that will be called whenever the specified event is delivered to the target.

// syntax EventTarget.addEventListener("type of event", action)
// EventTarget - Element, and its children, as well as Document and Window, are the most common event targets, but other objects can be event targets, too.
// Action - function/object

const domBtn2 = document.querySelector("#dom-btn2");

domBtn2.addEventListener("click", clickMe);

//domBtn2.addEventListener("click", ()=> { //! is the same as on line 39
//   alert("button is clicked!");
//})

// remove the eventListener

domBtn2.removeEventListener("click", clickMe);
// domBtn2.removeEventListener("click", ()=> { //! with such syntax it's impossible to remove an event
//     alert("button is clicked!");
// });

//? question about e.target.value

const booking = document.querySelector("#booking");

const bookingText = document.querySelector(".booking-text");

booking.addEventListener("keyup", (e) => {
  bookingText.innerText = e.target.value;
  // console.log(e);
});

booking.addEventListener("change", (e) => {
  booking.value = e.target.value.toUpperCase();
  bookingText.innerText = e.target.value.toUpperCase();
});

//? Types of events

// https://html.spec.whatwg.org/multipage/indices.html#events-2

//? document event

// type: DOMContentLoaded - works only eventListener, not handler property

// document.addEventListener("DOMContentLoaded", ()=> alert("welcome!"))

//? form handling

//? keyup, keydown - Keyboard events

// The keyup event is fired when a key is released.

// The keydown event is fired when a key is pressed.

const username = document.querySelector("#username");

const usernameParagraph = document.querySelector(".username-text");

// username.addEventListener("keyup", (event) => {
//     // write my input in paragraph
//     usernameParagraph.innerText = event.target.value;
// })

function writeMyInputInParagraph(event) {
  usernameParagraph.innerText = event.target.value;
}

username.addEventListener("keyup", writeMyInputInParagraph); // same as line 90 - 93

//? change

// The change event is fired for <input>, <select>, and <textarea> elements when the user modifies the element's value.

//! Depending on the kind of element being changed and the way the user interacts with the element, the change event fires at a different moment:

// 1) When a <input type="checkbox"> element is checked or unchecked (by clicking or using the keyboard);
// 2) When a <input type="radio"> element is checked (but not when unchecked);
// 3) When the user commits the change explicitly (e.g., by selecting a value from a <select>'s dropdown with a mouse click, by selecting a date from a date picker for <input type="date">, by selecting a file in the file picker for <input type="file">, etc.);
// 4) When the element loses focus after its value was changed: for elements where the user's interaction is typing rather than selection, such as a <textarea> or the text, search, url, tel, email, or password types of the <input> element.

username.addEventListener("change", (e) => {
  username.value = e.target.value.toUpperCase();
  usernameText.innerText = username.value;
});


//?  preventDefault() method

// The preventDefault() method of the Event interface tells the user agent(browser) that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

const form = document.querySelector("#form");

const output = document.querySelector(".output");

form.addEventListener( "submit", (event)=> {
    event.target.style.display = "none";
    output.innerText = `${username.value} has logged in successfully`;
    event.preventDefault();
})  