import AnimalList from "../components/AnimalList"; // importing AnimalList component to render it on page
import animals from "./data.js" // importing array of objects(each obj has properties "id" and "name")

function App() {
  return (
    <>
      <main>
        <h1>The best animals</h1>
        {/* passing to AnimalList array as property of propsObj */}
        <AnimalList animals = {animals}/> 
      </main>
    </>
  );
}

export default App;