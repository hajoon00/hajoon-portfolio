import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

const posts = [
  {
    id: 101,
    title: "CooKR",
    imageUrl: "public/previews/Cookr-preview.png",
    description: "외국 거주자들을 위한 한식 레시피 앱",
    date: "Spring 2024",
    hashtags: ["Product Design", "UI/UX"],
  },
  {
    id: 102,
    title: "DevFlow",
    imageUrl: "public/previews/Cookr-preview.png",
    description: "프로그래머들을 위한 코드 정리 앱",
    date: "Spring, 2024",
    hashtags: ["Product Design", "UI/UX", "Frontend"],
  },
  {
    id: 103,
    title: "Path@PENN Redesign",
    imageUrl: "public/previews/Cookr-preview.png",
    description: "유펜 수강신청 포털 리디자인",
    date: "Spring 2024",
    hashtags: ["UI/UX"],
  },
  {
    id: 104,
    title: "Biennial Rebranding",
    imageUrl: "public/previews/Cookr-preview.png",
    description: "서울 비엔날레 리브랜딩",
    date: "Fall 2022",
    hashtags: ["Product Design", "UI/UX"],
  },
  // More posts...
];

function Design() {
  return (
    <div className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Case Study
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            수년간의 개인 디자인 프로젝트입니다.
          </p>
        </div>
        <div className="mt-10 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <Link to={`/design/${post.id}`} key={post.id}>
              <article className="flex flex-col items-start justify-between bg-white rounded-lg border-2 border-neutral-100 overflow-hidden">
                <div className="w-full aspect-w-5 aspect-h-3">
                  <img
                    className="object-contain"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                </div>

                <div className="p-6">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.description}</p>
                  <p className="text-gray-600 text-sm mt-2">{post.date}</p>
                  <div className="pt-4">
                    {post.hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        #{hashtag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
