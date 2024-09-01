import React from 'react'
import Header from './Header'
import DateTime from './DateTime'
import Navbar from './Navbar'
import Categories from './Categories'
import NewsCards from './NewsCards'
import Pagination from './Pagination'
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Maincomponent(props) {

  const [newsData, setNewsData] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
const [postperPage, setpostperPage] = useState(6)




  

  const ClickHamburger = () => {
    const navContainerHamElement = document.getElementById('navContainerHam');
    
    // Show the navbar and apply slide-in animation
    navContainerHamElement.style.display = 'block';
    navContainerHamElement.style.animation = 'slideInLeft 0.5s forwards';
    
    // Disable background scrolling
    document.body.style.overflowY = 'hidden';
  };
  
  const closeNavBar = () => {
    const navContainerHamElement = document.getElementById('navContainerHam');
  
    // Apply slide-out animation
    navContainerHamElement.style.animation = 'slideOutLeft 0.5s forwards';
    
    // After the animation ends, hide the navbar and enable background scrolling
    navContainerHamElement.addEventListener('animationend', () => {
      navContainerHamElement.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }, { once: true }); // Ensure this listener only runs once
  };

  return (
    <>
    
    <div id='mianComponent'>
    <Router>
    
        <DateTime ClickHamburger={ClickHamburger} closeNavBar={closeNavBar}/>
        <Header/>
        <Navbar/>
        
        <Routes>
          <Route path="/business" element={<Categories category='business' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />

          <Route path="/" element={<Categories category='general' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
          <Route path="/general" element={<Categories category='general' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
          <Route path="/health" element={<Categories category='health' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
          <Route path="/science" element={<Categories category='science' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
          <Route path="/sports" element={<Categories category='sports' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
          <Route path="/technology" element={<Categories category='technology' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
          <Route path="/entertaintment" element={<Categories category='entertaintment' setNewsData={setNewsData} setTotalPosts={setTotalPosts} />} />
        </Routes>

        <NewsCards 
        newsData={newsData} 
        currentPage={currentPage} 
        postperPage={postperPage} 
        setNewsData={setNewsData}
        setTotalPosts={setTotalPosts}
          />   
        <Pagination  
        totalPosts={totalPosts} 
        postperPage={postperPage} 
        setCurrentPage={setCurrentPage}
        />

</Router>
    </div>
    </>
    
  )
}
