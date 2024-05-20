import React from "react";

function Select({ onChange, value, name, placeholder, required, children }) {
  return (
    <select
      className="outline-0 block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900  dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:border-gray-400 focus:ring-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-400 p-2.5 text-sm rounded-lg"
      name={name}
      onChange={onChange}
      value={value}
      required={required}
    >
      <option value={"none"} selected disabled hidden>
        {placeholder}
      </option>
      {children}
    </select>
  );
}

export default Select;
