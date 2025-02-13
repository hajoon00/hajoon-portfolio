import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

// 이미지 파일 import
import PensaLogo from "/previews/Pensa-logo.svg";
import JaeteaPreview from "/previews/jaetea-preview.png";

const posts = [
  {
    id: 1,
    title: "K-PEnSA Marketing Chair",
    imageUrl: PensaLogo,
    description: "마케팅 팀장 / 디자이너",
    date: "Fall 2023 - Spring 2024",
    hashtags: ["마케팅", "그래픽 디자인"],
  },
  {
    id: 2,
    title: "유학 읽어주는 남자",
    imageUrl: JaeteaPreview,
    description: "창립 멤버 / 디자이너 / 컨텐츠 디렉터",
    date: "Spring 2019 - Fall 2020",
    hashtags: ["마케팅", "그래픽 디자인"],
  },
  // More posts...
];

function Experience() {
  return (
    <div className="bg-stone-50 py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Experiences
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          컨텐츠 디렉터로서 다양한 경험을 가지고 있습니다.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1">
          {posts.map((post) => (
            <Link
              to={`/experience/${post.id}`}
              key={post.id}
              className="relative group"
            >
              <div className="relative bg-white w-full h-72 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full p-12 object-scale-down transition-transform duration-500 group-hover:scale-110"
                  src={post.imageUrl}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
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

export default Experience;
