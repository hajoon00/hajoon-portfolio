import "../index.css";
import "../App.css";

const consultingProcess = [
  {
    step: "Step 1",
    title: "상담",
    description: "박하준",
  },
  {
    step: "Step 2",
    title: "포트폴리오 컨셉 설정",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    step: "Step 3",
    title: "에세이/레쥬메",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    step: "Step 4",
    title: "커먼앱 작성",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

function Jaetea() {
  return (
    <>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Contents Director @유학 읽어주는 남자
          </p>

          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                My Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                컨텐츠 디렉터 <br />
                디자이너 <br />
                영상 PD <br />
                입시 컨설턴트
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Timeline
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Jan 2019 - Sept 2020
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tools Used
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Adobe Illustrator <br />
                Adobe Premiere Pro
              </dd>
            </div>
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
              컨텐츠 기획
            </h2>
          </div>

          <p className="my-4 text-lg leading-8 text-gray-600">
            유학 읽어주는 남자의 창립 이념은 국내에서 접하기 힘든 유학 정보를
            많은 사람들에게 쉽고 간편하게 전달하는 것입니다. 그리고 유읽남이
            채택한 가장 좋은 플랫폼은 유튜브였습니다. 2019년부터 약 1년 반동안
            50개 이상의 영상을 업로드 했습니다.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            모든 유튜브 영상에 연출/촬영으로 참여하였으며, 편집 작업 또한 모두
            담당했습니다. 기본 영상 디자인 시스템을 확립하고
          </p>

          <a
            href="https://www.youtube.com/@user-lj3mq5qu2i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              유튜브 채널 바로가기
            </button>
          </a>
          <div className="flex flex-row flex-auto gap-3">
            <img
              src="../../public/jaetea/유읽남_유튜브_홈.png"
              alt="youtube home"
              className="w-2/5 h-auto rounded-md shadow-md"
            />

            <img
              src="../../public/jaetea/유읽남_유튜브_영상.png"
              alt="youtube videos"
              className="w-2/5 h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
              2
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              입시 전략 컨설팅
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            영상을 보고 찾아온 분들에게 실제로 맞춤 컨설팅을 진행했습니다. 미국
            대학 입시를 준비하는 학생들의 입시 프로세스 전체를 관리했습니다.
          </p>
          <ol className="mt-4 relative border-s border-gray-200">
            {consultingProcess.map((item, index) => (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.step}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {item.description}
                </p>
                {/* {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-violet-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-violet-700"
                    style={{ cursor: "pointer" }}
                  >
                    Learn more
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
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
                  </a>
                )} */}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            총 00명의 컨설팅을 진행했으며 Yale University, Cornell University 등
            미국 탑 랭킹 대학들을 비롯해서 영국의 Imperial College 등 다양한
            국가의 다양한 학교의 입학을 성공했습니다.
          </p>
        </div>
      </section>
    </>
  );
}

export default Jaetea;
