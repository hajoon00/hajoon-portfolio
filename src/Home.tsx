import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const SplineSection = () => {
  return (
    <div className="relative w-full h-screen">
      <Spline scene="https://prod.spline.design/3c5ACYOGESyNAVke/scene.splinecode" />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
        <p className="text-xl">Scroll Down</p>
        <svg
          className="w-6 h-6 animate-bounce mx-auto mt-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <SplineSection />
      <section className="bg-stone-50 pt-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-stone-50 p-8 md:p-12 mb-8">
            <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-6">
              <span className="text-hajoon-500">디지털 디자이너</span>{" "}
              박하준입니다.{" "}
            </h1>
            <p className="text-lg font-normal mt-6 text-gray-500 mb-6">
              보기 좋은 것을 누구보다 추구합니다. <br />웹 및 그래픽 디자인
              분야에서 경험을 쌓은 창의적이고 자기 주도적인 디자이너입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 border border-gray-200 rounded-lg p-8 md:p-12">
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
                className="text-hajoon-500 hover:text-hajoon-700 font-medium text-lg inline-flex items-center"
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
            <div className="bg-stone-50 border border-gray-200 rounded-lg p-8 md:p-12">
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
                className="text-hajoon-500 hover:text-hajoon-700 font-medium text-lg inline-flex items-center"
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
