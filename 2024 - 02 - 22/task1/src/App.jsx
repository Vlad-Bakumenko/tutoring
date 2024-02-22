import contentArray from './data.js'
import './App.css'
import img from '/vite.svg'
import burger from '/burger.svg'
import Footer from './components/Footer.jsx'
import "./components/Header.css"

function App() {
  return (
    <div className="appWrapper">
       <header>
      <div className="logo">
        <img src={img} alt="Company Logo" />
      </div>
      <nav>
        <a href="#foo">Home</a>
        <a href="#bar">Products</a>
        <a href="#baz">Careers</a>
        <a href="#qux">Contact</a>
      </nav>
      <img
        id="burger"
        src={burger}
        alt="Menu icon"
        onClick={() => alert("Beep boop")}
      />
    </header>
    <main>
        <h1>Welcome to <span>Company</span></h1>
        {contentArray.map((text,index) => <p key={index}>{text}</p>)}
      </main>
      <Footer />
    </div>
  )
}

export default App
