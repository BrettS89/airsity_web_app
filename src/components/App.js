import React from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../store/actions/authActions';
import Routing from '../routing';
import Header from '../containers/header';
import './app.css';

class App extends React.Component {
  componentDidMount() {
    this.props.isLoggedIn();
  }
  
  render () {
    return (
      <React.Fragment>
      <Header/>
        <div className="body">
          <Routing />
        </div>
      </React.Fragment>
    );
  }
};

export default connect(null, { isLoggedIn })(App);
