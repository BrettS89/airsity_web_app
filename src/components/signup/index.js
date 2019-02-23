import React from 'react';
import './signup.css';
import SignupView from './SignupView';

class Signup extends React.Component {

  onSignup = async e => {
    e.preventDefault();

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
    }
  };

  render() {
    return <SignupView 
            onSignup={this.onSignup}
            />;
  }
}

export default Signup;
