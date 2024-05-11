import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Signup from "./components/signupAndsignin/signup";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./components/signupAndsignin/signin";

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/todo" element={<About/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </Router>
      
      <Footer/>
    </div>
  )
}


export default App;

//cd frontend, npm i react-router-dom