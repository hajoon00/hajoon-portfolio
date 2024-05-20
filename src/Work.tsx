import "./index.css";
import "./App.css";
import Design from "./Design.tsx";
import Pensa from "./components/Pensa.tsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Work />} />
      <Route path="/k-pensa" element={<Pensa />} />
    </Routes>
  );
};

function Work() {
  return (
    <BrowserRouter>
      <>
        <Design />

        <Pensa />
      </>
    </BrowserRouter>
  );
}

export default Work;
