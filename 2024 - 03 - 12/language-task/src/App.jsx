import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import LanguageContextProvider from "./contexts/LanguageContext";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <Header />
        <Content />
      </LanguageContextProvider>
    </>
  );
}

export default App;
