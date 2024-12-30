import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  // State for password visibility toggle
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // State for password and confirm password values
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Handle form submission (for demonstration, it just logs the values)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Registered with username:", username, "email:", email);
    }
  };

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-100 via-pink-100 to-purple-300 py-28">
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-br from-pink-300 via-indigo-500 to-purple-600 opacity-10 blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-xl rounded-lg p-10 w-full max-w-md relative z-10 border border-gray-200"
      >
        {/* Header with Animation */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-serif italic text-center mb-8 text-gray-800"
        >
          Join <span className="text-purple-700">Writers Horizon</span>
        </motion.h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6 flex items-center border border-gray-300 rounded-lg shadow-md"
          >
            <FontAwesomeIcon icon={faUser} className="text-gray-600 px-4 py-3" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Create a username"
              className="w-full px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6 flex items-center border border-gray-300 rounded-lg shadow-md"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 px-4 py-3" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-6 flex items-center border border-gray-300 rounded-lg shadow-md"
          >
            <FontAwesomeIcon icon={faLock} className="text-gray-600 px-4 py-3" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="text-gray-600 cursor-pointer px-4 py-3"
              onClick={togglePasswordVisibility}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-6 flex items-center border border-gray-300 rounded-lg shadow-md"
          >
            <FontAwesomeIcon icon={faLock} className="text-gray-600 px-4 py-3" />
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className={`w-full px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200`}
              required
            />
            <FontAwesomeIcon
              icon={confirmPasswordVisible ? faEyeSlash : faEye}
              className="text-gray-600 cursor-pointer px-4 py-3"
              onClick={toggleConfirmPasswordVisibility}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mb-6"
          >
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Register
            </button>
          </motion.div>
        </form>

        {/* Footer Links with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-center text-sm text-gray-600"
        >
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login here
            </a>
          </p>
          <p>
            <a
              href="/"
              className="text-purple-600 font-medium hover:underline"
            >
              Back to Home
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
