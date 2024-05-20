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
  return (
      <div className={dark ? "dark" : ""}>
        <JSPdfVisualizer dark={dark} setDark={setDark} />
      </div>
  );
}

export default App;
