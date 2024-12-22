import React, { useState } from "react";
import "../index.css";
import "../App.css";

import PENSA_Study_1 from "/pensa/study-session/PENSA_Study_1.png";
import PENSA_Study_2 from "/pensa/study-session/PENSA_Study_2.png";
import PENSA_Study_3_01 from "/pensa/study-session/PENSA_Study_3-01.png";
import PENSA_Study_4_01 from "/pensa/study-session/PENSA_Study_4-01.png";
import PENSA_Study_5 from "/pensa/study-session/PENSA_Study_5.png";
import PENSA_Study_6 from "/pensa/study-session/PENSA_Study_6.png";
import PENSA_Study_7_01 from "/pensa/study-session/PENSA_Study_7-01.png";
import PENSA_Study_8 from "/pensa/study-session/PENSA_Study_8.png";
import PENSA_Study_9 from "/pensa/study-session/PENSA_Study_9.png";

import Mixer from "/pensa/Mixer.png";
import Pensa_Social_2 from "/pensa/PENSA_Social_2.png";
import Movie_Night from "/pensa/Movie Night.png";
import PENSA_EOY_Social_01 from "/pensa/PENSA EOY Social-01.png";
import PENSA_EOY_Social_02 from "/pensa/PENSA EOY Social-02.png";
import PENSA_EOY_Social_03 from "/pensa/PENSA EOY Social-03.png";
import PENSA_Introduction_Final from "/pensa/PENSA_Introduction_Final-09.png";
import MandM from "/pensa/M&M.png";
import GBM from "/pensa/GBM.png";

import Advance_Registration_24S from "/pensa/24S Advance Registration Lunch.png";
import Advance_Registration_23F from "/pensa/Advance_Registration_23F.png";
import PENSA_Faculty_Chat from "/pensa/PENSA Faculty_CHat_First Page.png";
import Chat_with_Sunbaes from "/pensa/Chat_with_Sunbaes-01.png";

import Sticker_01 from "/pensa/stickers/stickers-01.png";
import Sticker_02 from "/pensa/stickers/stickers-02.png";
import Sticker_03 from "/pensa/stickers/stickers-03.png";
import Sticker_04 from "/pensa/stickers/stickers-04.png";

const studySessionImages = [
  PENSA_Study_1,
  PENSA_Study_2,
  PENSA_Study_3_01,
  PENSA_Study_4_01,
  PENSA_Study_5,
  PENSA_Study_6,
  PENSA_Study_7_01,
  PENSA_Study_8,
  PENSA_Study_9,
];

const socialEventsImages = [
  Mixer,
  Pensa_Social_2,
  Movie_Night,
  PENSA_EOY_Social_01,
  PENSA_EOY_Social_02,
  PENSA_EOY_Social_03,
  PENSA_Introduction_Final,
  MandM,
  GBM,
];

const academicEventsImages = [
  Advance_Registration_24S,
  Advance_Registration_23F,
  PENSA_Faculty_Chat,
  Chat_with_Sunbaes,
];

const stickerImages = [Sticker_01, Sticker_02, Sticker_03, Sticker_04];

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

const Academic_Events_Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + academicEventsImages.length) %
        academicEventsImages.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % academicEventsImages.length
    );
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
          {academicEventsImages.map((src, index) => (
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
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Marketing Chair @K-PEnSA(Korea-PENN Engineers & Scientists
            Association )
          </p>
          <dl className="mt-6 divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                My Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Marketing Chair
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Timeline
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Sept 2023 - now
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tools Used
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Adobe Illustrator <br />
                Adobe Photoshop <br />
                Adobe Stock <br />
                Bootstrap <br />
                Figma
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-m edium leading-6 text-gray-900">
                Achievements
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Marketing Strategy Design
                <br />
                Design System Establishment
                <br />
                Website Revamp
                <br />
                Merch Production
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* <section className="bg-gray-100 py-20 sm:py-16">
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
      </section> */}

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
            게시물을 올렸으며, 인스타그램 스토리를 주로 이용하여 이 벤트
            참여율을 높였습니다.
          </p>
          <h3 className="mt-8 text-lg font-bold text-gray-900">
            Biweekly Study Session
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            동아리의 메인 이벤트이자 참여율이 가장 높은 이벤트입니다. 격주로
            스터디 세션을 호스트하며 비슷한 전공의 학생들이 서로 도움을 주고
            받고 학업에 도움을 받을 수 있는 자리를 만들었습니다.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            포스터는 직접 만든 기본 템플릿의 변형입니다. Adobe Illustrator를
            사용했으며 스터디 세션의 간식과 컨셉에 따라 다른 그래픽을
            채택했습니다. 할로윈, 발렌타인 데이와 같은 특별한 컨셉의 이벤트는
            그에 맞는 새로운 색상과 글씨체 등을 사용했습니다.
          </p>
          <Study_Session_Carousel />
          <h3 className="mt-8 text-lg font-bold text-gray-900">
            Social Events
          </h3>{" "}
          <p className="mt-4 text-lg leading-8 text-gray-600"></p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            이벤트의 컨셉에 맞는 다양한 시도의 집합입니다.
          </p>
          <Social_Events_Carousel />
          <h3 className="mt-8 text-lg font-bold text-gray-900">
            Academic Events
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600"></p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            이벤트의 컨셉에 맞는 다양한 시도의 집합입니다.
          </p>
          <Academic_Events_Carousel />
          <p className="mt-4 text-lg leading-8 text-gray-600">
            더 많은 포스터와 이벤트 홍보 게시물은 인스타그램 페이지에서 확인하실
            수 있습니다.
          </p>
          <a
            href="https://instagram.com/kpensa_upenn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="mt-6 text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              인스타그램 바로가기
            </button>
          </a>
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
            기존 웹사이트의 구조를 유지했지만 전체 디자인 시스템을 좀 더
            현대적이고 간결하게 바꾸는 작업을 진행했습니다.
          </p>
          <a
            href="https://k-pensa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="mt-6 text-white bg-hajoon-500 hover:bg-hajoon-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              웹사이트 바로가기
            </button>
          </a>

          <div className="bg-white py-20 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="before-section">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">
                    Original Website
                  </h2>
                  <img
                    src="/pensa/website/old_website_1.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>

                <div className="after-section">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">
                    Problem
                  </h2>
                </div>
                <div className="before-section">
                  <img
                    src="/pensa/website/old_website_2.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>

                <div className="after-section"></div>
                <div className="before-section">
                  <img
                    src="/pensa/website/old_website_3.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>

                <div className="after-section"></div>
                <div className="before-section">
                  <img
                    src="/pensa/website/old_website_4.png"
                    alt="Before Image"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>

                <div className="after-section"></div>
              </div>
            </div>
          </div>
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
            이전까지 K-PEnSA의 굿즈들은 후드티 같이 매일 사용하기 힘들고, 가격이
            비싼 것들이었습니다. 대학교 과잠이나 단체 티셔츠 같은 의류들은 입고
            있을 때 소속감을 드러내기 좋다는 장점이 있지만, 올해는 상기한
            단점들을 조금 타파하고자 새로운 굿즈 디자인에 착수했습니다.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            미국에서는 학생들이 본인의 노트북/태블릿 등에 스티커를 붙여 본인의
            정체성을 드러냅니다. 보통 본인이 소속되어 있는 동아리 또는 회사의
            스티커를 붙이며 그렇기 때문에 대부분의 동아리/단체는 홍보의 수단으로
            무료 스티커를 나누어주기도 합니다.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            스티커 디자인은 크게 3가지로 나뉩니다.
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
