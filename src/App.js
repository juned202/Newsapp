import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router";


export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
        
        <BrowserRouter>
        <Navbar />
          <Routes>

            <Route path="/" element={<News api = {this.apikey} />} />
              <Route path="/business"  element={<News key="business" category="business" api = {this.apikey}/>} />
              <Route path="/entertainment"  element={<News key="entertainment" category="entertainment" api = {this.apikey} />} />
              <Route path="/health" element={<News  key="health" category="health" api = {this.apikey} />} />
              <Route path="/technology" element={<News  key="technology" category="technology" api = {this.apikey} />} />
              <Route path="/sports"  element={<News key="sports" category="sports" api = {this.apikey} />} />
              <Route path="/science"  element={<News  key="science" category="science" api = {this.apikey} />} />
              <Route path="/home"  element={<News key="home" api = {this.apikey}/>} />
          </Routes>

        </BrowserRouter>
      </>



    )
  }
}
