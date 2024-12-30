// import React from "react";
// import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { TbWorldWww } from "react-icons/tb";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="py-28 bg-[#f7f7f7]">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="container"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
//           {/* first section */}
//           <div className="space-y-4 max-w-[300px]">
//             <h1 className="text-2xl font-bold">Writers Horizon</h1>
//             <p className="text-dark2">
//             "Immerse yourself in the world of words and emotions with Writers Horizon."
// Writers Horizon is a sanctuary for poetry enthusiasts, writers, and dreamers alike. Discover a diverse collection of poems celebrating love, nature, life, and inspiration. Whether you're seeking solace in heartfelt verses, expressing your creativity, or connecting with a community of like-minded individuals, Writers Horizon provides the perfect space to nurture your poetic spirit.

// Explore, create, and share the magic of poetry with Writers Horizon.
//             </p>
//           </div>
//           {/* second section */}
//           <div className="grid grid-cols-2 gap-10">
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold">Categories</h1>
//               <div className="text-dark2">
//                 <ul className="space-y-2 text-lg">
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Love
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Nature
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Life
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Inspiration
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold">Links</h1>
//               <div className="text-dark2">
//                 <ul className="space-y-2 text-lg">
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Home
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Services
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     About
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Contact
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* third section */}
//           <div className="space-y-4 max-w-[300px]">
//             <h1 className="text-2xl font-bold">Get In Touch</h1>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
//               />
//               <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
//                 Go
//               </button>
//             </div>
//             {/* social icons */}
//             <div className="flex space-x-6 py-3">
//               <a href="#">
//                 <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//               <a href="#">
//                 <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//               <a href="#">
//                 <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//               <a href="#">
//                 <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-gradient-to-b from-blue-100 via-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Writers Horizon</h1>
            <p className="text-dark2">
              "Immerse yourself in the world of words and emotions with Writers
              Horizon." Writers Horizon is a sanctuary for poetry enthusiasts,
              writers, and dreamers alike. Discover a diverse collection of
              poems celebrating love, nature, life, and inspiration. Whether
              you're seeking solace in heartfelt verses, expressing your
              creativity, or connecting with a community of like-minded
              individuals, Writers Horizon provides the perfect space to nurture
              your poetic spirit. Explore, create, and share the magic of poetry
              with Writers Horizon.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Categories</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Love
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Nature
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Life
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Inspiration
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
