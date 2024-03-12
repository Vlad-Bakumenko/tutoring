function Dog({dogs, currentDog}) {
  // Select object which name matches with dynamic segment of current URL
  const dog = dogs.find(dog=> dog.name === currentDog);
  return (
    <div className="Dog">
      <h1>Name: {dog.name}</h1>
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, i)=> <li key={i}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default Dog;