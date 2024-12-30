import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faUser, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // For navigation

// Services Data
const ServicesData = [
  {
    id: 1,
    title: "Love",
    description: "Explore heartfelt poetry on love and emotions.",
    icon: <FontAwesomeIcon icon={faHeart} size="1x" color="red" />,
    delay: 0.2,
    link: "love", // Corresponds to the 'love' category
  },
  {
    id: 2,
    title: "Nature",
    description: "Immerse yourself in the beauty of nature.",
    icon: <FontAwesomeIcon icon={faLeaf} size="1x" color="forestgreen" />,
    delay: 0.3,
    link: "nature", // Corresponds to the 'nature' category
  },
  {
    id: 3,
    title: "Life",
    description: "Reflect on the journey of life through poetry.",
    icon: <FontAwesomeIcon icon={faUser} size="1x" color="skyblue" />,
    delay: 0.4,
    link: "life", // Corresponds to the 'life' category
  },
  {
    id: 4,
    title: "Inspiration",
    description: "Find motivation with inspiring verses.",
    icon: <FontAwesomeIcon icon={faLightbulb} size="1x" color="orange" />,
    delay: 0.5,
    link: "inspiration", // Corresponds to the 'inspiration' category
  },
];

// Animation Function
const SlideUp = (delay) => ({
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
});

// Services Component
const Services = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigate = (link) => {
    navigate(`/categories/${link}`); // Redirect to the corresponding category page
  };

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
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer"
              onClick={() => handleNavigate(service.link)} // Navigate on click
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
