import React from 'react';
import Navbar from './Navbar';
import Courses from './Courses';
import './css/Home.css';
import c from '../assets/C.png';

const Home = () => {
  const heroPosters = [
    { id: 1, image: c },
    { id: 2, image: c },
    { id: 3, image: c },
    { id: 4, image: c },
    { id: 5, image: c }
  ];

  return (
    <div className="home-wrapper">
      <Navbar />

      <div className="hero-carousel-wrapper">
        <div className="fade-left"></div>
        <div className="fade-right"></div>

        <div className="hero-carousel-track">
          {[...heroPosters, ...heroPosters].map((poster, index) => (
            <div className="hero-slide" key={index}>
              <img 
                src={poster.image} 
                alt={`Premium Course ${index + 1}`} 
                loading="eager" 
              />
              <div className="slide-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      <Courses />
    </div>
  );
}

export default Home;