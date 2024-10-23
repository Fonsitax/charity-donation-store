import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import mockProducts from '../mockData/mockProducts.json';
import Headline from './Headline';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a local file
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-listing w-full min-h-screen container mx-auto m-32">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Headline text="FIRST COLLECTION" />
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <div className='mt-32'>
      <Headline text="Thank you for shopping blue" />
      </div>
    </div>
  );
};


export default ProductListing;
