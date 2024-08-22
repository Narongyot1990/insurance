import React, { useEffect, useRef, useState } from "react";
import banner from '../assets/images/4.png';
import section2Image from '../assets/images/2.png';
import section3Image from '../assets/images/3.png';
import InsuranceInquiryForm from '../components/InsuranceInquiryForm';
import './Contact.css';

function Contact() {
  const sectionRefs = useRef([]);
  const contactInfoRef = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // สถานะของ Modal
  
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('show');

          // เช็คว่า Section 3 แสดงใน viewport หรือไม่
          if (index === 2) { 
            contactInfoRef.current.forEach((line, lineIndex) => {
              setTimeout(() => {
                line.classList.add('show');
              }, lineIndex * 200); // หน่วงเวลาทีละบรรทัดด้วย 200ms
            });
          }
        } else {
          section.classList.remove('show');

          // ลบคลาส show ออกจาก contact info ทุกครั้งที่เลื่อนออกจาก Section 3
          if (index === 2) {
            contactInfoRef.current.forEach((line) => {
              line.classList.remove('show');
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // เรียก handleScroll หนึ่งครั้งเพื่อเช็คว่าเริ่มต้นที่ใดใน viewport
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-page">
      {/* Section 1: Banner */}
      <section 
        ref={el => sectionRefs.current[0] = el} 
        className="section parallax-section section-1 scroll-trigger" 
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="fixed-content">
          <h1>ติดต่อเรา</h1>
          <p>ให้คำปรึกษาและคำแนะนำโดยทีมงานมืออาชีพ</p>
        </div>
      </section>
  
      {/* Section 2: ข้อความเกี่ยวกับการให้คำปรึกษา */}
      <section 
        ref={el => sectionRefs.current[1] = el} 
        className="section content-section section-2 scroll-trigger"
      >
        <div className="content">
          <img src={section2Image} alt="Team Consultation" className="dynamic-image" />
          <div className="text-content">
            <h2>ทำไมต้องเลือกเรา?</h2>
            <p>เราให้คำปรึกษาโดยผู้เชี่ยวชาญในทุกด้านของการประกันภัย ด้วยประสบการณ์และความรู้ที่มั่นคง เพื่อให้คุณได้แผนประกันที่ดีที่สุด</p>
          </div>
        </div>
      </section>
  
      {/* Section 3: ข้อมูลการติดต่อ */}
      <section 
        ref={el => sectionRefs.current[2] = el} 
        className="section content-section section-3 scroll-trigger"
      >
        <div className="content">
          <img src={section3Image} alt="Contact Information" className="dynamic-image" />
          <div className="text-content contact-info">
            <h2>ข้อมูลการติดต่อ</h2>
            <p ref={el => contactInfoRef.current[0] = el} className="animate-line">รหัสตัวแทน : 000000000</p>
            <p ref={el => contactInfoRef.current[1] = el} className="animate-line"><span>ชื่อ:</span> คุณดาระวี บุญสิริเวทย์</p>
            <p ref={el => contactInfoRef.current[2] = el} className="animate-line"><span>โทร:</span> 095 119 2491</p>
            <p ref={el => contactInfoRef.current[3] = el} className="animate-line"><span>อีเมล:</span> darawee.pr@gmail.com</p>
            <p ref={el => contactInfoRef.current[4] = el} className="animate-line"><span>ที่อยู่:</span> 111/160 หมู่.6 ต.ตาขัน อ.บ้านค่าย จ.ระยอง 21120</p>
          </div>
        </div>
      </section>
  
      {/* Section 4: Call to Action */}
      <section 
        ref={el => sectionRefs.current[3] = el} 
        className="section parallax-section section-4 scroll-trigger" 
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="fixed-content">
          <h2>พร้อมเริ่มต้นแล้วหรือยัง?</h2>
          <p>ให้เราช่วยคุณวางแผนการประกันที่ดีที่สุด</p>
          <button className="contact-button" onClick={openModal}>ติดต่อเราเลย</button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <InsuranceInquiryForm />
          </div>
        </div>
      )}
    </div>
  );  
}

export default Contact;
