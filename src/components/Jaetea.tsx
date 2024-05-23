import React, { useState } from "react";
import "../index.css";
import "../App.css";

const features = [
  {
    name: "이벤트 포스터 디자인",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "",
  },
  {
    name: "웹사이트 리뉴얼",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "LockClosedIcon",
  },
  {
    name: "굿즈 디자인",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "ArrowPathIcon",
  },
  {
    name: "인스타그램 관리",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "FingerPrintIcon",
  },
];

function Jaetea() {
  return (
    <>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-left">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Overview
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Marketing Chair(마케팅 팀장)
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              펜실베니아 대학교의 한인 이공계 연합의 보드진으로 전반적인
              마케팅과 디자인 업무를 담당했습니다.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"></div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jaetea;
