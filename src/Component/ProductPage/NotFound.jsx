import React from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsappButton";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white px-4 overflow-hidden relative">
      {/* 404 Section */}
      <div className="relative flex text-[10rem] sm:text-[12rem] font-extrabold items-end">
        {/* Left 4 */}
        <span className="mr-6">4</span>

        {/* Shadow under 0 */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[30px] w-24 h-6 bg-black bg-opacity-40 rounded-full z-0"
          initial={{ scaleX: 1, scaleY: 0.5, opacity: 0 }}
          animate={{ scaleX: [1, 1.8, 1.2], scaleY: [0.5, 0.3, 0.5], opacity: [0, 1, 0.6] }}
          transition={{
            delay: 0.9,
            duration: 0.4,
            ease: "easeOut",
          }}
        />

        {/* Optional Dust Puff */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[40px] w-24 h-24 rounded-full bg-white bg-opacity-10 blur-xl z-0"
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: [0, 1.5, 2], opacity: [0.6, 0.4, 0] }}
          transition={{
            delay: 0.95,
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Animated 0: Bounce once and stick */}
        <motion.span
          className="text-white relative z-10"
          initial={{ y: -400, scaleY: 1.4 }}
          animate={{
            y: [ -400, 0, -20, 0 ],
            scaleY: [1.4, 0.6, 1.2, 1],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          0
        </motion.span>

        {/* Right 4 */}
        <span className="ml-6">4</span>
      </div>

      {/* Subtext */}
      <motion.p
        className="text-2xl mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Oops! Form submission Error.
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <Link
          to="/"
          className="bg-white text-[#2a5298] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          Go Home Page
        </Link>
        <WhatsAppButton/>
      </motion.div>
    </div>
  );
};

export default NotFound;
