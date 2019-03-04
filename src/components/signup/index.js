import React from 'react';
import './signup.css';
import SignupView from './SignupView';

class Signup extends React.Component {
  state = {
    error: false,
  };

  onSignup = async e => {
    e.preventDefault();
    this.setState({ error: false });

    await this.props.signup({
      email: e.target.email.value,
      password: e.target.password.value,
      date: Date.now(),
      isoDate: new Date().toISOString(),
    });

    if (this.props.state.auth.status === 'success') {
      localStorage.clear();
      localStorage.setItem('token', this.props.state.auth.token);
      this.props.isLoggedInOnLogin();
      this.props.history.push('discover');
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return <SignupView 
            onSignup={this.onSignup}
            error={this.state.error}
            />;
  }
}

export default Signup;
