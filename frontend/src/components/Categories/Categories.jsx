import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To fetch the category from the URL
import { IoLeafOutline, IoHeartOutline, IoPlanetOutline } from 'react-icons/io5';

// Define the category icons map
const categoryIcons = {
  nature: <IoLeafOutline />,
  love: <IoHeartOutline />,
  life: <IoPlanetOutline />,
};

const Categories = () => {
  const { category } = useParams(); // Get the category name from the URL
  const [poems, setPoems] = useState([]);

  // Fetch poems based on the selected category
  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch(`/api/poems?category=${category}`)
      .then((response) => response.json())
      .then((data) => setPoems(data))
      .catch((error) => console.error('Error fetching poems:', error));
  }, [category]);

  // Render the category and poems
  return (
    <div className="categories-container py-6 px-6">
      <h2 className="text-2xl font-bold mb-6">
        {categoryIcons[category] && categoryIcons[category]} {category.charAt(0).toUpperCase() + category.slice(1)} Poems
      </h2>

      <div className="poems-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {poems.length > 0 ? (
          poems.map((poem, index) => (
            <div key={index} className="poem-box bg-white shadow-md p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">{poem.title}</h4>
              <p className="text-gray-700">{poem.content}</p>
            </div>
          ))
        ) : (
          <p>No poems available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
