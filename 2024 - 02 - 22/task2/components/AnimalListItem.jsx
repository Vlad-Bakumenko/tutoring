function AnimalListItem({name,id}) {
    const singleName = name.split(",")[0] // splitting string into array with 2 elements divided by comma and assign to variable - first element
  return (
    <li key={id}>{singleName}</li> // rendering this name in li, pass key to it - to avoid warning
  )
}

export default AnimalListItem

