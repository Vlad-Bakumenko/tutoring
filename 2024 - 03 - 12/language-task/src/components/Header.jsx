import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
function Header() {
  const { setCurrentLanguage } = useContext(LanguageContext);
  function handleChange(e) {
    // based on selected option updating "currentLanguage" state variable with option's value
    setCurrentLanguage(e.target.value);
    //console.log(currentLanguage);
  }

  // Resource with flag-emojis - https://emojipedia.org/flags
  return (
    <>
      <select name="" id="" onChange={handleChange}>
        <option value="DE"> 🇩🇪 &nbsp; German</option>
        <option value="EN"> 🇺🇸 &nbsp; English</option>
        <option value="DU"> 🇳🇱 &nbsp; Dutch</option>
        <option value="PE"> 🇮🇷 &nbsp; Persian</option>
        <option value="TU"> 🇹🇷 &nbsp; Turkish</option>
        <option value="FR"> 🇫🇷 &nbsp; French</option>
        <option value="ES"> 🇪🇸 &nbsp; Spanish</option>
      </select>
    </>
  );
}

export default Header;
