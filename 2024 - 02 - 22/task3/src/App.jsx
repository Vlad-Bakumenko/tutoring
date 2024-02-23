import 'bootstrap/dist/css/bootstrap.css'
import UserProfile from '../components/UserProfile' // importing UserProfile component to render John Doe and Jane Doe
import ListOfUsers from '../components/ListOfUsers' // importing ListOfUsers component for bonus task to render list of users in array(which is in data.js)

function App() {
  const user1 = { // declaring 2 objects for users 
    name: "John Doe",
    age: 28,
    location: "San Francisco"
  }
  const user2 = {
    name: "Jane Doe",
    age: 24
  }
  return (
    <div className="container mt-5">
      <h1>Render the user profile component here</h1>
      {/* Passing to UserProfile component arguments which are properties of user1 and user2 objects */}
      <UserProfile name={user1.name} age={user1.age} location={user1.location}/>
      <UserProfile name={user2.name} age={user2.age} location={user2.location}/>
      <ListOfUsers/>
    </div>
  )
}

export default App
