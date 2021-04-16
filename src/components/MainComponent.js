import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router';
import { NEED } from '../shared/need';
import { OFFER } from '../shared/offer';
import { USERS } from '../shared/users';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        need : NEED,
        offer : OFFER, 
        users : USERS
      };
  }

  render() {

      const HomePage = () => {
          return (
            <Home need={this.state.need} offer={this.state.offer} users={this.state.users} />
          )
      }

      return (
          <div>
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;