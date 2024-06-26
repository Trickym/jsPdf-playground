import React, { useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import FeedbackModal from "./FeedbackModal";
import { DEFAULT_CODE, SHEET_URL } from "../CONSTANTS";
function JSPdfVisualizer({ dark, handleDarkMode }) {
  const [jsPDFCode, setJsPDFCode] = useState(DEFAULT_CODE);
  const [unsavedCode, setUnsavedCode] = useState(DEFAULT_CODE);

  const [reviewModal, setReviewModal] = useState(false);

  const handleUnSavedCode = (code) => {
    setUnsavedCode(code);
  };
  const handleSaveCode = () => {
    setJsPDFCode(unsavedCode);
  };

  return (
    <div className={"w-100  "}>
      <div className="w-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100 ">
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
