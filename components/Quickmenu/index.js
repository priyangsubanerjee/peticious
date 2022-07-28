import React, { useState, useEffect } from "react";
import CreateQuestion from "../Question/CreateQuestion";
import BottomSheet from "../BottomSheet";

function Quickmenu({ className }) {
  const [createQuestion, setCreateQuestion] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false);
  return (
    <div>
      <div className="flex items-center">
        <div
          className={`${className} w-full border-b rounded-md grid grid-cols-3`}
        >
          <div
            onClick={() => setCreateQuestion(true)}
            className="flex flex-col items-center justify-center bg-white px-4 py-2 border-r"
          >
            <i className="bi bi-patch-question-fill text-xl text-blue-400"></i>
            <span className="text-xs font-medium mt-1">Ask a question</span>
          </div>
          <div className="flex flex-col items-center border-r justify-center bg-white px-4 py-2">
            <i className="bi bi-postcard-heart-fill text-xl text-pink-400"></i>
            <span className="text-xs font-medium mt-1">Create a post</span>
          </div>
          <div
            onClick={() => setMoreOptions(true)}
            className="flex flex-col items-center justify-center bg-white px-4 py-2"
          >
            <i className="bi bi-three-dots text-xl text-purple-400"></i>
            <span className="text-xs font-medium mt-1">More</span>
          </div>
        </div>
      </div>
      <CreateQuestion open={createQuestion} setOpen={setCreateQuestion} />
      <BottomSheet open={moreOptions} setOpen={setMoreOptions}>
        <ul>
          <li className="flex items-center py-5 px-6 border-b">
            <i className="bi bi-plus-lg"></i>
            <span className="ml-3">Add new pet</span>
          </li>
          <li className="flex items-center py-5 px-6 border-b">
            <i className="bi bi-cloud-upload"></i>
            <span className="ml-3">Upload new record</span>
          </li>
          <li className="flex items-center py-5 px-6 border-b">
            <i className="bi bi-clock"></i>
            <span className="ml-3">Add reminder</span>
          </li>
        </ul>
      </BottomSheet>
    </div>
  );
}

export default Quickmenu;
