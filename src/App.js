import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router";


export default class App extends Component {
  render() {
    return (
      <>
        
        <BrowserRouter>
        <Navbar />
          <Routes>

            <Route path="/" element={<News />} />
              <Route path="/business"  element={<News key="business" category="business" />} />
              <Route path="/entertainment"  element={<News key="entertainment" category="entertainment" />} />
              <Route path="/health" element={<News  key="health" category="health" />} />
              <Route path="/technology" element={<News  key="technology" category="technology" />} />
              <Route path="/sports"  element={<News key="sports" category="sports" />} />
              <Route path="/science"  element={<News  key="science" category="science" />} />
              <Route path="/home"  element={<News key="home"/>} />
          </Routes>

        </BrowserRouter>
      </>



    )
  }
}
