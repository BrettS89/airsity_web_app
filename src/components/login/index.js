import React from 'react';
import './login.css';
import LoginView from './LoginView';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.loginForm = React.createRef();
  } 

  onLogin = async e => {
    e.preventDefault();
    this.setState({ error: false });

    await this.props.login({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    if (this.props.state.auth.status === 'success') {
      localStorage.clear();
      localStorage.setItem('token', this.props.state.auth.token);
      this.props.isLoggedInOnLogin();
      this.props.history.push('discover');
    } else {
      this.setState({ error: true });
      this.loginForm.current.reset();
    }
    
  };

  render() {
    return <LoginView
            onLogin={this.onLogin}
            error={this.state.error}
            ref={this.loginForm}
            />;
  }
}

export default Login;
