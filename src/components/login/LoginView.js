import React from 'react';
import { Input } from 'semantic-ui-react'

export default React.forwardRef((props, ref) => {
  const renderLoginError = () => {
    if (props.error) {
      return <span className="login-error">A login error occured</span>;
    }
  };

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
            Discover New Music Fast
          </div>
        </div>

        <div className="login-right">
          <form ref={ref} className="login-form" onSubmit={props.onLogin}>
            <h2>Login</h2>
            <div className="login-input" id="firstInput">
              <Input placeholder="Email" name="email" />
            </div>
            <div className="login-input">
              <Input placeholder="Password" name="password" type="password" />
            </div>
            <div className="login-button">
              <button className="myButton signup-button">
                Let's go!
              </button>
            </div>
            {renderLoginError()}
          </form>
        </div>
      </div>
    </div>
  );
});
