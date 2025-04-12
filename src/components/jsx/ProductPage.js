import { useState } from 'react';
import React from 'react';
import '../css/ProductPage.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";




function ProductPage() {

  // const [selectedCategory, setSelectedCategory] = useState("View All");
  const location = useLocation();
  const initialCategory = location.state?.category || "View All";
  const searchKey = location.state?.searchKey || ""; 
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);
  
  const products = {  

    "View All":[
    
      {
      imgSrc: "./images/sports1.jpg",
      title: "Loose fit hoodie",
      price: "Rs.1,499.00",
      },
      {
        imgSrc: "../images/sports2.jpg",
        title: "Loose fit hoodie",
        price: "Rs.1,499.00",
      },

      {
        imgSrc: "../images/sports3.jpg",
        title: "Loose fit hoodie",
        price: "Rs.1,499.00",
      },

      {
        imgSrc: "../images/ladies1.jpg",
        title: "Loose fit hoodie",
        price: "Rs.1,499.00",
      },
      {
        imgSrc: "../images/ladies2.jpg",
        title: "Loose fit hoodie",
        price: "Rs.1,499.00",
        },

      {
        imgSrc: "../images/ladies3.jpg",
        title: "Loose fit hoodie",
        price: "Rs.1,499.00",
        },
        {
          imgSrc: "../images/sports1.jpg",
          title: "Loose fit hoodie",
          price: "Rs.1,499.00",
          },
          {
            imgSrc: "../images/sports2.jpg",
            title: "Loose fit hoodie",
            price: "Rs.1,499.00",
          },
    
          {
            imgSrc: "../images/sports3.jpg",
            title: "Loose fit hoodie",
            price: "Rs.1,499.00",
          },
    
          {
            imgSrc: "../images/ladies1.jpg",
            title: "Loose fit hoodie",
            price: "Rs.1,499.00",
          },
          {
            imgSrc: "../images/traditionals1.jpg",
            title: "Women's top",
            price: "Rs.999.00",
          },
          {
            imgSrc: "../images/traditionals2.jpg",
            title: "Women's top",
            price: "Rs.999.00",
          },
      
     
    ],

    "Women's Clothing":[
      {
        imgSrc: "../images/ladies1.jpg",
        title: "Women's top",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/ladies2.jpg",
        title: "Women's top",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/ladies3.jpg",
        title: "Women's top",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/ladies1.jpg.png",
        title: "Women's top",
        price: "Rs.999.00",
      }
    ],
    "Traditionals":[
      {
        imgSrc: "../images/trisha_h&m.png",
        title: "Women's top",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/traditionals2.jpg",
        title: "Women's top",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/traditionals3.jpg",
        title: "Women's top",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/traditionals1.jpg",
        title: "Women's top",
        price: "Rs.999.00",
      }

    ],

     "Sports":[
      {
        imgSrc: "../images/sports1.jpg",
        title: "Loose fit hoodie",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/sports2.jpg",
        title: "Loose fit hoodie",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/sports3.jpg",
        title: "Loose fit hoodie",
        price: "Rs.999.00",
      },
      {
        imgSrc: "../images/sports1.jpg",
        title: "Loose fit hoodie",
        price: "Rs.999.00",
      }

    ]




  };
  const filteredProducts = products[selectedCategory].filter((product) =>
    product.title.toLowerCase().includes(searchKey.toLowerCase())
  );

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);


   // Function to handle category selection
   const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p2_container">
      <div className="p2_options">
        <div className="p2_particular_options">
          <strong><h5 className="text">New In</h5></strong>
          <button onClick={() => handleCategoryClick("View All")}>View all</button><br />
          <button onClick={() => handleCategoryClick("Women's Clothing")}>Women's clothing</button> <br />
          <button onClick={() => handleCategoryClick("Sports")}>Sports </button><br />
          <button onClick={() => handleCategoryClick("Traditionals")}>Traditionals</button>
        </div>
        <div className="p2_particular_options">
          <strong><h5 className="text">Clothing</h5></strong>              
          <a href="/">View all</a> <br />
          <a href="/">Tops</a> <br />
          <a href="/">Sweatshirts & Hoodies</a><br />
          <a href="/">Jackets & Coats</a><br />
          <a href="/">Dresses</a><br />
          <a href="/">Shirts & Blouses</a><br />
          <a href="/">Blazers & Waistcoats</a><br />
          <a href="/">Jeans</a><br />
        </div>
        <div className="p2_particular_options">
          <strong><h5 className="text">Sports</h5></strong>            
          <a href="/">View All</a><br />
          <a href="/">Hiking</a><br />
          <a href="/">Trousers & Joggers</a><br />
          <a href="/">Shorts</a><br />
          <a href="/">Dresses</a><br />
          <a href="/">Outerwear</a><br />
          <a href="/">Socks</a><br />
          <a href="/">Yoga & Studio</a><br />
        </div>
        <div className="p2_particular_options">
          <strong><h5 className="text">Accessories</h5></strong>
          <a href="/">View All</a><br />
          <a href="/">Bags</a><br />
          <a href="/">Jewellery</a><br />
          <a href="/">Sunglasses</a><br />
          <a href="/">Belts</a><br />
        </div>
        <div className="p2_particular_options">
          <strong><h5 className="text">Shoes</h5> </strong>    
          <a href="/">View All</a><br />       
          <a href="/">Boots</a><br />
          <a href="/">Flats</a><br />
          <a href="/">Heels</a><br />
          <a href="/">Loafers</a><br />
        </div>
      </div>
      <div className="p2_product_container">
        <p className="option_text text" style={{fontSize: '30px', margin: '10px 0px 5px 0px'}}>{selectedCategory}</p>
        <div className="sort_filter"></div>
        <div className="products">
          {[1].map((rowNumber) => (
            <div key={rowNumber} className={`row${rowNumber} row`}>
              {products[selectedCategory].map((product, index) => (
                <div key={index} className="p2_product_card" id={`p2_p${index}`}>
                 <Link   to={`/ParticularProduct?imgSrc=${encodeURIComponent(product.imgSrc)}&title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}`}> 
                 <img className='p2_product_card_img' src={product.imgSrc} alt={product.title} />
                 </Link >
                  <p className="text product1_text" style={{fontSize: '12px', color: 'black'}}>
                  {product.title} <br /> {product.price}
                  </p>
                  <div className="product-colors">
                    <div className="color-dot black"></div>
                    <div className="color-dot gray"></div>
                    <div className="color-dot white"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

// import React, { useState } from "react";
// import "../css/ProductPage.css";
// import { Link, useLocation } from "react-router-dom";

// function ProductPage() {
//   const location = useLocation();
//   const initialCategory = location.state?.category || "View All";
//   const [selectedCategory, setSelectedCategory] = useState(initialCategory);

//   const products = {
//     "View All": [
//       { imgSrc: "/images/sports1.jpg", title: "Loose fit hoodie", price: "Rs.1,499.00" },
//       { imgSrc: "/images/sports2.jpg", title: "Loose fit hoodie", price: "Rs.1,499.00" },
//       { imgSrc: "/images/sports3.jpg", title: "Loose fit hoodie", price: "Rs.1,499.00" },
//       { imgSrc: "/images/ladies1.jpg", title: "Women's Top", price: "Rs.999.00" },
//       { imgSrc: "/images/ladies2.jpg", title: "Women's Top", price: "Rs.999.00" },
//       { imgSrc: "/images/traditionals1.jpg", title: "Women's Top", price: "Rs.999.00" },
//     ],
//     "Women's Clothing": [
//       { imgSrc: "/images/ladies1.jpg", title: "Women's Top", price: "Rs.999.00" },
//       { imgSrc: "/images/ladies2.jpg", title: "Women's Top", price: "Rs.999.00" },
//       { imgSrc: "/images/ladies3.jpg", title: "Women's Top", price: "Rs.999.00" },
//     ],
//     Traditionals: [
//       { imgSrc: "/images/traditionals1.jpg", title: "Women's Top", price: "Rs.999.00" },
//       { imgSrc: "/images/traditionals2.jpg", title: "Women's Top", price: "Rs.999.00" },
//     ],
//     Sports: [
//       { imgSrc: "/images/sports1.jpg", title: "Sportswear", price: "Rs.999.00" },
//       { imgSrc: "/images/sports2.jpg", title: "Sportswear", price: "Rs.999.00" },
//     ],
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="p2_container">
//       {/* Sidebar Options */}
//       <div className="p2_options">
//         <div className="p2_particular_options">
//           <strong><h5 className="text">New In</h5></strong>
//           <button onClick={() => handleCategoryClick("View All")}>View All</button><br />
//           <button onClick={() => handleCategoryClick("Women's Clothing")}>Women's Clothing</button> <br />
//           <button onClick={() => handleCategoryClick("Sports")}>Sports</button><br />
//           <button onClick={() => handleCategoryClick("Traditionals")}>Traditionals</button>
//         </div>
//       </div>

//       {/* Product Display */}
//       <div className="p2_product_container">
//         <p className="option_text text" style={{ fontSize: "30px", margin: "10px 0px 5px 0px" }}>
//           {selectedCategory}
//         </p>
//         <div className="products">
//           {products[selectedCategory]?.map((product, index) => (
//             <div key={index} className="p2_product_card" id={`p2_p${index}`}>
//               {/* Navigate to Product Details */}
//               <Link
//                 to="/ParticularProduct"
//                 state={{
//                   imgSrc: product.imgSrc,
//                   title: product.title,
//                   price: product.price,
//                 }}
//               >
//                 <img className="p2_product_card_img" src={product.imgSrc} alt={product.title} />
//               </Link>
//               <p className="text product1_text" style={{ fontSize: "12px", color: "black" }}>
//                 {product.title} <br /> {product.price}
//               </p>
//               <div className="product-colors">
//                 <div className="color-dot black"></div>
//                 <div className="color-dot gray"></div>
//                 <div className="color-dot white"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
