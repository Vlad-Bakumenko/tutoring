//? useEffect
// useEffect is a React Hook that lets you synchronize a component with an external system.

import { useState, useEffect } from "react";
import Organization from "./components/Organization"

//? Usage
// 1. Connecting to an external system - Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page.
// 2. Wrapping Effects in custom Hooks - create hook in 1 components, use it in others
// 3. Controlling a non-React widget - For example, if you have a third-party map widget or a video player component written without React, you can use an Effect to call methods on it that make its state match the current state of your React component.
//? To check more usecases - https://react.dev/reference/react/useEffect#usage

//? Syntax :

// useEffect(() => {
//   setup

//   return () => {
//     cleanup Function
//   }
// }, [dependencies])

// setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function.

//? Workflow:
// - When your component is added to the DOM, React will run your setup function. 
// - After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. (e.g. clearTimeout() - The global clearTimeout() method cancels a timeout previously established by calling setTimeout().)
// - After your component is removed from the DOM, React will run your cleanup function.

// (optional) dependencies: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. 
// If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. 
// The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. 
// React will compare each dependency with its previous value. If you omit this argument, your Effect will re-run after every re-render of the component. See the difference between passing an array of dependencies, an empty array, and no dependencies at all.
// It’s optional. If you don’t specify it, the effect runs after each render.
// If it’s empty ([]), the effect runs once, after the initial render.
// It must — or as we’ll see later, should — contain the list of values used in the effect. 
// !The effect runs after any of these values changes (and after the initial render).


function App() {
  const [orgs, setOrgs] = useState([]);
  //      |      |            |
  //      |      |       passing initial value ([]) for "orgs" variable
  //      |   create function for updating "orgs" variable 
  // create state variable

  const [currentOrg, setCurrentOrg] = useState("");
  //      |      |            |
  //      |      |       passing initial value ("") for "currentOrg" variable
  //      |   create function for updating "currentOrg" variable 
  // create state variable

  const [currentOrgData, setCurrentOrgData] = useState({});
  //      |      |            |
  //      |      |       passing initial value ({} because Respond object contains Object in it) for "currentOrgData" variable
  //      |   create function for updating "currentOrgData" variable 
  // create state variable

  useEffect(() => {
    async function fetchOrgs() {
      const response = await fetch("/orgs.csv"); // fetching data from file 
      const result = await response.text(); // returns a promise that resolves with a String
      // The text() method of the Response interface takes a Response stream and reads it to completion. It returns a promise that resolves with a String.
      //console.log(result);
      const orgsArr = result.split(","); // assign "result" splited into array to "orgsArr"
      setOrgs(orgsArr); // update "orgs" with "orgsArr"
      setCurrentOrg(orgsArr[0]); // update "currentOrg" with 1st element of "orgsArr"
    }
    fetchOrgs();
    
  }, []) // because of "dependencies" is [] : the effect runs once, after the initial render
  // console.log(orgs);
  useEffect(()=> {
    async function fetchCurrentOrg() {
      const response = await fetch(`https://api.github.com/orgs/${currentOrg}`); // fetching data from GitHub of organization
      //console.log(response);
      const result = await response.json(); 
      // json() - the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
      setCurrentOrgData(result); // updating "currentOrgData" with "result" object
    }
    if (currentOrg) {
      fetchCurrentOrg();
      //console.log(currentOrgData);
    }
  }, [currentOrg]) // because of "dependencies" is [currentOrg] effect runs after currentOrg value changes (and after the initial render). If we leave here [] - then page will not show information about GitHub of organization after refreshing the page

  return (
    <>
    {/* Rendering Organization component with passed arguments */}
    {currentOrg ? <Organization orgs={orgs} currentOrg={currentOrg} currentOrgData={currentOrgData} setCurrentOrg={setCurrentOrg}/> : <p>Loading...</p>}
    </>
  );
}

export default App;
