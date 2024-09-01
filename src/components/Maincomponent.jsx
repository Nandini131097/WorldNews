import React from 'react'
import Header from './Header'
import DateTime from './DateTime'
import Navbar from './Navbar'
import Categories from './Categories'
import NewsCards from './NewsCards'
import Pagination from './Pagination'
import { useState, useEffect } from "react";



export default function Maincomponent() {

  const [newsData, setNewsData] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
const [postperPage, setpostperPage] = useState(6)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        
        

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          
          
          // Check the structure of the response data here
          // Assuming the response contains 'sources' array
          setNewsData(data.sources || []); // Update this based on the actual structure
          setTotalPosts(data.sources.length || 0)
        } else {
          console.error("Expected JSON, but got something else.");
        }
      } catch (error) {
        console.error('Error fetching the news data:', error);
      }
    };

    fetchData();
  }, []);

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
        <DateTime ClickHamburger={ClickHamburger} closeNavBar={closeNavBar}/>
        <Header/>
        <Navbar/>
        <Categories/>
        <NewsCards 
        newsData={newsData} 
        currentPage={currentPage} 
        postperPage={postperPage} 
          />   
        <Pagination  
        totalPosts={totalPosts} 
        postperPage={postperPage} 
        setCurrentPage={setCurrentPage}
        />
    </div>
    </>
    
  )
}
