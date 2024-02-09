const form = document.querySelector("form"); // selecting form
const input = document.querySelector("input"); // selecting input
const button = document.querySelector("[type =submit]"); // selecting button for submitting form by type
const list = document.querySelector("section"); // selecting section
const dialog = document.querySelector("dialog"); // selecting dialog
const closeBtn = document.querySelector("[type=reset]") // selecting button for resetting dialog window by type

form.addEventListener("submit", (e) => { // when I submit form, I add event
  e.preventDefault(); // set it to not refresh page after submitting the form
  if (!input.value) { // if user leaves empty string in input
    dialog.showModal(); // show dialog window
    closeBtn.addEventListener("click", () => { // add event to button in dialog element to close it
        dialog.close();
      });
    return;
  }
  // when user submit form next happens:
  const div = document.createElement("div"); // div, that will be sent into "section", created
  const p = document.createElement("p"); // "p", that will be inside of "div", created
  p.style.fontWeight = "bold"; // set style for text of "p"
  p.innerText = `${input.value}`; // set that in "p" will be everything typed in input
  const checkBtn = document.createElement("button"); // "checkBtn", that will be inside of "div", created
  checkBtn.innerText = "V"; // set how my button will look like
  const deleteBtn = document.createElement("button"); // "deleteBtn", that will be inside of "div", created
  deleteBtn.innerText = "X"; // set how my button will look like
  div.append(p, checkBtn, deleteBtn); // add "p", "checkBtn", "deleteBtn" to "div"
  div.style.display = "flex"; // set display for div, so all children will be in one horizontal line
  list.appendChild(div); // add "div" to "section"
  input.value = ""; // reset input field to empty string
  checkBtn.addEventListener("click", () => { // add event to check button
    if (p.style.textDecoration === "line-through") { // if text in "p" - crossed :
      p.style.textDecoration = "none"; // then set it to none
      p.style.color = "black"; // set color of text in "p" to black
      checkBtn.style.color = "black"; // set color of checkBtn to black
      deleteBtn.style.color = "black"; // set color of deleteBtn to black
    } else { // if text isn't crossed:
      p.style.textDecoration = "line-through"; // cross it
      p.style.color = "red"; // set color of text in "p" to red
      checkBtn.style.color = "springgreen"; // set color of checkBtn to green
      deleteBtn.style.color = "red"; // set color of deleteBtn to red
    }
  });
  deleteBtn.addEventListener("click", () => { // set for deleteBtn event:
    if (div.style.display === "flex") { // display type of "div" is as we set before "flex"
      div.remove(); // then remove "div"
    } 
  });
});
