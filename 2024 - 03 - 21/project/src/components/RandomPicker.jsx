// Step 1.8
import { useContext, useEffect } from "react"
import { RandomContext } from "../contexts/RandomContext"
import Modal from "./Modal";
import Form from "./Form";
import Items from "./Items";

function RandomPicker() {
    // Step 1.9
    const {state, handlePlay, dispatch, error}=useContext(RandomContext);
    // setInterval - with what interval function should be called
    // setTimeout - in what time function should be called
    useEffect(() => {
      if (state.isPlaying) {
        const timer = setInterval(()=>{
            dispatch({type:"PICK"})
        }, 60); // 6000 = 6 secs, 60 = 0.06 sec
        setTimeout(()=>{
            clearInterval(timer);
            dispatch({type:"PLAY"})
          }, 2000)
      }
    
    }, [state.isPlaying])

    useEffect(() => {
      localStorage.setItem("items", JSON.stringify(state.items))
    }, [state.items])
    
    
  return (
    <div>
        <h2>{state.pickedItem || "add items and pick one"}</h2>
        <Form></Form>
        <Items></Items>
        <div className="btn-container">
            <input type="button" value="Play" onClick={handlePlay} disabled={state.isPlaying}/>
            <input type="button" value="Reset" onClick={()=>dispatch({type:"RESET"})}/>
        </div>
        <div className="img-container"><img src={state.pickedGif} alt="" /></div>
        {error.open && <Modal/>}
    </div>
  )
}

export default RandomPicker