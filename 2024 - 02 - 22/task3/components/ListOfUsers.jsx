import arrOfUsers from "../src/data.js" // importing array from data.js
import UserProfile from "./UserProfile.jsx" // importing UserProfile component to pass to it properties of every object in arrOfUsers

function ListOfUsers() {
    //console.log(arrOfUsers);
  return (
    <div>
      {/* iterating through arrOfUsers and passing property of each element(object) as arguments to UserProfile component  */}
        {arrOfUsers.map(user=> (<UserProfile name={user.name} age={user.age} location={user.location}/>))} 
    </div>
  )
}

export default ListOfUsers