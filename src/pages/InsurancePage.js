import React from 'react';
import ProductCard from '../components/ProductCard';

function InsurancePage() {
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
      imgSrc: '/path/to/image1.jpg',
      link: '/product/my-wish-10-5'
    },
    // เพิ่มข้อมูลผลิตภัณฑ์อื่นๆ ที่ต้องการ
  ];

  return (
    <div className="insurance-page">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default InsurancePage;
