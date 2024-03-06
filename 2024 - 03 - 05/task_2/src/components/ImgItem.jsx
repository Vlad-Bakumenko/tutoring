// Import spinner-solid.svg from the images
import spinnerImg from "../images/spinner-solid.svg";
import { useState, useEffect } from "react";
// in ImgItem.jsx, import { keyframes } from the styled-components, along with styled
import styled, { keyframes } from "styled-components";

// create a variable called rotate and apply keyframes to give a rotating effect.

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;


// Styled component for images
// If component has property of propsObject "$rotateThis" then apply animation "rotate", that we create above
const StyledImg = styled.img`
  width: 18rem;
  height: 10rem;
  animation-name:${(props)=> props.$rotateThis && rotate};
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;



function ImgItem({ link }) {
  // Declare state variable that will be in control if component is loaded
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true); // in 2 secs after initial render - state variable will be updated to "true"
    }, 2000);
  }, []);

  return (
    <>
      {/* Take in the image "link" from props */}

      {/* Render both the spinner(svg) and the source image(from imageLinks) */}
      {/* src={link} - our images from imageLinks.js; src={spinnerImg} - spinner image */}
      {isLoaded ? (
        <StyledImg src={link} alt="" /> 
      ) : (
        <StyledImg $rotateThis src={spinnerImg} alt="" />
      )}
    </>
  );
}

export default ImgItem;
