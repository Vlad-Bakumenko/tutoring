import "./Main.css"

function Main({contentArray}) { // destructuring propsObj and passing to function its property "contentArray"
  return (
    <div>
      <main>
        <h1>
          Welcome to <span>Company</span>
        </h1>
        {contentArray.map((text, index) => (
          <p key={index}>{text}</p> // put every element of contentArray(paragraph) into <p> tag
        ))}
        <p><a href="#">Back to top</a></p>
      </main>
    </div>
  );
}

export default Main;