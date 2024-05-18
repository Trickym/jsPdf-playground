import React, { useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
function JSPdfVisualizer() {
  const [dark, setDark] = useState(
    localStorage?.getItem("darkMode") &&
      localStorage?.getItem("darkMode") != "undefined"
      ? JSON.parse(localStorage?.getItem("darkMode"))
      : true
  );
  const [jsPDFCode, setJsPDFCode] = useState(
    "//JS PDF VISUALIZER \nconst doc = new jsPDF();\n\ndoc.setFontSize(28)\ndoc.text('Edit to see magic happen',10,15)\n//Write your code here!\n\nreturn doc.output('blob');//Don't edit or delete this return statement.\n"
  );
  const [unsavedCode, setUnsavedCode] = useState(
    "//JS PDF VISUALIZER \nconst doc = new jsPDF();\n\ndoc.setFontSize(28)\ndoc.text('Edit to see magic happen',10,15)\n//Write your code here!\n\nreturn doc.output('blob');//Don't edit or delete this return statement.\n"
  );
  const handleUnSavedCode = (code) => {
    setUnsavedCode(code);
  };

  const handleSaveCode = () => {
    setJsPDFCode(unsavedCode);
  };

  const handleDarkMode = (dark) => {
    setDark(dark);
    console.log(dark);
    localStorage.setItem("darkMode", JSON.stringify(dark));
  };
  return (
    <div className={"w-100  " + (dark ? "dark" : "")}>
      <div className="w-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100 ">
        <div className="th-desktop">
          <DesktopView
            dark={dark}
            setDark={handleDarkMode}
            unsavedCode={unsavedCode}
            jsPDFCode={jsPDFCode}
            handleUnSavedCode={handleUnSavedCode}
            handleSaveCode={handleSaveCode}
          />
        </div>
        <div className="th-mobile h-dvh">
          <MobileView
            dark={dark}
            setDark={handleDarkMode}
            unsavedCode={unsavedCode}
            jsPDFCode={jsPDFCode}
            handleUnSavedCode={handleUnSavedCode}
            handleSaveCode={handleSaveCode}
          />
        </div>
      </div>
    </div>
  );
}

export default JSPdfVisualizer;
