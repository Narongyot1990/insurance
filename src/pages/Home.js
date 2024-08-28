import React, { useEffect, useState } from 'react';
import Heading from '../components/common/Heading';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion'; 
import { slidesContent, accordionContent } from './content';
import Paragraph from '../components/common/Paragraph';
import ProductBubble from '../components/ProductBubble';
import TextToSpeech from '../components/TextToSpeech';
import './Home.css'; // Import the CSS file

const sections = [
  {
    id: 'carousel',
    content: <Carousel slides={slidesContent} />,
  },

  {
    id: 'productBubble',
    content: <ProductBubble />,
  },

  {
    id: 'articles',
    content: (
      <div className="article-section">
        <Heading level={1} className="article-heading" text="ทำไมคุณควรเลือก AIAcare by Daravee สำหรับการดูแลสุขภาพ?" />
        <div className="article-content-box">
          <Paragraph className="article-paragraph" text="ที่ AIAcare by Daravee เรามีความเชี่ยวชาญในการให้คำปรึกษาและวางแผนด้านประกันสุขภาพและชีวิต เพื่อให้คุณและครอบครัวได้รับการปกป้องที่ครอบคลุมที่สุด ตั้งแต่การวางแผนความคุ้มครองที่เหมาะสม การให้บริการหลังการขายที่ละเอียดรอบคอบ ไปจนถึงการติดตามผลประโยชน์ของคุณอย่างใกล้ชิด" />
          <div className="article-divider"></div>
          <Paragraph className="article-paragraph" text="เรามุ่งมั่นที่จะมอบการคุ้มครองด้านสุขภาพที่ดีที่สุดในงบประมาณที่คุณมี ด้วยวิธีการที่คุ้มค่าและเหมาะสมที่สุด ไม่ว่าคุณจะมีงบประมาณเท่าใด เราจะช่วยคุณวางแผนการประกันสุขภาพที่ตอบโจทย์ความต้องการของคุณ และเราจะอยู่เคียงข้างคุณตลอดเส้นทาง เพื่อให้คุณได้รับสิ่งที่ดีที่สุดในทุกช่วงเวลา" />
          <div className="article-divider"></div>
          <Paragraph className="article-paragraph" text="นอกเหนือจากการดูแลสุขภาพแล้ว เราพร้อมที่จะช่วยคุณวางแผนการลงทุนที่เหมาะสมกับเป้าหมายของคุณ ไม่ว่าจะเป็นการลงทุนระยะสั้นหรือระยะยาว คุณดาระวี บุญสิริเวทย์ มีความรู้และความเข้าใจในการลงทุนที่สามารถช่วยคุณสร้างความมั่นคงทางการเงินที่ยั่งยืน" />
          <div className="article-divider"></div>
          <Paragraph className="article-paragraph" text="AIAcare by Daravee พร้อมที่จะดูแลคุณในทุกด้านของการประกันสุขภาพและการลงทุน เพื่อให้คุณมีชีวิตที่มั่นคงและปลอดภัยในทุกย่างก้าว" />
        </div>
      </div>
    ),
  },  
  
  {
    id: 'accordion',
    content: accordionContent.map((item, index) => (
      <Accordion key={index} title={<Heading level={4} fontWeight={900} text={item.title} />} >
        <TextToSpeech text={item.content} />
        <Paragraph key={index} fontSize="16px" text={item.content} />
      </Accordion>
    )),
  },
];

function Home() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0, 
    };

    const observer = new IntersectionObserver((entries) => {
      const updatedVisibleSections = {};
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updatedVisibleSections[entry.target.id] = true;
        } else {
          updatedVisibleSections[entry.target.id] = false;
        }
      });
      setVisibleSections(prevVisibleSections => ({
        ...prevVisibleSections,
        ...updatedVisibleSections,
      }));
    }, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="home-container">
      {sections.map((section) => (
        <div
          id={section.id}
          className={`home-section ${visibleSections[section.id] ? 'visible' : 'hidden'}`}
          key={section.id}
        >
          {section.content}
        </div>
      ))}
    </div>
  );
}

export default Home;
