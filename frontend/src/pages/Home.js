import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
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

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="content">
        <div className="image-container mb-20">
          <img src="/images/my-photo.jpg" alt="Luis Oliveira" />
        </div>
        <div className="text-container">
          <h1>{helloTranslations[currentHelloIndex].text}</h1>
          <p className="animate-pulse text-xl text-white shadow-lg">
            A dev on a quest: to learn, to build, to conquer.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
