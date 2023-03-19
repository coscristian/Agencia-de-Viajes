import React from "react";

const SidebarOption = ({optionText}) => {
  return (
    <li className="py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl">
        {optionText}
    </li>
  );
};

export default SidebarOption;
