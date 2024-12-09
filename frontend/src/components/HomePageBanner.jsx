import React, { Component } from 'react';
import '../assets/css/HomePageBanner.css';

// Correctly importing images
import HomePageBanner1 from '../assets/images/HomePageBanner.jpg';
import HomePageBanner2 from '../assets/images/HomePageBanner1.jpg';
import HomePageBanner3 from '../assets/images/HomePageBanner2.jpg';

export default class HomePageBanner extends Component {
  state = {
    currentIndex: 0,  // To keep track of the current image
  };

  // Function to move to the previous image
  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex === 0 ? 2 : prevState.currentIndex - 1,
    }));
  };

  // Function to move to the next image
  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex === 2 ? 0 : prevState.currentIndex + 1,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const images = [HomePageBanner1, HomePageBanner2, HomePageBanner3];  // Array of images

    return (
      <div className="homepagebanner">
        <div className="homepagebanner-container">
          {/* Left Arrow */}
          <button className="homepagebanner-arrow left" onClick={this.prevSlide}>
            &#8592;
          </button>

          {/* Banner Images */}
          <div className="homepagebanner-images">
            <img
              src={images[currentIndex]}
              alt="Cover"
              className="homepagebanner-image"
            />
          </div>

          {/* Right Arrow */}
          <button className="homepagebanner-arrow right" onClick={this.nextSlide}>
            &#8594;
          </button>
        </div>

        {/* Bottom Dot Indicators */}
        <div className="homepagebanner-dots">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={`homepagebanner-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => this.setState({ currentIndex: index })}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}
