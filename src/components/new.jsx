// App.js

import React from 'react';
import '../index.css';

function New() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drone Institute</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>Welcome to Drone Institute! We specialize in providing top-notch education and training in the field of drone technology.</p>
          <p>Our mission is to equip individuals and businesses with the skills and knowledge necessary to leverage drones for various applications.</p>
        </section>
        <section id="courses">
          <h2>Our Courses</h2>
          <div className="course">
            <h3>Introduction to Drones</h3>
            <p>Learn the basics of drone technology, regulations, and safety measures.</p>
          </div>
          <div className="course">
            <h3>Advanced Aerial Photography</h3>
            <p>Master the art of capturing stunning aerial photographs using drones.</p>
          </div>
          {/* Add more courses as needed */}
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Have questions or want to enroll in a course? Get in touch with us!</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Drone Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default New;
