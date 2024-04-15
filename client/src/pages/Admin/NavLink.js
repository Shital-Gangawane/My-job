import { Link } from "react-router-dom";

const NavLink = ({ to, icon, label, location }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`w-full p-2 px-4 hover:bg-orange-700 transition duration-300 flex items-center justify-center sm:justify-normal gap-1 ${
        isActive ? "bg-orange-700 rounded-sm" : ""
      }`}
    >
      {icon}
      <p
        className={` hidden md:block text-start ${
          isActive ? "text-white" : ""
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default NavLink;
