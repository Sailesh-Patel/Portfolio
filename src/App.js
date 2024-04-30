import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';




function App() {
  return (
   <div>

    <Nav />
    <Profile />
    <About />
    <Experience />
    <Projects />
    <Contact />


   </div>
  );
}

export default App;
