import "./index.css";
import "./App.css";
import { useState } from "react";

// Define categories and their corresponding artworks
type CategoryKey = "digitalArt" | "handDrawing" | "copy";
const categories: Record<
  CategoryKey,
  {
    src: string;
    alt: string;
    title: string;
    description: string;
    link?: string;
  }[]
> = {
  digitalArt: [
    {
      src: "/arts/DippinDots.gif",
      alt: "Dippin' Dots",
      title: "Dippin' Dots",
      description: "Dippin' Dots",
      link: "https://editor.p5js.org/hajoon00/full/aVsl3x4XF",
    },
    {
      src: "/arts/Batcave.png",
      alt: "Batcave",
      title: "Dippin' Dots",
      description: "Batcave",
    },
    {
      src: "/arts/spoon.jpg",
      alt: "Spoon",
      title: "Dippin' Dots",
      description: "Spoon",
    },

    {
      src: "/arts/Elan_Fullshot.jpg",
      alt: "Elan_Fullshot",
      title: "Elan Fullshot",
      description: "Spoon",
    },
    {
      src: "/arts/Elan_Interior.jpg",
      alt: "Elan_Interior",
      title: "Elan Interior",
      description: "Spoon",
    },
    {
      src: "/arts/Hanok_Semi_Final.jpg",
      alt: "Spoon",
      title: "Hanok",
      description: "Spoon",
    },
  ],
  handDrawing: [
    {
      src: "/arts/Desert.png",
      alt: "Desert",
      title: "Dippin' Dots",
      description: "Desert",
    },
    {
      src: "/arts/Ocean.png",
      alt: "Ocean",
      title: "Dippin' Dots",
      description: "Ocean",
    },
    {
      src: "/arts/Tiger.png",
      alt: "Tiger",
      title: "Dippin' Dots",
      description: "Tiger",
    },
  ],
  copy: [
    {
      src: "/arts/Batman.png",
      alt: "Batman",
      title: "Dippin' Dots",
      description: "Batman",
    },
    {
      src: "/arts/Dr-Strange.png",
      alt: "Dr. Strange",
      title: "Dippin' Dots",
      description: "Dr. Strange",
    },
    {
      src: "/arts/Nick_and_Judy.png",
      alt: "Nick and Judy",
      title: "Dippin' Dots",
      description: "Nick and Judy",
    },
    {
      src: "/arts/Pulp-Fiction.png",
      alt: "Pulp Fiction",
      title: "Dippin' Dots",
      description: "Pulp Fiction",
    },
    {
      src: "/arts/Spiderman.png",
      alt: "Spiderman",
      title: "Dippin' Dots",
      description: "Spiderman",
    },
    {
      src: "/arts/T1.png",
      alt: "T1",
      title: "Dippin' Dots",
      description: "T1",
    },
    {
      src: "/arts/Thresh.png",
      alt: "Thresh",
      title: "Dippin' Dots",
      description: "Thresh",
    },
  ],
};

const ImageCard = ({
  src,
  alt,
  title,
  link,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  link?: string | null;
  description?: string;
}) => (
  <div className="relative group aspect-ratio max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105">
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="rounded-lg" src={src} alt={alt} />
      </a>
    ) : (
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img className="rounded-lg" src={src} alt={alt} />
      </a>
    )}
    <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
      <p className="text-center px-2">{description}</p>
    </div>
  </div>
);

function Art() {
  const [selectedTab, setSelectedTab] = useState("digitalArt");

  return (
    <div className="bg-neutral-100 pt-8">
      <section className="bg-neutral-100">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <h1 className="mb-4 font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
            예술, 또는 낙서
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            때로는 디자인의 규칙을 지키지 않고 싶을 때가 있습니다. 걸작을
            모방하기도 하며, 저만의 그림을 그리기도 합니다.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-screen-lg mx-auto">
          {/* Tab Buttons */}
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {["digitalArt", "handDrawing", "copy"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`text-slate-700 border border-transparent hover:border-gray-400 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                  selectedTab === tab
                    ? "font-bold bg-hajoon-700 text-white"
                    : "text-hajoon-900 border border-white hover:border-gray-200 bg-white"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab === "digitalArt"
                  ? "Digital Art"
                  : tab === "handDrawing"
                  ? "Original Hand Drawing"
                  : "Copy"}
              </button>
            ))}
          </div>

          {/* Artworks */}
          <div data-tab-content="" className="p-5">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {categories[selectedTab].map((art, index) => (
                <ImageCard key={index} {...art} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Art;
