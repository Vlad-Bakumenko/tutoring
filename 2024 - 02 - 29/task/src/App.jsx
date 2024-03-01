import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  // declaring state variable for controlling the inputs
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    company_name: "",
  });

  // useRef steps for using it:
  // 1) Declare variable : const firstInvalidInput = useRef(null);
  // 2) Go to return statement and in element that you want to select: ref={firstInvalidInput}
  //! Don't use for styling

  
  // declaring state variable for handling the errors
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    company_name: false,
  });

  // declaring state variable for handling the errors
  const [isSubmitted, setIsSubmitted] = useState(false);

  // declaring refs for inputs
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  // function for updating infos passed in inputs
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  }
  //console.log(inputs);

  function handleValidation() {
    const inputNames = Object.keys(inputs); // ['name', 'phone', 'email', 'company_name']
    // console.log(inputNames);
    let updatedErrors = { ...errors }; // declare variable that will update our "errors" object
    let isValid = true; // declaring variable to be in control of if some of inputs have error
    for (let inputName of inputNames) { // iterating through inputs
      if (inputName === "name" || inputName === "phone") {
        if (inputs[inputName].length < 1) {
          updatedErrors[inputName] = true;
          isValid = false;
        } else {
          updatedErrors[inputName] = false;
        }
      } else if (inputName === "email") {
        // check if email includes "@" and consist of 2 parts before and after "@"
        const checkForPartArr = inputs[inputName].split("@");
        if (!inputs[inputName].includes("@") || checkForPartArr.length < 2) {
          updatedErrors[inputName] = true;
          isValid = false;
        } else {
          updatedErrors[inputName] = false;
        }
      }
    }
    // updating "errors" object with "updatedErrors" obj
    setErrors(updatedErrors);
    return isValid;
  }
//console.log(errors);
  // using useEffect hook so on first submit we will avoid not focusing of first incorrect input
  // useEffect(() => {
  //   handleValidation();
  // }, [inputs.name, inputs.phone, inputs.email]);

  // async function for sending the data
  async function sendData() {
    const settings = {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      settings
    );
    if (response.ok) {
      const data = await response.json();
      console.log("User's id:", data.id);
    } else {
      console.log("Error:", response.statusText);
    }
  }

  // function for handling the submit
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    if (!handleValidation()) {
      // conditions for focusing of input
      if (errors.name) {
        nameRef.current.focus();
      }
      if (errors.phone && !errors.name) {
        phoneRef.current.focus();
      }
      if (errors.email && !errors.name && !errors.phone) {
        emailRef.current.focus();
      }
    } else {
      // call async function to send data
      sendData();
      alert("thank you");
    }
  }

  return (
    <main>
      <h1>Lead registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef} // set ref for "name" input
          type="text"
          name="name"
          placeholder="NAME"
          onChange={handleChange}
          onBlur={handleValidation}
        />
        {errors.name && isSubmitted && <p>Please fill out this field</p>}
        <input
          ref={phoneRef} // set ref for "phone" input
          type="tel"
          name="phone"
          placeholder="PHONE"
          onChange={handleChange}
          onBlur={handleValidation}
        />
        {errors.phone && isSubmitted && <p>Please fill out this field</p>}
        <input
          ref={emailRef} // set ref for "email" input
          name="email"
          placeholder="EMAIL ADDRESS"
          onChange={handleChange}
          onBlur={handleValidation}
        />
        {errors.email && isSubmitted && <p>Please fill out this field</p>}
        <input
          name="company_name"
          type="text"
          placeholder="COMPANY NAME"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
