// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // นำเข้า CSS สำหรับจัดการสไตล์

function ProductCard({ title, subtitle, description, imgSrc, link }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} className="product-card-image" />
      <div className="product-card-content">
        <span className="product-card-badge">แนะนำ</span>
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-subtitle">{subtitle}</p>
        <ul className="product-card-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to={link} className="product-card-button">ดูรายละเอียด</Link>
      </div>
    </div>
  );
}

export default ProductCard;
