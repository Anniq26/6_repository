import React from 'react';
import './App.css';
import OneImage from './style/Screenshot_296.WEBP'
import TwoImage from './style/Screenshot_297.WEBP'

function App() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      Image: <img src={OneImage} alt="Project 1" />
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      Image: <img src={TwoImage} alt="Project 2" />
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <img src='https://scontent.ftbs3-1.fna.fbcdn.net/v/t1.6435-9/61915823_2651361264936515_4130923571339853824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=lqUDC07HU9gAX8kTn4y&_nc_ht=scontent.ftbs3-1.fna&oh=00_AfDQtJ2CoWsWQKgWSa2ZiCm7zfHnR37RZP8UXtKmKDbcPw&oe=66031A61' alt='me'/>
        <div class="about-content">
          <h2>About Me</h2>
          <p>Welcome to my portfolio! My name is Ani Kitoshvili and I am a web developer passionate about creating awesome web experiences.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.Image}
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
