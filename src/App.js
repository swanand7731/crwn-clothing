import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/hompage/homepage.component';

const HatsPage = () => <div>Hats Page</div>;

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Router>
    </div>
  );
}

export default App;
