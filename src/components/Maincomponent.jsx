import React from 'react'
import Header from './Header'
import DateTime from './DateTime'
import Navbar from './Navbar'
import Categories from './Categories'
import NewsBody from './NewsBody'


export default function Maincomponent() {
  return (
    <div id='mianComponent'>
        <DateTime/>
        <Header/>
        <Navbar/>
        <Categories/>
        <NewsBody/>   
    </div>
  )
}
