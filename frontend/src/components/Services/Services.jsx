// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import {  faLeaf } from "@fortawesome/free-solid-svg-icons";
// import {  faUser  } from "@fortawesome/free-solid-svg-icons";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";


// const ServicesData = [
//   {
//     id: 1,
//     title: "Love",
//     link: "#",
//     icon: <FontAwesomeIcon icon={faHeart} size="1x" color="red" />,
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     title: "Nature",
//     link: "#",
//     icon: <FontAwesomeIcon icon={faLeaf} size="1x" color="forestgreen" />,
//     delay: 0.3,
//   },
//   {
//     id: 3,
//     title: "Life",
//     link: "#",
//     icon: <FontAwesomeIcon icon={faUser} size="1x" color="skyblue" />,
//     delay: 0.4,
//   },
//   {
//     id: 4,
//     title: "Inspiration",
//     link: "#",
//     icon: <FontAwesomeIcon icon={faLightbulb} size="1x" color="orange" />,
//     delay: 0.5,
//   },
//   // {
//   //   id: 5,
//   //   title: "SEO optimization",
//   //   link: "#",
//   //   icon: <IoPulseOutline />,
//   //   delay: 0.6,
//   // },
//   // {
//   //   id: 6,
//   //   title: "24/7 support",
//   //   link: "#",
//   //   icon: <BiSupport />,
//   //   delay: 0.7,
//   // },
// ];

// const SlideLeft = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };
// const Services = () => {
//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16">
//         <h1 className="text-4xl font-bold text-left pb-10">
//           Categories :
//         </h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
//           {ServicesData.map((service) => (
//             <motion.div
//               variants={SlideLeft(service.delay)}
//               initial="initial"
//               whileInView={"animate"}
//               viewport={{ once: true }}
//               className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//             >
//               <div className="text-4xl mb-4"> {service.icon}</div>
//               <h1 className="text-lg font-semibold text-center px-3">
//                 {service.title}
//               </h1>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faUser, faLightbulb } from "@fortawesome/free-solid-svg-icons";

// Services Data
const ServicesData = [
  {
    id: 1,
    title: "Love",
    description: "Explore heartfelt poetry on love and emotions.",
    icon: <FontAwesomeIcon icon={faHeart} size="1x" color="red" />,
    delay: 0.2,
    link: "#",
  },
  {
    id: 2,
    title: "Nature",
    description: "Immerse yourself in the beauty of nature.",
    icon: <FontAwesomeIcon icon={faLeaf} size="1x" color="forestgreen" />,
    delay: 0.3,
    link: "#",
  },
  {
    id: 3,
    title: "Life",
    description: "Reflect on the journey of life through poetry.",
    icon: <FontAwesomeIcon icon={faUser} size="1x" color="skyblue" />,
    delay: 0.4,
    link: "#",
  },
  {
    id: 4,
    title: "Inspiration",
    description: "Find motivation with inspiring verses.",
    icon: <FontAwesomeIcon icon={faLightbulb} size="1x" color="orange" />,
    delay: 0.5,
    link: "#",
  },
];

// Animation Function
const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// Services Component
const Services = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-14">
          Discover Our Categories
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideUp(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 flex flex-col items-center justify-center p-8 text-center"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
