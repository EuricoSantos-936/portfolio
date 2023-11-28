import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Aboutme from './pages/About';
import Projects from './pages/Projects';
import Contactme from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/about' element={<Aboutme />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contactme />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
