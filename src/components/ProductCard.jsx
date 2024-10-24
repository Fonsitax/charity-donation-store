import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className="card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-auto rounded-t-lg mb-4" 
      />
      <h3 className="text-xl font-semibold mb-2 text-primary-color">
        {product.name}
      </h3>
      <p className="mb-4">
        {product.description}
      </p>
      <p className="text-lg font-bold text-primary-color mb-4">
      €{product.price}
      </p>
      <button className="bg-accent-color hover:bg-hover-color text-white py-2 px-4 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
