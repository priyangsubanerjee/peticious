import React, { useState, useEffect } from "react";

function Profile() {
  const [updateProfilePhoto, setUpdateProfilePhoto] = useState(true);

  return (
    <div>
      <div className="px-6 mt-6 text-center">
        <div className="text-right">
          <i
            onClick={() => setUpdateProfilePhoto(true)}
            className="bi bi-pencil"
          ></i>
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
      {updateProfilePhoto && (
        <div className="bg-black/30 h-full w-full fixed top-0 left-0 z-20 flex flex-col items-center justify-end p-5">
          <div className="w-full h-fit bg-white rounded-xl overflow-hidden">
            <ul>
              <li className="flex items-center py-5 px-6 border-b">
                <i className="bi bi-image"></i>
                <span className="ml-3">Choose new profile photo</span>
              </li>
              <li className="flex items-center py-5 px-6">
                <i className="bi bi-x-circle"></i>
                <span className="ml-3">Remove profile photo</span>
              </li>
              <li
                onClick={() => setUpdateProfilePhoto(false)}
                className="flex items-center justify-center border-t bg-slate-100 py-3 px-6"
              >
                <span className="ml-2">Close</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
