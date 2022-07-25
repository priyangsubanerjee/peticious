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

  return (
    <button
      onClick={onClick}
      className={`${className} ${getFontSize(
        size
      )} rounded active:bg-red-500 bg-red-400 text-white font-medium p-4 transition-all duration-300 select-none flex items-center justify-center`}
    >
      <div>
        {loading ? (
          <div className={`${getFontSize(size)} flex items-center`}>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3 animate-spin"></div>
            {loadingText}
          </div>
        ) : (
          <div className="flex items-center">{children}</div>
        )}
      </div>
    </button>
  );
}

export default Button;
