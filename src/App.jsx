import React from 'react'
import "./app.css"
import Navbar from './mainComponent/Navbar'
import Footer from './heroComponent/footer'
import Searching from './Food_search.jsx/Searching'
import Hero_main from './heroComponent/hero_component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact_us from './Contact us/Contact_us'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' Component={Hero_main} />
            <Route path='/search_recipe' Component={Searching}></Route>
            <Route path='/contact' Component={Contact_us}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
