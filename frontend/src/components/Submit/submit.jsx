import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Submit = () => {

  const [poetryTitle, setPoetryTitle] = useState("");
  const [poetryContent, setPoetryContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTitleChange = (e) => setPoetryTitle(e.target.value);
  const handleContentChange = (e) => setPoetryContent(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!poetryTitle || !poetryContent || !selectedCategory) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("title", poetryTitle);
    formData.append("content", poetryContent);
    formData.append("category", selectedCategory);
    if (file) formData.append("file", file);

    try {
      const response = await fetch("/api/upload-poetry", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Poetry uploaded successfully!");
        setPoetryTitle("");
        setPoetryContent("");
        setSelectedCategory("");
        setFile(null);
      } else {
        setErrorMessage(data.message || "Error uploading poetry");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-20 container py-10 mx-auto flex flex-col lg:flex-row justify-between items-center"
    >
      {/* Logo Section */}
      <div className="mb-8 lg:mb-0">
        <h1 className="font-extrabold text-3xl text-center lg:text-left text-gray-900">
          Submit Your Poetry
        </h1>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        {errorMessage && (
          <div className="bg-red-600 text-white py-2 px-4 rounded-md mb-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-600 text-white py-2 px-4 rounded-md mb-4">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-lg font-semibold mb-2 text-gray-800">
              Poetry Title
            </label>
            <input
              type="text"
              id="title"
              value={poetryTitle}
              onChange={handleTitleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter your poetry title"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-lg font-semibold mb-2 text-gray-800">
              Poetry Content
            </label>
            <textarea
              id="content"
              value={poetryContent}
              onChange={handleContentChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Write your poetry here"
              rows="6"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="category" className="block text-lg font-semibold mb-2 text-gray-800">
              Category
            </label>
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                {selectedCategory || "Select a category"}
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                  >
                    <li
                      onClick={() => {
                        setSelectedCategory("Nature");
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Nature
                    </li>
                    <li
                      onClick={() => {
                        setSelectedCategory("Love");
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Love
                    </li>
                    <li
                      onClick={() => {
                        setSelectedCategory("Life");
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Life
                    </li>
                    <li
                      onClick={() => {
                        setSelectedCategory("Inspiration");
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Inspiration
                    </li>
                    <li
                      onClick={() => {
                        setSelectedCategory("Others");
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Others
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="file" className="block text-lg font-semibold mb-2 text-gray-800">
              Upload a file (optional)
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            {file && (
              <div className="mt-2 text-sm text-gray-600">
                <p>Selected file: {file.name}</p>
                <p>File size: {(file.size / 1024).toFixed(2)} KB</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {isSubmitting ? "Uploading..." : "Submit Poetry"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};



  



export default Submit;