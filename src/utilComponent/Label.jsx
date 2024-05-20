import React from "react";

function Label({ htmlFor, children, required }) {
  return (
    <div className="mb-1">
      <label
        htmlFor={htmlFor}
        className="w-full text-sm font-medium text-gray-900 dark:text-white "
      >
        {required && "*"} {children}
      </label>
    </div>
  );
}

export default Label;
