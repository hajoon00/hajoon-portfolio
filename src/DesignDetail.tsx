import { useParams } from "react-router-dom";
import CooKR from "./components/CooKR.tsx";
import DevFlow from "./components/DevFlow.tsx";
import Hasom from "./components/Hasom.tsx";
import Path from "./components/Path.tsx";
import Biennale from "./components/Biennale.tsx";

const DesignDetail = () => {
  const { id } = useParams();

  // You can use the id to fetch more detailed data if needed
  return (
    <div>
      {id === "101" && <Hasom />}
      {id === "102" && <CooKR />}
      {id === "103" && <DevFlow />}
      {id === "104" && <Biennale />}
    </div>
  );
};

export default DesignDetail;
