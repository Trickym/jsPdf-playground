import React from "react";

const FeatureCard = ({ title, description, color }) => {
  return (
    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
      <div class="relative h-full ml-0 mr-0 sm:mr-10">
        <span
          class={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${color} rounded-2xl`}
        ></span>
        <div
          class={`relative h-full p-5 bg-white border-2 border-${color} rounded-2xl`}
        >
          <div class="flex items-center -mt-1">
            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">{title}</h3>
          </div>
          <p class={`mt-3 mb-1 text-xs font-medium text-${color} uppercase`}>
            ------------
          </p>
          <p class="mb-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
