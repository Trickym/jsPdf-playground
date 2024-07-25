import { useEffect, useState } from "react";
import "./App.css";
import JSPdfVisualizer from "./JSPdfVisualizer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import _ from "lodash";
import dayjs from "dayjs";
function App() {
  useEffect(() => {
    window._ = _;
    window.dayjs = dayjs;
  }, []);

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
      <Routes>
        <Route
          path="/playground"
          element={
            <JSPdfVisualizer
              dark={dark}
              setDark={setDark}
              handleDarkMode={handleDarkMode}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
