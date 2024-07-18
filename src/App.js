// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import './components/banner.css';
import './components/header.css';
import  About from './components/About';
import Skills from './components/skills';
import Education from './components/education';
import './components/about.css';
import  './components/skills.css';
import './components/educ.css';
import Footer from './components/footer';
import './components/footer.css';
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Education/>
      <Footer/>
    </>
  );
}

export default App;
