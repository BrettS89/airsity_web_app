import React from 'react';
import './account.css';
import { isLoggedIn } from '../../services/auth';
import LoggedInAccountView from './LoggedInAccountView';
import LoggedOutAccountView from './LoggedOutAccountView';

class Account extends React.Component {

  componentDidMount() {
    this.props.setPage('account');
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/');
  };

  navigateTo = route => {
    this.props.history.push(`/${route}`);
  };

  renderView = () => {
    if(isLoggedIn()) {
      return <LoggedInAccountView
              logout={this.logout}
              navigateTo={this.navigateTo}
              />;
    }
    return <LoggedOutAccountView
            navigateTo={this.navigateTo}
            />;
  };

  render() {
    return this.renderView();
  }
}

export default Account;