import React from 'react';
import { Input } from 'semantic-ui-react'

export default props => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div>
            <h2>Discover</h2>
            <h2>new music</h2>
            <h2>fast</h2>
          </div>
        </div>

        <div className="mobile-header">
          <div className="mobile-h-text">
            Discover New Nusic Fast
          </div>
        </div>

        <div className="login-right">
          <form className="login-form" onSubmit={props.onLogin}>
            <h2>Login</h2>
            <div className="login-input" id="firstInput">
              <Input placeholder="Email" name="email" />
            </div>
            <div className="login-input">
              <Input placeholder="Password" name="password" />
            </div>
            <div className="login-button">
              <button className="myButton signup-button">
                Let's go!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
