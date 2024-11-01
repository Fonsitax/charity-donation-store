import React, { useEffect } from "react";
import Headline from "./Headline";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSlogan = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Container with the Logo */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center"
        data-aos="fade-up"
      >
        <img
          src="/assets/images/sea1.png"
          alt="Ocean Nation Logo"
          className="h-48 w-48 md:h-64 md:w-64"
        />
      </div>

      {/* Right Container with the Slogan */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-blue-500 text-white flex flex-col justify-center items-center p-4"
        data-aos="fade-left"
      >
        <h1>
          <Headline
            classname="text-center mb-4 dark:"
            text="Why Ocean Nation?"
          />
        </h1>
        <p className="text-lg md:text-2xl text-center p-2">
          Your purchase supports a cleaner, healthier planet.
        </p>
        <p className="text-lg md:text-2xl text-center p-4">
          We offer eco-friendly products, with all profits going directly to
          global beach cleanup efforts.
        </p>
      </div>
    </section>
  );
};

export default HeroSlogan;
