import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

const posts = [
  {
    id: 101,
    title: "Hasom Branding",
    imageUrl: "/previews/Hasom-preview.png",
    description: "고양이 하솜 브랜딩",
    date: "Fall 2024",
    hashtags: ["Branding", "Graphic Design"],
  },
  {
    id: 102,
    title: "CooKR",
    imageUrl: "/previews/Cookr-preview.png",
    description: "외국 거주자들을 위한 한식 레시피 앱",
    date: "Spring 2024",
    hashtags: ["Product Design", "UI/UX"],
  },
  {
    id: 103,
    title: "DevFlow",
    imageUrl: "/previews/DevFlow-preview.png",
    description: "프로그래머들을 위한 코드 정리 앱",
    date: "Spring 2024",
    hashtags: ["Product Design", "UI/UX", "Frontend"],
  },
  {
    id: 104,
    title: "Biennial Rebranding",
    imageUrl: "/previews/Station-preview.png",
    description: "서울 비엔날레 리브랜딩",
    date: "Fall 2022",
    hashtags: ["Product Design", "UI/UX"],
  },
  // More posts...
];

function Design() {
  return (
    <div className="bg-stone-50 py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Case Study
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          수년간의 개인 디자인 프로젝트입니다.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-1">
          {posts.map((post) => (
            <Link
              to={`/design/${post.id}`}
              key={post.id}
              className="relative group"
            >
              <div className="relative w-full h-72 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={post.imageUrl}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="mt-2">{post.description}</p>
                  <p className="mt-1 text-sm">{post.date}</p>
                  <div className="mt-4">
                    {post.hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                      >
                        #{hashtag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
