import { useContext } from "react"
import { RandomContext } from "../contexts/RandomContext"
import Item from "./Item"

function Items() {
    const {state} = useContext(RandomContext)
  return (
    <div className="item-container">
    {state.items.map((item,i) => <Item key={i} item={item}/>)}
</div>
  )
}

export default Items