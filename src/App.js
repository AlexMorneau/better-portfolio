import './App.css';

// pages
import Splash from './pages/splash/splash';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

// components


import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/about" exact component={About}/>
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
