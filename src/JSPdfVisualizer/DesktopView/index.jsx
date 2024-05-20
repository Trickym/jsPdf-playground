import React from "react";
import CustomEditor from "../Editor";
import Visualizer from "../Visualizer";

const DesktopView = ({
  dark,
  setDark,
  unsavedCode,
  handleUnSavedCode,
  handleSaveCode,
  jsPDFCode,
  setReviewModal,
}) => {
  return (
    <div className="grid grid-cols-12 h-dvh ">
      <div className="col-span-6">
        <div className="h-100 ">
          <div className="flex justify-between align-middle px-3 py-2 border-gray-400 dark:border-gray-500 border border-b-0 border-l-0">
            <h2 className="m-0 text-xl ">Code</h2>
            <div className="flex space-x-5">
              <button
                className="p-1 border-2 rounded border-gray-400 dark:border-gray-500"
                onClick={() => {
                  setDark(!dark);
                }}
                data-tip={`Switch to ${dark ? "light" : "dark"} mode`}
                data-placement="bottom"
              >
                {dark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
              <button
                className="bg-blue-600 px-4 rounded text-white "
                onClick={handleSaveCode}
              >
                Run
              </button>
            </div>
          </div>
          <CustomEditor
            unsavedCode={unsavedCode}
            handleUnSavedCode={handleUnSavedCode}
            dark={dark}
          />
        </div>
      </div>
      <div className="col-span-6">
        <div className="w-100">
          <div className=" flex justify-between align-middle px-3 py-2 border-gray-400 dark:border-gray-500 border border-b-0 border-l-0 border-r-0">
            <h2 className="m-0 text-xl">Output</h2>
            <button
              onClick={() => setReviewModal(true)}
              className="p-1 border-2 rounded border-gray-400 dark:border-gray-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 41 39"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xml:space="preserve"
              >
                <path
                  class="st0"
                  d="M22.4,2.5l2,4c0.2,0.4,0.6,0.7,1.1,0.8l4.4,0.6c1.1,0.2,1.6,1.6,0.8,2.4l-3.2,3.1c-0.3,0.3-0.5,0.8-0.4,1.2  l0.8,4.4c0.2,1.1-1,2-2,1.5l-4-2.1c-0.4-0.2-0.9-0.2-1.3,0l-4,2.1c-1,0.5-2.2-0.3-2-1.5l0.8-4.4c0.1-0.5-0.1-0.9-0.4-1.2l-3.2-3.1  c-0.8-0.8-0.4-2.2,0.8-2.4l4.4-0.6c0.5-0.1,0.9-0.4,1.1-0.8l2-4C20.4,1.4,21.9,1.4,22.4,2.5z"
                />
                <path
                  class="st0"
                  d="M32.6,24.9l1.4,2.9c0.1,0.3,0.4,0.5,0.8,0.6l3.2,0.5c0.8,0.1,1.2,1.1,0.6,1.7l-2.3,2.3  c-0.2,0.2-0.3,0.6-0.3,0.9l0.6,3.2c0.1,0.8-0.7,1.5-1.5,1.1l-2.9-1.5c-0.3-0.2-0.7-0.2-0.9,0L28.4,38c-0.7,0.4-1.6-0.2-1.5-1.1  l0.6-3.2c0.1-0.3-0.1-0.7-0.3-0.9l-2.3-2.3c-0.6-0.6-0.3-1.6,0.6-1.7l3.2-0.5c0.3,0,0.6-0.3,0.8-0.6l1.4-2.9  C31.2,24.1,32.3,24.1,32.6,24.9z"
                />
                <path
                  class="st0"
                  d="M10.1,24.9l1.4,2.9c0.1,0.3,0.4,0.5,0.8,0.6l3.2,0.5c0.8,0.1,1.2,1.1,0.6,1.7l-2.3,2.3  c-0.2,0.2-0.3,0.6-0.3,0.9L14,37c0.1,0.8-0.7,1.5-1.5,1.1l-2.9-1.5c-0.3-0.2-0.7-0.2-0.9,0L5.8,38c-0.7,0.4-1.6-0.2-1.5-1.1l0.6-3.2  c0.1-0.3-0.1-0.7-0.3-0.9l-2.3-2.3C1.7,30,2,29,2.8,28.8L6,28.4c0.3,0,0.6-0.3,0.8-0.6l1.4-2.9C8.6,24.1,9.7,24.1,10.1,24.9z"
                />
              </svg>
            </button>
          </div>
          <Visualizer jsPDFCode={jsPDFCode} dark={dark} />
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
