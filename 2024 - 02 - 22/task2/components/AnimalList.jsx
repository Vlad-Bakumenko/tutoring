import AnimalListItem from "./AnimalListItem"
function AnimalList(props) { // passing propsObj, that why to reach "animals" array we will use dot notation
  return (
    <div>
        {/* <ul>{animals.map(animal => <li>{animal.name}</li>)}</ul> */}
        <ul>
          {/* iterating through animals and passing property of each element(object) as arguments to AnimalListItem component */}
            {props.animals.map(animal => (<AnimalListItem name={animal.name} id={animal.id} key={animal.id}/>))} 
        </ul>
    </div>
  )
}

//? The key prop 
// It is a unique identifier that React uses to efficiently manage and update elements within a list. When rendering a list of elements, it is crucial to assign a unique key to each element to help React differentiate between the items and perform updates more efficiently.

export default AnimalList