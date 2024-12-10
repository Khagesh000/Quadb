import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/HomePageProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// Import Images
import HomePageDesign1 from '../assets/images/HomePageDesign1.jpg';
import HomePageDesign2 from '../assets/images/HomePageDesign2.jpg';
import HomePageDesign3 from '../assets/images/HomePageDesign3.jpg';

export default function HomePageProducts({ addToCart }) {
  const products = [
    { image: HomePageDesign1, name: 'Product 1', price: '5000', rating: 4 },
    { image: HomePageDesign2, name: 'Product 2', price: '6000', rating: 5 },
    { image: HomePageDesign3, name: 'Product 3', price: '7000', rating: 3 },
    { image: HomePageDesign1, name: 'Product 4', price: '8000', rating: 5 },
    { image: HomePageDesign2, name: 'Product 5', price: '4000', rating: 2 },
    { image: HomePageDesign3, name: 'Product 6', price: '7000', rating: 3 },
    { image: HomePageDesign1, name: 'Product 7', price: '9000', rating: 4 },
  ];

  const cardContainerRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const container = cardContainerRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    setScrollProgress((currentScroll / maxScrollLeft) * 100);
  };

  const scrollLeft = () => {
    const cardWidth = cardContainerRef.current.querySelector('.product-card').offsetWidth;
    cardContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const cardWidth = cardContainerRef.current.querySelector('.product-card').offsetWidth;
    cardContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = cardContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage-products">
      {/* Top Content */}
      <div className="top-content">
        <h2>New Arrivals</h2>
        <a href="/products" className="more-products-link">
          More Products →
        </a>
      </div>

      {/* Product Slider */}
      <div className="product-slider">
        <button className="arrow-button left" onClick={scrollLeft}>
          ←
        </button>
        <div className="products-row" ref={cardContainerRef}>
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {/* Wishlist Icon */}
                <div className="wishlist-icon">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="labels">
                <span className="new-label">New</span>
                <span className="offer-label">-50%</span>
              </div>
              <div className="hover-content">
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
              <div className="product-details">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < product.rating ? 'filled' : ''}`}>
                      ★
                    </span>
                  ))}
                </div>
                <h3>{product.name}</h3>
                <p className="price">{product.price} Rs</p>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={scrollRight}>
          →
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>
  );
}
