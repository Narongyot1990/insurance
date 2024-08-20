// src/pages/Promotion.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import './Promotion.css'; // Import CSS สำหรับจัดการ Responsive
import img1 from '../assets/images/4.png'
import img2 from '../assets/images/5.png'
import img3 from '../assets/images/6.png'
//import img4 from '../assets/images/7.png'
//import img5 from '../assets/images/8.png'

function Promotion() {
  const products = [
    {
      title: 'My Wish 10.5',
      subtitle: 'ประกันชีวิตสะสมทรัพย์',
      description: [
        'ค่าเบี้ยเริ่มต้น 30,000 บาท ต่อปี',
        'ส่งเบี้ย 5 ปี คุ้มครอง 10 ปี',
        'ผลตอบแทนปีละ 3%',
        'ไม่ต้องตรวจและไม่ต้องตอบคำถามสุขภาพ',
        'ลดหย่อนภาษีได้'
      ],
      imgSrc: img1,
      link: '/product/my-wish-10-5'
    },
    {
      title: 'My Wish Retirement Par',
      subtitle: 'ประกันบำนาญ',
      description: [
        'เลือกส่งเบี้ย 1 ปี / 5 ปี / 10 ปี และถึงอายุ 60 ปี',
        'รับเงินบำนาญตั้งแต่อายุ 60 ปี จนถึง 99 ปี',
        'รับเงินบำนาญรายปี 20% ของจำนวนเงินเอาประกันภัย',
        'ลดหย่อนภาษีได้'
      ],
      imgSrc: img2,
      link: '/product/my-wish-retirement-par'
    },
    // เพิ่มอีก 8 cards ตามต้องการ
    {
      title: 'D-Super Saving 10.1',
      subtitle: 'ประกันชีวิตสะสมทรัพย์',
      description: [
        'ค่าเบี้ยเริ่มต้น 50,000 บาท ต่อปี',
        'ส่งเบี้ย 1 ปี คุ้มครอง 10 ปี',
        'ผลตอบแทน 1.8% ทุกปี',
        'ไม่ต้องตรวจและไม่ต้องตอบคำถามสุขภาพ',
        'ลดหย่อนภาษีได้'
      ],
      imgSrc: img3,
      link: '/product/d-super-saving-10-1'
    },
    // เพิ่มอีก 7 cards
  ];

  return (
    <div className="promotion-page">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default Promotion;
