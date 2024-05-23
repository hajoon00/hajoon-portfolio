import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

const posts = [
  {
    id: 1,
    title: "K-PEnSA Marketing Chair",
    imageUrl: "src/assets/previews/Pensa-logo.svg",
    description: "hello.",
    date: "Fall 2023 - Spring 2024",
    hashtags: ["Marketing", "Design"],
  },
  {
    id: 2,
    title: "유학 읽어주는 남자",
    imageUrl: "src/assets/demo.png",
    description: "hello.",
    date: "Spring 2019 - Fall 2020",
    hashtags: ["Marketing", "Design"],
  },

  // More posts...
];

function Experience() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experiences
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Experience</p>
          </div>
          <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <Link to={`/experience/${post.id}`}>
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    className="w-full h-60 object-contain"
                    src={post.imageUrl}
                    alt={post.title}
                  />

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
