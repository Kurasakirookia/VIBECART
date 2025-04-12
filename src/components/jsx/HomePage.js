import React from "react";
import "../css/navbar_homepage.css";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

 // Make sure to import your CSS file

function HomePage() {
  return (
    <div className="home_page_container">
      {/* <nav>
        <div className="nav_row_1">
          <ul className="nav_row_1_options nav_row_1_left">
            <li><Link to="/ProductPage">Sustainability</Link></li>
            <li>Custom</li>
            <li>Newsletter</li>
            <li>"icon"</li>
          </ul>

          <div className="logo">
            <img
              src="./images/image-removebg-preview (3).png"
              alt="logo"
            />
          </div>

          <ul className="nav_row_1_options nav_row_1_right">
            <li>
              <img src="" alt="" />
              <p>Sign In</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Favourites</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Shopping Bag</p>
            </li>
          </ul>
        </div>

        <ul className="nav_row_2 menu">
          {["Ladies", "Men", "Kids", "Home", "Sale"].map((menuItem, index) => (
            <li className="menu_items" key={index}>
              <a href="/" className="drop_link">
                {menuItem}
              </a>
              {menuItem === "Ladies" && (
                <div className="dropdown-content">
                  <a href="/">Dresses</a> <br />
                  <a href="/">Tops</a> <br />
                  <a href="/">Shoes</a> <br />
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav_2_search">
          <img src="./icons/search.svg" alt="icon" />
          <p style={{ paddingLeft: "2px" }}>Search</p>
        </div>
      </nav> */}

      {/* Actual Page 1 */}
      <div className="page_1_container">
        <div className="page_1_text">
          <p className="text">Free shipping above ₹1999</p>
          <p className="text">Free & flexible 15 days return</p>
          <p className="text">Estimated delivery time: 2-9 days</p>
        </div>

        {[1, 2].map((item, index) => (
          <div
            className="page_1_img_container1"
            key={index}
            style={{ backgroundColor: index % 2 === 1 ? "#dbdbdb" : "white" }}
          >
            
          <Link  to="/ProductPage" ><img className="page_1_img_container1_img" src={`./images/p1_m${item}.png`} alt={`p1_m${item}`} /></Link>
            <div className="p1_m1_text">
              <p className="boldtext">
                {item === 1
                  ? "Formal Whites Occasion"
                  : item === 2
                  ? "White Remix"
                  : "Formal Whites"}
              </p>
              <button className="shopnow text">Shop Now</button>
            </div>
          </div>
        ))}

        <Carousel></Carousel>
        
        {[3, 4].map((item, index) => (
          <div
            className="page_1_img_container1"
            key={index}
            style={{ backgroundColor: index % 2 === 1 ? "#dbdbdb" : "white" }}
          >
            
          <img src={`./images/p1_m${item}.png`} alt={`p1_m${item}`} />
            <div className="p1_m1_text">
              <p className="boldtext">
                {item === 1
                  ? "Formal Whites Occasion"
                  : item === 2
                  ? "White Remix"
                  : "Formal Whites"}
              </p>
              <button className="shopnow text">Shop Now</button>
            </div>
          </div>
        ))}
      </div>


      
    </div>
  );
}

export default HomePage;
