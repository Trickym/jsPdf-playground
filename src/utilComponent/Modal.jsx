import React from "react";
const Modal = ({ title, subTitle, show, handleClose, children, footer }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center  ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        onClick={handleClose}
        className="absolute w-full h-full bg-black dark:bg-gray-900 dark:bg-opacity-50 bg-opacity-50 z-10"
      ></div>
      <div
        style={{
          width: window.innerWidth > 600 ? 600 : window.innerWidth - 10,
        }}
        className="bg-white rounded shadow-lg z-20 modal-base text-gray-700 dark:text-gray-100 dark:bg-gray-800"
      >
        <div className="p-3">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-2xl m-0">{title}</h2>
              <p className="text-sm m-0">{subTitle}</p>
            </div>
            <button onClick={handleClose} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                width="18"
                height="18"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <hr className="m-0 border-b-gray-600 dark:border-gray-500" />
        <div className="py-1 px-3">{children}</div>
        <hr className="m-0 border-b-gray-600 dark:border-gray-500" />
        <div className="p-3">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
