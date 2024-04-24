import { useState } from 'react'

// To check backend directory - go to https://github.com/Vlad-Bakumenko/weather-app_v2

function App() {

  const [input, setInput]=useState(""); // how I control user input
  const [weatherData, setWeatherData] = useState(null); // where I will store the response
  const fetchUrl = "https://weather-app-v2-ao7b.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${fetchUrl}/weather/${input}`);
    try {
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setInput("");
      } else {
        throw new Error("There is no such city")
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>Use your own weather API!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your city' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
      {weatherData && <div>
        <h3>{weatherData.name}: {(weatherData.main.temp.toFixed(0))}°C</h3>
        <h3>Feels like {(weatherData.main.feels_like.toFixed(0))} °C</h3>
        <p>Today's max {(weatherData.main.temp_max.toFixed(0))}°C, min {(weatherData.main.temp_min.toFixed(0))}°C</p>
      </div>}
    </>
  )
}

export default App
