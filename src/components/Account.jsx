import React, { useEffect, useState } from 'react';
import './css/Account.css';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // SVG Icons for clean UI
  const Icons = {
    user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    history: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    award: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    logout: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  };

  const [name, setName] = useState('User');

  useEffect(()=> {
    getName();
  }, [])

  let ft = name.charAt(0).toUpperCase();

  async function getName() {
    try {

      let res = await fetch(`http://localhost:3000/getName/${localStorage.getItem("mail")}`)

      const xName = await res.text();

      ft = xName.charAt(0).toUpperCase();
      
      setName(xName);
    } catch(e) {
      console.error('Error fetching name:', e);
      setName("Relogin to see name");
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="content-section fade-in">
            <div className="section-header">
              <h2>Profile Settings</h2>
              <p>Manage your account details and preferences.</p>
            </div>
            
            <div className="clean-card profile-card">
              <div className="avatar-section">
                <div className="avatar">{ft}</div>
                <div className="avatar-info">
                  <h3>{name}</h3>
                  <span className="pro-badge">PRO MEMBER</span>
                </div>
              </div>
              
              {/* Manipulative UX: Gamified Profile Strength */}
              <div className="profile-strength">
                <div className="strength-header">
                  <span>Profile Strength</span>
                  <strong>85%</strong>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: '85%'}}></div></div>
                <p className="nudge-text">Add your LinkedIn profile to reach 100% and unlock a free badge!</p>
              </div>
            </div>
          </div>
        );
      
      case 'courses':
        return (
          <div className="content-section fade-in">
            <div className="section-header">
              <h2>My Learning</h2>
              <p>Pick up exactly where you left off.</p>
            </div>
            
            <div className="course-grid">
              <div className="clean-card course-card">
                <div className="course-status">In Progress</div>
                <h3>Advanced React Patterns</h3>
                <div className="progress-track"><div className="progress-fill pulse" style={{width: '65%'}}></div></div>
                <div className="course-footer">
                  <span>65% Completed</span>
                  {/* High-contrast CTA */}
                  <button className="primary-btn">Resume</button>
                </div>
              </div>

              <div className="clean-card course-card locked-card">
                <div className="course-status locked-status">Locked</div>
                <h3>System Design Masterclass</h3>
                <p>Available in Pro subscription.</p>
                <div className="course-footer">
                  <button className="secondary-btn outline">Upgrade to Unlock</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'certificates':
        return (
          <div className="content-section fade-in">
            <div className="section-header">
              <h2>Achievements</h2>
              <p>Download, verify, and share your success with the world.</p>
            </div>
            
            {/* Yahan Flex container ka use kiya hai */}
            <div className="cert-flex-container">
              
              {/* Premium Verified Certificate */}
              <div className="clean-card cert-card premium-glow">
                <div className="cert-header">
                  <div className="cert-icon-wrapper">{Icons.award}</div>
                  <span className="cert-badge verified">Verified</span>
                </div>
                <div className="cert-info">
                  <h4>MERN Stack Mastery</h4>
                  <p>Issued: Jan 2026 • ID: CRT-2026-ABX</p>
                </div>
                <button className="secondary-btn btn-full">Download PDF</button>
              </div>

              {/* Standard Certificate */}
              <div className="clean-card cert-card">
                <div className="cert-header">
                  <div className="cert-icon-wrapper plain">{Icons.shield}</div>
                </div>
                <div className="cert-info">
                  <h4>Data Structures in Java</h4>
                  <p>Issued: Nov 2025 • ID: CRT-2025-XYZ</p>
                </div>
                <button className="secondary-btn btn-full">Download PDF</button>
              </div>

              {/* Locked/In-Progress Nudge (Manipulative UI) */}
              <div className="clean-card cert-card locked-cert">
                <div className="cert-header">
                  <div className="cert-icon-wrapper locked-icon">{Icons.book}</div>
                  <span className="cert-badge locked">Locked</span>
                </div>
                <div className="cert-info">
                  <h4>System Design Pro</h4>
                  <p>Course 80% Completed</p>
                </div>
                <button className="secondary-btn btn-full disabled-btn" disabled>
                  Complete to Unlock
                </button>
              </div>

            </div>
          </div>
        );

      case 'verify':
        return (
          <div className="content-section fade-in">
             <div className="section-header">
              <h2>Verify Certificate</h2>
              <p>Employers can verify student credentials here.</p>
            </div>
            
            <div className="clean-card verify-card">
              <div className="verify-input-group">
                {Icons.shield}
                <input type="text" placeholder="Enter Certificate ID (e.g., CRT-2026-ABX)" />
              </div>
              <button className="primary-btn block-btn">Verify Authenticity</button>
            </div>
          </div>
        );

      // Add simple History case...
      case 'history':
        return (
          <div className="content-section fade-in">
            <div className="section-header">
              <h2>Watch History</h2>
            </div>
            <div className="clean-card">
              <p style={{color: '#666', padding: '1rem'}}>No recent history found.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar / Topbar on Mobile */}
      <aside className="modern-sidebar">
        <div className="sidebar-logo">
          <h2>Dashboard</h2>
        </div>
        
        <nav className="sidebar-nav">
          <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
            {Icons.user} <span>Profile</span>
          </button>
          <button className={`nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
            {Icons.history} <span>History</span>
          </button>
          <button className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveTab('courses')}>
            {Icons.book} <span>My Courses</span>
          </button>
          <button className={`nav-item ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>
            {Icons.award} <span>Certificates</span>
          </button>
          <button className={`nav-item ${activeTab === 'verify' ? 'active' : ''}`} onClick={() => setActiveTab('verify')}>
            {Icons.shield} <span>Verification</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item logout" onClick={() => {
            localStorage.removeItem("mail");
            window.location.reload();
          }}>
            {Icons.logout} <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Dynamic Content Area */}
      <main className="dashboard-main">
        <div className="main-content-wrapper">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Account;