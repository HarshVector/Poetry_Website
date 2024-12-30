// import React from "react";
// import BannerPng from "../../assets/education.png";
// import { GrUserExpert } from "react-icons/gr";
// import { MdOutlineAccessTime } from "react-icons/md";
// import { FaBookReader } from "react-icons/fa";
// import { FadeUp } from "../Hero/Hero";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <section>
//       <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
//         {/* Banner Image */}
//         <div className="flex justify-center items-center">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             src={BannerPng}
//             alt=""
//             className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
//           />
//         </div>
//         {/* Banner Text */}
//         <div className="flex flex-col justify-center">
//           <div className="text-center md:text-left space-y-12">
//             <motion.h1
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold !leading-snug"
//             >
//               The World's Leading Online learning Platform
//             </motion.h1>
//             <div className="flex flex-col gap-6">
//               <motion.div
//                 variants={FadeUp(0.2)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <FaBookReader className="text-2xl" />
//                 <p className="text-lg">10,000+ Courses</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.4)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <GrUserExpert className="text-2xl" />
//                 <p className="text-lg">Expert Instruction</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.6)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <MdOutlineAccessTime className="text-2xl" />
//                 <p className="text-lg">Lifetime Access</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;


import React from "react";
import { GrUserExpert, GrBook } from "react-icons/gr";
import { MdOutlineEmojiEmotions } from "react-icons/md"; // Creativity icon
import PoetryImage from "../../assets/poetry.png";
import { motion } from "framer-motion";

// Define FadeUp animation configuration
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.6, delay },
  },
});

const Banner = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 via-purple-50 to-blue-50 min-h-screen">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Banner Image without overlay */}
        <div className="relative flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            src={PoetryImage}
            alt="Poetry Banner"
            className="w-[350px] md:max-w-[450px] object-cover rounded-xl drop-shadow-2xl transform hover:scale-105 duration-300"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold leading-snug text-gray-800"
          >
            Unleash Your Creativity with Writers Horizon
          </motion.h1>

          {/* Features List */}
          <div className="flex flex-col gap-6 mt-6">
            {/* Icon 1 - Creative Expression */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:bg-gray-50 duration-300 hover:shadow-xl"
            >
              <MdOutlineEmojiEmotions className="text-2xl text-purple-600" />
              <p className="text-lg font-medium">Creative Expression</p>
            </motion.div>

            {/* Icon 2 - Poetry Collection */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:bg-gray-50 duration-300 hover:shadow-xl"
            >
              <GrBook className="text-2xl text-blue-600" />
              <p className="text-lg font-medium">Diverse Poetry Collection</p>
            </motion.div>

            {/* Icon 3 - Inspiring Community */}
            <motion.div
              variants={fadeUp(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:bg-gray-50 duration-300 hover:shadow-xl"
            >
              <GrUserExpert className="text-2xl text-green-600" />
              <p className="text-lg font-medium">Inspiring Community</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
