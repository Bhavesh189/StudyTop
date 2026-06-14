import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Courses.css';

const Card = ({ course }) => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/see', { state: { courseData: course } });
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
    }
    const cleanPath = imagePath.replace(/\\/g, '/');
    return `https://studytop-backend.onrender.com/${cleanPath}`;
  };

  return (
    <div className="premium-card" onClick={handlePlay} style={{cursor: 'pointer'}}>
      <div className="premium-card-inner">
        <div className="card-top-badge">
          <span>{course.name}</span>
        </div>
        
        <div className="card-image-wrapper">
          <img 
            src={getImageUrl(course.image)} 
            alt={course.name} 
            className="card-image" 
            loading="lazy" 
          />
          <div className="card-image-overlay">
            <button className="card-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="card-bottom-info">
          <div className="lectures-count">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span>{course.nLecture} Lectures</span>
          </div>
          <button className="enroll-btn" onClick={handlePlay}>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;