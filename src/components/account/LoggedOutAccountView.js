import React from 'react';

export default props => {
  return (
    <div className="account-page">
      <div className="account-content-container">
        <h2>My account</h2>
        <div className="account-signup-buttons">
          <div className="account-signup" onClick={() => props.navigateTo('signup')}>
            Sign up
          </div>
          <div className="account-or">or</div>
          <div className="account-login" onClick={() => props.navigateTo('login')}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};
