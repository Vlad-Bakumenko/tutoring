const h1 = document.querySelector("h1")
h1.style =  "background-color: lightblue; color: blue;"

//? Async

// For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.

// For module scripts, if the async attribute is present then the scripts and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.

//? Defer

// Set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.

// Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.

//! The defer attribute has no effect on module scripts — they defer by default.

// Scripts with the defer attribute will execute in the order in which they appear in the document.

//? Similarity of Async and Defer

// This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse.

//? Main difference between async and defer

// Order of Execution: async scripts execute as soon as they are downloaded, which is not necessarily in the order in which they appear in the document. defer, on the other hand, preserves the order and ensures that scripts execute after the document has been parsed.

//? Advantage of "defer"

// By using the defer attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

//! For better understanding check pictures in this directory