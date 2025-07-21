import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../styles/About.css';

const techs = [
  'Proj. Management', 'Acct. Management', 'Ops Management', 'Transport. Planning',
  'CSS', 'MVC', 'JDBC', 'REST API', 'ES6',
  'Tomcat', 'Maven', 'Scrum', 'Agile', 'Testing', 'JUnit', 'SQL', 'Git',
  'jQuery', 'Bootstrap', 'JavaScript', 'HTML', 'SOAP', 'Web Apps',
  'Web Dev', 'Programming', 'OOP', 'Spring', 'Spring MVC', 'Java'
];

const About = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [fallingTechs, setFallingTechs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activePieceId, setActivePieceId] = useState(null);

  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 600;
  const pieceWidth = 120;

  useEffect(() => {
    if (!isRunning) return;

    const addInterval = setInterval(() => {
      setFallingTechs(prev => {
        if (prev.length >= 6) return prev;
        const randomTech = techs[Math.floor(Math.random() * techs.length)];
        const randomX = Math.floor(Math.random() * (containerWidth - pieceWidth));
        return [
          ...prev,
          { id: Date.now(), text: randomTech, x: randomX, y: 0, opacity: 1, scale: 1 }
        ];
      });
    }, 2500);

    const fallInterval = setInterval(() => {
      setFallingTechs(prev =>
        prev
          .map(item => {
            let newY = item.y + 3;
            let newOpacity = item.opacity;
            if (newY > 350) {
              newOpacity = Math.max(0, item.opacity - 0.05);
            }
            return { ...item, y: newY, opacity: newOpacity };
          })
          .filter(item => item.opacity > 0)
      );
    }, 100);

    return () => {
      clearInterval(addInterval);
      clearInterval(fallInterval);
    };
  }, [isRunning, containerWidth]);

  const movePiece = (id, direction) => {
    setFallingTechs(prev =>
      prev.map(item => {
        if (item.id === id) {
          let newX = item.x + (direction === 'left' ? -20 : 20);
          if (newX < 0) newX = 0;
          if (newX > containerWidth - pieceWidth) newX = containerWidth - pieceWidth;
          return { ...item, x: newX };
        }
        return item;
      })
    );
  };

  // Só mexe a peça ativa
  const moveActivePiece = (direction) => {
    if (!activePieceId) return;
    movePiece(activePieceId, direction);
  };

  // Placeholder para rodar - adapta se quiseres lógica de rotação real
  const rotateActivePiece = () => {
    if (!activePieceId) return;
    alert(`Rotate piece with id ${activePieceId} - implement rotation logic here`);
  };

  const startGame = () => {
    setFallingTechs([]);
    setActivePieceId(null);
    setIsRunning(true);
  };

  const stopGame = () => {
    setIsRunning(false);
    setFallingTechs([]);
    setActivePieceId(null);
  };

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

  const onSelectPiece = (id) => {
    setActivePieceId(id);
  };

  return (
    <div className="about-container">
      <div className="content">
        <Slider ref={sliderRef} {...settings} style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <div className="about-slide">
            <h1 className="about-title">Who am I</h1>
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

      <div className="tetris-wrapper" style={{ marginTop: '40px', textAlign: 'center' }}>
      <h2 className="about-subtitle special-subtitle">Tech Tetris</h2>
        <div
          className="tetris-container"
          ref={containerRef}
          style={{
            position: 'relative',
            height: '400px',
            border: '2px solid #0f0',
            borderRadius: '10px',
            backgroundColor: '#000',
            overflow: 'hidden',
            margin: '20px auto',
            width: '90%',
            maxWidth: '600px',
            userSelect: 'none'
          }}
        >
          {fallingTechs.map(item => (
            <div
              key={item.id}
              className="falling-tech"
              onClick={() => onSelectPiece(item.id)}
              style={{
                left: item.x,
                top: item.y,
                position: 'absolute',
                opacity: item.opacity,
                transform: `scale(${item.scale})`,
                transition: 'opacity 0.1s, transform 0.1s, left 0.2s',
                backgroundColor: '#0f0',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#000',
                outline: item.id === activePieceId ? '2px solid yellow' : 'none',
                zIndex: item.id === activePieceId ? 10 : 1
              }}
              title={`Click to select this piece: ${item.text}`}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Controles fora do painel */}
        <div style={{ marginTop: '15px' }}>
          <button
            onClick={() => moveActivePiece('left')}
            disabled={!activePieceId}
            style={{
              marginRight: '10px',
              padding: '6px 12px',
              fontSize: '18px',
              cursor: activePieceId ? 'pointer' : 'not-allowed'
            }}
            title="Move selected piece left"
          >
            ◀
          </button>

          <button
            onClick={rotateActivePiece}
            disabled={!activePieceId}
            style={{
              marginRight: '10px',
              padding: '6px 12px',
              fontSize: '18px',
              cursor: activePieceId ? 'pointer' : 'not-allowed'
            }}
            title="Rotate selected piece"
          >
            ⟳
          </button>

          <button
            onClick={() => moveActivePiece('right')}
            disabled={!activePieceId}
            style={{
              padding: '6px 12px',
              fontSize: '18px',
              cursor: activePieceId ? 'pointer' : 'not-allowed'
            }}
            title="Move selected piece right"
          >
            ▶
          </button>
        </div>

        {!isRunning ? (
          <button className="tetris-button start" onClick={startGame} style={{ marginTop: '20px' }}>Start Tetris</button>
        ) : (
          <button className="tetris-button stop" onClick={stopGame} style={{ marginTop: '20px' }}>Stop Tetris</button>
        )}
      </div>
    </div>
  );
};

export default About;
