import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

const posts = [
  {
    id: 1,
    title: "K-PEnSA Marketing Chair",
    imageUrl: "public/previews/Pensa-logo.svg",
    description: "마케팅 팀장 / 디자이너",
    date: "Fall 2023 - Spring 2024",
    hashtags: ["마케팅", "그래픽 디자인"],
  },
  {
    id: 2,
    title: "유학 읽어주는 남자",
    imageUrl: "public/previews/jaetea-preview.png",
    description: "창립 멤버 / 디자이너 / 컨텐츠 디렉터",
    date: "Spring 2019 - Fall 2020",
    hashtags: ["마케팅", "그래픽 디자인"],
  },

  // More posts...
];

function Experience() {
  return (
    <>
      <div className="bg-stone-50 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experiences
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              컨텐츠 디렉터로서 다양한 경험을 가지고 있습니다.
            </p>
          </div>
          <div className="mt-10 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <Link to={`/experience/${post.id}`} key={post.id}>
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
                    <p className="text-gray-700 text-base">
                      {post.description}
                    </p>
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
    </>
  );
}

export default Experience;
