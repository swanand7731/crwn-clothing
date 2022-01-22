import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Router>
    </div>
  );
}

export default App;
