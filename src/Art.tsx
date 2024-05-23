import "./index.css";
import "./App.css";

function Art() {
  return (
    <>
      <section className="bg-white mt-24 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <h1 className="mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            예술, 또는 낙서
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            때로는 디자인의 규칙을 지키지 않고 싶을 때가 있습니다. 걸작을
            모방하기도 하며, 저만의 그림을 그리기도 합니다.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-screen-lg grid grid-cols-2 md:grid-cols-2 gap-4 ">
        <div className="relative mx-auto max-w-sm group shadow-lg rounded-lg">
          <img
            className="h-auto rounded-lg"
            src="src/assets/arts/Batman.png"
            alt=""
          ></img>
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
            <p className="text-center px-2">Batman</p>
          </div>
        </div>
        <div className="relative mx-auto max-w-sm group shadow-lg">
          <img
            className="h-auto "
            src="src/assets/arts/Desert.png"
            alt=""
          ></img>
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
            <p className="text-center px-2">Batman</p>
          </div>
        </div>
        <div className="relative mx-auto max-w-sm group">
          <img
            className="h-auto max-w-sm rounded-lg"
            src="src/assets/arts/Dr-Strange.png"
            alt=""
          ></img>
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
            <p className="text-center px-2">Batman</p>
          </div>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/Nick_and_Judy.png"
            alt=""
          ></img>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/Ocean.png"
            alt=""
          ></img>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/Pulp-Fiction.png"
            alt=""
          ></img>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/Spiderman.png"
            alt=""
          ></img>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/T1.png"
            alt=""
          ></img>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/Thresh.png"
            alt=""
          ></img>
        </div>
        <div className="max-w-sm">
          <img
            className="h-auto max-w-full rounded-lg"
            src="src/assets/arts/Tiger.png"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
}

export default Art;
