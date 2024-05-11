import React from "react";
import "./home.css";

const Home = () => {
  return (
  <div className="home d-flex justify-content-center align-items-center">
    <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className = "text-center">
         Effortlessly organize your <br/>tasks with our intuitive To-Do list app!
        </h1>
        <br/>
        <p>
        Streamline your workflow by jotting down important information quickly
         and conveniently. <br/>Stay organized and productive by categorizing and tagging your
         notes for easy reference. <br/>Unlock your creativity and productivity with our intuitive note-taking solution.
        </p>
        <button className="home-btn">Make ToDo List</button>
    </div>
  </div>
  )
}

export default Home;