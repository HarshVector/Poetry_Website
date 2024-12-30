// import React from "react";
// import { IoMdMenu } from "react-icons/io";
// import { motion } from "framer-motion";

// const NavbarMenu = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//   },
//   {
//     id: 2,
//     title: "Categories",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Submit a Poem",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "About",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Contact Us",
//     link: "#",
//   },
// ];
// const Navbar = () => {
//   return (
//     <nav className="relative z-20">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="container py-10 flex justify-between items-center"
//       >
//         {/* Logo section */}
//         <div>
//           <h1 className="font-bold text-2xl">Writers Horizon</h1>
//         </div>
//         {/* Menu section */}
//         <div className="hidden lg:block">
//           <ul className="flex items-center gap-3">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id}>
//                 <a
//                   href={menu.path}
//                   className="inline-block py-2 px-3 hover:text-secondary relative group"
//                 >
//                   <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
//                   {menu.title}
//                 </a>
//               </li>
//             ))}
//             <button className="primary-btn">Sign In</button>
//           </ul>
//         </div>
//         {/* Mobile Hamburger menu section */}
//         <div className="lg:hidden">
//           <IoMdMenu className="text-4xl" />
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  {
    id: 2,
    title: "Categories",
    submenu: [
      { id: 1, title: "Nature", path: "/categories/nature" },
      { id: 2, title: "Love", path: "/categories/love" },
      { id: 3, title: "Life", path: "/categories/life" },
    ],
  },
  { id: 3, title: "Submit a Poem", path: "/submit" },
  { id: 4, title: "About", path: "/about" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 py-20 flex justify-between items-center "
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">Writers Horizon</h1>
        </div>

        {/* Menu section */}
        <div className="hidden lg:flex gap-6 items-center">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <>
                    <a
                      href="#"
                      className="inline-block py-2 px-3 hover:text-secondary"
                      onClick={handleDropdownToggle}
                    >
                      {menu.title}
                    </a>
                    {/* Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48"
                        >
                          {menu.submenu.map((submenuItem) => (
                            <li key={submenuItem.id}>
                              <a
                                href={submenuItem.path}
                                className="block px-4 py-2 hover:bg-secondary hover:text-white"
                              >
                                {submenuItem.title}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={menu.path}
                    className="inline-block py-2 px-3 hover:text-secondary"
                  >
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button className="primary-btn" >Sign In</button>
        </div>

        {/* Mobile Hamburger menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-3xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
