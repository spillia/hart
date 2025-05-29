import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.active ? '#e74c3c' : '#2c3e50'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90vh;
  
  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "도시 벽화",
      category: "wall",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 2,
      title: "추상화 작품",
      category: "abstract",
      image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 3,
      title: "풍경화",
      category: "landscape",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 4,
      title: "인물화",
      category: "portrait",
      image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <GalleryContainer>
      <h1>갤러리</h1>
      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          전체
        </FilterButton>
        <FilterButton 
          active={filter === 'wall'} 
          onClick={() => setFilter('wall')}
        >
          벽화
        </FilterButton>
        <FilterButton 
          active={filter === 'abstract'} 
          onClick={() => setFilter('abstract')}
        >
          추상화
        </FilterButton>
        <FilterButton 
          active={filter === 'landscape'} 
          onClick={() => setFilter('landscape')}
        >
          풍경화
        </FilterButton>
        <FilterButton 
          active={filter === 'portrait'} 
          onClick={() => setFilter('portrait')}
        >
          인물화
        </FilterButton>
      </FilterContainer>

      <GalleryGrid>
        {filteredItems.map(item => (
          <GalleryItem 
            key={item.id}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalContent>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <CloseButton onClick={() => setSelectedImage(null)}>&times;</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </GalleryContainer>
  );
}

export default Gallery; 