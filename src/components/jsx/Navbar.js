import React from "react";
import "../css/navbar_homepage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "./Product";

function Navbar() {
  // Menu items configuration
  const menuItems = [
    { name: "Ladies", category: "Women's Clothing", subMenu: ["Dresses", "Tops", "Shoes"] },
    { name: "Men", category: "Sports" },
    { name: "Traditionals", category: "Traditionals" },
    { name: "Home", category: "Home Essentials" },
    { name: "Sale", category: "Sale" },
  ];
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("View All");
  const handleNavigation = (category) => {
   navigate("/ProductPage", { state: { category } }); // Pass category as state
  };
  // --------------------------------------------------------for search bar 
  

    // Map of search keywords to categories
   
  
    // Function to handle search
    const handleSearch = () => {
      // Map of search terms to categories
      const categoryMapping = {
        traditional: "Traditionals",
        women: "Women's Clothing",
        sports: "Sports",
        men: "Sports",
        all: "View All",
      };
    
      const searchKey = searchTerm.toLowerCase();
      let matchedCategory = "View All"; // Default category
    
      // Match search term to category
      for (let keyword in categoryMapping) {
        if (searchKey.includes(keyword)) {
          matchedCategory = categoryMapping[keyword];
          break;
        }
      }
    
      // Navigate to ProductPage with the category or search term
      navigate("/ProductPage", { state: { category: matchedCategory, searchKey } });
    };
    
  
  return (
    
    <nav>
      {/* Row 1: Logo and Account Options */}
      <div className="nav_row_1">
        <ul className="nav_row_1_options nav_row_1_left">
          <li><Link to="/Sustainability">Sustainability</Link></li>
          <li>Custom</li>
          <li>Newsletter</li>
          <li>"icon"</li>
        </ul>

        <div className="logo_holder">
          <Link className="logo" to="/">
            <img 
              src="./images/vibe cart logo.png" 
              alt="logo" 
            />
          </Link>
        </div>

        <ul className="nav_row_1_options nav_row_1_right">
          <li>
            <img src="" alt="" />
            <Link to="/SignInPage" ><p>Sign In</p></Link>
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

      {/* Row 2: Navigation Menu */}
      <ul className="nav_row_2 menu">
        {/* {menuItems.map((menuItem, index) => (
          <li className="menu_items" key={index}>
            
            <Link 
              to="/ProductPage" 
              state={{ category: menuItem.category }} 
              className="drop_link"
            >
              {menuItem.name}
            </Link>

            
            {menuItem.subMenu && (
              <div className="dropdown-content">
                {menuItem.subMenu.map((subItem, subIndex) => (
                  <a href="/" key={subIndex}>{subItem}</a>
                ))}
              </div>
            )}
          </li>
        ))} */}
        <li className="menu_items"> <button onClick={() => handleNavigation("View All")}>View All</button></li>
        <li className="menu_items"><button onClick={() => handleNavigation("Sports")}>Men</button></li>
        <li className="menu_items"><button onClick={() => handleNavigation("Women's Clothing")}>Women's Clothing</button></li>
        <li className="menu_items"><button onClick={() => handleNavigation("Traditionals")}>Traditionals</button></li>
        <li className="menu_items"><button onClick={() => handleNavigation("Sports")}>Sports</button></li>
        
        
        
       
        

      </ul>

      {/* Search Bar */}
      {/* <div className="nav_2_search">
        <img src="/icons/search.svg" alt="icon" />
        <p style={{ paddingLeft: "2px" }}>Search</p>
      </div> */}
       {/* <div className="nav_2_search">
        <input
          className="search_field"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
        />
        <button className="search_button"  onClick={handleSearch}>
        <p style={{ paddingLeft: "2px", fontSize:"10px" } }>Search</p>
        <img src="/icons/search.svg" alt="icon" />
        </button> 
      </div> */}

          <div className="nav_3_search">
            <input 
              type="text" 
              className="search_field"  
              placeholder="Search"  
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <button 
              className="search_button" 
              onClick={handleSearch} // Use proper React event
            >
              <img id="search_icon" src="/icons/search.svg" alt="icon" />
            </button>
          </div>
    </nav>
  );
}

export default Navbar;