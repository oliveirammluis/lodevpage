import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Blog from './pages/Blog';
import More from './pages/More';
import BookACall from './pages/BookACall';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* A margem para garantir que a navbar não sobreponha o conteúdo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/more" element={<More />} />
          <Route path="/book-a-call" element={<BookACall />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
