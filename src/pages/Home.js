import React from 'react';
import Heading from '../components/common/Heading';
import Carousel from '../components/Carousel';
import InsuranceInquiryForm from '../components/InsuranceInquiryForm';
import Accordion from '../components/Accordion'; 
import { slidesContent, accordionContent, articleContent } from './content';

const containerStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto', 
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const sectionStyle = {
  marginBottom: '20px',
};

function Home() {
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <Carousel slides={slidesContent} />
      </div>

      {articleContent.map((article, index) => (
        <div style={sectionStyle} key={index}>
          <Heading level={3} text={article.heading} />
          {article.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ))}

      <div style={sectionStyle}>
        <InsuranceInquiryForm />
      </div>

      <div>
        {accordionContent.map((item, index) => (
          <Accordion key={index} title={item.title}>
            {item.content}
          </Accordion>
        ))}
      </div>

    </div>
  );
}

export default Home;