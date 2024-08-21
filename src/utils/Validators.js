// src/utils/validators.js

// ตรวจสอบว่าข้อมูลที่กรอกเป็นข้อความ
export function validateText(value) {
  return value.trim().length > 0;
}

// ตรวจสอบว่าอีเมลถูกต้อง
export function validateEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}

// ตรวจสอบว่าเบอร์โทรศัพท์ถูกต้อง (รับเฉพาะตัวเลขและต้องมีความยาว 10 หลัก)
export function validatePhone(value) {
  const phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(value);
}

// ตรวจสอบว่าเป็นตัวเลข
export function validateNumber(value) {
  const numberPattern = /^[0-9]+$/;
  return numberPattern.test(value);
}

// ตรวจสอบว่าเป็น URL ที่ถูกต้อง
export function validateURL(value) {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
}

// ตรวจสอบว่าเป็นรหัสไปรษณีย์ที่ถูกต้อง (รับเฉพาะตัวเลขและต้องมีความยาว 5 หลัก)
export function validatePostalCode(value) {
  const postalCodePattern = /^[0-9]{5}$/;
  return postalCodePattern.test(value);
}

// ตรวจสอบว่าเป็นวันที่ถูกต้อง (รูปแบบ YYYY-MM-DD)
export function validateDate(value) {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(value)) return false;
  const date = new Date(value);
  return date instanceof Date && !isNaN(date.getTime());
}

// ตรวจสอบว่าเป็นเวลาที่ถูกต้อง (รูปแบบ HH:MM)
export function validateTime(value) {
  const timePattern = /^([01]\d|2[0-3]):?([0-5]\d)$/;
  return timePattern.test(value);
}

// ตรวจสอบว่าเป็นเลขบัตรประชาชนไทยที่ถูกต้อง
export function validateThaiID(value) {
  const idPattern = /^[1-9]\d{12}$/;
  return idPattern.test(value);
}

// ตรวจสอบว่าข้อความมีความยาวมากกว่าจำนวนขั้นต่ำ
export function validateMinLength(value, minLength) {
  return value.length >= minLength;
}

// ตรวจสอบว่าข้อความมีความยาวน้อยกว่าหรือเท่ากับจำนวนสูงสุด
export function validateMaxLength(value, maxLength) {
  return value.length <= maxLength;
}

// ตรวจสอบว่าข้อมูลไม่เกินค่าแม็กซิมัมที่กำหนด
export function validateMaxValue(value, maxValue) {
  return parseFloat(value) <= maxValue;
}

// ตรวจสอบว่าข้อมูลไม่ต่ำกว่าค่ามินิมัมที่กำหนด
export function validateMinValue(value, minValue) {
  return parseFloat(value) >= minValue;
}

// ตรวจสอบว่าไม่มีช่องว่างในข้อมูล
export function validateNoSpaces(value) {
  return !/\s/.test(value);
}