import React from 'react';
import './ProductItem.css';

const ProductItem = ({ productId, image, product }) => {
   return (
      <div className="productitem__container" key={productId}>
         <img width="30px" height="30px" src={image} alt={product} />
         <span>{product}</span>
      </div>
   );
};

export { ProductItem };
