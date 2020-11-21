import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Products from './pages/Products';

function App() {
  return (
    <><div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Form' component={Form} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
