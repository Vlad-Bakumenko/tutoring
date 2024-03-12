import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

function Content() {
    const {currentLanguage} = useContext(LanguageContext);
    const messages = {
        EN: "Hello World!",
        DE: "Hallo Welt!",
        DU: "Hallo Wereld",
        PE: "سلام دنیا",
        FR: "Bonjour le monde",
        TU: "Selam Dünya",
        ES: "Hola Mundo"
        }
        
  return (
    <>
    {/* based on the value of option accessing property of "messages" Object */}
    <div>{messages[currentLanguage]}</div>
    </>
  )
}

export default Content