import React from "react";
import me from '../edgar.jfif';



const AboutMe = () => {
  return (
    <div className="container-fluid py-5 abouMeSection">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="author..." />
          </div>
        </div>
        <div className="col-lg-4 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="about-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
          sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
      
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default AboutMe