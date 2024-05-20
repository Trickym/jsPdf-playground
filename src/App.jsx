import { useState } from "react";
import "./App.css";
import JSPdfVisualizer from "./JSPdfVisualizer";

function App() {
  const [dark, setDark] = useState(
    localStorage?.getItem("darkMode") &&
      localStorage?.getItem("darkMode") != "undefined"
      ? JSON.parse(localStorage?.getItem("darkMode"))
      : true
  );

  const handleDarkMode = (dark) => {
    setDark(dark);
    console.log(dark);
    localStorage.setItem("darkMode", JSON.stringify(dark));
  };

  return (
    <div className={dark ? "dark" : ""}>
      <JSPdfVisualizer
        dark={dark}
        setDark={setDark}
        handleDarkMode={handleDarkMode}
      />
    </div>
  );
}

export default App;
