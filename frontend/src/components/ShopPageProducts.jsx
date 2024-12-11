import React, { useState } from 'react';
import '../assets/css/ShopPageProducts.css'; // New CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// Import Images (use placeholders or actual images)
import ProductImage1 from '../assets/images/HomePageDesign1.jpg';
import ProductImage2 from '../assets/images/HomePageDesign2.jpg';
import ProductImage3 from '../assets/images/HomePageDesign3.jpg';

export default function ShopPageProducts({ addToCart }) {
  const products = [
    { image: ProductImage1, name: 'Product 1', price: '5000', rating: 4 },
    { image: ProductImage2, name: 'Product 2', price: '6000', rating: 5 },
    { image: ProductImage3, name: 'Product 3', price: '7000', rating: 3 },
    { image: ProductImage1, name: 'Product 4', price: '8000', rating: 5 },
    { image: ProductImage2, name: 'Product 5', price: '4000', rating: 2 },
    { image: ProductImage3, name: 'Product 6', price: '7000', rating: 3 },
    { image: ProductImage1, name: 'Product 7', price: '9000', rating: 4 },
    { image: ProductImage2, name: 'Product 8', price: '10000', rating: 5 },
    { image: ProductImage3, name: 'Product 9', price: '11000', rating: 4 },
    { image: ProductImage1, name: 'Product 10', price: '12000', rating: 5 },
    { image: ProductImage2, name: 'Product 11', price: '13000', rating: 2 },
    { image: ProductImage3, name: 'Product 12', price: '14000', rating: 3 },
  ];

  const [visibleRows, setVisibleRows] = useState(3); // Initially show 3 rows (12 products)

  const loadMoreRows = () => {
    setVisibleRows((prev) => prev + 1); // Load 1 more row (4 more products)
  };

  return (
    <div className="new-homepage-products">
      {/* Top Content */}
      <div className="new-top-content">
        <h2>Shop Products</h2>
        <a href="/products" className="new-more-products-link">
          More Products →
        </a>
      </div>

      {/* Product Grid */}
      <div className="new-product-slider">
        {[...Array(Math.ceil(products.length / 4))].map((_, rowIndex) => (
          rowIndex < visibleRows && (
            <div key={rowIndex} className="new-product-row">
              {products.slice(rowIndex * 4, (rowIndex + 1) * 4).map((product, index) => (
                <div className="new-product-card" key={index}>
                  <div className="new-product-image">
                    <img src={product.image} alt={product.name} />
                    {/* Wishlist Icon */}
                    <div className="new-wishlist-icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="new-labels">
                    <span className="new-label">New</span>
                    <span className="new-offer-label">-50%</span>
                  </div>
                  <div className="new-hover-content">
                    <button className="new-add-to-cart" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                  <div className="new-product-details">
                    <div className="new-star-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`new-star ${i < product.rating ? 'new-filled' : ''}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <h3>{product.name}</h3>
                    <p className="new-price">{product.price} Rs</p>
                  </div>
                </div>
              ))}
            </div>
          )
        ))}
      </div>

      {/* Show More Button */}
      {visibleRows * 4 < products.length && visibleRows !== 3 && (
        <div className="new-show-more">
          <button onClick={loadMoreRows} className="new-show-more-button">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
