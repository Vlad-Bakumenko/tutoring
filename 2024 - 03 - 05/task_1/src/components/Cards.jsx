import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

// Styled component for container of images
const Wrapper = styled.div`
background-color:#242424;
display:flex;
flex-wrap: wrap;
gap: 1rem;
justify-content:center;
padding:1rem;
`

function Cards() {
    // In Cards.jsx,fetch random 20 images from https://picsum.photos/v2/list?limit=20
    const [images, setImages] = useState([]);
    useEffect(() => {
      async function fetchImages() {
        const response = await fetch("https://picsum.photos/v2/list?limit=20");
        if(response.ok) {
            const result = await response.json(); // array of objects
            console.log(result);
            // Store the fetched data (JSON array) in the state variable
            setImages(result);
        }
        
      }
    fetchImages();
    
    }, [])
    
  return (
    <Wrapper>
      {/* iterating through fetched array, pass every object to "Card" component and render it in "Wrapper" component */}
        {images.map(cardObj => <Card cardObj={cardObj} key={cardObj.id}/>)}
    </Wrapper>
    
  )
}

export default Cards