import React from 'react';
import './ProductBubble.css';
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';

const products = [
  { name: 'ประกันสุขภาพ', icon: require('../assets/images/11.png'), link: '/products/health-insurance' },
  { name: 'AIA PRESTIGE', icon: require('../assets/images/12.png'), link: '/products/aia-prestige' },
  { name: 'ประกันโรคร้ายแรง', icon: require('../assets/images/13.png'), link: '/products/critical-illness' },
  { name: 'ประกันชีวิต', icon: require('../assets/images/14.png'), link: '/products/life-insurance' },
  { name: 'ประกันออมทรัพย์', icon: require('../assets/images/15.png'), link: '/products/savings-insurance' },
  { name: 'ประกันสุขภาพเด็ก', icon: require('../assets/images/19.png'), link: '/products/child-health-insurance' },
  { name: 'ประกันอุบัติเหตุ', icon: require('../assets/images/16.png'), link: '/products/accident-insurance' },
  { name: 'ประกันกลุ่ม', icon: require('../assets/images/17.png'), link: '/products/group-insurance' },
  { name: 'ประกันบำนาญ', icon: require('../assets/images/18.png'), link: '/products/retirement-insurance' },
  { name: 'UNIT LINKED', icon: require('../assets/images/10.png'), link: '/products/unit-linked' },
];

function ProductBubble() {
  return (
    <div className="bubble-container">
      <div className="bubble-heading">
        <Heading level={1} fontWeight={900} color="#333D47" text="ผลิตภัณฑ์ทั้งหมด" />
        <Paragraph fontSize={16} color={"#333D47"} text="เลือกดูข้อมูลสินค้าและผลิตภัณฑ์ที่คุณต้องการ" />
      </div>
      <ul className="bubble-list">
        {products.map((product, index) => (
          <li key={index} className="bubble-item" data-depth={index % 2 === 0 ? 1 : 1.5}>
            <a href={product.link} className="bubble-link">
              <img src={product.icon} alt={product.name} className="bubble-icon" />
              <p>{product.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductBubble;