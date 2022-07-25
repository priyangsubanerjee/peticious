import React from "react";
import QuickMenu from "../components/Quickmenu";
import Container from "../components/Layout/Container";

function Profile() {
  return (
    <div>
      <div className="px-6 mt-6 text-center">
        <div className="text-right">
          <i class="bi bi-pencil"></i>
        </div>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          className="h-20 w-20 object-cover rounded-full mx-auto"
          alt=""
        />
        <h1 className="text-lg font-semibold mt-3">Priyangsu Banerjee</h1>
        <div className="flex items-center justify-center mt-2">
          <i className="bi bi-calendar2"></i>
          <p className="text-xs text-slate-700 leading-5 ml-2">
            Member since July, 2022
          </p>
        </div>
        <div className="flex items-center justify-center mt-5">
          <span className="text-xs text-slate-700 bg-slate-100 rounded py-2 px-4 flex items-center">
            Manage your pets{" "}
            <i className="bi bi-chevron-right ml-2 text-sm"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6 px-6 border-y">
        <div className="flex flex-col items-center justify-center p-2 border-b-4 border-red-400">
          <span className="font-semibold text-lg">4</span>
          <span className="text-xs text-slate-600 mt-2">Questions</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <span className="font-semibold text-lg">18</span>
          <span className="text-xs text-slate-600 mt-2">Posts</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <span className="font-semibold text-lg">18</span>
          <span className="text-xs text-slate-600 mt-2">Saved</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
