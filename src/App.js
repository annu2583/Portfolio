// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import './components/banner.css';
import './components/header.css';
import  About from './components/About';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import './components/about.css';
import  './components/skills.css';
import './components/educ.css';
import Footer from './components/footer';
import './components/footer.css';
import './components/project.css';
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
    </>
  );
}

export default App;
