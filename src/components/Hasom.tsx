import "../index.css";
import "../App.css";

function Hasom() {
  return (
    <>
      <div className="w-full h-screen bg-white font-montserrat flex justify-center items-center">
        <div className="text-center">
          <a
            href="/Hasom-brandbook.pdf"
            download="Hasom-brandbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-hajoon-500 to-hajoon-700 hover:from-hajoon-900 hover:to-hajoon-700 font-medium rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              브랜드북 다운로드
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hasom;
