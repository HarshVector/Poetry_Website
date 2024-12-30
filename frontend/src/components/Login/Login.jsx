import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome Icons

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    return (
        <div className="relative z-10 flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 via-purple-100 to-pink-100 py-28">
            {/* Main Login Container */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="bg-white shadow-xl rounded-xl p-12 w-full max-w-lg relative z-10 border border-gray-300"
            >
                {/* Header with Animation */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl font-serif italic text-center mb-8 text-gray-800"
                >
                    Enter the Realm of <span className="text-indigo-600">Writers Horizon</span>
                </motion.h2>

                {/* Login Form */}
                <form>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mb-6 flex items-center border border-gray-300 rounded-lg shadow-md"
                    >
                        <FontAwesomeIcon icon={faUser} className="text-gray-600 px-4 py-3" />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mb-6 flex items-center border border-gray-300 rounded-lg shadow-md"
                    >
                        <FontAwesomeIcon icon={faLock} className="text-gray-600 px-4 py-3" />
                        <input
                            type={passwordVisible ? "text" : "password"} // Toggle between password and text
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                            required
                        />
                        <FontAwesomeIcon 
                            icon={passwordVisible ? faEyeSlash : faEye} 
                            className="text-gray-600 cursor-pointer px-4 py-3"
                            onClick={togglePasswordVisibility} // Toggle visibility when clicked
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mb-6"
                    >
                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Log in
                        </button>
                    </motion.div>
                </form>

                {/* Footer Links with Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-center text-sm text-gray-600"
                >
                    <p>
                        Don’t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                    <p>
                        <Link
                            to="/"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Back to Home
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
