import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ParticularProduct.css"

function ProductPage() {
  const [showHidden, setShowHidden] = useState(false);

  const toggleTrending = () => {
    setShowHidden(!showHidden);
  };

  const location = useLocation();

  // Parse the query string
  const params = new URLSearchParams(location.search);
  const imgSrc = params.get('imgSrc');
  const title = params.get('title');
  const price = params.get('price');

  return (
    <div>
      {/* Further Search Container */}
      <div className="further_search_container">
        {/* Left Images Container */}
        <div className="left_images_container">
          <div className="p_images" id="p3_left_images_container">
            <img className="p_image p_image1" src={imgSrc} alt="" />
            <img className="p_image p_image2" src={imgSrc} alt="" />
            <img className="p_image p_image3" src={imgSrc} alt="" />
            <img className="p_image p_image4" src={imgSrc} alt="" />
          </div>
        </div>

        {/* Right Product Details */}
        <div className="right_product_details">
          <div className="product_details">
            <div className="cloth_name" id="cloth_name">
              <h5 className="text" style={{ fontSize: "20px" }}>
                {title}
              </h5>
              <img src="" alt="icon" />
            </div>
            <p className="text tax_text" style={{ color: "#919191" }}>
              MRP inclusive of all taxes
            </p>
            <p className="text" id="price">
              {price}
            </p>
            <p className="cloth_type" id="clothing" style={{ margin: "5px 0px" }}>
              {title}
            </p>
            <div className="mini_image">
              <img src="" alt="mini_image" />
            </div>
            <p className="text">Sizes</p>
            <div className="sizes_container">
              {["XXS", "XS", "S", "M", "L", "XL"].map((size) => (
                <p className="sizes" key={size}>
                  {size}
                </p>
              ))}
            </div>
            <div className="size_guide">
              <img src="" alt="size_guide" />
              <p id="size_guide">Size Guide</p>
            </div>
            <div className="add_to_cart">
              <a id="cart" href="/">
                <img src="" alt="" />
                Add
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trending List */}
      <div className="trending_list">
        <p className="text" style={{ fontSize: "25px" }}>
          Trending right now
        </p>
        <div className="trending_links">
          {[
            "Beige Bodycon Dresses",
            "Women's Lace Bodycon Dresses",
            "Black Bodycon Dresses",
            "Red Bodycon Dresses",
            "White Bodycon Dresses",
            "Short Bodycon Dresses",
          ].map((type, index) => (
            <p className="trending_type" key={`visible-${index}`}>
              {type}
            </p>
          ))}

          {[
            "Women's Grey Bodycon Dresses",
            "Women's Orange Bodycon Dresses",
            "Women's Gold Bodycon Dresses",
            "Women's Silver Bodycon Dresses",
            "Women's Purple Bodycon Dresses",
            "Women's Green Bodycon Dresses",
          ].map((type, index) => (
            <p
              className={`trending_type trending_type_hidden`}
              key={`hidden-${index}`}
              style={{ display: showHidden ? "block" : "none" }}
            >
              {type}
            </p>
          ))}
        </div>
        <button id="show" onClick={toggleTrending}>
          {showHidden ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
