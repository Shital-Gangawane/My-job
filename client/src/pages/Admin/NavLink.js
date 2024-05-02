import { Link } from "react-router-dom";

const NavLink = ({ to, icon, label, location }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`w-full p-2 px-4 hover:bg-orange-700 transition duration-300 flex flex-col  md:flex-row items-center justify-center sm:justify-normal md:gap-1 ${
        isActive ? "bg-orange-700 rounded-sm" : ""
      }`}
    >
      {icon}
      <p
        className={` text-[8px] md:text-sm text-start ${
          isActive ? "text-white" : ""
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default NavLink;
