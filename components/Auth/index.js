import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Button from "../Button";
function Auth({ open, setOpen }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = useState("login");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div>
      <Fade when={open} duration={300}>
        {open && (
          <div className="fixed top-0 left-0 z-20 h-screen w-screen">
            <div className="h-full w-full bg-white">
              <div className="flex items-center p-4">
                <i
                  onClick={() => setOpen(false)}
                  className="bi bi-x ml-auto text-2xl"
                ></i>
              </div>
              <div className="flex items-cente justify-center">
                <img src="/logoDark.png" className="h-7" alt="" />
                <p className="text-xl font-bold text-slate-900 ml-3">
                  Peticious.
                </p>
              </div>
              {state == "login" ? (
                <>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-sm mt-4 text-slate-500">
                      <span className="font-medium text-slate-900">Login</span>{" "}
                      with registered credentials
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="px-6 mt-10"
                  >
                    <div className="flex items-center border rounded-full py-3 px-6">
                      <i className="bi bi-envelope mr-3 text-lg text-slate-500"></i>
                      <input
                        type="text"
                        name=""
                        required
                        autoCapitalize="off"
                        className="w-full outline-none"
                        placeholder="Enter email"
                        value={user.email}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            email: e.target.value,
                          })
                        }
                        id=""
                      />
                    </div>
                    <div className="flex items-center border rounded-full py-3 px-6 mt-4">
                      <i className="bi bi-asterisk text-[8px] text-slate-500"></i>
                      <i className="bi bi-asterisk text-[8px] mr-3 text-slate-500"></i>
                      <input
                        type="password"
                        name=""
                        required
                        className="w-full outline-none"
                        placeholder="Enter password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            password: e.target.value,
                          })
                        }
                        id=""
                      />
                    </div>
                    <Button
                      loading={loading}
                      onClick={() => setLoading(true)}
                      loadingText={"Processing"}
                      className="rounded-full w-full mt-5 py-3"
                    >
                      Login
                    </Button>
                  </form>
                  <p className="text-sm text-slate-500 text-center mt-10">
                    New here?
                    <span
                      onClick={() => setState("register")}
                      className="font-medium text-slate-900 ml-2 hover:underline"
                    >
                      Register now
                    </span>
                  </p>
                </>
              ) : (
                <>
                  {" "}
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-sm mt-4 text-slate-500">
                      <span className="font-medium text-slate-900">
                        Register
                      </span>{" "}
                      a new account.
                    </p>
                  </div>
                  <form className="px-6 mt-10">
                    <div className="flex items-center border rounded-full py-3 px-6">
                      <i className="bi bi-person mr-3 text-lg text-slate-500"></i>
                      <input
                        type="text"
                        name=""
                        required
                        autoCapitalize="off"
                        className="w-full rounded-full outline-none"
                        placeholder="Enter your name"
                        value={user.email}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            email: e.target.value,
                          })
                        }
                        id=""
                      />
                    </div>
                    <div className="flex items-center border rounded-full py-3 px-6 mt-4">
                      <i className="bi bi-envelope mr-3 text-lg text-slate-500"></i>
                      <input
                        type="text"
                        name=""
                        required
                        autoCapitalize="off"
                        className="w-full rounded-full outline-none"
                        placeholder="Enter email"
                        value={user.email}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            email: e.target.value,
                          })
                        }
                        id=""
                      />
                    </div>
                    <div className="flex items-center border rounded-full py-3 px-6 mt-4">
                      <i className="bi bi-asterisk text-[8px] text-slate-500"></i>
                      <i className="bi bi-asterisk text-[8px] mr-3 text-slate-500"></i>
                      <input
                        type="text"
                        name=""
                        required
                        className="w-full rounded-full outline-none"
                        placeholder="Enter password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            password: e.target.value,
                          })
                        }
                        id=""
                      />
                    </div>

                    <button className="bg-red-400 text-white w-full py-3 rounded-full mt-6 font-medium">
                      Register
                    </button>
                  </form>
                  <p className="text-sm text-slate-500 text-center mt-10">
                    Already have an account?
                    <span
                      onClick={() => setState("login")}
                      className="font-medium text-slate-900 ml-2 hover:underline"
                    >
                      Login
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Auth;
