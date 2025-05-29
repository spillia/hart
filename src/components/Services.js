import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
`;

const PriceList = styled.div`
  margin-top: 2rem;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #dee2e6;

  &:last-child {
    border-bottom: none;
  }
`;

function Services() {
  return (
    <ServicesContainer>
      <h1>서비스</h1>
      <p>당신의 공간을 특별하게 만들어드립니다</p>

      <ServiceGrid>
        <ServiceCard>
          <ServiceIcon>🎨</ServiceIcon>
          <h3>벽화 디자인</h3>
          <p>전문 아티스트가 직접 디자인하고 제작하는 맞춤형 벽화 서비스입니다.</p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🖼️</ServiceIcon>
          <h3>그림 제작</h3>
          <p>고객의 요구사항에 맞는 맞춤형 그림을 제작해드립니다.</p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🏢</ServiceIcon>
          <h3>상업 공간 디자인</h3>
          <p>카페, 레스토랑, 사무실 등 상업 공간의 벽화 및 인테리어 디자인을 제공합니다.</p>
        </ServiceCard>
      </ServiceGrid>

      <PriceList>
        <h2>가격 안내</h2>
        <PriceItem>
          <span>벽화 디자인 (1㎡)</span>
          <span>150,000원 ~</span>
        </PriceItem>
        <PriceItem>
          <span>그림 제작 (A3)</span>
          <span>300,000원 ~</span>
        </PriceItem>
        <PriceItem>
          <span>상업 공간 디자인</span>
          <span>문의</span>
        </PriceItem>
      </PriceList>
    </ServicesContainer>
  );
}

export default Services; 