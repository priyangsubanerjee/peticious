import React from "react";

function Button({ size, children, className, loading, loadingText, onClick }) {
  const getFontSize = (size) => {
    if (size === 3) {
      return "text-base";
    } else if (size === 2) {
      return "text-sm";
    } else if (size === 1) {
      return "text-xs";
    } else {
      return "text-base";
    }
  };

  const iconSize = (size) => {
    if (size === 3) {
      return "text-md";
    } else if (size === 2) {
      return "text-sm";
    } else if (size === 1) {
      return "text-sm";
    } else {
      return "text-base";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${className} ${getFontSize(
        size
      )} rounded active:bg-red-500 bg-red-400 text-white font-medium py-2 px-4 transition-all duration-300 select-none`}
    >
      <div>
        {loading ? (
          <div className={`${getFontSize(size)} flex items-center`}>
            <i
              className={`${iconSize(
                size
              )} bi bi-arrow-clockwise mr-2 animate-spin`}
            ></i>
            Loading
          </div>
        ) : (
          <div className="flex items-center">{children}</div>
        )}
      </div>
    </button>
  );
}

export default Button;
