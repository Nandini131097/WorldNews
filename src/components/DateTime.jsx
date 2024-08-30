import React, { useEffect, useState } from 'react'

function DateTime() {
    const [mydate,sateDate]=useState(0)
    useEffect(() => {

        const dateAndTime = new Date();
        document.getElementById("currentFullDate").innerHTML = dateAndTime.toString();

       

    }, [])

    
    const ClickHamburger=()=>{
      const navContainerHamElement = document.getElementById('navContainerHam');
      if(navContainerHamElement.style.display==='none'){
        navContainerHamElement.style.display='block';
      }
      else{
        navContainerHamElement.style.display='none';
      }
    }
    


  
  return (
    <>
    <div id='DateTime'>
        <p id='currentFullDate'></p>
        <button onClick={ClickHamburger} className='hamburger'>
          <i className="fa-duotone fa-solid fa-bars"></i>
        </button>
    </div>

    <div id='navContainerHam'>
    <button onClick={ClickHamburger} id='crossHambar'>
        <i className="fa-solid fa-xmark"></i>
        </button>
          <ul >
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Categories</a>
                  <ul id='CategoryList'>
                    <li id="CatList1">Business</li>
                    <li id="CatList2">Sports</li>
                    <li id="CatList3">Politices</li>
                    <li id="CatList4">LifeStyle</li>
                  </ul>
                  </li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
        
    </div>
    </>
    
  )
}

export default DateTime
