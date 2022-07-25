import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Navbar from "../Navbar";

function CreateQuestion({ open, setOpen }) {
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div>
      <Fade when={open} duration={300}>
        {open && (
          <div className="fixed top-0 left-0 h-full w-full flex bg-black/30 z-20">
            <div className="h-full w-full bg-white overflow-y-auto">
              <div className="flex items-center p-4">
                <i
                  onClick={() => setOpen(false)}
                  className="bi bi-x ml-auto text-2xl"
                ></i>
              </div>
              <div className="flex items-cente justify-center">
                <i className="bi bi-patch-question text-2xl"></i>
                <p className="text-xl font-bold text-slate-900 ml-3">
                  Ask a question.
                </p>
              </div>
              <>
                <div className="flex w-fit mx-auto items-center justify-center mt-4 bg-blue-50  text-blue-500 py-2 px-4 rounded-md">
                  <i className="bi bi-clock-history mr-2 text-sm"></i>
                  <p className="text-xs">Avg reply time is 30 min&apos;s</p>
                </div>
                <div className="px-6 mt-16">
                  <input
                    type="text"
                    placeholder={`Start your question with "How?" "What?" etc.`}
                    className="w-full border-b pb-2 font-medium text-lg outline-none"
                    name=""
                    id=""
                  />
                  <div className="flex items-center bg-red-50 w-fit px-5 py-2 mt-5 text-red-500 rounded-full">
                    <i className="bi bi-paperclip rotate-90 mr-2"></i>
                    <span className="text-xs">Attach file</span>
                  </div>
                  <div className="bg-slate-50 mt-8 p-4">
                    <p className="text-sm font-semibold text-slate-700">
                      Choose appropriate tags
                    </p>
                    <div className="mt-4">
                      <span className="text-xs border border-slate-400 text-slate-600 px-2 py-1 rounded-sm inline-block mr-2">
                        Health
                      </span>
                      <span className="text-xs border border-slate-400 text-slate-600 px-2 py-1 rounded-sm inline-block mr-2">
                        SOS
                      </span>
                      <span className="text-xs border border-slate-400 text-slate-600 px-2 py-1 rounded-sm inline-block mr-2">
                        Training
                      </span>
                    </div>
                  </div>
                  <button className="bg-red-400 text-white w-full py-3 rounded-full mt-10 font-medium">
                    Submit
                  </button>
                </div>
                <p
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-600 text-center mt-10"
                >
                  Discard
                </p>
              </>
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default CreateQuestion;
