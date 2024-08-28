import React from 'react';

function ProductPage({ productName }) {
  return (
    <div>
      <h1>{productName}</h1>
      <p>รายละเอียดสินค้า: {productName}</p>
      {/* Add more product-specific details here */}
    </div>
  );
}

export default ProductPage;
