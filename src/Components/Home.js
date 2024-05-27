import React from 'react';
import "./home.css";
import Typed from 'typed.js';

const Home = () => {
    const el = React.useRef(null);

    React.useEffect(()=>{
        const typed = new Typed(el.current, {
        strings: ["Frontend Developer" , "React Developer"],
        typeSpeed: 200,
        backSpeed: 200,
        backDelay: 2000,
        loop: true
    });
    
    return ()=>{
        typed.destroy();
    };
    }, []);
    
  return (
    <div className="container">
        <section className='home'>
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Hammad Akhter</h1>
                <h3>And I'm a <span ref={el}/></h3>
                <p>Experienced Frontend Developer proficient in HTML5, CSS3, JavaScript, ReactJS, NextJS. Creates responsive sites with Bootstrap, Material UI, Ant Design. Committed to quality and collaboration staying current with trends.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/hammad.akhter.545" target='blank'><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://x.com/Muhamma32673450" target='blank'><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/hamy.1765/" target='blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/muhammad-hammad-9b9b26268/" target='blank'><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <a className='btn' href="./Hammad_Akhter_-_Frontend_Developer.pdf" download>Download CV</a>
            </div>

            <div className="home-img">
             <img src="./my pic.jpg" alt="my picture"/>
            </div>
        </section>
    </div>
  )
}

export default Home