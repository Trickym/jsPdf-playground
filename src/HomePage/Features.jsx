import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div class="py-6 relative flex flex-col gap-10 h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <div className="">
        <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
          Transform Your PDF Development Workflow
        </h2>
        <p class="text-lg text-gray-500 ">
          Say goodbye to the tedious cycle of coding, saving, and downloading
          PDFs.
        </p>
      </div>

      <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
          <FeatureCard
            title={"Real-Time Previews"}
            description={"Instantly see how your code affects your PDF output."}
            color={"indigo-500"}
          />
          <FeatureCard
            title={"Interactive Coding"}
            description={
              "Modify your code and watch changes in real-time, speeding up the development process."
            }
            color={"purple-500"}
          />
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
          <FeatureCard
            title={"Simplified Workflow"}
            description={
              "Focus more on creativity and less on repetitive tasks with an intuitive interface."
            }
            color={"blue-400"}
          />
          <FeatureCard
            title={"Customizable Templates"}
            description={
              "Start with pre-built templates or create your own to fit your needs."
            }
            color={"yellow-400"}
          />
          <FeatureCard
            title={"Export and Share"}
            description={
              "Easily export your PDFs or share your creations directly from the playground."
            }
            color={"green-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
