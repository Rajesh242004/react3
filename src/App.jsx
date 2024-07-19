import React from 'react';
import './App.css';
import logo from './img/logo.jpeg';

const App = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Saveetha Engineering College" className="logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#courses">Courses Offered</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </nav>
      </header>
      <div className="main-content">
        <section id="home" className="section home">
          <h1>Welcome to Saveetha Engineering College</h1>
          <p>Inspiring Future Innovators and Leaders.</p>
        </section>
        <section id="about" className="section about">
          <h2>About Us</h2>
          <p>Saveetha Engineering College is committed to inspiring future innovators and leaders.</p>
        </section>
        <section id="courses" className="section courses">
          <h2>Courses Offered</h2>
          <ul>
            <li>Computer Science and Engineering</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
            <li>Electronics and Communication Engineering</li>
          </ul>
        </section>
        <section id="events" className="section events">
          <h2>Upcoming Events</h2>
          <ul>
            <li><strong>2024-08-15:</strong> Independence Day Celebration</li>
            <li><strong>2024-09-05:</strong> Teachers Day</li>
            <li><strong>2024-10-10:</strong> Annual Tech Fest</li>
          </ul>
        </section>
      </div>
      <footer className="footer">
        <p>© 2024 Saveetha Engineering College. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;