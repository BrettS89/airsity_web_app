import React from 'react';
import { Input } from 'semantic-ui-react'

export default props => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
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

        <div className="signup-right">
          <form className="signup-form" onSubmit={props.onSignup}>
            <h2>Sign up</h2>
            <div className="signup-input" id="firstInput">
              <Input 
                placeholder="Email" 
                name="email" 
                type="email" 
                />
            </div>
            <div className="signup-input">
              <Input 
                placeholder="Password" 
                name="password" 
                type="password" 
                />
            </div>
            <button className="myButton signup-button" type="submit">
              Let's go!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
