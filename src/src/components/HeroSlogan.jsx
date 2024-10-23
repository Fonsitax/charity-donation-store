import React from 'react';

const HeroSlogan = () => {
  return (
    <section className="w-full h-screen flex">
      {/* Left Container with the Logo */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <img 
          src="src/assets/images/sea-2.png" // Replace with the correct path to your logo
          alt="Ocean Nation Logo"
          className="h-64 w-64"
        />
      </div>

      {/* Right Container with the Slogan */}
      <div className="w-1/2 h-full bg-blue-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">OCEAN NATION</h1>
        <p className="text-3xl flex text-center p-2">Your purchase supports a cleaner, healthier planet. 

        </p>
        <p className="text-3xl flex text-center p-6">
            We offer eco-friendly products, with all profits going directly to global beach cleanup efforts. 
        </p>
      </div>
    </section>
  );
};

export default HeroSlogan;
