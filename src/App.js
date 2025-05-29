import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import logoImage from './images/logo.svg';
import heroBg from './images/2.jpg';
import wall1_2 from './images/벽1-2.jpg';
import wall2_1 from './images/벽2-1.jpg';
import wall2_2 from './images/벽2-2.jpg';
import wall2_3 from './images/벽2-3.jpg';
import wall9_3 from './images/벽9-3.jpg';
import wall7_2 from './images/벽7-2.jpg';
import wall4_1 from './images/벽4-1.jpg';
import mo2_1 from './images/모2-1.jpg';
import mo1_1 from './images/모1-1.jpg';
import wall5_1 from './images/벽5-1.jpg';
import wall5_2 from './images/벽5-2.jpg';
import wall5_3 from './images/벽5-3.jpg';
import wall5_4 from './images/벽5-4.jpg';
import wall5_5 from './images/벽5-5.jpg';
import wall6_1 from './images/벽6-1.jpg';
import wall6_2 from './images/벽6-2.jpg';
import wall7_1 from './images/벽7-1.jpg';
import wall8_1 from './images/벽8-1.jpg';
import wall8_2 from './images/벽8-2.jpg';
import wall9_1 from './images/벽9-1.jpg';
import wall9_2 from './images/벽9-2.jpg';
import wall10_1 from './images/벽10-1.jpg';
import wall10_2 from './images/벽10-2.jpg';

// 스타일 컴포넌트
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #2c3e50;
  padding: 1rem;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1002;
    padding: 0.5rem 0.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  @media (max-width: 600px) {
    padding: 0 0.3rem;
  }
`;

const Logo = styled(Link)`
  margin: 0;
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  color: white;
  text-decoration: none !important;
  font-weight: 900;
  margin-left: 0;
  padding-left: 0;
  &:hover, &:active, &:focus {
    color: white;
    text-decoration: none !important;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #e74c3c;
    }
  }

  .contact-info {
    color: white;
    font-size: 1rem;
    margin-left: 1rem;
    white-space: nowrap;
    margin-top: 1.2rem;
  }

  .kakao-logo {
    height: 28px;
    margin-left: 0.5rem;
    vertical-align: middle;
    cursor: pointer;
    transition: filter 0.2s;
    filter: grayscale(0.2);
  }

  .kakao-logo:hover {
    filter: grayscale(0) brightness(1.2);
  }

  @media (max-width: 600px) {
    gap: 0.3rem;
    .contact-info {
      font-size: 0.8rem;
      margin-top: 0.2rem;
      margin-left: 0.3rem;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  padding-top: 80px;
  border-bottom: none !important;
  box-shadow: none !important;
  outline: none !important;
  background: transparent !important;
  @media (max-width: 600px) {
    padding-top: 60px;
    padding-bottom: 110px;
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${heroBg});
  background-size: cover;
  background-position: center 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-attachment: fixed !important;
  @media (max-width: 600px) {
    background-attachment: fixed !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 10%;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 1rem;
    color: white;
  }
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2c3e50;
  color: white !important;
  padding: 0.7rem 0;
  text-align: center;
  border: none !important;
  border-top: none !important;
  outline: none !important;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.07);
  z-index: 1000;
  p {
    color: white !important;
    margin: 0.2em 0;
  }
`;

const OverlaySection = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
`;

const CategoryRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const CategoryCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;

const CategoryTitle = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  letter-spacing: 0.7em;
  @media (max-width: 600px) {
    font-size: 2rem;
    letter-spacing: 0.3em;
  }
`;

const ImageBox = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(255,255,255,0.15);
  border: 2px solid #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  cursor: pointer;
  overflow: hidden;
  transition: border 0.2s;
  &:hover {
    border: 2px solid #fff;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
    max-width: 120px;
    max-height: 120px;
    margin-bottom: 1.5rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalImage = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.7);
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.2rem;
  row-gap: 0;
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PriceList = styled.div`
  width: 100%;
  margin: 0;
  background: transparent;
  padding: 0.2rem 0 0 0;
  box-shadow: none;
  position: fixed;
  left: 0;
  bottom: 2.5rem;
  width: 100vw;
  z-index: 1001;
  border-radius: 0;
`;

const PriceListInner = styled.div`
  background: transparent;
  border-radius: 6px;
  margin: 0;
  padding: 0;
  color: #222;
`;

const PriceTitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const PriceTitleText = styled.span`
  background: #fff;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  border-radius: 6px 6px 0 0;
  z-index: 1;
  position: relative;
  margin-top: 3rem;
  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.4rem 0.7rem 0.4rem 0.7rem;
    margin-top: 1.2rem;
  }
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.2rem;
  border-bottom: 1px solid #dee2e6;
  font-size: 1.1rem;
  background: #f8f9fa;
  border-radius: 0;
  margin-bottom: 0;
  &:last-child {
    border-bottom: none;
    border-radius: 0 0 6px 6px;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: 3px solid #fff;
  border-radius: 8px;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(0,0,0,0.8);
  }
