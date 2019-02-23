import React from 'react';
import './footer.css';
import FooterView from './FooterView';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  navigateTo = route => {
    this.props.history.push(`/${route}`);
  }

  render() {
    return <FooterView 
            navigateTo={this.navigateTo}
            page={this.props.state.nav}
            />;
  }
}

export default withRouter(Footer);
