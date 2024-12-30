import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Login/register";
import Submit from "./components/Submit/submit";
import Categories from "./components/Categories/Categories";




const App = () => {
  return (
    <Router>
      {/* Navbar is rendered once here */}
      <Navbar />
      <main className="overflow-x-hidden bg-white text-dark">
        <Routes>
          {/* Define routes for each page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Banner />
                <Subscribe />
                <Banner2 />
                <Footer />
              
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/categories/:category" element={<Categories />} />
          
          
        </Routes>
      </main>
    </Router>
  );
};

export default App;
