import contentArray from "./data.js"; // importing array of paragraphs
import "./App.css"; // importing CSS-file for App.jsx //! Important that we don't need to export CSS-file
import Footer from "./components/Footer.jsx"; // importing Footer component
import Header from "./components/Header.jsx"; // importing Header component
import Main from "./components/Main.jsx"; // importing Main component

//? Components
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components. Function components are modern way.

//? Props 
// The props argument is an argument that React passes to its Components when they are being rendered(and updated too). The name is not just to be props, it can be anything. It was following naming conventions, the props name tells us it's a prop/property passed to the Component.

// So, the "attributes" passed to the ReactComponent can be accessed as properties in the props argument. As we said before the props argument is an object.

//? Steps for importing components:
// 1) Create component in component directory;
// 2) In component : rfce (to create reactFunctionalExportComponent)
// 3) Make sure that you have at bottom: "export default <name of component>"
// 4) Go to necessary .jsx-file (it can be "App.jsx" or other components) and import there 
// 5) In function of that file in "return" - place it where you want. 2 formats: <Header /> or <Header></Header>

function App() {
  return (
    <div className="appWrapper">
      <Header />
      {/*name of property of props obj 
                 |            
                 |
                 |     
                 |        value of that property (array  that we 
                        imported from data.js)*/}
      <Main contentArray = {contentArray} />
      <Footer />
    </div>
  );
}

export default App;
