import { NavLink } from "react-router-dom";

const Navbar = () => {
  const tabs = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap justify-center gap-2 bg-gray-900/95 p-4 backdrop-blur-sm sm:gap-6">
      {tabs.map((tab) => {
        // We need to convert "Home" to "/" and "Projects" to "/projects" for the URLs
        const path = tab === "Home" ? "/" : `/${tab.toLowerCase()}`;

        return (
          <NavLink
            key={tab}
            to={path}
            className={({ isActive }) =>
              `rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 sm:text-base ${
                isActive
                  ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] scale-105"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            {tab}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;