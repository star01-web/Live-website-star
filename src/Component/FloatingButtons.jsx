import { useEffect, useState } from "react";
import { IoChevronUpCircle } from "react-icons/io5";
import "../main.css"
const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-6 button-floating">
        {/* ✅ WhatsApp Chat Button */}
        <a
          href="https://wa.me/9039023826" // 👈 Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          
        >
          {/* <img src="/whatsapp.svg" alt="WhatsApp" className="w-14 h-14" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" version="1" width="35" height="35" viewBox="0 0 90 90"><path d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z" fill="#FFF"></path></svg>
        </a>

        {/* ⬆️ Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className=" text-black p-4 rounded-full flex items-center justify-center transition-colors duration-200 hover:text-black"
          >
           <IoChevronUpCircle className="w-16 h-16" />
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingButtons;
