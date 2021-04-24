import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import PostDescription from './PostDescriptionComponent';
import { Switch, Route, Redirect } from 'react-router';
import { POSTS } from '../shared/posts';
import { USERS } from '../shared/users';
import UserProfile from './UserProfileComponent';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        posts : POSTS, 
        users : USERS
      };
  };

  render() {

      const HomePage = () => {
          return (
            <Home 
              need={this.state.posts.filter(post => post.type === 'need')} 
              offer={this.state.posts.filter(post => post.type === 'offer')} 
              users={this.state.users} 
            />
          )
      }

      const PostIdInfo = ({match}) => {
        return (
            <PostDescription post={this.state.posts[+match.params.postId]} />
        )
      }

      const UserIdProfile = ({match}) => {
        return (
            <UserProfile user={this.state.users.filter(user => user.name === match.params.username)[0]} />
        )
      }

      return (
          <div>
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/post/:postId' component={PostIdInfo} />
                <Route path='/user/:username' component={UserIdProfile} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;