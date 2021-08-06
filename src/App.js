import React, { useState } from 'react';
import './App.css';

// pages
import Splash from './pages/splash/splash';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

// components
import Background from './components/background/background';
import Nav from './components/nav/nav'
import MobileNav from './components/mobile-nav/mobile-nav';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

function App() {

  const [isActive, setIsActive] = useState(false);

  function activeToggle() {
    setIsActive(!isActive);
  }

  return (
    <div className="main-container">
      <Background />
    
      <Router>
        <Switch>
          <Route path="/" exact component={Splash} />
          
          <div>
            <MobileNav 
              activeToggle={activeToggle}
              isActive={isActive} />
            <Nav 
              activeToggle={activeToggle} />
            <Route path="/about" exact component={About}/>
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
