import styled from "styled-components";

// Define Styled Components outside of the render method

// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.

// Styled component for card wrapper
const CardWrapper = styled.div`
  width: 20rem;
  height: 25rem;
  background-color:#242424;
  color:white;
  border: 1px solid gray;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`;
// Styled component for image
const Img = styled.img`
width:100%;
`;

// Styled component for button
const Button = styled.button`
width:4rem;
height:3rem;
background-color:black;
color:#FF00C5;
font-weight:bold;
border:none;
border-radius:0.5rem;
`
// const SubmButton = styled(Button)`
// background-color:green;
// `


function Card({ cardObj }) {
  return (
    <>
      {/* each iterated object data will be displayed in the sub-component Card.jsx
h3 title (object's author)
img as object's download_url
p as object`s url */}
      <CardWrapper>
        <h3>{cardObj.author}</h3>
        <Img src={cardObj.download_url} alt="" />
        <p>{cardObj.url}</p>
        <Button>Click</Button>
        {/* <SubmButton>Submit</SubmButton> */}
      </CardWrapper>
    </>
  );
}

export default Card;
