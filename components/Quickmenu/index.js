import React, { useState, useEffect } from "react";
import CreateQuestion from "../Question/CreateQuestion";

function Quickmenu() {
  const [createQuestion, setCreateQuestion] = useState(false);
  return (
    <div>
      <div className="flex items-center">
        <div className="w-full bg-pink-50 border-b rounded-md grid grid-cols-3">
          <div
            onClick={() => setCreateQuestion(true)}
            className="flex flex-col items-center justify-center bg-white px-4 py-2 border-r"
          >
            <i className="bi bi-patch-question-fill text-xl text-blue-400"></i>
            <span className="text-xs mt-1">Ask a question</span>
          </div>
          <div className="flex flex-col items-center border-r justify-center bg-white px-4 py-2">
            <i className="bi bi-postcard-heart-fill text-xl text-pink-400"></i>
            <span className="text-xs mt-1">Create a post</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white px-4 py-2">
            <i className="bi bi-cloud-plus-fill text-xl text-purple-400"></i>
            <span className="text-xs mt-1">Upload a record</span>
          </div>
        </div>
      </div>
      <CreateQuestion open={createQuestion} setOpen={setCreateQuestion} />
    </div>
  );
}

export default Quickmenu;
