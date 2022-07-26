import React from "react";
import { Fade } from "react-reveal";
function BottomSheet({ open, setOpen, children, className }) {
  return (
    <div className={`z-20`}>
      <Fade duration={300} when={open}>
        {open && (
          <div className="fixed top-0 left-0 h-full w-full bg-black/40 z-20"></div>
        )}
      </Fade>
      <Fade bottom duration={400} when={open}>
        {open && (
          <div className="fixed top-0 left-0 h-full w-full bg-transparent flex items-end p-5 z-30">
            <div className="bg-white rounded-xl overflow-hidden w-full">
              {children}
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full border-t bg-gray-100 py-3 px-6"
              >
                <span className="ml-2">Dismiss</span>
              </button>
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default BottomSheet;
