import React, { useState, useEffect } from "react";
import Button from "../Button";

function ReplyCard() {
  return (
    <div className="border-b p-5">
      <div className="rounded flex items-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          className="h-8 w-8 object-cover rounded-full"
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-medium">Priyangsu Banerjee</p>
          <p className="text-xs text-slate-500 mt-1">11 July 2022</p>
        </div>
        <i className="bi bi-three-dots-vertical ml-auto"></i>
      </div>
      <div className="mt-4">
        <p className="text-xs text-slate-600 leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam odit,
          eveniet sequi officia assumenda qui labore perferendis repellendus.
        </p>
      </div>
    </div>
  );
}

export default ReplyCard;
