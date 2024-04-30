import React from 'react';
import "./Profile.css";

function Profile() {
  return (
<section id="profile">

    <div className="section_pic-container">

        <img src="/assets/about/Me.png" alt="image of me" className="about_aboutImage"></img>
        </div>

<div className="section_text">
    <p className="section_text_p1">Hello, I'm</p>
    <h1 className="title">Sailesh Patel</h1>
    <p className="section_text_p2">Full Stack Developer</p>
    <div className="btn-container">
        <button className="btn btn-color-2" onClick="window.opn('./assets/cv')">Download CV</button>
        <button className="btn btn-color-1" onClick="location.href='./#contact'">Contact Info</button>
    </div>
    <div id="socials-container"></div>
    <img 
    src="./assets/linkedin.png"
    alt="My LinkedIn Profile" 
    className="icon" 
    onClick="location.href=''https://linkedin.com/">
    </img>
    <img 
    src="./assets/github.png"
    alt="My Github Profile" 
    className="icon" 
    onClick="location.href=''https://Github.com/">
    </img>
</div>





        
        {/* <ul className="about_aboutItems">

        <li className="about_aboutItem">
        <img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>
            <div className="about_aboutItemText">
                <h3>Mission Statement</h3>
                <p>I may not really be superman, but you will be suprised at what i can do </p>
            </div>
            </li>

            <li className="about_aboutItem">
            <img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>

            <div className="about_aboutItemText">
                <h3>Frontend Developer</h3>
                <p>Frontend developer who can build responsive sites </p>
            </div>
            </li>
            <li className="about_aboutItem">
            <img src="/assets/about/serverIcon.png" alt="server icon"></img>
            <div className="about_aboutItemText">
                <h3>Backend Developer</h3>
                <p>Frontend developer who can build fast back-end systems and APIs 
                     </p>
            </div>
            </li>
            <li className="about_aboutItem">
            <img src="/assets/about/uiIcon.png" alt="UI icon"></img>
            <div className="about_aboutItemText">
                <h3>UI Designer</h3>
                <p>I have been building landing pages to demonstrate my projects 
                     </p>
            </div>
            </li>
        </ul> */}



   
</section>
  )
}

export default Profile
