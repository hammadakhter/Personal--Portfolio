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
            <a href="https://flatironschool.com/blog/what-is-ux-ui-design/" target='blank' class="btn serivces-btn ">see more</a>
          </div>
        </div>  
        <div class="card">
          <i class="fa-solid fa-desktop service-icons"></i>
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Web development is creating and maintaining websites, focusing on functionality, design, and performance.</p>
            <a href="https://blog.openclassrooms.com/en/2018/03/28/web-development-definition/#:~:text=Web%20development%20is%20the%20building,a%20variety%20of%20coding%20languages." target='blank' class="btn serivces-btn"> see more</a>
          </div>
        </div> 
        <div class="card">
          <i class="fas fa-mobile service-icons"></i>
          <div class="card-body">
            <h5 class="card-title">App Development</h5>
            <p class="card-text">Mobile development is creating software applications for mobile devices like smartphones and tablets.</p>
            <a href="https://www.ibm.com/topics/mobile-application-development" target='blank' class="btn serivces-btn">see more</a>
          </div>
        </div> 
    </div>
    </>
  )
}

export default Services