// Import the array of image links from imageLinks.js
import imageLinks from "./imageLinks";
// Create an ImgItem.jsx component and import it
import ImgItem from "./components/ImgItem";
import './App.css'
import styled from "styled-components"

// Styled component for container of images
const StyledDiv = styled.div`
width:100%;
display:flex;
flex-wrap: wrap;
gap: 1rem;
`
function App() {
  

  return (
    <StyledDiv>
    {/* Map through the array, render an ImgItem for each image */}
      {imageLinks.map((link,index)=> <ImgItem link={link} key={index}/>)}
    </StyledDiv>
  )
}

export default App
