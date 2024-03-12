import Nav from "./Nav";
import Dog from "./Dog";
import { useParams } from "react-router-dom";

function Dogs({dogs}) {
 // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.

  const { name } = useParams(); // take dynamic segment based on current URL - to be in control of which dog is clicked

  //console.log(name);

  return (
    <div>
      <Nav dogs={dogs}></Nav>
      {/* Conditional rendering in order to avoid errors in case when we switch to parent route */}
      {name && <Dog dogs={dogs} currentDog={name}/>}   
    </div>
  );
}

export default Dogs;
