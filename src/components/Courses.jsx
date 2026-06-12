import React from 'react';
import Card from './Card';
import './css/Home.css';
import c from '../assets/C.png';

const Courses = () => {
  const generateData = (count, categoryType) => {
    return Array.from({ length: count }, (_, index) => {
      const isBestseller = index === 0 || index === 2 || index === 5;
      const views = Math.floor(Math.random() * 40) + 10;
      const progress = Math.floor(Math.random() * 60) + 15;

      return {
        id: index + 1,
        image: c,
        isBestseller,
        views: `${views}k enrolled`,
        progress: categoryType === 'continue' ? progress : null,
        rank: categoryType === 'trending' ? index + 1 : null
      };
    });
  };

  const courseCategories = [
    { title: "Continue Learning", type: 'continue', data: generateData(8, 'continue') },
    { title: "Trending in India", type: 'trending', data: generateData(10, 'trending') },
    { title: "MERN Stack Mastery", type: 'normal', data: generateData(10, 'normal') },
    { title: "DSA in Java", type: 'normal', data: generateData(10, 'normal') },
  ];

  return (
    <div className="courses-container">
      <div className="courses-header-section">
        <div>
          <h1 className="courses-main-heading">Elevate Your Career</h1>
          <p className="courses-sub-heading">Premium courses trusted by tech giants.</p>
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      {courseCategories.map((category, index) => (
        <div className="category-section" key={index}>
          <div className="category-header">
            <h3 className="category-title">{category.title}</h3>
            <span className="category-slide-hint">Swipe ➔</span>
          </div>
          
          <div className="scroll-wrapper">
            <div className="scroll-fade-right"></div>
            
            <div className="cards-row">
              {category.data.map((course) => (
                <div className="card-wrapper" key={course.id}>
                  
                  {course.rank && (
                    <div className="rank-badge">#{course.rank}</div>
                  )}

                  {course.isBestseller && !course.rank && (
                    <div className="bestseller-badge">Trending</div>
                  )}

                  <div className="card-inner">
                    <Card c={course.image} />
                    <div className="card-overlay">
                      <span className="views-text">{course.views}</span>
                      <button className="hover-play-btn">Explore</button>
                    </div>
                  </div>

                  {course.progress && (
                    <div className="course-progress-container">
                      <div className="course-progress-info">
                        <span>Overall Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="course-progress-track">
                        <div className="course-progress-fill" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;