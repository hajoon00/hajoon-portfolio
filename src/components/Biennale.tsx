import "../index.css";
import "../App.css";

function Biennale() {
  return (
    <>
      <div className="w-full h-screen bg-stone-50 font-montserrat flex justify-center items-center">
        <div className="text-center">
          <a
            href="https://www.figma.com/proto/uXUoQAgs3A2oVDq3h2Jwxx/Hajoon-Park---Design-(Copy)?node-id=279-15&t=Cp3RtWJuFb8Z4QTE-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-hajoon-500 to-hajoon-700 hover:from-hajoon-700 hover:to-hajoon-900 font-medium rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              케이스 스터디 보러가기
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Biennale;
