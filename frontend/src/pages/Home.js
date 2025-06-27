import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import '../styles/Home.css';

const helloTranslations = [
  { country: 'Portugal', text: '🇵🇹 Olá Mundo' },
  { country: 'Espanha', text: '🇪🇸 Hola Mundo' },
  { country: 'França', text: '🇫🇷 Bonjour le Monde' },
  { country: 'Itália', text: '🇮🇹 Ciao Mondo' },
  { country: 'Inglaterra', text: '🇬🇧 Hello World' },
  { country: 'Luxemburgo', text: '🇱🇺 Moien Welt' },
  { country: 'Áustria', text: '🇦🇹 Hallo Welt' },
  { country: 'República Checa', text: '🇨🇿 Ahoj světe' },
  { country: 'Polónia', text: '🇵🇱 Witaj świecie' },
  { country: 'Alemanha', text: '🇩🇪 Hallo Welt' },
  { country: 'Hungria', text: '🇭🇺 Helló Világ' },
  { country: 'Tailândia', text: '🇹🇭 สวัสดีชาวโลก' },
  { country: 'Maldivas', text: '🇲🇻 ޝަންގަނޑު ޖަން' },
  { country: 'EUA (Nova Iorque)', text: '🇺🇸 Hello World' },
  { country: 'Cuba', text: '🇨🇺 Hola Mundo' },
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
          <img
            src="/images/my-photo.png"
            alt="Luis Oliveira"
            className="image-container-img"
          />
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