`;

function App() {
  const [modalImg, setModalImg] = useState(null);
  const categories = [
    { title: '벽화', imgs: [wall1_2, wall2_1, wall2_2, wall2_3, wall9_3, wall7_2] },
    { title: '작품', imgs: [wall4_1] },
    { title: '모사', imgs: [mo2_1, mo1_1] },
  ];

  const processImages = [
    wall7_1, wall7_2, wall9_1, wall9_2, wall9_3, wall10_1, wall10_2, wall6_1, wall6_2, wall5_5, wall5_4,
    wall5_3, wall5_1, wall5_2, wall8_1, wall8_2
  ];

  return (
    <Router basename="/hart">
      <AppContainer>
        <Header>
          <Nav>
            <Logo as="div">H. ART GALLERY</Logo>
            <NavLinks>
              <a href="/gallery">갤러리</a>
              {/* <a href="/services">서비스</a> */}
              <span className="contact-info">문의. 010.6228.4637</span>
              <span className="contact-info">카톡. SPILLIA</span>
            </NavLinks>
          </Nav>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection style={{position:'relative'}}>
                  <OverlaySection>
                    <CategoryRow>
                      {categories.map((cat, idx) => (
                        <CategoryCol key={cat.title}>
                          <CategoryTitle>{cat.title}</CategoryTitle>
                          <ImageGrid>
                            {cat.imgs.map((img, i) => (
                              <ImageBox key={i} onClick={() => img && setModalImg(img)}>
                                {img ? <img src={img} alt={cat.title + '-' + (i+1)} /> : null}
                              </ImageBox>
                            ))}
                          </ImageGrid>
                          <div style={{ width: '100%', marginTop: '1.5rem', textAlign: 'left' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem' }}>작업과정</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              {[0,1,2].map(j => (
                                <React.Fragment key={j}>
                                  <ImageBox style={{ background: '#eee', border: '1.5px dashed #bbb', minHeight: 80, minWidth: 80, alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: '0.95rem', padding: 0 }}>
                                    {processImages[idx*3+j] ? <img src={processImages[idx*3+j]} alt={`작업과정${idx*3+j+1}`} style={{width:'100%',height:'100%',objectFit:'cover'}} /> : '+ 추가'}
                                  </ImageBox>
                                  {j < 2 && <span style={{ fontSize: '2rem', color: '#bbb', margin: '0 0.2rem' }}>&rarr;</span>}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </CategoryCol>
                      ))}
                    </CategoryRow>
                    <PriceList>
                      <PriceListInner>
                        <PriceTitleWrap>
                          <PriceTitleText>가격 안내</PriceTitleText>
                        </PriceTitleWrap>
                        <PriceItem>
                          <span>벽화 디자인</span>
                          <span style={{ marginLeft: '-3cm' }}>가격 문의</span>
                        </PriceItem>
                        <PriceItem>
                          <span>그림 제작</span>
                          <span>300,000원 ~</span>
                        </PriceItem>
                      </PriceListInner>
                    </PriceList>
                  </OverlaySection>
                  {modalImg && (
                    <ModalOverlay onClick={() => setModalImg(null)}>
                      <ModalImage src={modalImg} alt="확대 이미지" />
                      <CloseButton onClick={e => { e.stopPropagation(); setModalImg(null); }}>&times;</CloseButton>
                    </ModalOverlay>
                  )}
                </HeroSection>
                <GallerySection>
                  <Gallery />
                </GallerySection>
              </>
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer>
          <p>© 2025 H. Art Gallery. All rights reserved.</p>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;