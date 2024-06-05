import "../index.css";
import "../App.css";

const features = [
  {
    id: 1,
    name: "컨텐츠 기획/제작",
    description: `모든 디자인 작업과 브랜딩을 담당했습니다. 로고 디자인, 배포용 작업물
      등을 진행했으며 유튜브, 블로그, 인스타그램 등에 올라갈 컨텐츠를 모두
      기획하고 제작하였습니다.`,
  },
  {
    id: 2,
    name: "입시 전략 컨설팅",
    description: `1대1 개인 집중 컨설팅부터 오픈 채팅방을 활용한 자유로운 양방향 소통까지 다양한 방식의 대학 입시 컨설팅을 진행했습니다.`,
  },
];

function Jaetea() {
  return (
    <>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Overview
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contents Director
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            유학 컨설팅 전문 "유학 읽어주는 남자"의 창립 멤버이자
            디자이너/컨텐츠 디렉터로 일했습니다.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-20 sm:py-16">
        <div className="mx-auto max-w-5xl sm:mt-12 lg:mt-16 px-6 lg:px-8">
          <h1 className="text-center font-semibold leading-7 text-red-600">
            My Role
          </h1>
        </div>
        <div className="mx-auto w-full sm:mt-16 lg:mt-20 lg:max-w-5xl p-10 rounded-md">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
              컨텐츠 기획
            </h2>
          </div>

          <p className="my-4 text-lg leading-8 text-gray-600">
            유학 읽어주는 남자의 창립 모토?는 국내에서 접하기 힘든 유학 정보를
            많은 사람들에게 쉽고 간편하게 전달하는 것입니다. 그리고 유읽남이
            채택한 가장 좋은 플랫폼은 유튜브였습니다. 유읽남의 영상은 크게 0000
            가지의 주요내용으로 구성되어있습니다.
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
        </div>
      </section>

      <section className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-red-600">
              3
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              입시 전략 컨설팅
            </h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            메인 홍보 창구인 인스타그램 관리를 맡았습니다. 직접 제작한 포스터가
            중심이 되는 이벤트 홍보 게시물을 올렸으며, 인스타그램 스토리를 주로
            이용하여 이벤트 참여율을 높였습니다.
          </p>
        </div>
      </section>
    </>
  );
}

export default Jaetea;
