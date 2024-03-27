import { Link } from "react-router-dom";

const NavLink = ({ to, icon, label, location }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`w-full p-1 hover:bg-gray-700 transition duration-300 flex items-center gap-1 ${
        isActive ? "bg-gray-700" : ""
      }`}
    >
      {icon}
      <p className={`text-start ${isActive ? "text-white" : ""}`}>{label}</p>
    </Link>
  );
};

export default NavLink;
