import React, { useState, useEffect } from "react";
import Auth from "../Auth";
import Link from "next/link";

function QuestionCard({ id }) {
  const [liked, setLiked] = useState(false);
  const [authCardOpen, setAuthCardOpen] = useState(false);

  const closeAuthCard = () => setAuthCardOpen(false);

  return (
    <div id={id} className="border bg-white h-fit">
      <div className="flex items-center p-4">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          className="h-8 w-8 object-cover rounded-full"
          alt=""
        />
        <div className="ml-3">
          <p className="text-xs font-semibold">Richelle</p>
          <div className="flex items-center">
            <p className="text-xe text-slate-700">Xoom (Labrador)</p>
            <p className="text-sm font-semibold mx-2">•</p>
            <p className="text-xe text-slate-500">2 days ago.</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <h1
          onClick={() => setReplyBoxOpen(true) & setViewAllReplies(true)}
          className="font-medium text-slate-700 text-sm leading-6"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
          error ?
        </h1>
        <div className="flex items-center mt-4">
          <span className="text-xe text-slate-900 bg-slate-100 px-2 py-1 mr-3">
            Health
          </span>
          <span className="text-xe text-slate-900 bg-slate-100 px-2 py-1 mr-3">
            Health
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 border-t">
        <div
          onClick={() => setAuthCardOpen(true)}
          className="py-3 flex items-center justify-center"
        >
          {liked ? (
            <i className="bi bi-hand-thumbs-up-fill text-red-500"></i>
          ) : (
            <i className="bi bi-hand-thumbs-up"></i>
          )}
          <span className="ml-3 text-xs">12</span>
        </div>
        <Link href={`/question/324`}>
          <div className="py-3 flex items-center justify-center border-x">
            <i className="bi bi-chat-left-heart"></i>
            <span className="ml-3 text-xs">Reply</span>
          </div>
        </Link>
        <div className="py-3 flex items-center justify-center">
          <i className="bi bi-bookmark"></i>
        </div>
      </div>
      <Auth open={authCardOpen} close={closeAuthCard} cancelable />
    </div>
  );
}

export default QuestionCard;
