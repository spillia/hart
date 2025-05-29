import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const SubmitButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    margin-left: 1rem;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <h1>문의하기</h1>
      <p>궁금하신 점이 있으시다면 언제든지 문의해주세요.</p>

      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">전화번호</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">문의내용</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">문의하기</SubmitButton>
      </ContactForm>

      <ContactInfo>
        <h2>연락처 정보</h2>
        <InfoItem>
          <span>📞</span>
          <span>010-1234-5678</span>
        </InfoItem>
        <InfoItem>
          <span>✉️</span>
          <span>contact@artgallery.com</span>
        </InfoItem>
        <InfoItem>
          <span>🏢</span>
          <span>서울시 강남구 테헤란로 123</span>
        </InfoItem>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact; 