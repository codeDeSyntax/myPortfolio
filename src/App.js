import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Sociallinks from './components/Sociallinks';


function App() {
  return (
    <>
     <Navbar />
     <Home />
    <Sociallinks/>
    <About />
    <Portfolio />
    </>
  );
}

export default App; 
 