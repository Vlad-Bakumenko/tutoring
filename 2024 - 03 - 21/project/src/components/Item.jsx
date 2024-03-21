import { useContext } from "react"
import { RandomContext } from "../contexts/RandomContext"

function Item({item}) {
    const {dispatch} = useContext(RandomContext);
  return (
    <div><p>{item}</p> <button onClick={()=>dispatch({type:"DELETE", payload: item})}>X</button></div>
  )
}

export default Item