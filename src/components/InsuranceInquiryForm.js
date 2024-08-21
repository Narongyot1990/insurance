// src/components/InsuranceInquiryForm.js

import React, { useState } from 'react';
import Form from './common/Form';
import * as Validator from '../utils/Validators';

function InsuranceInquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (formValues) => {
    console.log('Form submitted:', formValues);
  };

  const fields = [
    { label: 'ชื่อ', value: name, onChange: setName, type: 'text', placeholder: 'กรอกชื่อของคุณ', validator: Validator.validateText },
    { label: 'เบอร์โทรศัพท์', value: phone, onChange: setPhone, type: 'tel', placeholder: 'กรอกเบอร์โทรศัพท์ของคุณ', validator: Validator.validatePhone },
    { label: 'อีเมล', value: email, onChange: setEmail, type: 'email', placeholder: 'กรอกอีเมลของคุณ', validator: Validator.validateEmail },
    { label: 'ข้อความเพิ่มเติม', value: message, onChange: setMessage, type: 'text', placeholder: 'กรอกข้อความของคุณ' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>แบบฟอร์มติดต่อกลับ</h2>
      <Form onSubmit={handleSubmit} fields={fields} buttonLabel="ส่งข้อมูล" />
    </div>
  );
}

export default InsuranceInquiryForm;
