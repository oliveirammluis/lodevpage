import React from 'react';
import Slider from 'react-slick';
import '../styles/About.css';
import TechMarquee from '../components/TechMarquee';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true, // Ajusta altura para cada slide
  };

  return (
    <div className="about-container">
      <div className="content">
        <Slider {...settings} style={{ width: '100%', height: 'auto' }}>
          <div className="about-slide">
            <h1 className="about-title">Who I Am</h1>
            <p className="about-description">
              I'm Luís Oliveira, a passionate Full Stack Developer based in Portugal. I transform ideas into reality through clean and elegant code.
            </p>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">What I Do</h2>
            <p className="about-description">
              I build scalable and modern web applications. I’m dedicated to writing clean code, ensuring a seamless user experience, and continuously learning new technologies.
            </p>
          </div>
          
          <div className="about-slide">
            <h2 className="about-subtitle">Currently</h2>
            <p className="about-description">
              I'm working on personal projects and freelancing, always seeking new challenges and opportunities to collaborate.
            </p>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">Let’s Connect</h2>
            <p className="about-description">
              If you're working on something exciting or just want to chat about tech — feel free to reach out!
            </p>
          </div>
        </Slider>
        </div>
        <TechMarquee />
    </div>
  );
};

export default About;
