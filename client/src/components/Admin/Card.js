// Card.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ title, count, icon }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-64 aspect-square bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/admin/${title}`)}
    >
      {icon}
      <h2 className="text-xl font-semibold text-gray-600 capitalize">
        {title}
      </h2>
      <p className="text-3xl font-bold mt-2 text-gray-600">{count}+</p>
    </motion.div>
  );
};

export default Card;
