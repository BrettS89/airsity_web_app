import React from 'react';

export default props => {
  return (
    <div className="account-page">
      <div className="account-content-container">
        <h2>My account</h2>
        <div className="account-loggedin-buttons">
          <div>
            <div className="account-privacy-policy" onClick={() => props.navigateTo('privacypolicy')}>
              <span>Privacy policy</span>
              <i class="fas fa-chevron-right"></i>
            </div>

            <div className="account-privacy-policy" onClick={() => props.navigateTo('termsandconditions')}>
              <span>Terms and conditions</span>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="account-privacy-policy" onClick={props.logout}>
            <span>Log out</span>
          </div>

        </div>
      </div>
    </div>
  );
};
