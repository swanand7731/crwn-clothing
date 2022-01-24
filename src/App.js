import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot,
            },
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Router>
      </div>
    );
  }
}

export default App;
