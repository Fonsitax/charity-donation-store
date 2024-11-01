import React from "react";
import Navbar from "./components/NavBar";
import ProductListing from "./components/ProductListing";
import "./tailwind.css";
import "./global.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroSlogan from "./components/HeroSlogan";
import mockProducts from "./MockData/mockProducts.json";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full z-20 bg-transparent">
        {" "}
        {/* Make navbar transparent */}
        <Navbar />
      </header>
      {/* Main App Content */}
      <main className="p-0">
        {" "}
        {/* Remove padding to allow hero to take up full screen */}
        <Hero />
        <HeroSlogan />
        <div className="p-0">
          {" "}
          {/* Add padding around product listing */}
          <ProductListing />
        </div>
      </main>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
