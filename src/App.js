import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Services from './Components/Services';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
    </>
  );
}

export default App;
