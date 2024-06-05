import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-white mt-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-white p-8 md:p-12 mb-8">
            <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-6">
              <span className="text-red-800">디지털 디자이너</span>{" "}
              박하준입니다.{" "}
            </h1>
            <p className="text-lg font-normal mt-6 text-gray-500 mb-6">
              보기 좋은 것을 누구보다 추구합니다. <br />웹 및 그래픽 디자인
              분야에서 경험을 쌓은 // 창의적이고 자기 주도적인 그래픽
              디자이너입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
                디자이너/프론트엔드 개발자
              </h2>
              <p className="text-lg my-5 font-normal text-gray-500 mb-4">
                때로는 그래픽 디자이너로, <br />
                때로는 UI/UX 디자이너로, <br />
                때로는 개발자로, <br />
                때로는 컨텐츠 제작자로.
              </p>
              <Link
                to="/work"
                className="text-red-600 hover:text-red-800 font-medium text-lg inline-flex items-center"
              >
                Work
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
                예술가/붓쟁이
              </h2>
              <p className="text-lg my-5 font-normal text-gray-500 mb-4">
                때로는 마우스로, <br />
                때로는 연필로, <br />
                때로는 애플 펜슬로, <br />
                때로는 코드로.
              </p>
              <Link
                to="/art"
                className="text-red-600 hover:text-red-800 font-medium text-lg inline-flex items-center"
              >
                Art
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
