import React from 'react'
import "./about.css";

const About = () => {
  return (
    <div className="container" id='About'>
        
    <section className='home'>
    <div className="home-img">
             <img src="./my phto (1).jpg" alt="my picture"/>
            </div>
        <div className="home-content">
            <h2 className='about-Heading'>About Us</h2>
            <p className='about-paragraph'>Hi My name is Hammad and I,m Frontend Developer with experience in HTML5, CSS3, and JavaScript, specializing in 
                ReactJS, NextJS. Skilled in creating pixel-perfect, responsive websites using popular 
                libraries like Bootstrap and Material UI, Ant Design. Committed to staying up-to-date with 
                web development trends and working collaboratively to deliver quality results.</p>
            <div className='detail'>
              <span className='heading'>Name</span>
              <p className='paragraph'>Hammad Akhter</p>
              <span className='heading1'>Email</span>
              <p className='paragraph1'>hammmadakhter@gmail.com</p>
              <span className='heading2'>Linkedin</span>
              <p href={"https://www.linkedin.com/in/muhammad-hammad-9b9b26268"} className='paragraph2'>https://www.linkedin.com/in/muhammad-hammad-9b9b26268</p>

              <a className='btn btn-cv' href="./Hammad_Akhter_-_Frontend_Developer.pdf" download>Download CV</a>
            </div>
            </div>
            
            </section>
</div>
  )
}

export default About