import React from "react";

const CustomLabel = ({ htmlFor, children }) => {
  return (
    <label
      className="lg:text-xl w-full bg-headline-color rounded-lg text-primary-color border border-headline-color shadow-md py-1 lg:py-4 px-8 block hover:bg-primary hover:text-headline checked:bg-tertiary"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default CustomLabel;
