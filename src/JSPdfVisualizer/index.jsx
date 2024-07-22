import React, { useEffect, useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import FeedbackModal from "./FeedbackModal";
import { DEFAULT_CODE, SHEET_URL } from "../CONSTANTS";
import { useLocation } from "react-router-dom";
function JSPdfVisualizer({ dark, handleDarkMode }) {
  const [jsPDFCode, setJsPDFCode] = useState(DEFAULT_CODE);
  const [unsavedCode, setUnsavedCode] = useState(DEFAULT_CODE);
  const location = useLocation();
  useEffect(() => {
    if (location?.state?.template) {
      setTimeout(() => {
        setJsPDFCode(location?.state?.template);
        setUnsavedCode(location?.state?.template);
      }, 100);
    }
  }, []);

  const [reviewModal, setReviewModal] = useState(false);

  const handleUnSavedCode = (code) => {
    setUnsavedCode(code);
  };
  const handleSaveCode = () => {
    setJsPDFCode(unsavedCode);
  };

  return (
    <div className={"w-full  "}>
      <div className="w-full text-gray-700 dark:bg-gray-900 dark:text-gray-100 ">
        <div className="th-desktop">
          <DesktopView
            dark={dark}
            setDark={handleDarkMode}
            unsavedCode={unsavedCode}
            jsPDFCode={jsPDFCode}
            handleUnSavedCode={handleUnSavedCode}
            handleSaveCode={handleSaveCode}
            setReviewModal={setReviewModal}
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
            setReviewModal={setReviewModal}
          />
        </div>
      </div>
      {reviewModal && (
        <FeedbackModal
          open={reviewModal}
          onClose={() => {
            setReviewModal(false);
          }}
        />
      )}
    </div>
  );
}

export default JSPdfVisualizer;
