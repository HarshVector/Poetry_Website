// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Blob from "../../assets/blob.svg";
// import HeroPng from "../../assets/hero.png";
// import { animate, motion } from "framer-motion";

// export const FadeUp = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       y: 50,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// const Hero = () => {
//   return (
//     <section className="bg-light overflow-hidden relative">
//       <Navbar />
//       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
//         {/* Brand Info */}
//         <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
//           <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
//             <motion.h1
//               variants={FadeUp(0.6)}
//               initial="initial"
//               animate="animate"
//               className="text-3xl lg:text-5xl font-bold !leading-snug"
//             >
//               Let's Learn to build a{" "}
//               <span className="text-secondary">Website</span> for your business
//             </motion.h1>
//             <motion.div
//               variants={FadeUp(0.8)}
//               initial="initial"
//               animate="animate"
//               className="flex justify-center md:justify-start"
//             >
//               <button className="primary-btn flex items-center gap-2 group">
//                 Get Started
//                 <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//               </button>
//             </motion.div>
//           </div>
//         </div>
//         {/* Hero Image */}
//         <div className="flex justify-center items-center">
//           <motion.img
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
//             src={HeroPng}
//             alt=""
//             className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
//           />
//           <motion.img
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//             src={Blob}
//             alt=""
//             className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";

export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay: delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-100 via-purple-50 to-blue-50">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
            >
              Let's Learn to Build a{" "}
              <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Website
              </span>{" "}
              for your business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-300 hover:scale-105 transition duration-300">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative flex justify-center items-center">
          {/* Background Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-300 to-blue-200 blur-3xl z-0"
          />
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt="Illustration of building websites"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt="Background Blob"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


