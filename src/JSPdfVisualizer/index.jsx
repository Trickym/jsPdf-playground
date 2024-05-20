import React, { useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import Modal from "../utilComponent/Modal";
import Label from "../utilComponent/Label";
import TextInput from "../utilComponent/TextInput";
import TextArea from "../utilComponent/TextArea";
import Select from "../utilComponent/Select";
import Loader from "../utilComponent/Loader";
import FeedbackModal from "./FeedbackModal";
function JSPdfVisualizer({ dark, setDark }) {
  const [reviewModal, setReviewModal] = useState(false);
  const [jsPDFCode, setJsPDFCode] = useState(
    "//JS PDF VISUALIZER \nconst doc = new jsPDF();\n\ndoc.setFontSize(28)\ndoc.text('Edit to see magic happen',10,15)\n//Write your code here!\n\nreturn doc.output('blob');//Don't edit or delete this return statement.\n"
  );
  const [unsavedCode, setUnsavedCode] = useState(
    "//JS PDF VISUALIZER \nconst doc = new jsPDF();\n\ndoc.setFontSize(28)\ndoc.text('Edit to see magic happen',10,15)\n//Write your code here!\n\nreturn doc.output('blob');//Don't edit or delete this return statement.\n"
  );
  const handleUnSavedCode = (code) => {
    setUnsavedCode(code);
  };

  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSaveCode = () => {
    setJsPDFCode(unsavedCode);
  };

  const handleDarkMode = (dark) => {
    setDark(dark);
    console.log(dark);
    localStorage.setItem("darkMode", JSON.stringify(dark));
  };

  const handleInput = (event) => {
    setErrorMessage("");
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    if (!values.Name) {
      setErrorMessage("Name is a reuired field!");
      return;
    }
    if (!values.Review) {
      setErrorMessage("Review is a required field!");
      return;
    }
    if (!values.Templates) {
      setErrorMessage("Select your preference about templates!");
      return;
    }
  };

  let scriptUrl = `https://script.google.com/macros/s/AKfycbylM2Ky1_8KkPCcjI4XOEd35N0_YbSB6GvnSCa84ejiP-EkJRF24bfaxTkhvtBVz47g/exec`;
  const submitFeedback = (e) => {
    e.preventDefault();
    validate();
    setLoading(true);
    const formData = new FormData();
    Object.keys(values)?.map((key) => {
      formData.append(key, values[key]);
    });
    fetch(scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err?.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = () => {
    setReviewModal(false);
    setSubmitted(false);
    setValues({});
    setErrorMessage();
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
          handleClose={handleClose}
          submitted={submitted}
          loading={loading}
          submitFeedback={submitFeedback}
          values={values}
          handleInput={handleInput}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
}

export default JSPdfVisualizer;
