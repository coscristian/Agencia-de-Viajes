import React, { useEffect, useState } from "react";


const InformationLayout = ({
  tableTitle,
  buttonTableText,
  formTitle,
  buttonFormText,
  showTable,
  setShowTable,
  table,
  form,
}) => {
  const [titleText, setTitleText] = useState(tableTitle);
  const [buttonText, setButtonText] = useState(buttonTableText);

  useEffect(() => {
    if (showTable) {
      setButtonText(buttonTableText);
      setTitleText(tableTitle);
    } else {
      setButtonText(buttonFormText);
      setTitleText(formTitle);
    }
  }, [showTable]);

  return (
    <div className="flex flex-col my-5 w-full justify-center items-center mb-16 bg-gray-100 h-screen">
      <div className="flex w-full justify-evenly">
        <h2 className="text-2xl my-5 font-sans font-bold">{titleText}</h2>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {
            setShowTable(!showTable);
          }}
        >
          {buttonText}
        </button>
      </div>
      {showTable ? table : form}

    </div>
  );
};

export default InformationLayout;

