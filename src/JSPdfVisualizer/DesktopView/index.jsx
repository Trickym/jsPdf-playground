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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="toggle-dark-mode-mobile-icon sun svg replaced-svg"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="moon svg replaced-svg"
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
            <button className="p-1 border-2 rounded border-white dark:border-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-white dark:text-gray-900"
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
            </button>
          </div>
          <Visualizer jsPDFCode={jsPDFCode} dark={dark} />
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
