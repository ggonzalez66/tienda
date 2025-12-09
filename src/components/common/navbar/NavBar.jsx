import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 4, name: "Nuestras Divisiones", url: "portfolio" },
  { id: 1, name: "Nosotros", url: "introduction" },
];
const sectionNames = navItems.map((item) => item.url.toLowerCase());

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = (offset, activeSection) =>
  navItems.map((item) => {
    const target = item.url.toLowerCase();
    const isActive = activeSection === target;
    return (
      <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
        <Link
          onClick={handleMenuClick}
          to={target}
          smooth={true}
          duration={1000}
          offset={offset}
          className={`px-5 py-3 mx-1 font-medium transition-colors duration-300 ${
            isActive
              ? "bg-[#9929fb] text-white rounded-full"
              : "hover:text-picto-primary"
          }`}
        >
          {item.name}
        </Link>
      </li>
    );
  });

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) {
          const sectionId = (
            visibleEntry.target.getAttribute("data-section") ??
            visibleEntry.target.id
          )?.toLowerCase();
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-140px 0px -20% 0px",
      }
    );

    const targets = sectionNames
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    targets.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu(-140, activeSection)}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Top Planet
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu(-140, activeSection)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
