import React, { useMemo, useState } from "react";
import CustomEditor from "../Editor";
import Visualizer from "../Visualizer";
import "./index.css";
const MobileView = ({
  dark,
  setDark,
  unsavedCode,
  handleUnSavedCode,
  handleSaveCode,
  jsPDFCode,
}) => {
  const [tabs] = useState([
    {
      label: "Code",
      value: "code",
    },
    {
      label: "Output",
      value: "output",
    },
  ]);
  const [selectedTab, setSelectedTab] = useState("code");
  return (
    <>
      <div className="flex justify-between p-2">
        <button
          className="p-1 border-gray-400 dark:border-gray-500"
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
              width="24"
              height="24"
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
        <div className="flex">
          {tabs?.map(({ label, value }, index) => (
            <div
              key={value}
              onClick={() => setSelectedTab(value)}
              className={
                "px-5 py-1 tab cursor-pointer " +
                (selectedTab == value
                  ? " border-blue-700 bg-transparent text-blue-700 dark:text-white dark:bg-blue-700  "
                  : " bg-transparent border-gray-400 ")
              }
            >
              {label}
            </div>
          ))}
        </div>
        <button
          className="p-1 px-3 rounded-sm  bg-blue-600"
          onClick={() => {
            handleSaveCode();
            setSelectedTab("output");
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.91675 1.75L11.0834 7L2.91675 12.25V1.75Z"
              stroke="#fff"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="">
        {selectedTab == "code" ? (
          <CustomEditor
            unsavedCode={unsavedCode}
            handleUnSavedCode={handleUnSavedCode}
            dark={dark}
          />
        ) : (
          <Visualizer jsPDFCode={jsPDFCode} dark={dark} />
        )}
      </div>
    </>
  );
};

export default MobileView;
