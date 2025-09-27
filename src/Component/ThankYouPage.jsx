import { Link, useNavigate } from "react-router-dom";
import { TbMailCheck } from "react-icons/tb";
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6"; 
import { useEffect, useState } from "react";
import { /* motion */ } from "framer-motion";
import "../main.css"
const ThankYouPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(15);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000); 

    return () => clearInterval(timer);
  }, [navigate]);
  

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Icon */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <TbMailCheck className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" />
      </motion.div>

      {/* Text */}
<motion.h1
  className="text-2xl font-bold text-gray-900 mt-4 font-mono whitespace-nowrap overflow-hidden border-r-2 border-gray-900 select-none pointer-events-none caret-transparent"
  initial={{ width: 0 }}
  animate={{ width: "auto" }}
  transition={{
    duration: 2.5,
    ease: "linear",
  }}
>
  <span className="inline-block animate-typewriter">
    Thanks for submitting!
  </span>
</motion.h1>



      <motion.p
        className="text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Our team will communication you
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {`Redirecting to Home Page in ${timeLeft} seconds`}
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/"
          className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md hover:shadow-lg transition"
        >
          Go Home
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-4 justify-center sm:justify-end pt-10 text-8xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.2,
            },
          },
        }}
      >
        {[{
          icon: <FaFacebook className="w-10 h-10 cursor-pointer hover:text-blue-800" />,
          link: "https://www.facebook.com/star.multiventure"
        }, {
          icon: <FaYoutube className="w-10 h-10 cursor-pointer hover:text-red-600" />,
          link: "https://www.youtube.com/@Starmultiventure"
        }, {
          icon: <FaInstagram className="w-10 h-10 cursor-pointer hover:text-red-500" />,
          link: "https://www.instagram.com/star.multiventure/"
        }, {
          icon: <FaLinkedinIn className="w-10 h-10 cursor-pointer hover:text-blue-700" />,
          link: "https://www.linkedin.com/company/105677765/"
        }].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ThankYouPage;
