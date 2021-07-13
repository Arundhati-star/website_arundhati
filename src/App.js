import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Example from './components/Example'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
         <Router>
      <Home />
      
      {/* < Example /> */}
      </Router>
    </>
  );
}

export default App;
