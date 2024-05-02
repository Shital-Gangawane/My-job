// Card.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loader from "../Utility/Loader";

const Card = ({ title, count, icon }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (count >= 0 && count !== undefined) setIsLoading(false);
  }, [count]);
  return (
    <motion.div
      className="h-32 md:h-48 aspect-square bg-white p-4 sm:p-10 md:px-16 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/admin/${title.toLowerCase()}`)}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {icon}
          <h2 className=" text-sm md:text-xl font-medium text-gray-600 capitalize">
            {title}
          </h2>
          <p className="text-xl font-bold mt-2 text-gray-600">{count}</p>
        </>
      )}
    </motion.div>
  );
};

export default Card;
