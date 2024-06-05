import React, { useState } from "react";
import "../index.css";
import "../App.css";

const features = [
  {
    id: 1,
    name: "이벤트 홍보",
    description: `모든 홍보물 제작을 담당했습니다.
    1년간 30개 이상의 포스터 작업을 진행했습니다.`,
  },
  {
    id: 2,
    name: "웹사이트 리뉴얼",
    description: "수년간 방치되어있었던 웹사이트를 리뉴얼했습니다.",
  },
  {
    id: 3,
    name: "굿즈 디자인",
    description:
      "공식 굿즈를 디자인 후 제작/배포하였습니다. 총 4종의 스티커를 만들어 클럽 이미지를 새롭게 구축하고자 했습니다.",
  },
];

const studySessionImages = [
  "../../public/pensa/study-session/PENSA_Study_1.png",
  "../../public/pensa/study-session/PENSA_Study_2.png",
  "../../public/pensa/study-session/PENSA_Study_3-01.png",
  "../../public/pensa/study-session/PENSA_Study_4-01.png",
  "../../public/pensa/study-session/PENSA_Study_5.png",
  "../../public/pensa/study-session/PENSA_Study_6.png",
  "../../public/pensa/study-session/PENSA_Study_7-01.png",
  "../../public/pensa/study-session/PENSA_Study_8.png",
  "../../public/pensa/study-session/PENSA_Study_9.png",
];

const socialEventsImages = [
  "../../public/pensa/Mixer.png",
  "../../public/pensa/Movie Night.png",
  "../../public/pensa/PENSA EOY Social-01.png",
  "../../public/pensa/study-session/PENSA_Study_4-01.png",
  "../../public/pensa/study-session/PENSA_Study_5.png",
  "../../public/pensa/study-session/PENSA_Study_6.png",
  "../../public/pensa/study-session/PENSA_Study_7-01.png",
  "../../public/pensa/study-session/PENSA_Study_8.png",
  "../../public/pensa/study-session/PENSA_Study_9.png",
];

const stickerImages = [
  "../../public/pensa/stickers/PENSA_Stickers_FINAL-02.png",
  "../../public/pensa/stickers/PENSA_Stickers_FINAL-03.png",
  "../../public/pensa/stickers/PENSA_Stickers_FINAL-01.png",
  "../../public/pensa/stickers/PENSA_Stickers_FINAL-04.png",
];

const Study_Session_Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + studySessionImages.length) % studySessionImages.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % studySessionImages.length);
  };

  return (
    <div className="flex justify-center py-8">
      <div
        id="animation-carousel"
        className="relative w-1/2"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
          {studySessionImages.map((src, index) => (
            <div
              key={index}
              className={`absolute block w-full duration-200 ease-linear ${
                currentIndex === index ? "block" : "hidden"
              }`}
              data-carousel-item={currentIndex === index ? "active" : undefined}
            >
              <img
                src={src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Carousel image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

const Social_Events_Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + socialEventsImages.length) % socialEventsImages.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % socialEventsImages.length);
  };

  return (
    <div className="flex justify-center py-8">
      <div
        id="animation-carousel"
        className="relative w-1/2"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
          {socialEventsImages.map((src, index) => (
            <div
              key={index}
              className={`absolute block w-full duration-200 ease-linear ${
                currentIndex === index ? "block" : "hidden"
              }`}
              data-carousel-item={currentIndex === index ? "active" : undefined}
            >
              <img
                src={src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Carousel image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

// const studySessionImages = [{ id: 1, src: "../assets/pensa/study-session" }];
function Pensa() {
  //   const [mainImage, setMainImage] = useState(studySessionImages[0]);

  return (
    <>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Marketing Chair(마케팅 팀장)
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            펜실베니아 대학교의 한인 이공계 연합의 보드진으로 전반적인 마케팅과
            디자인 업무를 담당했습니다.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-20 sm:py-16">
        <div className="mx-auto max-w-5xl sm:mt-4 lg:mt-8 px-6 lg:px-8">
          <h1 className="text-center font-semibold leading-7 text-red-600">
            My Role
          </h1>
        </div>
        <div className="mx-auto w-full sm:mt-16 lg:mt-20 lg:max-w-5xl p-10 rounded-md">
          <dl className="flex-col space-y-24">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
                    {feature.id}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
              1
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              이벤트 홍보
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            동아리 이벤트 홍보를 전담했습니다. 메인 홍보 창구인 인스타그램
            관리를 맡았습니다. 직접 제작한 포스터가 중심이 되는 이벤트 홍보
            게시물을 올렸으며, 인스타그램 스토리를 주로 이용하여 이벤트 참여율을
            높였습니다.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            정사각형 비율의 포스터를 1년간 약 30개 이상 제작했습니다.
          </p>
          <Study_Session_Carousel />
          <Social_Events_Carousel />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
              2
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              웹사이트 리뉴얼
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            약 5년동안 방치되어 있던 웹사이트를 리뉴얼하는 작업을 맡았습니다.
            기존 웹사이트의 구조를 크게 바꾸지 않은채로 부트스트랩을 이용해서
            디자인을 좀 더 현대적이고 간결하게 바꾸는 작업을 진행했습니다.
          </p>

          <a
            href="https://k-pensa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              웹사이트 바로가기
            </button>
          </a>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
              3
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              굿즈 디자인
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            미국에서는 학생들이 본인의 노트북/태블릿 등에 스티커를 붙여 본인의
            정체성을 드러냅니다. 보통 본인이 소속되어 있는 동아리 또는 회사의
            스티커를 붙이며 그렇기 때문에 대부분의 동아리/단체는 홍보의 수단으로
            무료 스티커를 나누어주기도 합니다.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {stickerImages.map((image) => (
              <div>
                <img
                  className="h-auto max-w-full shadow-md"
                  src={image}
                  alt={"sticker design"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pensa;
