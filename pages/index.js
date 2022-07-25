import Container from "../components/Layout/Container";
import Quickmenu from "../components/Quickmenu";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <Container>
      <Quickmenu />
      <Carousel
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className="bg-violet-500 text-left text-white px-6 py-10 flex items-center relative">
          <div className="z-10">
            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet.</h1>
            <p className="text-sm text-slate-50 leading-6 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              iusto.
            </p>
            <button className="text-xs py-2 px-3 text-white bg-violet-700 font-medium mt-5 rounded flex items-center">
              Join discussions
              <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>
          <img
            src="/puppyLove.png"
            className="absolute top-0 right-0 opacity-10 h-full object-contain z-0"
            alt=""
          />
        </div>
        <div className="bg-violet-500 text-left text-white px-6 py-10 flex items-center relative">
          <div className="z-10">
            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet.</h1>
            <p className="text-sm text-slate-50 leading-6 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              iusto.
            </p>
            <button className="text-xs py-2 px-3 text-white bg-violet-700 font-medium mt-5 rounded flex items-center">
              Join discussions
              <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>
          <img
            src="/puppyLove.png"
            className="absolute top-0 right-0 opacity-10 h-full object-contain z-0"
            alt=""
          />
        </div>
        <div className="bg-violet-500 text-left text-white px-6 py-10 flex items-center relative">
          <div className="z-10">
            <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet.</h1>
            <p className="text-sm text-slate-50 leading-6 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              iusto.
            </p>
            <button className="text-xs py-2 px-3 text-white bg-violet-700 font-medium mt-5 rounded flex items-center">
              Join discussions
              <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>
          <img
            src="/puppyLove.png"
            className="absolute top-0 right-0 opacity-10 h-full object-contain z-0"
            alt=""
          />
        </div>
      </Carousel>
      <div className="bg-white p-6 md:p-16 border-b">
        <div className="flex items-center">
          <i className="fi fi-br-chart-line-up mr-3 mt-2 text-lg text-slate-600"></i>
          <h1 className="font-bold text-xs text-slate-800">
            TRENDING ON PETICIOUS
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 md:px-10">
          <div className="flex">
            <span className="text-2xl md:text-3xl font-bold text-slate-300">
              01
            </span>
            <div className="ml-4 md:ml-6 mt-2 md:mt-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  className="h-6 w-6 rounded-full"
                  alt=""
                />
                <span className="text-xs font-semibold ml-3 text-slate-500">
                  Brian Sydney
                </span>
              </div>
              <h1 className="text-base font-semibold mt-4">
                Lorem ipsum dolor sit amet lorem ipsum dolor sit.
              </h1>
              <p className="text-xs mt-3 text-slate-500">16 min read.</p>
            </div>
          </div>
          <div className="flex">
            <span className="text-2xl md:text-3xl font-bold text-slate-300">
              02
            </span>
            <div className="ml-4 md:ml-6 mt-2 md:mt-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  className="h-6 w-6 rounded-full"
                  alt=""
                />
                <span className="text-xs font-semibold ml-3 text-slate-500">
                  Brian Sydney
                </span>
              </div>
              <h1 className="text-base font-semibold mt-4">
                Lorem ipsum dolor sit amet lorem ipsum dolor sit.
              </h1>
              <p className="text-xs mt-3 text-slate-500">16 min read.</p>
            </div>
          </div>
          <div className="flex">
            <span className="text-2xl md:text-3xl font-bold text-slate-300">
              03
            </span>
            <div className="ml-4 md:ml-6 mt-2 md:mt-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  className="h-6 w-6 rounded-full"
                  alt=""
                />
                <span className="text-xs font-semibold ml-3 text-slate-500">
                  Brian Sydney
                </span>
              </div>
              <h1 className="text-base font-semibold mt-4">
                Lorem ipsum dolor sit amet lorem ipsum dolor sit.
              </h1>
              <p className="text-xs mt-3 text-slate-500">16 min read.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
