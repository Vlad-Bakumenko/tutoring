import './App.css'
import RandomPicker from "./components/RandomPicker"

//? Main concepts:
// 1. useReducer+useContext = global data available in all components we want
// 2. useEffect+dispatch = carrying out some action based on the value of state / property of state object
// 3. localStorage
// 4. Splitting elements into separate components
// 5. Popup react-library for alerting

function App() {
  return (
    <>
    <RandomPicker />
    </>
  )
}

export default App