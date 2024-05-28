import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <>
  <h2 className='Services-Heading'>Services</h2>
    <div className="services-container" id='Services'>
       <div class="card">
          <i class="fa-solid fa-code service-icons"></i>
          <div class="card-body">
            <h5 class="card-title">UI/UX Designer</h5>
            <p class="card-text">A UI/UX designer improves digital products by enhancing usability and visual appeal for a better user experience.</p>
            <a href="#" class="btn serivces-btn ">see more</a>
          </div>
        </div>  
        <div class="card">
          <i class="fa-solid fa-desktop service-icons"></i>
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Web development is creating and maintaining websites, focusing on functionality, design, and performance.</p>
            <a href="#" class="btn serivces-btn"> see more</a>
          </div>
        </div> 
        <div class="card">
          <i class="fas fa-mobile service-icons"></i>
          <div class="card-body">
            <h5 class="card-title">App Development</h5>
            <p class="card-text">Mobile development is creating software applications for mobile devices like smartphones and tablets.</p>
            <a href="#" class="btn serivces-btn">see more</a>
          </div>
        </div> 
    </div>
    </>
  )
}

export default Services