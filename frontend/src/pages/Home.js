import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const helloTranslations = [
    { language: 'English', text: 'Hello World' },
    { language: 'Portuguese', text: 'Olá Mundo' },
    { language: 'Spanish', text: 'Hola Mundo' },
    { language: 'French', text: 'Bonjour le Monde' },
    { language: 'Italian', text: 'Ciao Mondo' },
  ];

function Home() {
  const [currentHelloIndex, setCurrentHelloIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHelloIndex((prevIndex) => (prevIndex + 1) % helloTranslations.length);
    }, 2000);

    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, []);

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/bg-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: -1,
    }}
    >
      <div className="home-container">
        <div className="image-container">
          <img src="/images/my-photo.jpg" alt="Luis Oliveira" />
        </div>
        <div className="text-container">
        <h1>{helloTranslations[currentHelloIndex].text}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
