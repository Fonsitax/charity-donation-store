import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import mockProducts from '../../src/MockData/mockProducts.json';
import Headline from './Headline';
import AOS from 'aos';
import 'aos/dist/aos.css';  

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });

    // Simulate fetching data from a local file
    setProducts(mockProducts);
  }, []); // Empty dependency array to run only once

  return (
    <div className="product-listing w-full min-h-screen container mx-auto m-32 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos="fade-up">
          <Headline className="" text="FIRST COLLECTION" />
        </div>

        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay="200">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
