import React from "react";

const TabButton = ({ active, selectTab , children }) => {
  const buttonClasses = active
    ? 'text-white'
    : 'mr-3 font-semibold hover:text-white text-[#ADB7BE]';
  return (
    <button onSelect={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white  ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
