import "../index.css";
import "../App.css";
const features = [
  {
    name: "Aspiring Designer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    name: "Creative Developer",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];

function CooKR() {
  return (
    <>
      <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white font-montserrat">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mt-24 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
              Initial Thinking
            </h2>{" "}
            <h1> dff</h1>
            <p>
              한국을 제외한 다양한 나라에서는 In many cities worldwide,
              including Philly, it's challenging to find authentic Korean
              cuisine due to ingredients availability and altered recipes. There
              is a proliferation of misleading recipes, further confusing those
              seeking genuine Korean flavors.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
export default CooKR;
