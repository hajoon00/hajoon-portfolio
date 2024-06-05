import "./index.css";
import "./App.css";
import React, { useState } from "react";

function Art() {
  const [selectedTab, setSelectedTab] = useState("digitalArt");

  return (
    <div className="bg-neutral-100 pt-8">
      <section className="bg-neutral-100">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <h1 className="mb-4 font-bold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            예술, 또는 낙서
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            때로는 디자인의 규칙을 지키지 않고 싶을 때가 있습니다. 걸작을
            모방하기도 하며, 저만의 그림을 그리기도 합니다.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-screen-lg mx-auto">
          <div className="relative right-0">
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
              <button
                type="button"
                className={`text-slate-700 border border-transparent hover:border-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                  selectedTab === "digitalArt"
                    ? "font-bold bg-red-600 text-white"
                    : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
                }`}
                onClick={() => setSelectedTab("digitalArt")}
              >
                Digital Art
              </button>
              <button
                type="button"
                className={`text-slate-700 border border-transparent hover:border-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                  selectedTab === "handDrawing"
                    ? "font-bold bg-red-600 text-white"
                    : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
                }`}
                onClick={() => setSelectedTab("handDrawing")}
              >
                Original Hand Drawing
              </button>
              <button
                type="button"
                className={`text-slate-700 border border-transparent hover:border-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                  selectedTab === "copy"
                    ? "font-bold bg-red-600 text-white"
                    : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
                }`}
                onClick={() => setSelectedTab("copy")}
              >
                Copy
              </button>
            </div>

            <div data-tab-content="" className="p-5">
              <div
                className={
                  selectedTab === "digitalArt"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }
                id="digitalArt"
                role="tabpanel"
              >
                <div
                  role="tabpanel"
                  className="grid w-full grid-cols-2 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
                  data-value="html"
                >
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    <img
                      className="h-auto rounded-lg"
                      src="public/arts/DippinDots.gif"
                      alt="Dippin' Dots"
                    ></img>
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-center px-2">Dippin' Dots </p>
                      <a
                        href="https://editor.p5js.org/hajoon00/full/aVsl3x4XF"
                        className="text-white "
                      >
                        - Link to Interactive Art
                      </a>
                    </div>
                  </div>

                  <div className="relative mx-auto max-w-sm group shadow-lg rounded-lg">
                    <img
                      className="h-auto rounded-lg"
                      src="public/arts/Batcave.png"
                      alt="Batcave"
                    ></img>
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-center px-2">Dippin' Dots</p>
                    </div>
                  </div>
                  <div className="relative mx-auto max-w-sm group shadow-lg rounded-lg">
                    <img
                      className="h-auto rounded-lg"
                      src="public/arts/spoon.jpg"
                      alt="Spoon"
                    ></img>
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-center px-2">Spoon</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  selectedTab === "handDrawing"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }
                id="handDrawing"
                role="tabpanel"
              >
                <div
                  role="tabpanel"
                  className="grid w-full grid-cols-2 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
                  data-value="html"
                >
                  <div className="relative mx-auto max-w-sm h-fit group shadow-lg rounded-lg">
                    <img
                      className="rounded-lg w-full"
                      src="/arts/Desert.png"
                      alt="Desert"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-center px-2">Desert</p>
                    </div>
                  </div>
                  <div className="relative mx-auto max-w-sm group shadow-lg rounded-lg">
                    <img
                      className="rounded-lg w-full"
                      src="/arts/Ocean.png"
                      alt="Ocean"
                    />
                  </div>
                  <div className="relative mx-auto max-w-sm group shadow-lg rounded-lg">
                    <img
                      className="rounded-lg w-full"
                      src="/arts/Tiger.png"
                      alt="Tiger"
                    />
                  </div>
                </div>
              </div>

              <div
                className={
                  selectedTab === "copy"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }
                id="copy"
                role="tabpanel"
              >
                <div
                  role="tabpanel"
                  className="grid w-full grid-cols-2 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
                  data-value="html"
                >
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    <img
                      className="h-auto rounded-lg"
                      src="public/arts/Batman.png"
                      alt="Batman"
                    ></img>
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-center px-2">Batman</p>
                    </div>
                  </div>
                  <div className="relative mx-auto max-w-sm group shadow-lg">
                    <img
                      className="h-auto "
                      src="public/arts/Dr-Strange.png"
                      alt="Dr. Strange"
                    ></img>
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-center px-2">Dr. Strange</p>
                    </div>
                  </div>
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    {" "}
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="public/arts/Nick_and_Judy.png"
                      alt="Nick and Judy"
                    ></img>
                  </div>
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    {" "}
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="public/arts/Pulp-Fiction.png"
                      alt="Pulp Fiction"
                    ></img>
                  </div>
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    {" "}
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="public/arts/Spiderman.png"
                      alt="Spiderman"
                    ></img>
                  </div>
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    {" "}
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="public/arts/T1.png"
                      alt="T1"
                    ></img>
                  </div>
                  <div className="relative h-fit mx-auto max-w-sm group shadow-lg rounded-lg">
                    {" "}
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="public/arts/Thresh.png"
                      alt="Thresh"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Art;
