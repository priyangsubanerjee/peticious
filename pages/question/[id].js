import React, { useState, useEffect, useRef } from "react";
import ReplyCard from "../../components/Reply/ReplyCard";
import Link from "next/link";
import { Fade } from "react-reveal";

function Question() {
  const input = useRef(null);
  const [liked, setLiked] = useState(false);
  const [replyBoxOpen, setReplyBoxOpen] = useState(true);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <Fade duration={300}>
      <div className="fixed top-0 left-0 h-full w-full bg-white z-20 overflow-y-auto">
        <div className="flex items-center p-4 border-b bg-white sticky top-0 left-0">
          <Link href={`/discuss/#2003`}>
            <div className="flex items-center w-fit">
              <i className="bi bi-arrow-left text-xl"></i>
              <span className="font-semibold ml-3 text-lg">Replies</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center p-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            className="h-12 w-12 object-cover rounded-full"
            alt=""
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">Richelle</p>
            <p className="text-xs text-slate-700 my-[2px]">Xoom (Labrador)</p>
            <p className="text-xs text-slate-500">2 days ago.</p>
          </div>
          <i className="bi bi-three-dots-vertical ml-auto"></i>
        </div>
        <div className="px-4">
          <h1 className="font-semibold text-slate-700 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            error ?
          </h1>
          <div className="flex items-center mt-4">
            <span className="text-xs text-slate-900 bg-slate-100 px-2 py-1 mr-3">
              Health
            </span>
            <span className="text-xs text-slate-900 bg-slate-100 px-2 py-1 mr-3">
              Health
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 border-y">
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
          <div
            onClick={() => setReplyBoxOpen(!replyBoxOpen)}
            className={`py-3 flex items-center justify-center border-x ${
              replyBoxOpen && "text-red-500"
            }`}
          >
            <i className="bi bi-chat-left-heart"></i>
            <span className="ml-3 text-xs">Reply</span>
          </div>
          <div className="py-3 flex items-center justify-center">
            <i className="bi bi-bookmark"></i>
          </div>
        </div>
        {replyBoxOpen && (
          <div>
            <div className="border-b h-32 p-4 rounded flex">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                className="h-6 w-6 object-cover rounded-full"
                alt=""
              />
              <textarea
                name=""
                placeholder="Type your reply ..."
                className="ml-4 w-full outline-none h-full"
                id=""
                ref={input}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex items-center px-4 py-3 border-b">
              <button className="ml-auto text-xs bg-red-400 font-medium text-white px-5 py-2 rounded">
                Post
              </button>
              <p
                onClick={() => setReplyBoxOpen(!replyBoxOpen)}
                className="text-xs text-slate-500 ml-4 hover:underline"
              >
                Discard
              </p>
            </div>
          </div>
        )}
        <div>
          <ReplyCard />
          <ReplyCard />
          <ReplyCard />
          <ReplyCard />
        </div>
      </div>
    </Fade>
  );
}

export default Question;
