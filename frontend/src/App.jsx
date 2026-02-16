import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Gallery from './Gallery'; // make sure these exist
import Homepage from './Home';
import Other from './Other';
import Services from './Services';
import Footer from './Footer';
import Sparkles from "./Sparkles";
import GalaxyStars from './GalaxyStars';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

//<GalaxyStars /> between router and nav
