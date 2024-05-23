import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home.tsx";
import Work from "./Work.tsx";
import Art from "./Art.tsx";
import Resume from "./Resume.tsx";
import DesignDetail from "./DesignDetail.tsx";
import ExperienceDetail from "./ExperienceDetail.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/design/:id" element={<DesignDetail />} />
      <Route path="/experience/:id" element={<ExperienceDetail />} />
      <Route path="/art" element={<Art />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <>
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" end>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Hajoon Park
              </span>
            </NavLink>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/work"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    }
                  >
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/art"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    }
                  >
                    Art
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    }
                  >
                    RESUME
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Router />
      </>
    </BrowserRouter>
  );
}

export default App;
