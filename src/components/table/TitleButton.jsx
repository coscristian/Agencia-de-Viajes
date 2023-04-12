import React from "react";

const TitleButton = ({titleText, buttonText, setShowTable, showTable}) => {
  return (
    <div className="flex w-full justify-evenly">
      <h2 className="text-2xl my-5 font-sans font-bold">{titleText}</h2>
      <button
        type="button"
        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => {
          setShowTable(!showTable);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TitleButton;
