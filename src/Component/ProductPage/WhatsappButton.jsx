import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.open("https://wa.me/919876543210", "_blank");
    }, 500); // Wait for fade animation to finish
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: clicked ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <div className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;
