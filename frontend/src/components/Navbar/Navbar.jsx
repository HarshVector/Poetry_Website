import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  IoHomeOutline,
  IoBookOutline,
  IoLeafOutline,
  IoHeartOutline,
  IoPlanetOutline,
  IoCreateOutline,
  IoPersonOutline,
  IoMailOutline,
  IoBulbOutline,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/", icon: <IoHomeOutline /> },
  {
    id: 2,
    title: "Categories",
    icon: <IoBookOutline />,
    submenu: [
      { id: 1, title: "Nature", path: "/categories/nature", icon: <IoLeafOutline /> },
      { id: 2, title: "Love", path: "/categories/love", icon: <IoHeartOutline /> },
      { id: 3, title: "Life", path: "/categories/life", icon: <IoPlanetOutline /> },
      { id: 4, title: "Inspiration", path: "/categories/inspiration", icon: <IoBulbOutline /> },
    ],
  },
  { id: 3, title: "Submit a Poem", path: "/submit", icon: <IoCreateOutline /> },
  { id: 4, title: "About", path: "/about", icon: <IoPersonOutline /> },
  { id: 5, title: "Contact Us", path: "/contact", icon: <IoMailOutline /> },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 py-6 px-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">Writers Horizon</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <>
                    <button
                      onClick={handleDropdownToggle}
                      className="flex items-center gap-2 py-2 px-3 hover:text-secondary"
                    >
                      {menu.icon} {menu.title}
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{
                            duration: 0.4, // Smoother animation
                            ease: [0.25, 0.8, 0.5, 1], // Smooth cubic-bezier curve
                          }}
                          className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 overflow-hidden"
                        >
                          {menu.submenu.map((submenuItem) => (
                            <li key={submenuItem.id}>
                              <a
                                href={submenuItem.path}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-secondary hover:text-white transition-colors duration-200"
                              >
                                {submenuItem.icon} {submenuItem.title}
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
                    className="flex items-center gap-2 py-2 px-3 hover:text-secondary"
                  >
                    {menu.icon} {menu.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="./login">
            <button className="primary-btn">Sign In</button>
          </a>
        </div>

        {/* Mobile Hamburger menu */}
        <div className="lg:hidden">
          <button onClick={handleMobileMenuToggle} className="text-3xl">
            {mobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 shadow-lg py-6 px-6"
          >
            <ul className="flex flex-col gap-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="relative">
                  {menu.submenu ? (
                    <>
                      <button
                        onClick={handleDropdownToggle}
                        className="flex items-center gap-2 py-2 px-3 hover:text-secondary"
                      >
                        {menu.icon} {menu.title}
                      </button>
                      {dropdownOpen && (
                        <ul className="ml-4 mt-2">
                          {menu.submenu.map((submenuItem) => (
                            <li key={submenuItem.id}>
                              <a
                                href={submenuItem.path}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-secondary hover:text-white"
                              >
                                {submenuItem.icon} {submenuItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={menu.path}
                      className="flex items-center gap-2 py-2 px-3 hover:text-secondary"
                    >
                      {menu.icon} {menu.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
