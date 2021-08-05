import './App.css';

// pages
import Splash from './pages/splash/splash';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

// components
import Background from './components/background/background';
import Nav from './components/nav/nav'

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <Background />
    
      <Router>
        <Switch>
          <Route path="/" exact component={Splash} />
          
          <div>
            <Nav />
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
