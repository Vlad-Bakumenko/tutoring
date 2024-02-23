function UserProfile({name, age, location}) { // destructuring propsObj and access it's properties that we set in App.jsx
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{location || "Location Unknown"}</p>
    </div>
  )
}

export default UserProfile