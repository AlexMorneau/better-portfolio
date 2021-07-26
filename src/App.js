import './App.css';

// pages
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

// components
import Nav from './components/nav/nav';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <Nav />
      <Router>
        <Switch>
          <Route path="/" exact component={About}/>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
