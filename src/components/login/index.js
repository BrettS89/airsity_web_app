import React from 'react';
import './login.css';
import LoginView from './LoginView';

class Login extends React.Component {

  onLogin = async e => {
    e.preventDefault();

    await this.props.login({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    if (this.props.state.auth.status === 'success') {
      localStorage.clear();
      localStorage.setItem('token', this.props.state.auth.token);
      this.props.isLoggedInOnLogin();
      this.props.history.push('discover');
    }
  };

  render() {
    return <LoginView
            onLogin={this.onLogin}
            />;
  }
}

export default Login;
