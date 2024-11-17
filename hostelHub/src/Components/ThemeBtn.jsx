import React from "react";
const ThemeBtn = ({ text }) => {
  return (
    <button className="btn w-40 bg-gradient-to-r from-themeColor to-themeSecendary font-bold text-white">
      {text}
    </button>
  );
};

export default ThemeBtn;
