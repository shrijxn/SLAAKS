import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css"
import './style/style.css';
import LandingPage from './components/LandingPage.js';
import 'animate.css';

function App() {
  return (
      <Router>
          <div className="App"  style={{backgroundColor: 'transparent'}}>
              <header className="App-header" style={{backgroundColor: 'black'}} >
                  <h2>SLAAKS</h2>
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Landing/:type" element={<LandingPage />} />
                  </Routes>
                  
                  

                  
                  {/* Footer */}
                  <footer style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px',
                      position: 'absolute',
                      bottom: '0',
                      width: 'calc(100% - 20px)',
                      backgroundColor: 'transparent',
                      color: 'white',
                  }}>
                      <div style={{ fontSize: '12px' }}>
                          Copyright C UTDallas CS 4485 Project
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '12px' }}>
                          <a href="https://github.com/shrijxn/SLAAKS/tree/master"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none', color: 'white' }}>
                              Github
                          </a>
                      </div>
                  </footer>
              </header>
          </div>
      </Router>
  );
}




function MainPage() {
    return (
        <div >
            <Link to="/Landing/Tutor" style={{marginRight: '8px'}}>
            <Button className="button-container" style={{ padding: '10px'}} variant="outline-warning">Tutor</Button>
            </Link>


            <Link to="/Landing/Student">
            <Button className="button-container" style={{ padding: '10px'}} variant="outline-warning">Student</Button>
            </Link>
        </div>
    );
}


export default App;
