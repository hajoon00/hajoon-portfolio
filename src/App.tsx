import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./Home.tsx";
import Work from "./Work.tsx";
import Art from "./Art.tsx";
import Resume from "./Resume.tsx";
import DesignDetail from "./DesignDetail.tsx";
import ExperienceDetail from "./ExperienceDetail.tsx";
import Footer from "./Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import GoBackButton from "./components/GoBackButton.tsx";

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

const App = () => {
  const location = useLocation();

  return (
    <>
      <nav className="bg-transparent fixed w-full z-40 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" end>
            <span className="self-center text-2xl text-hajoon font-semibold whitespace-nowrap">
              Hajoon Park
            </span>
          </NavLink>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-hajoon-200 bg-hajoon-500 rounded md:bg-transparent md:text-hajoon-500 md:p-0"
                      : "block py-2 px-3 text-hajoon-200 rounded  md:hover:bg-transparent md:hover:text-hajoon-500 md:p-0"
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
                      ? "block py-2 px-3 text-hajoon-200 bg-hajoon-500 rounded md:bg-transparent md:text-hajoon-500 md:p-0"
                      : "block py-2 px-3 text-hajoon-200 rounded  md:hover:bg-transparent md:hover:text-hajoon-500 md:p-0"
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
                      ? "block py-2 px-3 text-hajoon-200 bg-hajoon-500 rounded md:bg-transparent md:text-hajoon-500 md:p-0"
                      : "block py-2 px-3 text-hajoon-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-hajoon-500 md:p-0"
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
                      ? "block py-2 px-3 text-hajoon-200 bg-hajoon-500 rounded md:bg-transparent md:text-hajoon-500 md:p-0"
                      : "block py-2 px-3 text-hajoon-200 rounded md:hover:bg-transparent md:hover:text-hajoon-500 md:p-0"
                  }
                >
                  RESUME
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {location.pathname !== "/" && <GoBackButton />}
      <Router />
      <ScrollToTop />
      <Footer />
    </>
  );
};

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
