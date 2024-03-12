import { NavLink } from "react-router-dom";

function Nav({dogs}) {
  return (
    <nav>
      {/* Iterating through dogs array and pass properties to NavLink: id - for key-prop, name - for URL of every dog, image - for source of every image */}
      {dogs.map(dog => (
        <NavLink key={dog.id} to={`/dogs/${dog.name}`}><img src={dog.image} alt="" />
        {dog.name}</NavLink>
      ))}
    </nav>
  );
}

export default Nav;