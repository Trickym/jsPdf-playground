import React from "react";

const TemplateCard = ({ title, img, onClick, color }) => {
  return (
    <div class="w-full mb-10 sm:mb-0 sm:w-1/2 cursor-pointer" onClick={onClick}>
      <div class="relative h-full ml-0 mr-0 sm:mr-10">
        <span
          class={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${color} rounded-2xl`}
        ></span>
        <div
          class={`relative h-full p-5 bg-white border-2 border-${color} rounded-2xl`}
        >
          <div
            className={`flex items-center mt-1 justify-between text-${color}`}
          >
            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">{title}</h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25403 1.46875C2.83987 1.46875 2.5041 1.80446 2.50403 2.21862C2.50396 2.63289 2.83977 2.96875 3.25403 2.96875H5.94325L1.47358 7.43842C1.18068 7.73131 1.18068 8.20619 1.47358 8.49908C1.76647 8.79197 2.24134 8.79197 2.53424 8.49908L7.00299 4.03033L7.00314 6.71982C7.00316 7.13345 7.34024 7.46875 7.75387 7.46875C8.16752 7.46875 8.50108 7.13342 8.50108 6.71978V2.21875C8.50108 1.80454 8.16529 1.46875 7.75108 1.46875H3.25403Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <img src={img} alt={title} className={`w-full  border-${color}`} />
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
