import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import '../styles/About.css';

const About = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleNext = () => sliderRef.current.slickNext();
  const handlePrev = () => sliderRef.current.slickPrev();

  const initialTechs = [
    'Project Management', 'Account Management', 'Operations Management', 'Transportation Planning',
    'CSS', 'MVC', 'JDBC', 'REST API', 'ES6', 'Tomcat', 'Maven', 'Scrum', 'Agile', 'Testing', 'JUnit',
    'SQL', 'Git', 'jQuery', 'Bootstrap', 'JavaScript', 'HTML', 'SOAP', 'Web Applications',
    'Web Development', 'Programming', 'OOP', 'Spring', 'Spring MVC', 'Java'
  ];

  const [techs, setTechs] = useState(initialTechs);

  const shuffleTechs = () => {
    const shuffled = [...techs].sort(() => Math.random() - 0.5);
    setTechs(shuffled);
  };

  return (
    <div className="about-container">
      <div className="content">
        <Slider ref={sliderRef} {...settings} style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <div className="about-slide">
            <h2 className="about-title">Who am I</h2> {/* Alterado para h2 */}
            <p className="about-description">
              I'm Luís Oliveira, a Full Stack Developer based in Portugal. I completed the certified Full Stack Developer bootcamp at Code For All_ on May 2, 2025.
            </p>
            <div className="arrow-container">
              <div className="custom-arrow prev" onClick={handlePrev}>❮</div>
              <div className="custom-arrow next" onClick={handleNext}>❯</div>
            </div>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">What I Do</h2>
            <p className="about-description">
              I write code to solve problems and bring ideas to life. Whether it's building applications, automating tasks, or exploring new technologies, I'm always looking for ways to grow as a developer.
            </p>
            <div className="arrow-container">
              <div className="custom-arrow prev" onClick={handlePrev}>❮</div>
              <div className="custom-arrow next" onClick={handleNext}>❯</div>
            </div>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">Currently</h2>
            <p className="about-description">
              I'm focused on practicing and building projects to consolidate the knowledge and skills I've gained.
            </p>
            <div className="arrow-container">
              <div className="custom-arrow prev" onClick={handlePrev}>❮</div>
              <div className="custom-arrow next" onClick={handleNext}>❯</div>
            </div>
          </div>

          <div className="about-slide">
            <h2 className="about-subtitle">Let’s Connect</h2>
            <p className="about-description">
              If you're working on something exciting or just want to chat about tech — feel free to reach out!
            </p>
            <a href="/book-a-call" className="contact-button">Book a call</a>
            <div className="arrow-container">
              <div className="custom-arrow prev" onClick={handlePrev}>❮</div>
              <div className="custom-arrow next" onClick={handleNext}>❯</div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="tech-box-container">
        <h2 className="tech-box-title">Tech Stack</h2>
        <button onClick={shuffleTechs} className="shuffle-button">
          🔀 Shuffle
        </button>
        <div className="tech-box">
          {techs.map((tech, index) => (
            <div key={index} className="tech-draggable" draggable>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
