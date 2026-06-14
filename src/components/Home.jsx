import React from 'react';
import Navbar from './Navbar';
import Courses from './Courses';
import './css/Home.css';

const Home = () => {

  function scrollInto() {
    const coursesSection = document.querySelector('.courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="home-wrapper">
      <Navbar />

      <section className="hero-section">
        <div className="hero-bg-glow glow-1"></div>
        <div className="hero-bg-glow glow-2"></div>

        <div className="hero-content fade-in-up">
          <div className="badge">Get Placed By Learning</div>
          
          <h1 className="hero-title">
            Master <span>Dev & DSA</span> <br/> Like a Pro Developer.
          </h1>
          
          <p className="hero-subtitle">
            Premium courses, real-world projects, and a community of high-achievers.
            Start your journey from absolute beginner to industry-ready today.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollInto}>Explore Courses</button>
            <button className="btn-secondary">Contact Admin For Pirated Content</button>
          </div>

          <div className="hero-stats">
            <div className="stat"><strong>50k+</strong> Students</div>
            <div className="stat"><strong>4.9/5</strong> Average Rating</div>
            <div className="stat"><strong>100%</strong> Practical</div>
          </div>
        </div>
      </section>

      <Courses />
    </div>
  );
}

export default Home;