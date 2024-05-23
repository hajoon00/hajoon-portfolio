import { useParams } from "react-router-dom";
import Pensa from "./components/Pensa.tsx";
import Jaetea from "./components/Jaetea.tsx";

const ExperienceDetail = () => {
  const { id } = useParams();

  // You can use the id to fetch more detailed data if needed
  return (
    <div>
      {id === "1" && <Pensa />}
      {id === "2" && <Jaetea />}
      {/* {id === "3" && <Path />}
      {id === "4" && <LoGlobe />} */}
    </div>
  );
};

export default ExperienceDetail;
