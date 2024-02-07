// You code here

function passwordGen(length, mixedCase) {
    let password = "";
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_";
//           i=1 because i want to have 3rd character on i = 3
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      if (mixedCase) { // if checkbox is ticked
        if (i % 3 === 0) {// check if i have a deal with 3rd/6th/9th/12th/... character of password
          password += charset[randomIndex].toUpperCase();
        } else {
          password += charset[randomIndex];
        }
      } else {
        password += charset[randomIndex];
      }
    }
    return password;
  }
  
  const form = document.querySelector("#password-form");// select form
  const input = document.querySelector("#length");// select input field, where i set length
  const mixedCases = document.querySelector('#mixedCases');// select checkbox input field
  const output = document.querySelector("#output");// select select output field, where my password will be shown
  
  // function for connecting data from input field and generated password with output field
  function handleSubmit(event) {
    event.preventDefault();
  
    const length = parseInt(input.value) || 20;
    const mixedCase = mixedCases.checked;
  
    const password = passwordGen(length, mixedCase);
  
    output.textContent = password;
  }
  
  form.addEventListener("submit", handleSubmit);
  
  output.textContent = passwordGen(20, true);