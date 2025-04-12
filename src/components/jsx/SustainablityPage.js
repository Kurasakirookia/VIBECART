import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Sustainability.css"

const SustainabilityPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Sustainability at H&M</h1>
      </div>

      {/* Text + Image Section */}
      <div className="text-image-section">
        <div className="text-column">
          <h2>Our Work</h2>
          <p>Let’s innovate</p>
          <p>Let’s be fair</p>
          <p>Let’s be for all</p>
          <p>Let’s be transparent</p>
          <p>Let’s clean up</p>
          <p>Let’s close the loop</p>
          <p>Let’s reward our members</p>

          <h3>H&M Take Care</h3>
          <p>Wash</p>
          <p>Care</p>
          <p>Repair & remake</p>
          <p>Care products</p>

          <h3>Our Commitment</h3>
          <p>H&M Group Sustainability Strategy</p>
          <p>H&M Group Sustainability Report</p>
          <p>H&M Foundation</p>
        </div>
        <div className="image-column">
          <img src="../images/sus_img2.jpeg" alt="Sustainability Image" />
          <div className="overlay">
            <button>
              <Link to="/your-link-here" style={{ color: 'white', textDecoration: 'none' }}>
                Hello reusable Package!
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Images Section */}
      <div className="secondary-images">
        <div className="image-wrapper">
          <img src="../images/sus_img3.jpeg" alt="Sustainability Image 3" />
          <div className="overlay">
            <button>
              <Link to="/your-link-here" style={{ color: 'white', textDecoration: 'none' }}>
                Hello reusable Package!
              </Link>
            </button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src="../images/sus_img4.jpeg" alt="Sustainability Image 4" />
          <div className="overlay">
            <button>
              <Link to="/your-link-here" style={{ color: 'white', textDecoration: 'none' }}>
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Tertiary Images Section */}
      <div className="tertiary-images">
        <div className="image-wrapper">
          <img src="../images/sus_img5.jpeg" alt="Sustainability Image 5" />
          <div className="overlay">
            <button>
              <Link to="/your-link-here" style={{ color: 'white', textDecoration: 'none' }}>
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src="../images/sus_img6.jpeg" alt="Sustainability Image 6" />
          <div className="overlay">
            <button>
              <Link to="/your-link-here" style={{ color: 'white', textDecoration: 'none' }}>
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src="../images/sus_img7.jpeg" alt="Sustainability Image 7" />
          <div className="overlay">
            <button>
              <Link to="/your-link-here" style={{ color: 'white', textDecoration: 'none' }}>
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
