import React , { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
// import Carousel from "./components/jsx/HomePage";
import HomePage from "./components/jsx/HomePage";
import Footer from "./components/jsx/Footer";
import ProductPage from "./components/jsx/ProductPage";
import Navbar from "./components/jsx/Navbar";
import ParticularProduct from "./components/jsx/ParticularProduct";
import SustainabilityPage from "./components/jsx/SustainablityPage";
import ChatBot from "./components/jsx/ChatBot"; // Adjust the path based on your folder structure
import SignInPage from "./components/jsx/SignInPage";



function App() {
    const [isChatBotVisible, setIsChatBotVisible] = useState(false);
    return (
        <>
        
        <Router basename="/VIBECART">
        <Navbar/>
            <Routes>
                    {/* <Carousel></Carousel> */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ProductPage" element={<ProductPage />} />
                    <Route path="/ParticularProduct" element={<ParticularProduct />} />
                    <Route path="/Sustainability" element={<SustainabilityPage/>}/>
                    <Route path="/SignInPage" element={<SignInPage/>} />
            </Routes>          

 
            {/* ChatBot Toggle Button */}
            <div>
                    <button
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                            cursor: "pointer",
                        }}
                        onClick={() => setIsChatBotVisible(!isChatBotVisible)}
                    >
                        💬
                    </button>
                    {isChatBotVisible && <ChatBot />}
                </div>
        </Router>
        <Footer></Footer>
    </>
    );
}

export default App;
