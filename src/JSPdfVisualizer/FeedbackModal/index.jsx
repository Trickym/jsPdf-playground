import React, { useState } from "react";
import Modal from "../../utilComponent/Modal";
import Label from "../../utilComponent/Label";
import TextInput from "../../utilComponent/TextInput";
import Select from "../../utilComponent/Select";
import TextArea from "../../utilComponent/TextArea";
import Loader from "../../utilComponent/Loader";
import { SHEET_URL } from "../../CONSTANTS";

function FeedbackModal({ open, onClose }) {
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const submitFeedback = (e) => {
    e.preventDefault();
    validate();
    setLoading(true);
    const formData = new FormData();
    Object.keys(values)?.map((key) => {
      formData.append(key, values[key]);
    });
    fetch(SHEET_URL, {
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
    setSubmitted(false);
    setValues({});
    setErrorMessage();
    onClose();
  };
  return (
    <Modal
      show={open}
      title={"Feedback"}
      subTitle={"Your feedback is valuable"}
      handleClose={handleClose}
      footer={
        <div className="w-100 flex justify-between items-center">
          <p className="m-0 text-sm text-red-500">{errorMessage}</p>
          <div className="flex space-x-5">
            <button
              onClick={handleClose}
              className="px-3 py-1 rounded border border-gray-500 dark:border-gray-400"
            >
              Close
            </button>
            {!submitted && (
              <button
                type="submit"
                form="feedbackForm"
                disabled={loading}
                className="bg-blue-600 text-white rounded px-4 py-1"
              >
                {loading && <Loader />} Save
              </button>
            )}
          </div>
        </div>
      }
    >
      {submitted ? (
        <div className="w-full h-full grid place-items-center py-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
            className="h-20"
          />
          <p className="text-md mt-3">Thankyou for your feedback!</p>
        </div>
      ) : (
        <form id="feedbackForm" onSubmit={submitFeedback}>
          <div className="mb-4">
            <Label required={true} htmlFor={"Name"}>
              Your Name
            </Label>
            <TextInput
              required={true}
              onChange={handleInput}
              name={"Name"}
              placeholder={"Xyz Dubey"}
              value={values?.Name}
            />
          </div>
          <div className="mb-4">
            <Label required={true} htmlFor={"Review"}>
              How much did you like it?
            </Label>
            <Select
              onChange={handleInput}
              required={true}
              name={"Review"}
              placeholder={"Select "}
              value={values?.Review}
            >
              <option value={"Loved"}>Loved it</option>
              <option value={"Liked"}>Liked it</option>
              <option value={"Okay"}>It's okay</option>
              <option value={"Dislike"}>Disliked it</option>
              <option value={"Hate"}>Hate it</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label required={true} htmlFor={"Templates"}>
              Should I add basic go-to templates to start with?
            </Label>
            <Select
              onChange={handleInput}
              required={true}
              name={"Templates"}
              placeholder={"Select your preference"}
              value={values?.Templates}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Maybe</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label htmlFor={"Suggestions"}>Suggestions</Label>
            <TextArea
              onChange={handleInput}
              name={"Suggestions"}
              rows={3}
              placeholder={"Your suggestions here..."}
              value={values?.Suggestions}
            />
          </div>
        </form>
      )}
    </Modal>
  );
}

export default FeedbackModal;
