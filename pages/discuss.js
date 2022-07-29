import React from "react";
import Container from "../components/Layout/Container";
import QuestionCard from "../components/Question/QuestionCard";
import Quickmenu from "../components/Quickmenu";

function Discuss() {
  return (
    <div>
      <Quickmenu />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 py-4">
          <QuestionCard id="2002" />
          <QuestionCard id="2003" />
          <QuestionCard id="2004" />
        </div>
        <div className="px-6 py-4 grid grid-cols-3 fixed bottom-0 left-0 w-full border-t bg-white">
          <div className="flex items-center w-full justify-center">
            <i className="bi bi-house"></i>
            <span className="text-sm ml-2">Home</span>
          </div>
          <div className="flex text-red-500 items-center justify-center w-full">
            <i className="bi bi-lightbulb"></i>
            <span className="text-sm ml-2">Discuss</span>
          </div>
          <div className="flex items-center w-full justify-center">
            <i className="bi bi-person"></i>
            <span className="text-sm ml-2">Account</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Discuss;
