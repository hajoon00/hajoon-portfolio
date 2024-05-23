import { useParams } from "react-router-dom";
import CooKR from "./components/CooKR.tsx";

const DesignDetail = () => {
  const { id } = useParams();

  // You can use the id to fetch more detailed data if needed
  return (
    <div>
      {id === "101" && <CooKR />}
      {/* {id === "2" && <DevFlow />}
      {id === "3" && <Path />}
      {id === "4" && <LoGlobe />} */}
    </div>
  );
};

export default DesignDetail;
