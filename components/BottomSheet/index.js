import React from "react";
import Draggable from "react-draggable";
import { Fade } from "react-reveal";
function BottomSheet({ open, setOpen, children, className }) {
  return (
    <div className={`z-20`}>
      <Fade duration={300} when={open}>
        {open && (
          <div className="fixed top-0 left-0 h-full w-full bg-black/50 z-20"></div>
        )}
      </Fade>
      <Fade bottom duration={300} when={open} delay={20}>
        {open && (
          <div className="fixed top-0 left-0 h-full w-full bg-transparent flex items-end z-30">
            <div className="rounded-t overflow-hidden w-full backdrop-blur-lg bg-white">
              {children}
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full bg-gray-100 text-slate-800 py-3 px-6"
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
