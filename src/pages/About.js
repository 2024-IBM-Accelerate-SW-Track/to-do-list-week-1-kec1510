import React, { Component } from 'react';
import "./About.css";
import profile_picture from "../assets/headshot.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
          <div className="centered">
          <img 
            className="profile_image"
            src={ profile_picture }
            alt="Profile Pic"
          ></img>
          </div>
          </div>

          <div className="split right">
          <div className="centered">
          <div className="name_title">Karina Chung</div>
          <div className="brief_description">
            Karina is a rising junior at Harvard College 
            studying Applied Mathematics. Her academic interests include
            computer science, data science, climate and environment, and economics. 
            Over the last five years, she has worked on programming and data science 
            projects spanning academic research, finance, and tech.  
            In her spare time, she enjoys bouldering, listening to classical and pop music, 
            and watching MLB baseball. 
          </div>
          </div>
          </div>
          </div>
      </div>
    )
  }
}