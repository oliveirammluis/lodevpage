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
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  

  return (
    <div className="about-container">
      <div className="content">
        <Slider {...settings} style={{position: 'relative', width: '100%', height: 'auto' }}>
          <div className="about-slide">
            <h1 className="about-title">Who am I</h1>
            <p className="about-description">
              I'm Luís Oliveira, a Full Stack Developer based in Portugal. I completed the certified Full Stack Developer bootcamp at Code For All_ on May 2, 2025.</p>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">What I Do</h2>
            <p className="about-description">
              I write code to solve problems and bring ideas to life. Whether it's building applications, automating tasks, or exploring new technologies, I'm always looking for ways to grow as a developer.</p>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">Currently</h2>
            <p className="about-description">
              I'm focused on practicing and building projects to consolidate the knowledge and skills I've gained.            </p>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">Let’s Connect</h2>
            <p className="about-description">
              If you're working on something exciting or just want to chat about tech — feel free to reach out!
            </p>
            <a href="/book-a-call" className="contact-button">Book a call</a>
          </div>

        </Slider>
      </div>
      <TechMarquee />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow next"
      onClick={onClick}
    >
      ❯
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow prev"
      onClick={onClick}
    >
      ❮
    </div>
  );
};

export default About;
